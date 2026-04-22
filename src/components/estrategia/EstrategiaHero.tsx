import { motion, useReducedMotion } from "framer-motion";
import { estrategiaHero } from "../../data/estrategiaPage";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function EstrategiaHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-hero-green text-white"
      aria-labelledby="estrategia-hero-title"
    >
      <div className="sm:mx-0 sm:px-0 pt-28 md:pt-20">
        <motion.div
          className="grid items-center gap-2 lg:grid-cols-8 lg:gap-12 xl:gap-16"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="order-2 col-span-1 lg:col-span-5 lg:order-1"
            variants={fadeInUp}
          >
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={estrategiaHero.image.src}
                alt={estrategiaHero.image.alt}
                className="h-auto w-full object-cover transform translate-y-[2rem] sm:translate-y-[8rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
          <motion.div
            className="container lg:px-0 lg:mx-0  order-1 lg:col-span-2 lg:order-2 "
            variants={fadeInUp}
          >
            <h1
              id="estrategia-hero-title"
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]"
            >
              {estrategiaHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
              {estrategiaHero.body}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
