import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data/estrategiaPage";
import { defaultViewport, fadeInUp, staggerChildren } from "../../lib/motion";

export default function Testimonials() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex((prev) => (prev === null ? 0 : prev));
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="mt-20 scroll-mt-28 bg-surface-cream pb-16 pt-4 md:pb-24"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <motion.h2
          id="testimonials-title"
          className="mb-10 text-center text-3xl text-black sm:mb-12 sm:text-4xl"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          Testimonios de profesionales
        </motion.h2>
        <motion.div
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={defaultViewport}
          variants={staggerChildren}
        >
          {testimonials.map((t, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={t.name}
                className="flex h-full min-h-0 flex-col rounded-2xl bg-surface-card p-4 shadow-card sm:p-5"
                variants={fadeInUp}
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="aspect-[9/16] w-full">
                    <video
                      ref={(node) => {
                        videoRefs.current[index] = node;
                      }}
                      src={t.videoUrl}
                      className="h-full w-full object-cover"
                      controls={isActive}
                      controlsList="nodownload noplaybackrate"
                      disablePictureInPicture
                      playsInline
                      muted={index === 0}
                      preload="metadata"
                    />
                    {!isActive ? (
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label={`Reproducir video de ${t.name}`}
                      >
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-xl text-black shadow-md">
                          ▶
                        </span>
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="mt-auto shrink-0">
                  <div className="font-bold text-black">{t.name}</div>
                  {/* <div className="text-sm text-black/70">{t.role}</div> */}
                  <div className="text-sm text-black/70">{t.question}</div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
