import { motion, useReducedMotion } from "framer-motion";
import { nosotrosStaff } from "../../data/nosotrosPage";
import { siteConfig } from "../../config/site.config";
import {
  defaultViewport,
  fadeIn,
  fadeInUp,
  slideInLeftSm,
  slideInRightSm,
  staggerLanding,
} from "../../lib/motion";

export default function Staff() {
  const reduce = useReducedMotion();
  const memberVariants = (index: number) =>
    reduce ? fadeIn : index % 2 === 0 ? slideInLeftSm : slideInRightSm;

  return (
    <section
      className="bg-[#FDF2E9] pb-16 pt-4 md:pb-24 md:pt-6"
      aria-labelledby="nosotros-staff-title"
    >
      <div className="container">
        <motion.h2
          id="nosotros-staff-title"
          className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Nuestro staff
        </motion.h2>

        <motion.ul
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-8 sm:gap-y-12"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerLanding}
        >
          {nosotrosStaff.map((member, index) => (
            <motion.li
              key={member.name}
              className="flex flex-col items-center text-center"
              variants={memberVariants(index)}
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
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-footer px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer focus-visible:ring-offset-2 sm:text-base"
          >
            Comunícate con una asesora
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
