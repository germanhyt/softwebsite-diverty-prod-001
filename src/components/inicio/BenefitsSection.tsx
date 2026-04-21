import { motion, useReducedMotion } from "framer-motion";
import { benefitsKids } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, scaleIn, staggerChildren } from "../../lib/motion";

export default function BenefitsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-surface-cream py-20 md:py-28" aria-labelledby="benefits-title">
      <div className="container">
        <motion.h2
          id="benefits-title"
          className="mb-12 text-center text-3xl font-bold text-[#2D2D2D] sm:text-4xl md:mb-16 md:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.5 }}
        >
          {benefitsKids ? "Beneficios para tu hijo" : "Cargando..."}
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {benefitsKids.map((b) => (
            <motion.article
              key={b.key}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]"
              variants={scaleIn}
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={b.image.src}
                  alt={b.image.alt}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 px-6 py-8 text-center sm:text-left">
                <h3 className="mb-3 text-xl font-bold text-slate-900 md:text-2xl">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  {b.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center md:mt-24"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.45 }}
        >
          <motion.a
            href="/#contacto"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0A518D] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#084579] hover:shadow-2xl"
            whileHover={reduce ? undefined : { scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
