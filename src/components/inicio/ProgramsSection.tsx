import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import {
  programCategories,
  type ProgramItem,
} from "../../data/programsHome";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

/** Azul de sección y franja izquierda (~#1578C1) */
const SECTION_BLUE = "#1578C1";
const BORDER_ITEM_BLUE = "#0A518D";

function ProgramContent({
  item,
  index,
}: {
  item: ProgramItem;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const hasBenefits = Boolean(item.benefits?.length);

  const benefitsHeading =
    !hasBenefits
      ? null
      : item.benefitsSectionTitle === false
        ? null
        : typeof item.benefitsSectionTitle === "string"
          ? item.benefitsSectionTitle
          : "Beneficios";

  return (
    <div className="text-slate-900">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Programa {num}
      </div>
      <h3 className="mb-5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        {item.title}
      </h3>

      <div className="space-y-4">
        {item.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-slate-800 sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {item.listIntro ? (
        <p className="mt-5 text-base font-semibold leading-relaxed text-slate-800 sm:text-lg">
          {item.listIntro}
        </p>
      ) : null}

      {benefitsHeading ? (
        <p className="mb-3 mt-6 text-xs font-bold uppercase tracking-wide text-slate-500">
          {benefitsHeading}
        </p>
      ) : null}

      {item.benefits?.length ? (
        <ul className="mt-0 list-outside list-disc space-y-4 pl-5 text-base leading-relaxed text-slate-800 marker:text-slate-800 sm:text-lg">
          {item.benefits.map((b, i) => (
            <li key={`${b.label}-${i}`}>
              <span className="font-bold text-slate-900">{b.label}</span>
              {b.text ? (
                <>
                  {": "}
                  <span className="font-normal">{b.text}</span>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}

      {item.simpleBullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-800 sm:text-lg">
          {item.simpleBullets.map((line) => (
            <li key={line} className="pl-0.5 marker:text-slate-800">
              {line}
            </li>
          ))}
        </ul>
      ) : null}

      {item.idealFor ? (
        <p className="mt-8 border-t border-slate-200 pt-6 text-base font-semibold leading-relaxed text-slate-700 sm:text-lg">
          {item.idealFor}
        </p>
      ) : null}
    </div>
  );
}

export default function ProgramsSection() {
  const reduce = useReducedMotion();
  const [categoryId, setCategoryId] = useState(programCategories[0]?.id ?? "");
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [nav, setNav] = useState({ isBeginning: true, isEnd: false });

  const active = programCategories.find((c) => c.id === categoryId) ?? programCategories[0];
  const items = active?.items ?? [];

  const syncNav = (s: SwiperType) => {
    setNav({ isBeginning: s.isBeginning, isEnd: s.isEnd });
  };

  useEffect(() => {
    if (!swiper) return;
    swiper.update();
    syncNav(swiper);
    const t = window.setTimeout(() => {
      swiper.update();
      syncNav(swiper);
    }, 120);
    const onResize = () => {
      swiper.update();
      syncNav(swiper);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [swiper, items.length]);

  if (!active) return null;

  const tabBtnInactive =
    "rounded-full border-2 border-primary bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-50 sm:px-7 sm:text-base";
  const tabBtnActive =
    "rounded-full bg-accent-orange px-5 py-2.5 text-sm font-bold text-white shadow-md sm:px-7 sm:text-base";

  const cardBodyPad = items.length > 1 ? "px-6 py-8 pr-14 sm:px-9 sm:py-10 sm:pr-20" : "px-6 py-8 sm:px-9 sm:py-10";

  return (
    <section
      id="servicios"
      style={{ backgroundColor: SECTION_BLUE }}
      className="scroll-mt-28 text-white"
      aria-labelledby="programs-title"
    >
      <div className="container py-12 md:py-16 lg:py-20">
        <motion.h2
          id="programs-title"
          className="mb-8 text-left text-3xl font-bold text-white sm:mb-10 sm:text-4xl lg:text-[2.5rem]"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Nuestros programas
        </motion.h2>

        <motion.div
          id={`programs-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`programs-tab-${active.id}`}
          className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-8"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          <motion.div
            className="col-span-7 order-1 flex h-full min-h-0 flex-col gap-5 lg:order-2 lg:min-h-[28rem] lg:gap-6"
            variants={fadeInUp}
          >
            <div
              className="flex flex-wrap gap-3"
              role="tablist"
              aria-label="Categorías de programas"
            >
              {programCategories.map((cat) => {
                const isOn = cat.id === active.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isOn}
                    id={`programs-tab-${cat.id}`}
                    aria-controls={`programs-panel-${cat.id}`}
                    onClick={() => setCategoryId(cat.id)}
                    className={isOn ? tabBtnActive : tabBtnInactive}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <div className="relative flex min-h-0 flex-1 flex-col lg:min-h-0">
              <Swiper
                key={active.id}
                slidesPerView={1}
                spaceBetween={0}
                autoHeight
                watchOverflow={true}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                breakpoints={{
                  1024: {
                    autoHeight: false,
                  },
                }}
                onSwiper={(s) => {
                  setSwiper(s);
                  syncNav(s);
                }}
                onSlideChange={syncNav}
                onBreakpoint={(s) => {
                  s.update();
                  syncNav(s);
                }}
                className="programs-home-swiper flex w-full flex-1 flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card lg:h-full lg:min-h-0"
              >
                {items.map((item, index) => (
                  <SwiperSlide key={item.id} className="!h-auto">
                    <div className="programs-slide-inner flex min-h-0 flex-col lg:min-h-full">
                      <div className="program-card flex min-h-0 w-full flex-1 flex-row lg:min-h-[28rem]">
                        <div
                          className="shrink-0 self-stretch w-2 sm:w-2.5"
                          style={{ backgroundColor: BORDER_ITEM_BLUE }}
                          aria-hidden
                        />
                        <div className={`min-w-0 flex-1 ${cardBodyPad}`}>
                          <ProgramContent item={item} index={index} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {items.length > 1 && !nav.isBeginning ? (
                <button
                  type="button"
                  onClick={() => swiper?.slidePrev()}
                  className="absolute -left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-md transition hover:bg-slate-50 sm:left-4 sm:h-12 sm:w-12 lg:left-2 lg:-translate-x-1/2"
                  aria-label="Programa anterior"
                >
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              ) : null}
              {items.length > 1 && !nav.isEnd ? (
                <button
                  type="button"
                  onClick={() => swiper?.slideNext()}
                  className="absolute -right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-md transition hover:bg-slate-50 sm:right-4 sm:h-12 sm:w-12 lg:right-0 lg:translate-x-1/2"
                  aria-label="Siguiente programa"
                >
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className="col-span-5 order-2 flex min-h-0 flex-col overflow-hidden rounded-[1.35rem] shadow-xl ring-1 ring-white/20 lg:order-1 lg:min-h-[28rem] lg:flex-1"
            variants={fadeInUp}
          >
            <img
              src={active.heroImage.src}
              alt={active.heroImage.alt}
              width={720}
              height={900}
              className="h-full w-full object-cover "
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
