import { motion, useReducedMotion } from "framer-motion";
import {
  estrategiaStaff,
  estrategiaStaffCta,
} from "../../data/estrategiaPage";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function EstrategiaStaff() {
  const reduce = useReducedMotion();

  return (
    <section
      className="bg-[#FFF5F0] pb-16 pt-4 md:pb-24 md:pt-6"
      aria-labelledby="nosotros-staff-title"
    >
      <div className="container">
        <motion.h2
          id="nosotros-staff-title"
          className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.45 }}
        >
          Nuestro staff
        </motion.h2>

        <motion.ul
          className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {estrategiaStaff.map((member) => (
            <motion.li
              key={member.name}
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
            >
              <div className="w-full max-w-[300px] overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-black/[0.06] sm:max-w-none">
                <img
                  src={member.photo.src}
                  alt={member.photo.alt}
                  width={400}
                  height={480}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-5 text-lg font-bold text-neutral-900">
                {member.name}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-500">
                {member.role}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-14 flex justify-center md:mt-16"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.12 }}
        >
          <a
            href={estrategiaStaffCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-footer px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer focus-visible:ring-offset-2 sm:text-base"
          >
            {estrategiaStaffCta.label}
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
