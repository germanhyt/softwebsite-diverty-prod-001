import {
  claimTypes,
  reclamacionesCopy,
  serviceModalities,
  type ReclamacionFormData,
} from "../../data/reclamaciones";

export type ReclamacionEmailContent = {
  subject: string;
  text: string;
  html: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function textToHtml(text: string): string {
  return `<p>${escapeHtml(text).replaceAll("\n", "<br />")}</p>`;
}

function claimLabel(claimType: ReclamacionFormData["claimType"]): string {
  return claimTypes.find((item) => item.value === claimType)?.label ?? claimType;
}

function modalityLabel(
  serviceModality: ReclamacionFormData["serviceModality"],
): string {
  return (
    serviceModalities.find((item) => item.value === serviceModality)?.label ??
    serviceModality
  );
}

export function buildReclamacionEmail(
  data: ReclamacionFormData,
): ReclamacionEmailContent {
  const typeLabel = claimLabel(data.claimType);
  const text = [
    `Tipo: ${typeLabel}`,
    "",
    "— Datos del cliente —",
    `Nombres y apellidos: ${data.fullName}`,
    `Correo: ${data.email}`,
    `Teléfono: ${data.phone}`,
    `Documento: ${data.documentType} ${data.documentNumber}`,
    `Departamento: ${data.department}`,
    `Provincia: ${data.province}`,
    `Distrito: ${data.district}`,
    `Dirección: ${data.address}`,
    "",
    "— Datos del servicio —",
    `Quién recibió el servicio: ${data.serviceRecipientName}`,
    `Edad: ${data.serviceRecipientAge}`,
    `Servicio contratado: ${data.contractedService}`,
    `Modalidad: ${modalityLabel(data.serviceModality)}`,
    `Fecha del incidente: ${data.incidentDate}`,
    `Personal encargado: ${data.staffName || "—"}`,
    "",
    "— Detalle —",
    data.claimDetail,
    "",
    "— Pedido del cliente —",
    data.clientRequest,
  ].join("\n");

  return {
    subject: `[Libro de Reclamaciones] ${typeLabel} — ${data.fullName}`,
    text,
    html: textToHtml(text),
  };
}

export function buildReclamacionAckEmail(
  data: ReclamacionFormData,
): ReclamacionEmailContent {
  const typeLabel = claimLabel(data.claimType);
  const text = [
    reclamacionesCopy.confirmation.title,
    "",
    reclamacionesCopy.confirmation.body,
    "",
    `Tipo: ${typeLabel}`,
    `Nombre: ${data.fullName}`,
  ].join("\n");

  return {
    subject: `${reclamacionesCopy.confirmation.title} — Libro de Reclamaciones`,
    text,
    html: textToHtml(text),
  };
}
