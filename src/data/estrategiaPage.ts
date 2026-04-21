/**
 * Contenido e imágenes alineados al prototipo `src/assets/prototype-estrategia/estrategia.jpg`.
 * Se usa en la ruta **`/nosotros`** (Quiénes somos — historia, esencia y equipo).
 * (`estrategia.ts` conserva tipos compartidos con Inicio.)
 */

import imgHero from "../assets/prototype-estrategia/estrategia_section_hero-1.webp";
import imgEsencia from "../assets/prototype-estrategia/estrategia_section_nuestra-escencia.png";
import imgImpacto from "../assets/prototype-estrategia/estrategia_section_impacto-buscamos.png";
import imgFundadora from "../assets/prototype-estrategia/estrategia_section_nuestra-fundadora.png";
import imgStaffRocio from "../assets/prototype-estrategia/estrategia_section_staff-vilchez.png";
import imgStaffNataly from "../assets/prototype-estrategia/estrategia_section_staff-nataly.png";
import imgStaffSandra from "../assets/prototype-estrategia/estrategia_section_staff-sandra.png";

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
  image: { src: string; alt: string };
  /** Si true, la imagen va a la izquierda (segundo bloque del mock). */
  imageLeft: boolean;
};

export const estrategiaSplitSections: EstrategiaSplitBlock[] = [
  {
    id: "esencia",
    title: "Nuestra esencia",
    paragraphs: [
      "Creemos en una educación que mira al niño de forma integral: emociones, lenguaje, autonomía y vínculo con la familia.",
      "Aplicamos principios de neurodesarrollo y ambientes inspirados en Montessori para respetar ritmos, fortalecer fortalezas y construir aprendizajes significativos.",
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
      "Aspiramos a ser un referente nacional en intervención y acompañamiento infantil temprano, acercando prácticas basadas en evidencia a hogares y centros educativos.",
      "Medimos el éxito en familias más seguras, equipos coordinados y niños que avanzan con confianza en sus propias capacidades.",
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
      "La visión de Diverty nace de años de trabajo cercano con familias, escuelas y especialistas. Entendimos que el cambio sostenible ocurre cuando se unen diagnóstico claro, estrategias prácticas y un equipo que acompaña sin juzgar.",
      "Hoy impulsamos Perú Learn Easy como espacio donde la excelencia pedagógica se encuentra con la calidez humana: formación, terapias y recursos que hablan el idioma de quien educa en el día a día.",
    ],
    signature: "Rocio Vilchez",
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
    name: "Rocio Vilchez",
    role: "CEO & Founder",
    photo: {
      src: imgStaffRocio.src,
      alt: "Rocio Vilchez, CEO y fundadora",
    },
  },
  {
    name: "Nataly Huerto",
    role: "Directora general",
    photo: {
      src: imgStaffNataly.src,
      alt: "Nataly Huerto, directora general",
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
