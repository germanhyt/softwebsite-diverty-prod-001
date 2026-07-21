/** Copy y opciones del Libro de Reclamaciones Virtual (Ley N.° 29571). */

export const reclamacionesCopy = {
  title: "Libro de Reclamaciones",
  subtitle:
    "En cumplimiento de lo dispuesto por la Ley N.° 29571 - Código de Protección y Defensa del Consumidor y el Reglamento del Libro de Reclamaciones, Diverty pone a disposición de sus usuarios el presente Libro de Reclamaciones Virtual.",
  intro:
    "Complete el siguiente formulario para registrar su reclamo o queja respecto de nuestros servicios.",
  legalNotice: {
    title: "Aviso legal",
    lead: "De conformidad con la Ley N.° 29571 - Código de Protección y Defensa del Consumidor y el Reglamento del Libro de Reclamaciones:",
    items: [
      "La presentación de un reclamo o queja no limita el derecho del consumidor de acudir posteriormente a otras vías de solución de controversias o presentar una denuncia ante INDECOPI.",
      "Diverty atenderá y responderá el reclamo o queja dentro del plazo máximo establecido por la normativa vigente.",
      "La información registrada será utilizada exclusivamente para la gestión del presente reclamo.",
    ],
  },
  minorRepresentation: {
    title: "Representación del menor de edad",
    body: "Cuando el servicio haya sido brindado a un menor de edad, el presente reclamo o queja deberá ser registrado por su padre, madre, tutor o representante legal, quien declara contar con las facultades necesarias para actuar en representación del menor.",
  },
  claimVsComplaint: {
    title: "Diferencia entre Reclamo y Queja",
    claim:
      "Reclamo: Es la manifestación de disconformidad relacionada con el servicio prestado o el producto adquirido.",
    complaint:
      "Queja: Es la manifestación de malestar o descontento respecto de la atención al público o del trato recibido, sin estar necesariamente relacionada con el servicio prestado.",
  },
  registeredInfo: {
    title: "Sobre la información registrada",
    body: "La información proporcionada en este formulario será utilizada exclusivamente para gestionar y dar respuesta al reclamo o queja presentada. Por ello, te recomendamos completar todos los campos con información clara y precisa para facilitar su evaluación.",
  },
  responseTime: {
    title: "Tiempo de atención",
    body: "Diverty atenderá y responderá tu reclamo o queja en un plazo máximo de quince (15) días hábiles, conforme a lo establecido por el Código de Protección y Defensa del Consumidor y el Reglamento del Libro de Reclamaciones. Este plazo es improrrogable.",
  },
  howItWorks: {
    title: "¿Cómo funciona nuestro Libro de Reclamaciones?",
    body: "Si has tenido algún inconveniente con los servicios brindados por Diverty, puedes registrar un reclamo o una queja a través de este formulario. Una vez recibido, nuestro equipo revisará la información y realizará las acciones correspondientes para brindarte una respuesta dentro del plazo establecido por la normativa vigente.",
  },
  declaration: {
    truth:
      "Declaro que la información proporcionada es verdadera.",
    dataTreatment:
      "Autorizo el tratamiento de mis datos personales únicamente para la atención del presente reclamo, de conformidad con la Ley N.° 29733 - Ley de Protección de Datos Personales.",
  },
  confirmation: {
    title: "Confirmación del registro",
    body: "Una vez enviado el formulario, tu reclamo o queja será recibido por nuestro equipo para su evaluación. La respuesta será remitida al correo electrónico registrado dentro del plazo establecido por la normativa vigente.",
  },
  dataProtection: {
    title: "Protección de datos",
    body: "Los datos personales proporcionados a través del presente Libro de Reclamaciones serán tratados de manera confidencial y utilizados únicamente para la gestión, atención y respuesta del reclamo o queja presentada. Diverty adopta las medidas de seguridad necesarias para proteger esta información, de conformidad con la Ley N.° 29733 - Ley de Protección de Datos Personales y su Reglamento.",
  },
} as const;

export const documentTypes = [
  { value: "DNI", label: "DNI" },
  { value: "CE", label: "Carné de extranjería" },
  { value: "PASAPORTE", label: "Pasaporte" },
  { value: "RUC", label: "RUC" },
] as const;

export const serviceModalities = [
  { value: "presencial", label: "Presencial" },
  { value: "virtual", label: "Virtual" },
  { value: "domicilio", label: "A domicilio" },
  { value: "semipresencial", label: "Semipresencial" },
] as const;

export const claimTypes = [
  {
    value: "reclamo",
    label: "Reclamo",
    description:
      "Disconformidad relacionada con el servicio prestado o el producto adquirido.",
  },
  {
    value: "queja",
    label: "Queja",
    description:
      "Malestar respecto de la atención al público o del trato recibido.",
  },
] as const;

export const peruDepartments = [
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
] as const;

export type ClaimType = (typeof claimTypes)[number]["value"];
export type DocumentType = (typeof documentTypes)[number]["value"];
export type ServiceModality = (typeof serviceModalities)[number]["value"];

export type ReclamacionFormData = {
  fullName: string;
  email: string;
  phone: string;
  documentType: DocumentType | "";
  documentNumber: string;
  department: string;
  province: string;
  district: string;
  address: string;
  serviceRecipientName: string;
  serviceRecipientAge: string;
  contractedService: string;
  serviceModality: ServiceModality | "";
  incidentDate: string;
  staffName: string;
  claimType: ClaimType | "";
  claimDetail: string;
  clientRequest: string;
  declaresTruth: boolean;
  authorizesData: boolean;
};
