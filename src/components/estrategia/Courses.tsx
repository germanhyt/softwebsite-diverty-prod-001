import { motion, useReducedMotion } from "framer-motion";
import CourseTabs from "../inicio/CourseTabs";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Courses() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cursos"
      className="scroll-mt-28 bg-primary py-14 text-white md:py-20"
      aria-labelledby="courses-title"
    >
      <div className="container">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.h2
            id="courses-title"
            className="mb-3 text-left text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl"
            variants={fadeInUp}
          >
            Cursos de capacitación
          </motion.h2>
          <motion.p
            className="mb-10 max-w-2xl text-left text-sm leading-relaxed text-white/90 sm:mb-12 sm:text-base"
            variants={fadeInUp}
          >
            Ocho módulos para fortalecer tu práctica con enfoque Montessori y
            evidencia actual.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <CourseTabs variant="sidebar" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
