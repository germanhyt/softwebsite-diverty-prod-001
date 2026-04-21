import { parentsTestimonials } from "../../data/familiesHome";

export default function TestimonialsSection() {
  return (
    <section
      className="bg-surface-cream py-16 md:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <h2
          id="testimonials-title"
          className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl"
        >
          Lo que dicen los padres
        </h2>
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {parentsTestimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-full min-h-0 flex-col rounded-2xl bg-surface-card p-7 shadow-card sm:p-8"
            >
              <p className="mb-6 min-h-0 flex-1 text-sm leading-relaxed text-primary/90 sm:text-base">
                “{t.quote}”
              </p>
              <div className="mt-auto shrink-0">
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-sm text-primary/70">{t.child}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
