import { siteConfig } from "../../config/site.config";
import { buildReclamacionAckEmail, buildReclamacionEmail } from "./email";
import { validateReclamacion } from "./validate";

export type SendEmailPayload = {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

export type SendEmailResult = { ok: true } | { ok: false };

export type ReclamacionHandlerDeps = {
  sendEmail: (payload: SendEmailPayload) => Promise<SendEmailResult>;
};

const jsonHeaders = { "Content-Type": "application/json" };

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: jsonHeaders,
  });
}

export async function handleReclamacionRequest(
  request: Request,
  deps: ReclamacionHandlerDeps,
): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse(405, { ok: false, error: "Method not allowed" });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON" });
  }

  const validated = validateReclamacion(body);
  if (!validated.ok) {
    return jsonResponse(400, { ok: false, errors: validated.errors });
  }

  const staffEmail = buildReclamacionEmail(validated.data);

  try {
    const sent = await deps.sendEmail({
      to: siteConfig.contact.email,
      replyTo: validated.data.email,
      subject: staffEmail.subject,
      text: staffEmail.text,
      html: staffEmail.html,
    });

    if (!sent.ok) {
      return jsonResponse(500, { ok: false });
    }
  } catch {
    return jsonResponse(500, { ok: false });
  }

  const ackEmail = buildReclamacionAckEmail(validated.data);
  try {
    await deps.sendEmail({
      to: validated.data.email,
      replyTo: siteConfig.contact.email,
      subject: ackEmail.subject,
      text: ackEmail.text,
      html: ackEmail.html,
    });
  } catch {
    // Acknowledgement is optional; the claim email already succeeded.
  }

  return jsonResponse(200, { ok: true });
}
