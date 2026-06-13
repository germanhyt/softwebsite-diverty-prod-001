import { motion, useReducedMotion } from "framer-motion";
import {
  NOSOTROS_SECTION_BG_PEACH,
  type NosotrosSplitBlock,
} from "../../data/nosotrosPage";
import {
  defaultViewport,
  fadeInUp,
  slideInLeftSm,
  slideInRightSm,
  staggerLanding,
} from "../../lib/motion";

type Props = { block: NosotrosSplitBlock };

export default function SplitSection({ block }: Props) {
  const reduce = useReducedMotion();
  const { title, paragraphs, signature, signatureRole, image, imageLeft } =
    block;

  const textVariants = reduce
    ? fadeInUp
    : imageLeft
      ? slideInRightSm
      : slideInLeftSm;
  const imageVariants = reduce
    ? fadeInUp
    : imageLeft
      ? slideInLeftSm
      : slideInRightSm;

  const sectionBg = block.sectionBgClass ?? NOSOTROS_SECTION_BG_PEACH;

  return (
    <section
      className={`scroll-mt-28 py-14 md:py-20 ${sectionBg}`}
      aria-labelledby={`nosotros-${block.id}-title`}
    >
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className={[
              "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16",
              imageLeft
                ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                : "",
            ].join(" ")}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={defaultViewport}
            variants={staggerLanding}
          >
            <motion.div className="min-w-0" variants={textVariants}>
              <h2
                id={`nosotros-${block.id}-title`}
                className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
              >
                {title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-800 sm:text-[1.05rem]">
                {paragraphs.map((p, i) => (
                  <p key={`${block.id}-p-${i}`}>{p}</p>
                ))}
                {signature ? (
                  <div className="pt-3 text-neutral-900">
                    <p className="font-bold">{signature}</p>
                    {signatureRole ? (
                      <p className="mt-1 text-sm font-normal text-neutral-600">
                        {signatureRole}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </motion.div>
            <motion.div className="min-w-0" variants={imageVariants}>
              <div className="overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-black/[0.06]">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
