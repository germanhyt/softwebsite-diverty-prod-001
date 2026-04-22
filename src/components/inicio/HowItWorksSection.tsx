import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import type { HowStep } from "../../data/familiesHome";
import { howItWorks } from "../../data/familiesHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

/** Colores de caja de contenido alineados al prototipo */
const BOX_BY_PALETTE: Record<
  string,
  { box: string; number: string; body: string }
> = {
  sky: {
    box: "bg-white ring-1 ring-slate-200/90",
    number: "text-primary",
    body: "text-footer",
  },
  green: {
    box: "bg-emerald-500",
    number: "text-slate-900",
    body: "text-slate-900",
  },
  orange: {
    box: "bg-accent-orange",
    number: "text-slate-900",
    body: "text-slate-900",
  },
  blue: {
    box: "bg-primary",
    number: "text-white",
    body: "text-white",
  },
  aqua: {
    box: "bg-rose-200",
    number: "text-slate-900",
    body: "text-slate-900",
  },
};

/** Swiper solo bajo `sm`: misma base; el área de imagen crece con `flex-1` para llenar el alto del slide. */
const SWIPER_CARD_FIXED = {
  content: "min-h-[8rem]",
} as const;

/**
 * Desktop (rejilla sm+): escalera — la fila toma la altura del paso más alto;
 * `items-end` alinea al borde inferior (barra azul).
 */
const STEP_IMAGE_MIN = [
  "min-h-[9rem] sm:min-h-[10rem] md:min-h-[10.5rem] lg:min-h-[11rem] xl:min-h-[11.5rem]",
  "min-h-[10rem] sm:min-h-[11rem] md:min-h-[12rem] lg:min-h-[12.5rem] xl:min-h-[13rem]",
  "min-h-[11rem] sm:min-h-[12rem] md:min-h-[13rem] lg:min-h-[14rem] xl:min-h-[14.5rem]",
  "min-h-[12rem] sm:min-h-[13rem] md:min-h-[14rem] lg:min-h-[15.5rem] xl:min-h-[16rem]",
  "min-h-[13rem] sm:min-h-[14rem] md:min-h-[15rem] lg:min-h-[17rem] xl:min-h-[18rem]",
] as const;

const STEP_CONTENT_MIN = [
  "min-h-[10.5rem] sm:min-h-[11.5rem] md:min-h-[12rem] lg:min-h-[12.5rem] xl:min-h-[13rem]",
  "min-h-[11.25rem] sm:min-h-[12.5rem] md:min-h-[13rem] lg:min-h-[14rem] xl:min-h-[14.5rem]",
  "min-h-[12rem] sm:min-h-[13.5rem] md:min-h-[14rem] lg:min-h-[15.5rem] xl:min-h-[16rem]",
  "min-h-[12.75rem] sm:min-h-[14.5rem] md:min-h-[15rem] lg:min-h-[17rem] xl:min-h-[17.5rem]",
  "min-h-[13.5rem] sm:min-h-[15.5rem] md:min-h-[16rem] lg:min-h-[18.5rem] xl:min-h-[19rem]",
] as const;

const STEP_ARTICLE_MIN = [  
  "min-h-[22rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[28rem] xl:min-h-[28rem]",
  "min-h-[25rem] sm:min-h-[28rem] md:min-h-[28rem] lg:min-h-[28rem] xl:min-h-[28rem]",
  "min-h-[28rem] sm:min-h-[32rem] md:min-h-[28rem] lg:min-h-[28rem] xl:min-h-[28rem]",
  "min-h-[31rem] sm:min-h-[36rem] md:min-h-[28rem] lg:min-h-[28rem] xl:min-h-[28rem]",
  "min-h-[34rem] sm:min-h-[40rem] md:min-h-[28rem] lg:min-h-[28rem] xl:min-h-[28rem]",
] as const;

