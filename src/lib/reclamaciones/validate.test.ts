import { describe, expect, it } from "vitest";
import { validReclamacion } from "./payload.fixture";
import { validateReclamacion } from "./validate";

describe("validateReclamacion", () => {
  it("rejects empty required fields", () => {
    const result = validateReclamacion({});

    expect(result.ok).toBe(false);
    if (result.ok) return;

    expect(result.errors.fullName).toBe("Ingresa tus nombres y apellidos.");
    expect(result.errors.email).toBe("Ingresa un correo válido.");
    expect(result.errors.phone).toBe("Ingresa tu teléfono.");
    expect(result.errors.documentType).toBe("Selecciona el tipo de documento.");
    expect(result.errors.documentNumber).toBe(
      "Ingresa el número de documento.",
    );
    expect(result.errors.department).toBe("Selecciona el departamento.");
    expect(result.errors.province).toBe("Ingresa la provincia.");
    expect(result.errors.district).toBe("Ingresa el distrito.");
    expect(result.errors.address).toBe("Ingresa la dirección.");
    expect(result.errors.serviceRecipientName).toBe(
      "Ingresa el nombre de quien recibió el servicio.",
    );
    expect(result.errors.serviceRecipientAge).toBe("Ingresa la edad.");
    expect(result.errors.contractedService).toBe(
      "Indica el servicio contratado.",
    );
    expect(result.errors.serviceModality).toBe("Selecciona la modalidad.");
    expect(result.errors.incidentDate).toBe(
      "Selecciona la fecha del incidente.",
    );
    expect(result.errors.claimType).toBe("Selecciona reclamo o queja.");
    expect(result.errors.claimDetail).toBe(
      "Describe el detalle del reclamo o queja.",
    );
    expect(result.errors.clientRequest).toBe(
      "Indica la solución que esperas recibir.",
    );
    expect(result.errors.declaresTruth).toBe(
      "Debes declarar que la información es verdadera.",
    );
    expect(result.errors.authorizesData).toBe(
      "Debes autorizar el tratamiento de datos.",
    );
  });

  it("rejects a bad email", () => {
    const result = validateReclamacion(
      validReclamacion({ email: "not-an-email" }),
    );

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.email).toBe("Ingresa un correo válido.");
  });

  it("rejects a missing claimType", () => {
    const result = validateReclamacion(validReclamacion({ claimType: "" }));

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.claimType).toBe("Selecciona reclamo o queja.");
  });

  it("rejects missing declaresTruth", () => {
    const result = validateReclamacion(
      validReclamacion({ declaresTruth: false }),
    );

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.declaresTruth).toBe(
      "Debes declarar que la información es verdadera.",
    );
  });

  it("rejects missing authorizesData", () => {
    const result = validateReclamacion(
      validReclamacion({ authorizesData: false }),
    );

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.errors.authorizesData).toBe(
      "Debes autorizar el tratamiento de datos.",
    );
  });

  it("accepts a valid payload", () => {
    const payload = validReclamacion();
    const result = validateReclamacion(payload);

    expect(result).toEqual({ ok: true, data: payload });
  });
});
