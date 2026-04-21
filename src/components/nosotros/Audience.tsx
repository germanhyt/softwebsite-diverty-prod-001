import { motion, useReducedMotion } from "framer-motion";
import { audience } from "../../data/nosotrosTraining";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

const fullBleed =
  "usePhotoBackground" in audience && audience.usePhotoBackground === true;

export default function Audience() {
  const reduce = useReducedMotion();

  const content = (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={defaultViewport}
      variants={staggerChildren}
    >
      {fullBleed ? (
        <div className="container">
          <div className="rounded-[1.35rem] sm:rounded-[1.75rem]">
            <div className="relative md:min-h-[26rem] md:overflow-hidden md:rounded-[1.75rem] lg:min-h-[28rem]">
              <motion.div
                className="relative h-52 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 md:absolute md:inset-0 md:h-full md:min-h-[26rem] md:rounded-2xl lg:min-h-[28rem]"
                variants={fadeInUp}
              >
                <img
                  src={audience.photo.src}
                  alt={audience.photo.alt}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <div className="relative z-[1] -mt-9 px-4 pb-8 pt-0 sm:-mt-10 md:mt-0 md:flex md:min-h-[26rem] md:items-center md:px-8 md:pb-10 md:pt-10 lg:min-h-[28rem] lg:px-10">
                <motion.div
                  className="w-full rounded-[1.25rem] border-b-[6px] border-l-[6px] border-[#b94808] bg-accent-orange p-6 text-white shadow-[6px_10px_0_0_rgba(160,55,12,0.38)] sm:p-8 md:max-w-[min(42%,26rem)] md:p-9"
                  variants={fadeInUp}
                >
                  <h2
                    id="audience-title"
                    className="mb-5 text-xl font-bold leading-snug sm:text-2xl md:text-[1.35rem] md:leading-tight lg:text-[1.45rem]"
                  >
                    {audience.highlight}
                  </h2>
                  <ul className="list-outside list-disc space-y-3 pl-4 text-sm leading-relaxed marker:text-white sm:text-base sm:leading-relaxed md:space-y-3.5">
                    {audience.roles.map((r, i) => (
                      <li key={`audience-${i}`} className="pl-1">
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-surface-cream">
          <div className="container">
            <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14">
              <motion.div
                className="order-2 flex flex-col justify-center rounded-2xl border-b-[6px] border-l-[6px] border-[#b94808] bg-accent-orange p-8 text-white shadow-[6px_10px_0_0_rgba(160,55,12,0.38)] sm:p-10 lg:order-1"
                variants={fadeInUp}
              >
                <h2
                  id="audience-title"
                  className="mb-4 text-2xl font-bold leading-snug sm:text-3xl"
                >
                  {audience.highlight}
                </h2>
                <ul className="list-outside list-disc space-y-3 pl-4 text-base leading-relaxed marker:text-white sm:text-lg">
                  {audience.roles.map((r, i) => (
                    <li key={`audience-alt-${i}`} className="pl-1">
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="order-1 lg:order-2" variants={fadeInUp}>
                <img
                  src={audience.photo.src}
                  alt={audience.photo.alt}
                  width={1000}
                  height={750}
                  className="h-full min-h-[220px] w-full rounded-2xl object-cover shadow-card sm:min-h-[280px] lg:min-h-[360px]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );

  return (
    <section
      id="publico"
      className="scroll-mt-28 bg-surface-cream py-10 md:py-14"
      aria-labelledby="audience-title"
    >
      {content}
    </section>
  );
}