function HowStepCard({
  step,
  index,
  layout,
}: {
  step: HowStep;
  index: number;
  layout: "grid" | "swiper";
}) {
  const styles = BOX_BY_PALETTE[step.palette] ?? BOX_BY_PALETTE.blue;
  const n = index + 1;
  const isSwiper = layout === "swiper";

  const imgMin = isSwiper
    ? "min-h-[17.5rem] flex-1 basis-0"
    : STEP_IMAGE_MIN[index] ?? STEP_IMAGE_MIN[STEP_IMAGE_MIN.length - 1];
  const contentMin = isSwiper
    ? SWIPER_CARD_FIXED.content
    : STEP_CONTENT_MIN[index] ?? STEP_CONTENT_MIN[STEP_CONTENT_MIN.length - 1];
  const articleMin = isSwiper
    ? ""
    : STEP_ARTICLE_MIN[index] ?? STEP_ARTICLE_MIN[STEP_ARTICLE_MIN.length - 1];

  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-[1.25rem] ${
        isSwiper ? "h-full min-h-0 flex-1" : ""
      } ${articleMin} ${layout === "grid" ? "h-full justify-end" : isSwiper ? "" : "justify-end"}`}
    >
      <div
        className={
          isSwiper
            ? "mx-auto flex h-full min-h-0 w-full max-w-md flex-1 flex-col overflow-hidden rounded-[1.25rem]"
            : "flex w-full flex-col overflow-hidden rounded-[1.25rem]"
        }
      >
        <div
          className={`relative w-full overflow-hidden rounded-t-[1.25rem] bg-primary/5 ${
            isSwiper ? imgMin : `shrink-0 ${imgMin}`
          }`}
        >
          <img
            src={step.image.src}
            alt={step.image.alt}
            className="h-full min-h-0 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          className={`flex flex-col rounded-b-[1.25rem] px-4 py-4 sm:px-5 sm:py-5 ${contentMin} ${styles.box} ${
            isSwiper ? "shrink-0" : ""
          }`}
        >
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-2">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span
                className={`shrink-0 text-3xl font-bold leading-none sm:text-4xl ${styles.number}`}
                aria-hidden
              >
                {n}
              </span>
              <p
                className={`text-left text-sm font-medium leading-snug sm:text-base ${styles.body}`}
              >
                {step.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="h-7 w-7 text-primary sm:h-8 sm:w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export default function HowItWorksSection() {
  const reduce = useReducedMotion();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const steps = howItWorks;

  useEffect(() => {
    if (!swiper) return;
    swiper.update();
    const t = window.setTimeout(() => swiper.update(), 150);
    const onResize = () => swiper.update();
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [swiper]);

  return (
    <section
      className="bg-[#FDF2E9] pb-0 pt-8 md:pt-10"
      aria-labelledby="how-title"
    >
      <div className="container pb-12 md:pb-16">
        <motion.h2
          id="how-title"
          className="mb-8 text-left text-3xl font-bold text-slate-900 sm:mb-10 sm:text-4xl"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          ¿Cómo funciona?
        </motion.h2>

        <motion.div
          className="hidden items-end gap-3 sm:grid sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {steps.map((step, index) => (
            <motion.div key={step.key} className="h-full" variants={fadeInUp}>
              <HowStepCard step={step} index={index} layout="grid" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative w-full sm:hidden"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.5 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            centeredSlides={true}
            watchOverflow={true}
            observer={true}
            observeParents={true}
            resizeObserver={true}
            speed={400}
            onSwiper={setSwiper}
            className="how-it-works-swiper w-full overflow-hidden py-1 [&_.swiper-wrapper]:!items-stretch"
          >
            {steps.map((step, index) => (
              <SwiperSlide
                key={step.key}
                className="box-border !flex h-auto min-h-0 !self-stretch"
              >
                <div className="flex h-full min-h-0 w-full max-w-md flex-1 flex-col pb-1">
                  <HowStepCard step={step} index={index} layout="swiper" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-1.5 shadow-md ring-1 ring-slate-200/80 transition hover:bg-white"
            aria-label="Paso anterior"
            onClick={() => swiper?.slidePrev()}
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/95 p-1.5 shadow-md ring-1 ring-slate-200/80 transition hover:bg-white"
            aria-label="Paso siguiente"
            onClick={() => swiper?.slideNext()}
          >
            <ChevronIcon dir="right" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="h-2 w-full origin-left bg-primary md:h-2.5"
        aria-hidden
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={defaultViewport}
        transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
