import { motion, useReducedMotion } from "framer-motion";
import { benefits } from "../../data/nosotrosTraining";
import { defaultViewport, scaleIn, staggerChildren } from "../../lib/motion";

export default function Benefits() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-surface-cream py-16 md:py-20"
      aria-labelledby="benefits-title"
    >
      <div className="container">
        <motion.h2
          id="benefits-title"
          className="mb-12 text-center text-3xl text-black sm:mb-14 sm:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.5 }}
        >
          Beneficios de capacitarte con nosotros
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8  max-w-5xl mx-auto"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {benefits.map((b) => (
            <motion.article
              key={b.key}
              className="overflow-hidden rounded-2xl bg-white text-center shadow-card ring-1 ring-primary/10"
              variants={scaleIn}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={b.image.src}
                  alt={b.image.alt}
                  className="h-full max-w-xs  object-cover object-center mx-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-xl font-bold text-black">{b.title}</h3>
                <p className="text-base leading-relaxed text-black/85">
                  {b.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
