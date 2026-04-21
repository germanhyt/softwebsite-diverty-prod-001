import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import type { HowStep } from "../../data/familiesHome";
import { howItWorks } from "../../data/familiesHome";

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
    number: "text-white",
    body: "text-white",
  },
  orange: {
    box: "bg-accent-orange",
    number: "text-white",
    body: "text-white",
  },
  blue: {
    box: "bg-primary",
    number: "text-white",
    body: "text-white",
  },
  aqua: {
    box: "bg-rose-200",
    number: "text-primary",
    body: "text-rose-950",
  },
};

/** Alto uniforme del bloque de información (texto + número) */
const CONTENT_BOX_HEIGHT =
  "min-h-[12.5rem] sm:min-h-[14rem] lg:min-h-[16rem] xl:min-h-[16rem]";

function HowStepCard({
  step,
  index,
}: {
  step: HowStep;
  index: number;
}) {
  const styles = BOX_BY_PALETTE[step.palette] ?? BOX_BY_PALETTE.blue;
  const n = index + 1;
  return (
    <article className="flex min-h-0 flex-col overflow-hidden rounded-[1.25rem] shadow-card">
      <div className="aspect-[4/5]  w-full shrink-0 overflow-hidden rounded-t-[1.25rem] bg-primary/5">
        <img
          src={step.image.src}
          alt={step.image.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        className={`flex flex-col rounded-b-[1.25rem] px-4 py-4 sm:px-5 sm:py-5 ${CONTENT_BOX_HEIGHT} ${styles.box}`}
      >
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
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
        <h2
          id="how-title"
          className="mb-8 text-left text-3xl font-bold text-slate-900 sm:mb-10 sm:text-4xl"
        >
          ¿Cómo funciona?
        </h2>

        {/* Desktop: rejilla 5 columnas */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <HowStepCard key={step.key} step={step} index={index} />
          ))}
        </div>

        {/* Móvil / tablet: Swiper + flechas */}
        <div className="relative w-full sm:hidden">
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
            className="how-it-works-swiper w-full overflow-hidden py-1"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={step.key} className="box-border !flex h-auto">
                <div className="w-full">
                  <HowStepCard step={step} index={index} />
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
        </div>
      </div>

      <div className="h-2 w-full bg-primary md:h-2.5" aria-hidden />
    </section>
  );
}
