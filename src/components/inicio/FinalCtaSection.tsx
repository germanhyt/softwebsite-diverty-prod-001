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


        {/* <a
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
        </a> */}

        <div className="mt-12 text-center md:mt-20">
          <a
            href="/#contacto"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0A518D] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#084579] hover:shadow-2xl"
          >
            Comunicate con una asesora
            <svg
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
