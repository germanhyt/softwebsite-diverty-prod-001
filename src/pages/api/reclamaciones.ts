import type { APIRoute } from "astro";
import { Resend } from "resend";
import { getResendRuntimeConfig } from "../../lib/reclamaciones/env";
import { handleReclamacionRequest } from "../../lib/reclamaciones/handler";

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
  const config = getResendRuntimeConfig({
    RESEND_API_KEY:
      process.env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM ?? import.meta.env.RESEND_FROM,
  });

  if (!config) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resend = new Resend(config.apiKey);

  return handleReclamacionRequest(request, {
    sendEmail: async (payload) => {
      const { error } = await resend.emails.send({
        from: config.from,
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
