import { motion, useReducedMotion } from "framer-motion";
import { familyNeuro } from "../../data/familiesHome";
import { FaArrowRight } from "react-icons/fa";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function NeuroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#FDEFE7] py-16 md:py-20" aria-labelledby="neuro-title">
      <div className="container">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          initial={false}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <h2
              id="neuro-title"
              className="mb-6 text-3xl font-bold text-black sm:text-4xl"
            >
              {familyNeuro.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-black/90">
              {familyNeuro.body}
            </p>
            <motion.a
              href="/nosotros"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-base font-medium text-white shadow-md transition hover:bg-primary-dark"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Comunícate con una asesora
              <FaArrowRight className="ml-2 text-white" />
            </motion.a>
          </motion.div>

          <motion.img
            variants={fadeInUp}
            src={familyNeuro.illustration.src}
            alt={familyNeuro.illustration.alt}
            width={900}
            height={700}
            className="w-full rounded-[1.75rem] object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
