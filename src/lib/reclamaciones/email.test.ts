import { describe, expect, it } from "vitest";
import { validReclamacion } from "./payload.fixture";
import { buildReclamacionEmail } from "./email";

describe("buildReclamacionEmail", () => {
  it("builds a subject with the book prefix, claim label, and full name", () => {
    const data = validReclamacion({
      fullName: "Ana Pérez",
      claimType: "reclamo",
    });
    const email = buildReclamacionEmail(data);

    expect(email.subject).toContain("[Libro de Reclamaciones]");
    expect(email.subject).toContain("Reclamo");
    expect(email.subject).toContain("Ana Pérez");
  });

  it("includes email, document, claim detail, and client request in the body", () => {
    const data = validReclamacion({
      email: "ana@example.com",
      documentType: "DNI",
      documentNumber: "12345678",
      claimDetail: "El taller no coincidió con lo publicado.",
      clientRequest: "Reprogramación o reembolso.",
    });
    const email = buildReclamacionEmail(data);
    const body = `${email.text}\n${email.html}`;

    expect(body).toContain("ana@example.com");
    expect(body).toContain("DNI");
    expect(body).toContain("12345678");
    expect(body).toContain("El taller no coincidió con lo publicado.");
    expect(body).toContain("Reprogramación o reembolso.");
  });
});
