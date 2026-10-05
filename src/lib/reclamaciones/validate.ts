import {
  claimTypes,
  documentTypes,
  peruDepartments,
  serviceModalities,
  type ReclamacionFormData,
} from "../../data/reclamaciones";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const documentTypeValues = documentTypes.map((item) => item.value);
const modalityValues = serviceModalities.map((item) => item.value);
const claimTypeValues = claimTypes.map((item) => item.value);
const departmentValues: readonly string[] = peruDepartments;

export type ReclamacionFieldErrors = Partial<
  Record<keyof ReclamacionFormData, string>
>;

export type ValidateReclamacionResult =
  | { ok: true; data: ReclamacionFormData }
  | { ok: false; errors: ReclamacionFieldErrors };

export const reclamacionStepFields = {
  1: [
    "fullName",
    "email",
    "phone",
    "documentType",
    "documentNumber",
    "department",
    "province",
    "district",
    "address",
  ],
  2: [
    "serviceRecipientName",
    "serviceRecipientAge",
    "contractedService",
    "serviceModality",
    "incidentDate",
  ],
  3: ["claimType", "claimDetail", "clientRequest"],
  4: ["declaresTruth", "authorizesData"],
} as const satisfies Record<number, readonly (keyof ReclamacionFormData)[]>;

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asBoolean(value: unknown): boolean {
  return value === true;
}

function isDocumentType(
  value: string,
): value is ReclamacionFormData["documentType"] {
  return documentTypeValues.includes(
    value as (typeof documentTypes)[number]["value"],
  );
}

function isServiceModality(
  value: string,
): value is ReclamacionFormData["serviceModality"] {
  return modalityValues.includes(
    value as (typeof serviceModalities)[number]["value"],
  );
}

function isClaimType(
  value: string,
): value is ReclamacionFormData["claimType"] {
  return claimTypeValues.includes(value as (typeof claimTypes)[number]["value"]);
}

export function validateReclamacion(
  input: unknown,
): ValidateReclamacionResult {
  const raw =
    input && typeof input === "object"
      ? (input as Record<string, unknown>)
      : {};

  const documentTypeRaw = asString(raw.documentType);
  const serviceModalityRaw = asString(raw.serviceModality);
  const claimTypeRaw = asString(raw.claimType);

  const data: ReclamacionFormData = {
    fullName: asString(raw.fullName),
    email: asString(raw.email),
    phone: asString(raw.phone),
    documentType: isDocumentType(documentTypeRaw) ? documentTypeRaw : "",
    documentNumber: asString(raw.documentNumber),
    department: asString(raw.department),
    province: asString(raw.province),
    district: asString(raw.district),
    address: asString(raw.address),
    serviceRecipientName: asString(raw.serviceRecipientName),
    serviceRecipientAge: asString(raw.serviceRecipientAge),
    contractedService: asString(raw.contractedService),
    serviceModality: isServiceModality(serviceModalityRaw)
      ? serviceModalityRaw
      : "",
    incidentDate: asString(raw.incidentDate),
    staffName: asString(raw.staffName),
    claimType: isClaimType(claimTypeRaw) ? claimTypeRaw : "",
    claimDetail: asString(raw.claimDetail),
    clientRequest: asString(raw.clientRequest),
    declaresTruth: asBoolean(raw.declaresTruth),
    authorizesData: asBoolean(raw.authorizesData),
  };

  const errors: ReclamacionFieldErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Ingresa tus nombres y apellidos.";
  }
  if (!data.email.trim() || !EMAIL_RE.test(data.email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!data.phone.trim()) errors.phone = "Ingresa tu teléfono.";
  if (!data.documentType) {
    errors.documentType = "Selecciona el tipo de documento.";
  }
  if (!data.documentNumber.trim()) {
    errors.documentNumber = "Ingresa el número de documento.";
  }
  if (!data.department || !departmentValues.includes(data.department)) {
    errors.department = "Selecciona el departamento.";
  }
  if (!data.province.trim()) errors.province = "Ingresa la provincia.";
  if (!data.district.trim()) errors.district = "Ingresa el distrito.";
  if (!data.address.trim()) errors.address = "Ingresa la dirección.";

  if (!data.serviceRecipientName.trim()) {
    errors.serviceRecipientName =
      "Ingresa el nombre de quien recibió el servicio.";
  }
  if (!data.serviceRecipientAge.trim()) {
    errors.serviceRecipientAge = "Ingresa la edad.";
  }
  if (!data.contractedService.trim()) {
    errors.contractedService = "Indica el servicio contratado.";
  }
  if (!data.serviceModality) {
    errors.serviceModality = "Selecciona la modalidad.";
  }
  if (!data.incidentDate) {
    errors.incidentDate = "Selecciona la fecha del incidente.";
  }

  if (!data.claimType) errors.claimType = "Selecciona reclamo o queja.";
  if (!data.claimDetail.trim()) {
    errors.claimDetail = "Describe el detalle del reclamo o queja.";
  }
  if (!data.clientRequest.trim()) {
    errors.clientRequest = "Indica la solución que esperas recibir.";
  }

  if (!data.declaresTruth) {
    errors.declaresTruth = "Debes declarar que la información es verdadera.";
  }
  if (!data.authorizesData) {
    errors.authorizesData = "Debes autorizar el tratamiento de datos.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
