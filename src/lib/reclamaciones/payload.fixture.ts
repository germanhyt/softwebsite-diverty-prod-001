import type { ReclamacionFormData } from "../../data/reclamaciones";

export function validReclamacion(
  overrides: Partial<ReclamacionFormData> = {},
): ReclamacionFormData {
  return {
    fullName: "Ana Pérez",
    email: "ana@example.com",
    phone: "915913451",
    documentType: "DNI",
    documentNumber: "12345678",
    department: "Lima",
    province: "Lima",
    district: "Miraflores",
    address: "Av. Ejemplo 123",
    serviceRecipientName: "Ana Pérez",
    serviceRecipientAge: "30",
    contractedService: "Taller Montessori",
    serviceModality: "presencial",
    incidentDate: "2026-09-01",
    staffName: "",
    claimType: "reclamo",
    claimDetail: "El taller no coincidió con lo publicado.",
    clientRequest: "Reprogramación o reembolso.",
    declaresTruth: true,
    authorizesData: true,
    ...overrides,
  };
}
