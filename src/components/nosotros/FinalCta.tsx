import { motion, useReducedMotion } from "framer-motion";
import CtaAgenda from "../inicio/CtaAgenda";
import { siteConfig } from "../../config/site.config";
import { finalCta } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-surface-cream pb-20 pt-4 text-center md:pb-24 mt-16"
      aria-labelledby="final-cta-title"
    >
      <div className="container max-w-4xl">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.h2
            id="final-cta-title"
            className="mb-4 text-3xl text-black sm:text-4xl"
            variants={fadeInUp}
          >
            {finalCta.title}
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-black/85"
            variants={fadeInUp}
          >
            {finalCta.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <CtaAgenda
              email={siteConfig.contact.email}
              phone={siteConfig.contact.phone}
              label={finalCta.button}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
