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
      <div className="sm:mx-0 sm:px-0 pt-28 md:pt-32 lg:pt-36 xl:pt-44">
        <motion.div
          className="grid items-center gap-2 lg:grid-cols-8 lg:gap-12 xl:gap-16 overflow-hidden"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="order-2 col-span-1 lg:col-span-4 xl:col-span-5 lg:order-1"
            variants={fadeInUp}
          >
            <div className=" rounded-[1.25rem]">
              <img
                src={estrategiaHero.image.src}
                alt={estrategiaHero.image.alt}
                className="h-auto w-full object-cover transform translate-y-[2rem] sm:translate-y-[2rem] lg:translate-y-[1rem] 3xl:translate-y-[2rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
          <motion.div
            className="container lg:pr-4 lg:pl-0 lg:mx-0  order-1 lg:col-span-4 xl:col-span-3 lg:order-2  lg:max-w-xl"
            variants={fadeInUp}
          >
            <h1
              id="estrategia-hero-title"
              className="text-3xl font-bold leading-tight sm:text-3xl xl:text-[2.2rem] 3xl:text-[2.65rem] lg:leading-[1.12]"
            >
              {estrategiaHero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/95 sm:text-sm lg:text-lg 3xl:leading-[1.2]">
              {estrategiaHero.body}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
