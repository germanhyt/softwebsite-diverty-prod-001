import { motion, useReducedMotion } from "framer-motion";
import { certification } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Certification() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#FDEFE7] py-16 md:py-24" aria-labelledby="cert-title">
      <div className="container max-w-5xl md:max-w-[96rem]">
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="relative z-10 hidden w-full sm:flex sm:w-[45%] lg:w-[40%]"
            variants={fadeInUp}
          >
            <img
              src={certification.badge.src}
              alt={certification.badge.alt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-xl sm:aspect-auto sm:h-full lg:rounded-[3.5rem]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            className="relative my-6 flex w-full flex-col justify-center gap-6 rounded-[1.5rem] bg-[#2E8B57] px-8 py-4 text-white shadow-lg sm:-ml-12 sm:flex-1 sm:rounded-l-none sm:rounded-r-[3.5rem] sm:pl-20 sm:pr-16 lg:pl-24"
            variants={fadeInUp}
          >
            <div className="relative z-10 flex w-full sm:hidden sm:w-[45%] lg:w-[40%]">
              <img
                src={certification.badge.src}
                alt={certification.badge.alt}
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-xl sm:aspect-auto sm:h-full lg:rounded-[3.5rem]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2
                id="cert-title"
                className="mb-3 text-2xl font-bold leading-tight sm:text-xl lg:text-2xl"
              >
                {certification.title}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-white/95 lg:text-lg">
                {certification.body}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
