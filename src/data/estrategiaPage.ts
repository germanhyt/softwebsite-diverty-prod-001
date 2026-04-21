/**
 * Contenido e imágenes — página **Quiénes somos** (`/nosotros`).
 * Assets en `src/assets/prototype-quienes-somos/` (`nosotros_section_*`, mock completo: `nosotros_institutional_mock.jpg`).
 * (`estrategia.ts` conserva tipos compartidos con Inicio.)
 */

import imgHero from "../assets/prototype-quienes-somos/nosotros_section_hero-1.webp";
import imgEsencia from "../assets/prototype-quienes-somos/nosotros_section_nuestra-escencia.png";
import imgImpacto from "../assets/prototype-quienes-somos/nosotros_section_impacto-buscamos.png";
import imgFundadora from "../assets/prototype-quienes-somos/nosotros_section_nuestra-fundadora.png";
import imgStaffNataly from "../assets/prototype-quienes-somos/nosotros_section_staff-nataly.png";
import imgStaffSandra from "../assets/prototype-quienes-somos/nosotros_section_staff-sandra.png";

export const estrategiaHero = {
  title: "Somos Perú Learn Easy",
  body:
    "Brindamos educación integral que integra neurodesarrollo, acompañamiento familiar y metodologías activas. Trabajamos para que cada niño y cada familia encuentren herramientas concretas, calidez y rigor en cada etapa del aprendizaje.",
  image: {
    src: imgHero.src,
    alt: "Familia jugando con un rompecabezas en el hogar",
  },
} as const;

export type EstrategiaSplitBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  /** Firma opcional al final del bloque (p. ej. fundadora). */
  signature?: string;
  /** Línea bajo la firma (p. ej. cargo). */
  signatureRole?: string;
  image: { src: string; alt: string };
  /** Si true, la imagen va a la izquierda (segundo bloque del mock). */
  imageLeft: boolean;
};

export const estrategiaSplitSections: EstrategiaSplitBlock[] = [
  {
    id: "esencia",
    title: "Nuestra esencia",
    paragraphs: [
      "Potenciar el desarrollo integral de la infancia y la excelencia profesional mediante programas de intervención y capacitación basados en neurodesarrollo y metodología Montessori, generando resultados reales y significativos.",
    ],
    image: {
      src: imgEsencia.src,
      alt: "Docente acompañando a dos niños en una actividad guiada",
    },
    imageLeft: false,
  },
  {
    id: "impacto",
    title: "Impacto que buscamos",
    paragraphs: [
      "Ser la referencia nacional en intervención infantil y formación de especialistas, transformando la práctica profesional y preparando a los niños para desarrollarse plenamente en el mundo real.",
    ],
    image: {
      src: imgImpacto.src,
      alt: "Madre sosteniendo a un niño sonriente",
    },
    imageLeft: true,
  },
  {
    id: "fundadora",
    title: "Nuestra fundadora",
    paragraphs: [
      "En Diverty, creemos en el poder de una intervención infantil bien aplicada para generar un impacto real en el desarrollo de los niños.",
      "A partir de esta experiencia en campo, nace Estrategia, una iniciativa enfocada en potenciar a los profesionales que trabajan con niños, brindándoles no solo conocimiento teórico, sino herramientas prácticas que puedan aplicar en su día a día.",
      "Sabemos que la formación tradicional muchas veces no es suficiente. Por eso, nuestros programas están diseñados para transformar el conocimiento en acción, integrando enfoques como el neurodesarrollo y la metodología Montessori.",
      "Todo lo que enseñamos parte de la experiencia real: lo que hemos vivido, probado y validado en Diverty en distintas regiones del país.",
      "Esta propuesta forma parte de Perú Learn Easy, la organización que integra y potencia nuestras iniciativas educativas, asegurando una formación alineada a estándares de calidad y con visión de crecimiento.",
    ],
    signature: "Rocio Vilchez",
    signatureRole: "CEO & Founder",
    image: {
      src: imgFundadora.src,
      alt: "Fundadora de Diverty en su espacio de trabajo con laptop y cuaderno",
    },
    imageLeft: false,
  },
];

export type StaffMember = {
  name: string;
  role: string;
  photo: { src: string; alt: string };
};

export const estrategiaStaff: StaffMember[] = [
  {
    name: "Nataly Huerta",
    role: "Directora general",
    photo: {
      src: imgStaffNataly.src,
      alt: "Nataly Huerta, directora general",
    },
  },
  {
    name: "Sandra Alvarado",
    role: "Coordinadora general",
    photo: {
      src: imgStaffSandra.src,
      alt: "Sandra Alvarado, coordinadora general",
    },
  },
];

export const estrategiaStaffCta = {
  label: "Comunícate con una asesora",
  href: "/#contacto",
} as const;
