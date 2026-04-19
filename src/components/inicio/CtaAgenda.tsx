import { siteConfig } from "../../config/site.config";

type Props = {
  /** Compatibilidad con llamadas existentes; el CTA principal abre WhatsApp. */
  email?: string;
  phone?: string;
  label: string;
};

export default function CtaAgenda({ label }: Props) {
  return (
    <a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-base font-bold text-white shadow-md transition hover:bg-primary-dark sm:text-lg"
    >
      {label}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20" aria-hidden="true">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
