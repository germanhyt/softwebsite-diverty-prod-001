import { familyFinalCta } from "../../data/familiesHome";
import { siteConfig } from "../../config/site.config";

export default function FinalCtaSection() {
  return (
    <section
      className="bg-surface-cream pb-24 pt-8 text-center md:pb-28"
      aria-labelledby="final-cta-title"
    >
      <div className="container max-w-3xl">
        <h2
          id="final-cta-title"
          className="mb-4 text-3xl font-bold text-primary sm:text-4xl"
        >
          {familyFinalCta.title}
        </h2>
        <p className="mb-10 text-lg text-primary/85">{familyFinalCta.subtitle}</p>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-base font-bold text-white shadow-md transition hover:bg-primary-dark sm:text-lg"
        >
          {familyFinalCta.button}
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20"
            aria-hidden="true"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
