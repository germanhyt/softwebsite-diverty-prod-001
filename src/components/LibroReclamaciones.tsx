import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "../config/site.config";
import {
  claimTypes,
  documentTypes,
  peruDepartments,
  reclamacionesCopy,
  serviceModalities,
  type ReclamacionFormData,
} from "../data/reclamaciones";

const TOTAL_STEPS = 5;
const BODY_LOCK_CLASS = "libro-reclamaciones-open";
const LEGAL_BOOK_IMAGE_SRC = "/libro-de-reclamaciones.png";

const emptyForm = (): ReclamacionFormData => ({
  fullName: "",
  email: "",
  phone: "",
  documentType: "",
  documentNumber: "",
  department: "",
  province: "",
  district: "",
  address: "",
  serviceRecipientName: "",
  serviceRecipientAge: "",
  contractedService: "",
  serviceModality: "",
  incidentDate: "",
  staffName: "",
  claimType: "",
  claimDetail: "",
  clientRequest: "",
  declaresTruth: false,
  authorizesData: false,
});

const fieldClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-primary focus:ring-2 focus:ring-primary/20";

const labelClass = "mb-1.5 block text-sm font-medium text-neutral-800";

const stepLabels = [
  "Información",
  "Cliente",
  "Servicio",
  "Detalle",
  "Declaración",
] as const;

function LibroIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1B7A3D] text-white shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22H19a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3H6.5ZM6 4.5c0-.28.22-.5.5-.5H17a1 1 0 0 1 1 1v14H6.5a.5.5 0 0 1-.5-.5v-14Z" />
        <path d="M8 7h8v1.5H8V7Zm0 3h8v1.5H8V10Zm0 3h5v1.5H8V13Z" />
      </svg>
    </span>
  );
}

function InfoSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-neutral-200/80 pb-5 last:border-b-0 last:pb-0">
      <h3 className="text-sm font-semibold text-footer">{title}</h3>
      <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-neutral-700">
        {children}
      </div>
    </section>
  );
}

