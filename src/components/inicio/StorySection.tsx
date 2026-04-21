import { motion, useReducedMotion } from "framer-motion";
import { ourStory, brandPillars } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function StorySection() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="story-title">
      <div className="container rounded-[1.75rem] bg-surface-peach py-16 md:py-24">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div className="relative" variants={fadeInUp}>
            <h2
              id="story-title"
              className="mb-6 text-3xl font-bold text-black sm:text-4xl"
            >
              {ourStory.title}
            </h2>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-black/90 lg:max-w-2xl">
              <p>{ourStory.intro}</p>
              <p>{ourStory.lead}</p>
            </div>
            <img
              src={ourStory.decorImage.src}
              alt=""
              className="pointer-events-none mt-2 hidden select-none lg:block"
              loading="lazy"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            variants={staggerChildren}
          >
            {brandPillars.map((p) => {
              const baseClass =
                "block rounded-[1.35rem] p-6 shadow-card transition sm:p-8";
              const colorClass =
                p.tone === "orange"
                  ? "bg-accent-orange text-white hover:opacity-95"
                  : "bg-primary text-white hover:bg-primary-dark";

              const inner = (
                <>
                  <h3 className="mb-2 text-xl font-bold">{p.name}</h3>
                  <p className="leading-relaxed text-white/95">{p.text}</p>
                </>
              );

              const card = p.href ? (
                <motion.a
                  key={p.name}
                  href={p.href}
                  className={`${baseClass} ${colorClass}`}
                  variants={fadeInUp}
                  whileHover={reduce ? undefined : { y: -2 }}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={p.name}
                  className={`${baseClass} ${colorClass}`}
                  variants={fadeInUp}
                >
                  {inner}
                </motion.div>
              );

              return card;
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
