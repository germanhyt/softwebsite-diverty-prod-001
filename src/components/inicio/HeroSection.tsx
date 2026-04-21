import { motion, useReducedMotion } from "framer-motion";
import { familyHero } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

/** Naranja del mock del hero (distinto al accent-orange de cards). */
const HERO_ORANGE = "#FF8C42";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 text-white "
      style={{ backgroundColor: HERO_ORANGE }}
      aria-labelledby="hero-title"
    >
      <div className="4xl:container relative z-10 mt-20 overflow-hidden lg:mt-0">
        <motion.div
          className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 lg:gap-x-12"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="relative order-2 col-span-2 flex justify-center lg:order-1 lg:justify-start"
            variants={fadeInUp}
          >
            <img
              src={familyHero.image.src}
              alt={familyHero.image.alt}
              className="relative z-[1] h-full w-full translate-y-[5%] -translate-x-[2%] object-contain drop-shadow-xl lg:mt-10"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            className="relative lg:absolute lg:right-[0rem] lg:top-[8rem] xl:right-[2rem] xl:top-[12rem] 2xl:right-[8rem] 2xl:top-[10rem] sm:mr-10"
            variants={fadeInUp}
          >
            <div className="container lg:px-0 lg:mx-0  sm:max-w-sm md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <h1
                id="hero-title"
                className="relative mb-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-4xl xl:text-5xl xl:text-[3.35rem]"
              >
                {familyHero.title}
              </h1>
              <p className="relative text-base font-normal leading-relaxed text-white/95 sm:text-lg">
                {familyHero.body}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
