import type { APIRoute } from "astro";
import { Resend } from "resend";
import { handleReclamacionRequest } from "../../lib/reclamaciones/handler";

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.RESEND_FROM;

  if (!apiKey || !from) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resend = new Resend(apiKey);

  return handleReclamacionRequest(request, {
    sendEmail: async (payload) => {
      const { error } = await resend.emails.send({
        from,
        to: payload.to,
        replyTo: payload.replyTo,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      });

      if (error) return { ok: false };
      return { ok: true };
    },
  });
};
