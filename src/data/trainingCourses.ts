/**
 * Lista de cursos de capacitación (solo assets de cursos en `prototype-estrategia/`).
 * Importado directamente en el bundle del cliente (`CourseTabs`) para evitar depender
 * de la serialización de props Astro → React.
 */

import imgCourse1 from "../assets/prototype-estrategia/estrategia_section_cursos_acomp-educativo-1.png";
import imgCourse2 from "../assets/prototype-estrategia/estrategia_section_cursos_eval-perfil-cognitivo-1.png";
import imgCourse3 from "../assets/prototype-estrategia/estrategia_section_cursos_intervencion-integ-sens-1.png";
import imgCourse4 from "../assets/prototype-estrategia/estrategia_section_cursos_estion-emcional-conductual-1.png";
import imgCourse5 from "../assets/prototype-estrategia/estrategia_section_cursos_estrategias-inter-ninios-neuroi-1.png";
import imgCourse6 from "../assets/prototype-estrategia/estrategia_section_cursos_terapia-lenguaje-1.png";
import imgCourse7 from "../assets/prototype-estrategia/estrategia_section_cursos_estimul-temprano-oportuna-1.png";
import imgCourse8 from "../assets/prototype-estrategia/estrategia_section_cursos_int-centrada-ninio-1.png";

import type { CourseTab } from "./estrategia";

export const trainingCourses: CourseTab[] = [
  {
    id: "maestra-sombra",
    label: "Acompañamiento educativo especializado",
    title: "Acompañamiento educativo especializado",
    subtitle: "Rol y funciones de la maestra sombra desde el enfoque Montessori",
    benefits: [],
    benefitParagraph:
      "Permite comprender, asumir y ejercer el rol de Maestra Sombra con criterio profesional, ético y pedagógico, aplicando los principios de la metodología Montessori en contextos educativos y terapéuticos. Desarrolla seguridad en la intervención y claridad en la toma de decisiones dentro del aula y el acompañamiento individual.",
    image: {
      src: imgCourse1.src,
      alt: "Especialista y niño jugando con bloques de madera",
    },
  },
  {
    id: "perfil-cognitivo",
    label: "Evaluación del perfil cognitivo",
    title: "Evaluación del Perfil Cognitivo Infantil",
    subtitle:
      "Aplicación e interpretación de las escalas de inteligencia Wechsler (WPPSI-IV y WISC-V) en contextos educativos y terapéuticos",
    benefits: [],
    benefitParagraph:
      "Brinda una comprensión clara y funcional de la evaluación cognitiva infantil desde una mirada respetuosa del desarrollo. Permite interpretar resultados más allá del puntaje y convertirlos en herramientas reales para la intervención educativa y terapéutica, alineadas a los principios Montessori.",
    image: {
      src: imgCourse2.src,
      alt: "Evaluación cognitiva con material educativo en mesa",
    },
  },
  {
    id: "integracion-sensorial",
    label: "Intervención en integración sensorial",
    title: "Intervención en Integración Sensorial",
    subtitle: "Estrategias Montessori para la regulación sensorial y el desarrollo funcional del niño",
    benefits: [],
    benefitParagraph:
      "Permite comprender, observar y acompañar las necesidades sensoriales del niño con herramientas prácticas y aplicables. Favorece la autorregulación, la funcionalidad y la participación activa en su entorno cotidiano, educativo y terapéutico.",
    image: {
      src: imgCourse3.src,
      alt: "Intervención con material de integración sensorial",
    },
  },
  {
    id: "gestion-emocional",
    label: "Gestión emocional y conductual en la infancia",
    title: "Gestión Emocional y Conductual en la infancia",
    subtitle:
      "Intervención desde la Terapia Cognitivo-Conductual, educación emocional y modificación de conducta con enfoque Montessori",
    benefits: [],
    benefitParagraph:
      "Desarrolla herramientas prácticas para comprender, acompañar y guiar la conducta infantil desde un enfoque respetuoso y estructurado. Integra principios de la terapia Cognitivo-Conductual y educación emocional con la metodología Montessori, promoviendo autorregulación, autonomía y conductas funcionales en contextos reales.",
    image: {
      src: imgCourse4.src,
      alt: "Acompañamiento emocional y educativo con niños",
    },
  },
  {
    id: "neurodivergentes",
    label: "Estrategias de intervención en niños neurodivergentes",
    title: "Estrategias de intervención en Niños Neurodivergentes",
    subtitle: "Adaptaciones del ambiente, materiales y rutinas desde la pedagogía Montessori",
    benefits: [],
    benefitParagraph:
      "Fortalece una comprensión profunda y respetuosa de la neurodiversidad, permitiendo intervenir desde el ritmo, necesidades y estilos de aprendizaje de cada niño. Desarrolla criterio para crear ambientes preparados, funcionales y emocionalmente seguros que favorezcan la autonomía, la autorregulación y el desarrollo integral.",
    image: {
      src: imgCourse5.src,
      alt: "Juego sensorial en el suelo con niño",
    },
  },
  {
    id: "terapia-lenguaje",
    label: "Intervención en terapia de lenguaje",
    title: "Intervención en Terapia de Lenguaje",
    subtitle: "Desarrollo del lenguaje expresivo, comprensivo y pragmático desde el enfoque Montessori",
    benefits: [],
    benefitParagraph:
      "Permite abordar el desarrollo del lenguaje desde una mirada integral y respetuosa. Integra principios Montessori con estrategias terapéuticas actuales, favoreciendo una comunicación funcional, espontánea y acorde al ritmo individual de cada niño.",
    image: {
      src: imgCourse6.src,
      alt: "Sesión de terapia de lenguaje con tarjetas",
    },
  },
  {
    id: "estimulacion-temprana",
    label: "Estimulación temprana y oportuna",
    title: "Estimulación Temprana y Oportuna",
    subtitle: "Intervención Montessori para bebés y niños de 0 a 3 años",
    benefits: [],
    benefitParagraph:
      "Desarrolla una mirada profunda, respetuosa y profesional del desarrollo en la primera infancia, permitiendo intervenir de forma oportuna y consciente. Potencia las capacidades del niño desde el ambiente, la observación y la experiencia significativa, sin sobreestimular ni acelerar procesos.",
    image: {
      src: imgCourse7.src,
      alt: "Estimulación temprana con bebé y material Montessori",
    },
  },
  {
    id: "intervencion-integral",
    label: "Intervención integral centrada en el niño",
    title: "Intervención Integral Centrada en el Niño",
    subtitle:
      "Observación, análisis del desarrollo y detección de necesidades específicas desde la metodología Montessori",
    benefits: [],
    benefitParagraph:
      "Permite comprender al niño de manera integral, más allá de diagnósticos o etiquetas. Desarrolla una mirada profesional para identificar necesidades reales, priorizar intervenciones y tomar decisiones fundamentadas. La observación y el análisis se convierten en herramientas clave para intervenir de forma efectiva y personalizada.",
    image: {
      src: imgCourse8.src,
      alt: "Observación clínica del desarrollo infantil",
    },
  },
];
