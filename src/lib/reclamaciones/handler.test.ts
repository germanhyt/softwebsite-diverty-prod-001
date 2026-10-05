import { describe, expect, it, vi } from "vitest";
import { siteConfig } from "../../config/site.config";
import { handleReclamacionRequest } from "./handler";
import { validReclamacion } from "./payload.fixture";

function jsonRequest(
  method: string,
  body?: unknown,
): Request {
  if (body === undefined) {
    return new Request("https://www.diverty.pe/api/reclamaciones", { method });
  }

  return new Request("https://www.diverty.pe/api/reclamaciones", {
    method,
    headers: { "Content-Type": "application/json" },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("handleReclamacionRequest", () => {
  it("returns 405 on GET", async () => {
    const sendEmail = vi.fn();
    const response = await handleReclamacionRequest(jsonRequest("GET"), {
      sendEmail,
    });

    expect(response.status).toBe(405);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns 400 on invalid JSON", async () => {
    const sendEmail = vi.fn();
    const response = await handleReclamacionRequest(
      jsonRequest("POST", "{not-json"),
      { sendEmail },
    );

    expect(response.status).toBe(400);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns 400 on an invalid body", async () => {
    const sendEmail = vi.fn();
    const response = await handleReclamacionRequest(jsonRequest("POST", {}), {
      sendEmail,
    });

    expect(response.status).toBe(400);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns 200 when sendEmail resolves", async () => {
    const sendEmail = vi.fn().mockResolvedValue({ ok: true });
    const payload = validReclamacion();
    const response = await handleReclamacionRequest(
      jsonRequest("POST", payload),
      { sendEmail },
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it("returns 500 when sendEmail throws", async () => {
    const sendEmail = vi.fn().mockRejectedValue(new Error("provider down"));
    const response = await handleReclamacionRequest(
      jsonRequest("POST", validReclamacion()),
      { sendEmail },
    );

    expect(response.status).toBe(500);
  });

  it("returns 500 when sendEmail returns an error", async () => {
    const sendEmail = vi.fn().mockResolvedValue({ ok: false });
    const response = await handleReclamacionRequest(
      jsonRequest("POST", validReclamacion()),
      { sendEmail },
    );

    expect(response.status).toBe(500);
  });

  it("sends to the site contact email and replies to the claimant", async () => {
    const sendEmail = vi.fn().mockResolvedValue({ ok: true });
    const payload = validReclamacion({ email: "ana@example.com" });

    await handleReclamacionRequest(jsonRequest("POST", payload), {
      sendEmail,
    });

    expect(sendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: siteConfig.contact.email,
        replyTo: "ana@example.com",
      }),
    );
  });
});
