import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../../config/site.config";
import { trainingHero } from "../../data/estrategiaPage";
import {
  defaultViewport,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerLanding,
} from "../../lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const imgVariants = reduce ? fadeIn : slideInLeft;
  const copyVariants = reduce ? fadeIn : slideInRight;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary pt-6 text-white"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 mt-20 overflow-hidden sm:max-h-[calc(100vh+50rem)] lg:mt-0 4xl:container">
        <motion.div
          className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 lg:gap-x-12"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerLanding}
        >
          <motion.div
            className="relative order-2 col-span-2 flex justify-center lg:order-1 lg:justify-start"
            variants={imgVariants}
          >
            <img
              src={trainingHero.image.src}
              alt={trainingHero.image.alt}
              width={1200}
              height={1000}
              className="relative z-[1] h-full w-full translate-y-[5%] object-contain drop-shadow-xl lg:mt-10 xl:-translate-x-[2%] 2xl:translate-y-[2%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>

          <motion.div
            className="relative order-1 sm:mr-10 lg:absolute lg:right-[0rem] lg:top-[8rem] xl:right-[2rem] xl:top-[10rem] 2xl:right-[2rem] 2xl:top-[10rem] 3xl:right-[8rem] 3xl:top-[14rem]"
            variants={copyVariants}
          >
            <div className="container sm:max-w-sm md:max-w-md lg:mx-0 lg:max-w-lg lg:px-0 xl:max-w-xl 2xl:max-w-2xl">
              <h1
                id="hero-title"
                className="relative mb-5 text-[2rem] font-bold sm:text-4xl lg:text-[2.1rem] xl:text-[3rem] 2xl:text-[3.35rem] leading-relaxed xl:leading-[1]"
              >
                {siteConfig.tagline}
              </h1>
              <p className="relative text-base font-normal leading-relaxed text-white/95 sm:text-lg lg:text-base xl:text-lg">
                Únete a profesionales que ya aplican lo aprendido en Diverty: sesiones
                en vivo, práctica guiada y certificación con respaldo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
