import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../../config/site.config";
import { trainingHero } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="bg-primary pt-28 text-white md:pt-36"
      aria-labelledby="hero-title"
    >
      <div>
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="relative order-2 flex justify-center lg:order-1 lg:justify-start"
            variants={fadeInUp}
          >
            <img
              src={trainingHero.image.src}
              alt={trainingHero.image.alt}
              width={1200}
              height={1000}
              className="relative z-[1] w-full max-w-xl object-contain drop-shadow-lg lg:max-w-none"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
          <motion.div
            className="container order-1 lg:mb-20 max-w-xl lg:mx-0 lg:max-w-lg lg:px-0 xl:max-w-xl 2xl:max-w-2xl lg:order-2"
            variants={fadeInUp}
          >
            <h1
              id="hero-title"
              className="mb-6 text-3xl font-bold leading-tight sm:text-3xl lg:text-4xl"
            >
              {siteConfig.tagline}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Únete a profesionales que ya aplican lo aprendido en Diverty: sesiones
              en vivo, práctica guiada y certificación con respaldo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
