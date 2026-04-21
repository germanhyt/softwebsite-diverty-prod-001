import { motion, useReducedMotion } from "framer-motion";
import { parentsTestimonials } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function TestimonialsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-surface-cream py-16 md:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <motion.h2
          id="testimonials-title"
          className="mb-12 text-center text-3xl font-bold text-black sm:text-4xl"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Lo que dicen los padres
        </motion.h2>
        <motion.div
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {parentsTestimonials.map((t) => (
            <motion.article
              key={t.name}
              className="flex h-full min-h-0 flex-col rounded-2xl bg-surface-card p-7 shadow-card sm:p-8"
              variants={fadeInUp}
            >
              <p className="mb-6 min-h-0 flex-1 text-sm leading-relaxed text-black/90 sm:text-base">
                “{t.quote}”
              </p>
              <div className="mt-auto shrink-0">
                <div className="font-bold text-black">{t.name}</div>
                <div className="text-sm text-black/70">{t.child}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
