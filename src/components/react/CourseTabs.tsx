import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { CourseTab } from "../../data/estrategia";

type Props = {
  courses: CourseTab[];
};

export default function CourseTabs({ courses }: Props) {
  const [activeId, setActiveId] = useState(courses[0]?.id ?? "");
  const active = courses.find((c) => c.id === activeId) ?? courses[0];

  if (!active) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
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
                  ? "rounded-2xl bg-accent-orange px-4 py-3 text-left text-sm font-bold text-white shadow-card sm:text-base"
                  : "rounded-2xl bg-white px-4 py-3 text-left text-sm font-bold text-primary shadow-sm ring-1 ring-primary/15 transition hover:ring-primary/40 sm:text-base"
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="relative overflow-hidden rounded-3xl bg-surface-card p-6 shadow-card sm:p-8 lg:p-10"
        >
          <h3 className="mb-4 text-2xl text-primary sm:text-3xl">{active.title}</h3>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-primary/90 sm:text-lg">{active.detail}</p>
          <div className="mb-2 text-lg font-bold text-accent-orange">Beneficios</div>
          <ul className="mb-8 max-w-xl list-inside list-disc space-y-2 text-primary/90">
            {active.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="relative mt-4 sm:float-right sm:ml-6 sm:w-2/5">
            <img
              src={active.image.src}
              alt={active.image.alt}
              width={640}
              height={480}
              className="rounded-2xl object-cover shadow-card"
              loading="lazy"
            />
          </div>
          <div className="clear-both" />
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
