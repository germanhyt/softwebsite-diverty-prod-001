import { motion, useReducedMotion } from "framer-motion";
import TestimonialsSwiper from "../inicio/TestimonialsSwiper";
import { testimonials } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp } from "../../lib/motion";

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="testimonios"
      className="mt-20 scroll-mt-28 bg-surface-cream pb-16 pt-4 md:pb-24"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <motion.h2
          id="testimonials-title"
          className="mb-10 text-center text-3xl text-black sm:mb-12 sm:text-4xl"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Testimonios de profesionales
        </motion.h2>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.08 }}
        >
          <TestimonialsSwiper items={testimonials} />
        </motion.div>
      </div>
    </section>
  );
}
