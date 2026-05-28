import type { Variants } from "framer-motion";

/** Scroll reveal: una vez, con margen para activar antes de entrar al viewport. */
export const defaultViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -12% 0px",
} as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** Entrada desde los lados — útil en heroes y layouts dos columnas. Con `prefers-reduced-motion`, usar `fadeIn`. */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 44 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
};

/** Slide corto para tarjetas y pasos (menos recorrido). */
export const slideInLeftSm: Variants = {
  hidden: { opacity: 0, x: -26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};

export const slideInRightSm: Variants = {
  hidden: { opacity: 0, x: 26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};

/** Stagger algo más pausado para landing familia / primera infancia. */
export const staggerLanding: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.14 },
  },
};

/** Transición compartida entre pasarelas (Nuestros programas / Cursos de capacitación). */
export const carouselPanelTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export const carouselPanelInitial = { opacity: 0, x: 20 };
export const carouselPanelAnimate = { opacity: 1, x: 0 };
export const carouselPanelExit = { opacity: 0, x: -20 };

/** Cards beneficios: escala suave + ligero desde abajo. */
export const scaleInSoft: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.52, ease: easeOut },
  },
};
