import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../../config/site.config";
import { intro } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Intro() {
  const reduce = useReducedMotion();

  return (
    <section
      id="estrategia"
      className="scroll-mt-28 bg-surface-cream py-16 md:py-24"
      aria-labelledby="intro-title"
    >
      <div className="container">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div className="order-2 lg:order-1" variants={fadeInUp}>
            <img
              src={intro.illustration.src}
              alt={intro.illustration.alt}
              width={900}
              height={700}
              className="mx-auto w-full max-w-lg rounded-2xl object-cover lg:mx-0"
              loading="lazy"
            />
          </motion.div>
          <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
            <h2
              id="intro-title"
              className="mb-6 text-3xl text-black sm:text-4xl"
            >
              {intro.title}
            </h2>
            <p className="text-lg leading-relaxed text-black/90 sm:text-xl">
              {intro.body}
            </p>
            {intro.cta ? (
              <motion.a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark sm:text-base"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                {intro.cta.label}
              </motion.a>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
