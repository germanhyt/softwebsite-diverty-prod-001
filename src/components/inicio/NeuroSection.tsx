import { familyNeuro } from "../../data/familiesHome";
// fecha a la recha
import { FaArrowRight } from "react-icons/fa";

export default function NeuroSection() {
  return (
    <section className="bg-[#FDEFE7] py-16 md:py-20" aria-labelledby="neuro-title">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Texto */}
          <div>
            <h2
              id="neuro-title"
              className="mb-6 text-3xl font-bold text-primary sm:text-4xl"
            >
              {familyNeuro.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary/90">
              {familyNeuro.body}
            </p>
            <a
              href="/nosotros"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-medium text-white shadow-md transition hover:bg-primary-dark"
            >
              Comunícate con una asesora
              <FaArrowRight className="ml-2 text-white" />
            </a>
          </div>

          {/* Ilustración */}
          <img
            src={familyNeuro.illustration.src}
            alt={familyNeuro.illustration.alt}
            width={900}
            height={700}
            className="w-full rounded-[1.75rem] object-cover "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
