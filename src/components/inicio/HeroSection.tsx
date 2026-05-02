import { motion, useReducedMotion } from "framer-motion";
import { familyHero } from "../../data/familiesHome";
import {
  defaultViewport,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerLanding,
} from "../../lib/motion";

/** Naranja del mock del hero (distinto al accent-orange de cards). */
const HERO_ORANGE = "#FF8C42";

export default function HeroSection() {
  const reduce = useReducedMotion();
  const imgVariants = reduce ? fadeIn : slideInLeft;
  const copyVariants = reduce ? fadeIn : slideInRight;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-6 text-white "
      style={{ backgroundColor: HERO_ORANGE }}
      aria-labelledby="hero-title"
    >
      <div className="sm:max-h-[calc(100vh+50rem)] 4xl:container relative z-10 mt-20 overflow-hidden lg:mt-0">
        <motion.div
          className="grid grid-cols-1 gap-2 lg:grid-cols-5 lg:gap-4 lg:gap-x-4"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerLanding}
        >
          <motion.div
            className="relative order-2 col-span-3 flex justify-center lg:order-1 lg:justify-start "
            variants={imgVariants}
          >
            <img
              src={familyHero.image.src}
              alt={familyHero.image.alt}
              className="relative z-[1] sm:w-[35rem] xl:w-[40rem] 2xl:w-[45rem] 3xl:w-[65rem] 4xl:w-full translate-y-[5%] 2xl:translate-y-[2%] xl:-translate-x-[2%] object-contain drop-shadow-xl lg:mt-16"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          <motion.div
            className="relative col-span-3 lg:absolute lg:right-[0rem] lg:top-[12rem] xl:right-[6rem] xl:top-[12rem] 2xl:right-[8rem] 2xl:top-[16rem] 3xl:right-[16rem] 3xl:top-[16rem] sm:mr-10"
            variants={copyVariants}
          >
            <div className="container lg:px-0 lg:mx-0  sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-2xl ">
              <h1
                id="hero-title"
                className="relative mb-5 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-4xl xl:text-5xl xl:text-[3.35rem] 3xl:text-6xl"
              >
                {familyHero.title}
              </h1>
              <p className="relative text-base font-normal leading-relaxed text-white/95 sm:text-lg 3xl:text-xl">
                {familyHero.body}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
