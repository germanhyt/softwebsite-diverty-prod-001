import { motion, useReducedMotion } from "framer-motion";
import { familyFinalCta } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-surface-cream pb-24 pt-16 text-center md:pb-28"
      aria-labelledby="final-cta-title"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.h2
            id="final-cta-title"
            className="mb-4 text-3xl font-bold text-black sm:text-4xl"
            variants={fadeInUp}
          >
            {familyFinalCta.title}
          </motion.h2>
          <motion.p
            className="mb-10 text-lg text-black/85"
            variants={fadeInUp}
          >
            {familyFinalCta.subtitle}
          </motion.p>

          <motion.div
            className="mt-12 text-center md:mt-16"
            variants={fadeInUp}
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
        </motion.div>
      </div>
    </section>
  );
}