function buildMailto(data: ReclamacionFormData): string {
  const claimLabel =
    claimTypes.find((c) => c.value === data.claimType)?.label ?? data.claimType;
  const modalityLabel =
    serviceModalities.find((m) => m.value === data.serviceModality)?.label ??
    data.serviceModality;

  const body = [
    `Tipo: ${claimLabel}`,
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
    `Modalidad: ${modalityLabel}`,
    `Fecha del incidente: ${data.incidentDate}`,
    `Personal encargado: ${data.staffName || "—"}`,
    "",
    "— Detalle —",
    data.claimDetail,
    "",
    "— Pedido del cliente —",
    data.clientRequest,
  ].join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `[Libro de Reclamaciones] ${claimLabel} — ${data.fullName}`,
  )}&body=${encodeURIComponent(body)}`;
}

type Props = {
  /** En footer: botón compacto bajo Explora. */
  variant?: "footer";
};

export default function LibroReclamaciones({ variant = "footer" }: Props) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [usePngIcon, setUsePngIcon] = useState(true);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ReclamacionFormData, string>>
  >({});
  const [form, setForm] = useState<ReclamacionFormData>(emptyForm);

  useEffect(() => setMounted(true), []);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => {
      setStep(0);
      setSubmitted(false);
      setErrors({});
      setForm(emptyForm());
    }, 200);
  };

  useEffect(() => {
    if (!open) {
      document.body.classList.remove(BODY_LOCK_CLASS);
      document.body.style.overflow = "";
      return;
    }

    document.body.classList.add(BODY_LOCK_CLASS);
    document.body.style.overflow = "hidden";

    const main = document.querySelector("main");
    const header = document.getElementById("site-header");
    main?.setAttribute("inert", "");
    header?.setAttribute("inert", "");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const focusable = dialogRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();

    return () => {
      document.body.classList.remove(BODY_LOCK_CLASS);
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      header?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const setField = <K extends keyof ReclamacionFormData>(
    key: K,
    value: ReclamacionFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateStep = (current: number): boolean => {
    const next: Partial<Record<keyof ReclamacionFormData, string>> = {};

    if (current === 1) {
      if (!form.fullName.trim()) next.fullName = "Ingresa tus nombres y apellidos.";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        next.email = "Ingresa un correo válido.";
      }
      if (!form.phone.trim()) next.phone = "Ingresa tu teléfono.";
      if (!form.documentType) next.documentType = "Selecciona el tipo de documento.";
      if (!form.documentNumber.trim()) {
        next.documentNumber = "Ingresa el número de documento.";
      }
      if (!form.department) next.department = "Selecciona el departamento.";
      if (!form.province.trim()) next.province = "Ingresa la provincia.";
      if (!form.district.trim()) next.district = "Ingresa el distrito.";
      if (!form.address.trim()) next.address = "Ingresa la dirección.";
    }

    if (current === 2) {
      if (!form.serviceRecipientName.trim()) {
        next.serviceRecipientName = "Ingresa el nombre de quien recibió el servicio.";
      }
      if (!form.serviceRecipientAge.trim()) {
        next.serviceRecipientAge = "Ingresa la edad.";
      }
      if (!form.contractedService.trim()) {
        next.contractedService = "Indica el servicio contratado.";
      }
      if (!form.serviceModality) {
        next.serviceModality = "Selecciona la modalidad.";
      }
      if (!form.incidentDate) next.incidentDate = "Selecciona la fecha del incidente.";
    }

    if (current === 3) {
      if (!form.claimType) next.claimType = "Selecciona reclamo o queja.";
      if (!form.claimDetail.trim()) {
        next.claimDetail = "Describe el detalle del reclamo o queja.";
      }
      if (!form.clientRequest.trim()) {
        next.clientRequest = "Indica la solución que esperas recibir.";
      }
    }

    if (current === 4) {
      if (!form.declaresTruth) {
        next.declaresTruth = "Debes declarar que la información es verdadera.";
      }
      if (!form.authorizesData) {
        next.authorizesData = "Debes autorizar el tratamiento de datos.";
      }
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (step === 0 || validateStep(step)) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    }
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    window.location.href = buildMailto(form);
    setSubmitted(true);
  };

  const errorMsg = (key: keyof ReclamacionFormData) =>
    errors[key] ? (
      <p className="mt-1 text-xs text-red-600" role="alert">
        {errors[key]}
      </p>
    ) : null;

  const triggerClass =
    variant === "footer"
      ? "group flex w-full min-h-[3.25rem] items-center justify-between gap-4 rounded-xl bg-white/10 px-3 py-2.5 text-left outline-none ring-1 ring-white/20 transition hover:bg-white/15 hover:ring-white/40 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-footer md:max-w-sm"
      : "group inline-flex w-full items-center justify-between gap-4 rounded-xl px-2 py-2 text-left transition hover:bg-white/10";

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:items-center sm:p-6"
            role="presentation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#041f36]/88 backdrop-blur-md"
              aria-label="Cerrar libro de reclamaciones"
              onClick={close}
            />

            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="relative z-10 flex max-h-[min(92dvh,860px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border-l-[6px] border-footer bg-white shadow-2xl sm:rounded-2xl"
            >
              <header className="shrink-0 border-b border-neutral-100 bg-white px-5 pb-4 pt-5 sm:px-6">
                <div className="flex items-start gap-3">
                  {usePngIcon ? (
                    <img
                      src={LEGAL_BOOK_IMAGE_SRC}
                      alt="Libro de Reclamaciones"
                      className="h-11 w-11 shrink-0 rounded-lg object-cover ring-1 ring-neutral-300"
                      loading="lazy"
                      decoding="async"
                      onError={() => setUsePngIcon(false)}
                    />
                  ) : (
                    <LibroIcon />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                      {reclamacionesCopy.title}
                    </p>
                    <h2
                      id={titleId}
                      className="mt-0.5 text-lg font-bold tracking-tight text-footer sm:text-xl"
                    >
                      {submitted
                        ? reclamacionesCopy.confirmation.title
                        : stepLabels[step]}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-label="Cerrar"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                {!submitted ? (
                  <ol
                    className="mt-4 flex gap-1.5"
                    aria-label={`Paso ${step + 1} de ${TOTAL_STEPS}`}
                  >
                    {stepLabels.map((label, i) => (
                      <li key={label} className="min-w-0 flex-1">
                        <div
                          className={`h-1 rounded-full transition ${
                            i <= step ? "bg-footer" : "bg-neutral-200"
                          }`}
                        />
                        <span className="sr-only">
                          {label}
                          {i === step ? " (actual)" : ""}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </header>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
                {submitted ? (
                  <div className="space-y-4 py-4 text-center sm:py-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-green/15 text-accent-green">
                      <svg
                        className="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-neutral-700">
                      {reclamacionesCopy.confirmation.body}
                    </p>
                    <p className="mx-auto max-w-md text-xs leading-relaxed text-neutral-500">
                      {reclamacionesCopy.dataProtection.body}
                    </p>
                    <button
                      type="button"
                      onClick={close}
                      className="mt-2 inline-flex rounded-full bg-footer px-8 py-3 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer focus-visible:ring-offset-2"
                    >
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <form id="libro-reclamaciones-form" onSubmit={onSubmit}>
                    {step === 0 ? (
                      <div className="space-y-5">
                        <p className="text-sm leading-relaxed text-neutral-700">
                          {reclamacionesCopy.subtitle}
                        </p>
                        <p className="text-sm font-medium text-neutral-900">
                          {reclamacionesCopy.intro}
                        </p>

                        <InfoSection title={reclamacionesCopy.legalNotice.title}>
                          <p>{reclamacionesCopy.legalNotice.lead}</p>
                          <ul className="list-disc space-y-1.5 pl-4">
                            {reclamacionesCopy.legalNotice.items.map((item) => (
                              <li key={item.slice(0, 40)}>{item}</li>
                            ))}
                          </ul>
                        </InfoSection>

                        <InfoSection
                          title={reclamacionesCopy.minorRepresentation.title}
                        >
                          <p>{reclamacionesCopy.minorRepresentation.body}</p>
                        </InfoSection>

                        <InfoSection title={reclamacionesCopy.claimVsComplaint.title}>
                          <p>{reclamacionesCopy.claimVsComplaint.claim}</p>
                          <p>{reclamacionesCopy.claimVsComplaint.complaint}</p>
                        </InfoSection>

                        <InfoSection title={reclamacionesCopy.registeredInfo.title}>
                          <p>{reclamacionesCopy.registeredInfo.body}</p>
                        </InfoSection>

                        <InfoSection title={reclamacionesCopy.responseTime.title}>
                          <p>{reclamacionesCopy.responseTime.body}</p>
                        </InfoSection>

                        <InfoSection title={reclamacionesCopy.howItWorks.title}>
                          <p>{reclamacionesCopy.howItWorks.body}</p>
                        </InfoSection>
                      </div>
                    ) : null}

                    {step === 1 ? (
                      <div className="space-y-5">
                        <h3 className="text-base font-semibold text-footer">
                          Datos del cliente
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className={labelClass} htmlFor="lr-fullName">
                              Nombres y apellidos
                            </label>
                            <input
                              id="lr-fullName"
                              className={fieldClass}
                              value={form.fullName}
                              onChange={(e) => setField("fullName", e.target.value)}
                              autoComplete="name"
                            />
                            {errorMsg("fullName")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-email">
                              Correo electrónico
                            </label>
                            <input
                              id="lr-email"
                              type="email"
                              className={fieldClass}
                              value={form.email}
                              onChange={(e) => setField("email", e.target.value)}
                              autoComplete="email"
                            />
                            {errorMsg("email")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-phone">
                              Teléfono
                            </label>
                            <input
                              id="lr-phone"
                              type="tel"
                              className={fieldClass}
                              value={form.phone}
                              onChange={(e) => setField("phone", e.target.value)}
                              autoComplete="tel"
                            />
                            {errorMsg("phone")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-docType">
                              Tipo de documento
                            </label>
                            <select
                              id="lr-docType"
                              className={fieldClass}
                              value={form.documentType}
                              onChange={(e) =>
                                setField(
                                  "documentType",
                                  e.target.value as ReclamacionFormData["documentType"],
                                )
                              }
                            >
                              <option value="">Seleccionar</option>
                              {documentTypes.map((d) => (
                                <option key={d.value} value={d.value}>
                                  {d.label}
                                </option>
                              ))}
                            </select>
                            {errorMsg("documentType")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-docNumber">
                              Número de documento
                            </label>
                            <input
                              id="lr-docNumber"
                              className={fieldClass}
                              value={form.documentNumber}
                              onChange={(e) =>
                                setField("documentNumber", e.target.value)
                              }
                            />
                            {errorMsg("documentNumber")}
                          </div>
                        </div>

                        <h4 className="pt-1 text-sm font-semibold text-neutral-800">
                          Domicilio
                        </h4>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className={labelClass} htmlFor="lr-department">
                              Departamento
                            </label>
                            <select
                              id="lr-department"
                              className={fieldClass}
                              value={form.department}
                              onChange={(e) =>
                                setField("department", e.target.value)
                              }
                            >
                              <option value="">Seleccionar</option>
                              {peruDepartments.map((d) => (
                                <option key={d} value={d}>
                                  {d}
                                </option>
                              ))}
                            </select>
                            {errorMsg("department")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-province">
                              Provincia
                            </label>
                            <input
                              id="lr-province"
                              className={fieldClass}
                              value={form.province}
                              onChange={(e) => setField("province", e.target.value)}
                            />
                            {errorMsg("province")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-district">
                              Distrito
                            </label>
                            <input
                              id="lr-district"
                              className={fieldClass}
                              value={form.district}
                              onChange={(e) => setField("district", e.target.value)}
                            />
                            {errorMsg("district")}
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass} htmlFor="lr-address">
                              Dirección
                            </label>
                            <input
                              id="lr-address"
                              className={fieldClass}
                              value={form.address}
                              onChange={(e) => setField("address", e.target.value)}
                              autoComplete="street-address"
                            />
                            {errorMsg("address")}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {step === 2 ? (
                      <div className="space-y-4">
                        <h3 className="text-base font-semibold text-footer">
                          Datos del servicio
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className={labelClass} htmlFor="lr-recipient">
                              Nombre de quién recibió el servicio
                            </label>
                            <input
                              id="lr-recipient"
                              className={fieldClass}
                              value={form.serviceRecipientName}
                              onChange={(e) =>
                                setField("serviceRecipientName", e.target.value)
                              }
                            />
                            {errorMsg("serviceRecipientName")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-age">
                              Edad
                            </label>
                            <input
                              id="lr-age"
                              type="number"
                              min={0}
                              max={120}
                              className={fieldClass}
                              value={form.serviceRecipientAge}
                              onChange={(e) =>
                                setField("serviceRecipientAge", e.target.value)
                              }
                            />
                            {errorMsg("serviceRecipientAge")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-date">
                              Fecha del incidente
                            </label>
                            <input
                              id="lr-date"
                              type="date"
                              className={fieldClass}
                              value={form.incidentDate}
                              onChange={(e) =>
                                setField("incidentDate", e.target.value)
                              }
                            />
                            {errorMsg("incidentDate")}
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass} htmlFor="lr-service">
                              Servicio contratado
                            </label>
                            <input
                              id="lr-service"
                              className={fieldClass}
                              value={form.contractedService}
                              onChange={(e) =>
                                setField("contractedService", e.target.value)
                              }
                              placeholder="Ej. curso, taller, estrategia…"
                            />
                            {errorMsg("contractedService")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-modality">
                              Modalidad del servicio
                            </label>
                            <select
                              id="lr-modality"
                              className={fieldClass}
                              value={form.serviceModality}
                              onChange={(e) =>
                                setField(
                                  "serviceModality",
                                  e.target.value as ReclamacionFormData["serviceModality"],
                                )
                              }
                            >
                              <option value="">Seleccionar</option>
                              {serviceModalities.map((m) => (
                                <option key={m.value} value={m.value}>
                                  {m.label}
                                </option>
                              ))}
                            </select>
                            {errorMsg("serviceModality")}
                          </div>
                          <div>
                            <label className={labelClass} htmlFor="lr-staff">
                              Personal encargado de la atención
                            </label>
                            <input
                              id="lr-staff"
                              className={fieldClass}
                              value={form.staffName}
                              onChange={(e) => setField("staffName", e.target.value)}
                              placeholder="Opcional"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {step === 3 ? (
                      <div className="space-y-4">
                        <h3 className="text-base font-semibold text-footer">
                          Detalle del reclamo o queja
                        </h3>

                        <fieldset>
                          <legend className={`${labelClass} mb-2`}>Tipo</legend>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {claimTypes.map((type) => {
                              const selected = form.claimType === type.value;
                              return (
                                <label
                                  key={type.value}
                                  className={`cursor-pointer rounded-xl border px-4 py-3 transition ${
                                    selected
                                      ? "border-footer bg-[#E8F2FA] ring-2 ring-footer/20"
                                      : "border-neutral-200 bg-neutral-50 hover:border-neutral-300"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="claimType"
                                    value={type.value}
                                    checked={selected}
                                    onChange={() =>
                                      setField("claimType", type.value)
                                    }
                                    className="sr-only"
                                  />
                                  <span className="block text-sm font-semibold text-neutral-900">
                                    {type.label}
                                  </span>
                                  <span className="mt-1 block text-xs leading-relaxed text-neutral-600">
                                    {type.description}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                          {errorMsg("claimType")}
                        </fieldset>

                        <div>
                          <label className={labelClass} htmlFor="lr-detail">
                            Detalle del reclamo
                          </label>
                          <textarea
                            id="lr-detail"
                            rows={4}
                            className={`${fieldClass} resize-y`}
                            value={form.claimDetail}
                            onChange={(e) =>
                              setField("claimDetail", e.target.value)
                            }
                            placeholder="Describe con claridad lo ocurrido…"
                          />
                          {errorMsg("claimDetail")}
                        </div>

                        <div>
                          <label className={labelClass} htmlFor="lr-request">
                            Pedido del cliente (indique la solución que espera
                            recibir)
                          </label>
                          <textarea
                            id="lr-request"
                            rows={3}
                            className={`${fieldClass} resize-y`}
                            value={form.clientRequest}
                            onChange={(e) =>
                              setField("clientRequest", e.target.value)
                            }
                          />
                          {errorMsg("clientRequest")}
                        </div>
                      </div>
                    ) : null}

                    {step === 4 ? (
                      <div className="space-y-4">
                        <h3 className="text-base font-semibold text-footer">
                          Declaración
                        </h3>

                        <label className="flex cursor-pointer gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5">
                          <input
                            type="checkbox"
                            checked={form.declaresTruth}
                            onChange={(e) =>
                              setField("declaresTruth", e.target.checked)
                            }
                            className="mt-1 h-4 w-4 shrink-0 rounded border-neutral-300 text-footer focus:ring-footer"
                          />
                          <span className="text-sm leading-relaxed text-neutral-800">
                            {reclamacionesCopy.declaration.truth}
                          </span>
                        </label>
                        {errorMsg("declaresTruth")}

                        <label className="flex cursor-pointer gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5">
                          <input
                            type="checkbox"
                            checked={form.authorizesData}
                            onChange={(e) =>
                              setField("authorizesData", e.target.checked)
                            }
                            className="mt-1 h-4 w-4 shrink-0 rounded border-neutral-300 text-footer focus:ring-footer"
                          />
                          <span className="text-sm leading-relaxed text-neutral-800">
                            {reclamacionesCopy.declaration.dataTreatment}
                          </span>
                        </label>
                        {errorMsg("authorizesData")}

                        <InfoSection title={reclamacionesCopy.dataProtection.title}>
                          <p>{reclamacionesCopy.dataProtection.body}</p>
                        </InfoSection>

                        <p className="text-xs leading-relaxed text-neutral-500">
                          {reclamacionesCopy.confirmation.body}
                        </p>
                      </div>
                    ) : null}
                  </form>
                )}
              </div>

              {!submitted ? (
                <footer className="shrink-0 border-t border-neutral-100 bg-white px-5 py-4 sm:px-6">
                  <div className="flex items-center justify-between gap-3">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                      >
                        Atrás
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < TOTAL_STEPS - 1 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex rounded-full bg-footer px-7 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer focus-visible:ring-offset-2"
                      >
                        Continuar
                      </button>
                    ) : (
                      <button
                        type="submit"
                        form="libro-reclamaciones-form"
                        className="inline-flex rounded-full bg-accent-green px-7 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2"
                      >
                        Enviar
                      </button>
                    )}
                  </div>
                </footer>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClass}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {usePngIcon ? (
          <img
            src={LEGAL_BOOK_IMAGE_SRC}
            alt="Libro de Reclamaciones"
            className="h-11 w-11 shrink-0 rounded-lg object-cover ring-1 ring-white/35"
            loading="lazy"
            decoding="async"
            onError={() => setUsePngIcon(false)}
          />
        ) : (
          <LibroIcon />
        )}
        <span className="flex min-w-0 flex-1 flex-col justify-between gap-1 text-left">
          <span className="block text-sm font-semibold text-white">
            Libro de Reclamaciones
          </span>
          <span className="block text-xs text-white/70">
            Realiza tu reclamo o queja
          </span>
        </span>
      </button>
      {modal}
    </>
  );
}
