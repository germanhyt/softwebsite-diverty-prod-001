import { motion, useReducedMotion } from "framer-motion";
import { nosotrosHero } from "../../data/nosotrosPage";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-hero-green text-white"
      aria-labelledby="nosotros-hero-title"
    >
      <div className=" overflow-hidden sm:max-h-[calc(100vh+50rem)] sm:mx-0 sm:px-0 pt-28 md:pt-32 lg:pt-44 xl:pt-56">
        <motion.div
          className=" grid items-center gap-8 lg:grid-cols-12 lg:gap-2 xl:gap-8 overflow-hidden  4xl:h-auto"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="order-2 col-span-1 lg:col-span-8 2xl:col-span-9 lg:order-1"
            variants={fadeInUp}
          >
            <div className=" rounded-[1.25rem]">
              <img
                src={nosotrosHero.image.src}
                alt={nosotrosHero.image.alt}
                className="h-auto w-full object-cover transform  sm:translate-y-[2rem] lg:translate-y-[1rem] 3xl:translate-y-[2rem]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
          <motion.div
            className="container sm:pr-4 sm:pl-0 lg:mx-0  order-1 lg:col-span-4  2xl:col-span-3 lg:order-2  lg:max-w-lg"
            variants={fadeInUp}
          >
            <h1
              id="nosotros-hero-title"
              className="text-3xl font-bold leading-tight sm:text-3xl xl:text-[2.2rem] 3xl:text-[2.65rem] lg:leading-[1.12]"
            >
              {nosotrosHero.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/95 sm:text-sm lg:text-sm xl:text-base 2xl:text-lg  3xl:leading-[1.2] lg:max-w-[20rem]">
              {nosotrosHero.body}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
