import {
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { revealWizardStep } from "../lib/reclamaciones/scroll";
import {
  claimTypes,
  documentTypes,
  peruDepartments,
  reclamacionesCopy,
  serviceModalities,
  type ReclamacionFormData,
} from "../data/reclamaciones";
import {
  reclamacionStepFields,
  validateReclamacion,
} from "../lib/reclamaciones/validate";

const TOTAL_STEPS = 5;
const LEGAL_BOOK_IMAGE_SRC = "/libro-de-reclamaciones.png";
const SUBMIT_ERROR_MESSAGE =
  "No pudimos enviar tu reclamo. Inténtalo de nuevo en unos minutos.";

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

export default function LibroReclamaciones() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [usePngIcon, setUsePngIcon] = useState(true);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ReclamacionFormData, string>>
  >({});
  const [form, setForm] = useState<ReclamacionFormData>(emptyForm);
  const wizardRef = useRef<HTMLDivElement>(null);
  const skipScrollOnMount = useRef(true);

  useLayoutEffect(() => {
    if (skipScrollOnMount.current) {
      skipScrollOnMount.current = false;
      return;
    }
    const wizard = wizardRef.current;
    if (!wizard) return;
    const heading = wizard.querySelector("h1");
    revealWizardStep(
      wizard,
      heading instanceof HTMLElement ? heading : null,
    );
  }, [step, submitted]);

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
    if (current === 0) return true;

    const result = validateReclamacion(form);
    if (result.ok) {
      setErrors({});
      return true;
    }

    const keys =
      reclamacionStepFields[current as keyof typeof reclamacionStepFields];
    const next: Partial<Record<keyof ReclamacionFormData, string>> = {};
    for (const key of keys) {
      const message = result.errors[key];
      if (message) next[key] = message;
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = validateReclamacion(form);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/reclamaciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        setSubmitError(SUBMIT_ERROR_MESSAGE);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  const errorMsg = (key: keyof ReclamacionFormData) =>
    errors[key] ? (
      <p className="mt-1 text-xs text-red-600" role="alert">
        {errors[key]}
      </p>
    ) : null;

  return (
    <div
      ref={wizardRef}
      className="mx-auto w-full max-w-2xl scroll-mt-28 overflow-hidden rounded-2xl border-l-[6px] border-footer bg-white shadow-lg md:scroll-mt-32"
    >
      <header className="border-b border-neutral-100 bg-white px-5 pb-4 pt-5 sm:px-6">
        <div className="flex items-start gap-3">
          {usePngIcon ? (
            <img
              src={LEGAL_BOOK_IMAGE_SRC}
              alt=""
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
            <h1
              id="libro-reclamaciones-title"
              tabIndex={-1}
              className="mt-0.5 text-lg font-bold tracking-tight text-footer outline-none sm:text-xl"
            >
              {submitted
                ? reclamacionesCopy.confirmation.title
                : stepLabels[step]}
            </h1>
          </div>
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

      <div className="px-5 py-5 sm:px-6">
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
            <a
              href="/"
              className="mt-2 inline-flex rounded-full bg-footer px-8 py-3 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer focus-visible:ring-offset-2"
            >
              Volver al inicio
            </a>
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

                <InfoSection title={reclamacionesCopy.minorRepresentation.title}>
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
                <h2 className="text-base font-semibold text-footer">
                  Datos del cliente
                </h2>
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

                <h3 className="pt-1 text-sm font-semibold text-neutral-800">
                  Domicilio
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="lr-department">
                      Departamento
                    </label>
                    <select
                      id="lr-department"
                      className={fieldClass}
                      value={form.department}
                      onChange={(e) => setField("department", e.target.value)}
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
                <h2 className="text-base font-semibold text-footer">
                  Datos del servicio
                </h2>
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
                      onChange={(e) => setField("incidentDate", e.target.value)}
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
                <h2 className="text-base font-semibold text-footer">
                  Detalle del reclamo o queja
                </h2>

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
                            onChange={() => setField("claimType", type.value)}
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
                    onChange={(e) => setField("claimDetail", e.target.value)}
                    placeholder="Describe con claridad lo ocurrido…"
                  />
                  {errorMsg("claimDetail")}
                </div>

                <div>
                  <label className={labelClass} htmlFor="lr-request">
                    Pedido del cliente (indique la solución que espera recibir)
                  </label>
                  <textarea
                    id="lr-request"
                    rows={3}
                    className={`${fieldClass} resize-y`}
                    value={form.clientRequest}
                    onChange={(e) => setField("clientRequest", e.target.value)}
                  />
                  {errorMsg("clientRequest")}
                </div>
              </div>
            ) : null}

            {step === 4 ? (
              <div className="space-y-4">
                <h2 className="text-base font-semibold text-footer">
                  Declaración
                </h2>

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
        <footer className="border-t border-neutral-100 bg-white px-5 py-4 sm:px-6">
          {submitError ? (
            <p className="mb-3 text-sm text-red-600" role="alert">
              {submitError}
            </p>
          ) : null}
          <div className="flex items-center justify-between gap-3">
            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                disabled={submitting}
                className="inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:opacity-60"
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
                disabled={submitting}
                className="inline-flex rounded-full bg-accent-green px-7 py-2.5 text-sm font-bold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 disabled:opacity-60"
              >
                {submitting ? "Enviando…" : "Enviar"}
              </button>
            )}
          </div>
        </footer>
      ) : null}
    </div>
  );
}
