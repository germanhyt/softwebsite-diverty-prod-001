import { motion, useReducedMotion } from "framer-motion";
import { methodology } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Methodology() {
  const reduce = useReducedMotion();

  return (
    <section className="container" aria-labelledby="method-title">
      <motion.div
        className="rounded-[1.75rem] bg-[#FFE1CF] py-16 md:py-24"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={defaultViewport}
        variants={staggerChildren}
      >
        <motion.h2
          id="method-title"
          className="mb-6 text-center text-3xl font-bold text-black sm:text-4xl"
          variants={fadeInUp}
        >
          {methodology.title}
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-base text-black/90"
          variants={fadeInUp}
        >
          Nuestros programas se desarrollan en modalidad semipresencial, combinando
          teoría aplicada con experiencias prácticas.
        </motion.p>

        <motion.div
          className="mx-auto grid max-w-64 gap-10 md:max-w-2xl md:grid-cols-2 md:gap-12 lg:max-w-4xl 3xl:max-w-5xl"
          variants={staggerChildren}
        >
          {methodology.columns.map((col) => (
            <motion.div
              key={col.title}
              className="flex flex-col overflow-hidden rounded-[1.35rem] shadow-card ring-1 ring-primary/10"
              variants={fadeInUp}
            >
              <div className="aspect-[16/11] w-full overflow-hidden bg-primary/5">
                <img
                  src={col.image.src}
                  alt={col.image.alt}
                  width={800}
                  height={550}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="min-h-[15rem] rounded-b-[1.35rem] bg-accent-orange px-6 py-5 text-white sm:px-8 sm:py-6 lg:min-h-[12rem]">
                <h3 className="text-lg font-bold sm:text-xl">{col.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/95 sm:text-base">
                  {col.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
