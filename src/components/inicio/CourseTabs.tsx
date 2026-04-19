import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import type { CourseTab } from "../../data/estrategia";
import { trainingCourses as sidebarCourses } from "../../data/trainingCourses";

type Variant = "sidebar" | "families";

type Props = {
  /** En `sidebar` no se usa: los datos viven en el bundle del cliente (`trainingCourses.ts`). */
  courses?: CourseTab[];
  variant?: Variant;
  /** Id del tab inicial (p. ej. `lenguaje` en la home de familias). */
  defaultTabId?: string;
};

export default function CourseTabs({ courses: coursesProp, variant = "sidebar", defaultTabId }: Props) {
  const courses = useMemo<CourseTab[]>(
    () => (variant === "sidebar" ? sidebarCourses : (coursesProp ?? [])),
    [variant, coursesProp],
  );

  const initialId =
    (defaultTabId && courses.some((c) => c.id === defaultTabId) ? defaultTabId : null) ?? courses[0]?.id ?? "";
  const [activeId, setActiveId] = useState(initialId);
  const active = courses.find((c) => c.id === activeId) ?? courses[0];

  const goNext = useCallback(() => {
    if (!courses.length) return;
    const i = courses.findIndex((c) => c.id === activeId);
    const next = courses[(i + 1) % courses.length];
    setActiveId(next.id);
  }, [courses, activeId]);

  if (!active) return null;

  if (variant === "families") {
    return (
      <div className="relative">
        <div className="mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Programas para familias">
          {courses.map((c) => {
            const isOn = c.id === active.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isOn}
                aria-controls={`panel-${c.id}`}
                id={`tab-${c.id}`}
                onClick={() => setActiveId(c.id)}
                className={
                  isOn
                    ? "rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-md sm:px-7 sm:text-base"
                    : "rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:px-7 sm:text-base"
                }
              >
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="relative lg:pr-14">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="relative overflow-hidden rounded-[1.75rem] bg-surface-card p-6 shadow-card sm:p-8 lg:p-10"
            >
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="order-2 lg:order-1">
                  <img
                    src={active.image.src}
                    alt={active.image.alt}
                    width={640}
                    height={480}
                    className="h-full max-h-[22rem] w-full rounded-[1.25rem] object-cover shadow-card lg:max-h-none"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 lg:order-2 lg:pl-2">
                  <h3 className="mb-4 text-2xl text-primary sm:text-3xl lg:text-4xl">{active.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-primary/90 sm:text-lg">{active.detail ?? ""}</p>
                  <div className="mb-2 text-sm font-extrabold uppercase tracking-wide text-primary/70">Beneficios</div>
                  <ul className="mb-2 max-w-xl list-inside list-disc space-y-2 text-primary/90">
                    {active.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/50 bg-white/15 p-3 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25 lg:flex"
            aria-label="Ver siguiente programa"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  const hasTrainingBenefits = Boolean(active.benefitParagraph);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,300px)_1fr]">
      <div className="flex flex-col gap-3" role="tablist" aria-label="Cursos de capacitación">
        {courses.map((c) => {
          const isActive = c.id === active.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${c.id}`}
              id={`tab-${c.id}`}
              onClick={() => setActiveId(c.id)}
              className={
                isActive
                  ? "rounded-2xl bg-accent-orange px-4 py-3 text-left text-sm font-extrabold text-white shadow-card sm:text-base"
                  : "rounded-2xl bg-white px-4 py-3 text-left text-sm font-extrabold text-primary shadow-sm ring-1 ring-primary/15 transition hover:ring-primary/40 sm:text-base"
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="relative min-w-0 pr-7 sm:pr-8">
        <div key={active.id} className="relative pb-[min(11rem,28vw)] sm:pb-24 md:pb-28 lg:pb-32">
          <div className="relative w-full">
            <article
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              className="relative min-h-[44rem]  md:min-h-[30rem]	 z-[1] rounded-2xl border-b-[6px] border-l-[6px] border-footer bg-white px-5 pb-8 pt-6 sm:rounded-[1.35rem] sm:px-6 sm:pb-10 sm:pt-8 sm:pr-12 lg:pr-14"
            >
              <div className="min-w-0 max-w-[42rem]">
                <h3 className="mb-3 text-2xl font-bold text-neutral-900 sm:text-3xl">{active.title}</h3>
                {active.subtitle ? (
                  <p className="mb-6 text-base font-medium leading-relaxed text-neutral-800 sm:text-lg">{active.subtitle}</p>
                ) : null}
                {hasTrainingBenefits ? (
                  <p className="text-base leading-relaxed text-neutral-800 sm:text-lg">
                    <span className="font-bold text-neutral-900">Beneficios: </span>
                    {active.benefitParagraph}
                  </p>
                ) : (
                  <>
                    {active.detail ? (
                      <p className="mb-6 max-w-2xl text-base leading-relaxed text-neutral-800 sm:text-lg">{active.detail}</p>
                    ) : null}
                    <div className="mb-2 text-lg font-extrabold text-accent-orange">Beneficios</div>
                    <ul className="max-w-xl list-inside list-disc space-y-2 text-neutral-800">
                      {active.benefits.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>

            <div className="absolute bottom-0 right-3 z-[2] w-[min(100%,17.5rem)] max-w-[90%] translate-y-[75%] sm:right-5 sm:w-[min(100%,19rem)] md:right-6 lg:w-[min(48%,17.5rem)] lg:max-w-[280px] lg:translate-y-[60%] xl:right-8">
              <div className="overflow-hidden rounded-xl border-b-[4px] border-l-[4px] border-footer bg-white shadow-[4px_5px_0_0_rgba(10,81,141,0.3)] sm:rounded-[1rem]">
                <img
                  src={active.image.src}
                  alt={active.image.alt}
                  width={640}
                  height={480}
                  className="aspect-[4/3] h-auto w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-[4] hidden h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-primary/35 bg-white text-primary shadow-md transition hover:bg-slate-50 lg:flex"
              aria-label="Curso siguiente"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
