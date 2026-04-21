/** Contenido e imágenes alineados al prototipo en `src/assets/prototype-inicio/`. */

import type { CourseTab } from "./estrategia";
import imgHero from "../assets/prototype-inicio/inicio_seccion_hero_1.png";
import imgEnfoque from "../assets/prototype-inicio/inicio_seccion_enfoque_1.webp";
import imgComo1 from "../assets/prototype-inicio/inicio_seccion_como-funciona_1.webp";
import imgComo2 from "../assets/prototype-inicio/inicio_seccion_como-funciona_2.webp";
import imgComo3 from "../assets/prototype-inicio/inicio_seccion_como-funciona_3.webp";
import imgComo4 from "../assets/prototype-inicio/inicio_seccion_como-funciona_4.webp";
import imgComo5 from "../assets/prototype-inicio/inicio_seccion_como-funciona_5.webp";
import imgProgramas from "../assets/prototype-inicio/inicio_seccion_nuestros-programas_1.webp";
import imgDomicilio from "../assets/prototype-inicio/inicio_seccion_atencion-domicilio_1.webp";
import imgBenefit1 from "../assets/prototype-inicio/inicio_seccion_beneficios-para-tu-hijo_1.webp";
import imgBenefit2 from "../assets/prototype-inicio/inicio_seccion_beneficios-para-tu-hijo_2.webp";
import imgBenefit3 from "../assets/prototype-inicio/inicio_seccion_beneficios-para-tu-hijo_3.webp";
import imgHistoriaDecor from "../assets/prototype-inicio/inicio_seccion_nuestra-historia_1.png";

export const familyHero = {
  title: "Acompañamos el desarrollo de tu hijo",
  body:
    "Brindamos terapia especializada enfocada en el desarrollo emocional, cognitivo y conductual de tu hijo, con un enfoque Montessori personalizado que respeta su ritmo único.",
  image: {
    src: imgHero.src,
    alt: "Madre o terapeuta realizando actividad sensorial con un niño pequeño",
  },
};

export const familyNeuro = {
  title: "Enfoque en neurodesarrollo y metodología Montessori",
  body:
    "Aplicamos el enfoque en neurodesarrollo con los principios Montessori, a través de terapias especializadas para crear un ambiente de aprendizaje respetuoso donde tu hijo desarrolle habilidades a su propio ritmo, fortaleciendo su autoestima y amor por el aprendizaje. Desde la confianza y seguridad de tu hogar.",
  illustration: {
    src: imgEnfoque.src,
    alt: "Ilustración sobre creatividad, aprendizaje y neurodesarrollo",
  },
};

export type HowStep = {
  key: string;
  title: string;
  body: string;
  palette: "sky" | "green" | "orange" | "blue" | "aqua";
  image: { src: string; alt: string };
};

export const howItWorks: HowStep[] = [
  {
    key: "1",
    title: "Entrevista inicial",
    body: "Entrevista inicial con los padres. (virtual)",
    palette: "sky",
    image: {
      src: imgComo1.src,
      alt: "Familia en entrevista inicial",
    },
  },
  {
    key: "2",
    title: "Evaluación",
    body:
      "Evaluación psicopedagógica presencial y a domicilio al menor (mayores de 18 meses) para diseñar el plan de intervención.",
    palette: "green",
    image: {
      src: imgComo2.src,
      alt: "Evaluación con especialista",
    },
  },
  {
    key: "3",
    title: "DivertyBox",
    body:
      "Envío de la DivertyBox con todos los materiales y recursos para el desarrollo de las sesiones.",
    palette: "orange",
    image: {
      src: imgComo3.src,
      alt: "Material para trabajar en casa",
    },
  },
  {
    key: "4",
    title: "Sesiones",
    body:
      "Inicio de sesiones (todas las sesiones son brindadas a partir de 1 hora a más, dependiendo del plan solicitado) con retroalimentación.",
    palette: "blue",
    image: {
      src: imgComo4.src,
      alt: "Sesión personalizada con niño",
    },
  },
  {
    key: "5",
    title: "Seguimiento",
    body:
      "Informe de progreso mensual (se envía en archivo al contacto o correo de la familia).",
    palette: "aqua",
    image: {
      src: imgComo5.src,
      alt: "Seguimiento y acompañamiento",
    },
  },
];

export const familyPrograms: CourseTab[] = [
  {
    id: "psicomotricidad",
    label: "Psicomotricidad",
    title: "Psicomotricidad",
    benefits: [
      "Coordinación, equilibrio y esquema corporal.",
      "Regulación y preparación para aprendizajes escolares.",
      "Plan de juego y movimiento acorde a la edad.",
    ],
    detail:
      "Trabajamos la integración sensoriomotriz y las bases posturales para que tu hijo se mueva con seguridad, atención y disfrute.",
    image: {
      src: imgProgramas.src,
      alt: "Especialista acompañando psicomotricidad con un niño",
    },
  },
  {
    id: "lenguaje",
    label: "Terapia de lenguaje",
    title: "Terapia de lenguaje",
    benefits: [
      "Habla y pronunciación adaptadas a la edad.",
      "Deglución y masticación seguras cuando corresponda.",
      "Comunicación funcional en familia y colegio.",
    ],
    detail:
      "Trabajamos habilidades de comunicación oral y prerequisitos del aprendizaje lector, con ejercicios prácticos y seguimiento cercano.",
    image: {
      src: imgProgramas.src,
      alt: "Terapia de lenguaje con material lúdico",
    },
  },
  {
    id: "psicopedagogia",
    label: "Psicopedagogía",
    title: "Psicopedagogía",
    benefits: [
      "Aprendizaje lector, matemático y de estudio.",
      "Estrategias según el perfil cognitivo del niño.",
      "Coordinación con colegio y familia.",
    ],
    detail:
      "Acompañamos procesos de aprendizaje con evaluación formativa, ajustes metodológicos y objetivos claros para casa y aula.",
    image: {
      src: imgProgramas.src,
      alt: "Acompañamiento psicopedagógico",
    },
  },
];

export const domicilio = {
  title: "Atención a domicilio",
  body:
    "Llevamos la atención hasta tu hogar, en un entorno cómodo y familiar para tu hijo.",
  image: {
    src: imgDomicilio.src,
    alt: "Niño en actividad de aprendizaje personalizada",
  },
};

export const benefitsKids = [
  {
    key: "focus",
    title: "Mejora la concentración",
    text: "Desarrollar habilidades de atención y enfoque sostenido.",
    image: {
      src: imgBenefit1.src,
      alt: "Niño concentrado en actividad educativa",
    },
  },
  {
    key: "emotion",
    title: "Desarrollo emocional",
    text: "Desarrollar habilidades de atención y enfoque sostenido.",
    image: {
      src: imgBenefit2.src,
      alt: "Niño en entorno seguro y acogedor",
    },
  },
  {
    key: "independence",
    title: "Mayor independencia",
    text: "Fomenta la autonomía y la confianza en sí mismo.",
    image: {
      src: imgBenefit3.src,
      alt: "Niño practicando autonomía",
    },
  },
] as const;

export const ourStory = {
  title: "Nuestra Historia",
  intro:
    "En Perú Learn Easy creemos que la educación debe ir más allá de la teoría. Nacemos con el propósito de construir una formación integral, conectando distintas líneas de intervención bajo una misma visión: el desarrollo real de los niños y la preparación de profesionales capaces de generar impacto.",
  lead: "A partir de esta visión, surgen dos propuestas que se complementan:",
  decorImage: {
    src: imgHistoriaDecor.src,
    alt: "",
  },
};

export type BrandPillar = {
  name: string;
  text: string;
  tone: "orange" | "navy";
  href?: string;
};

export const brandPillars: BrandPillar[] = [
  {
    name: "Diverty",
    text: "Nuestra propuesta enfocada en la infancia. A través de programas de intervención en el hogar, acompañamos a los niños en su desarrollo emocional, cognitivo, sensorial y académico, utilizando enfoques como el neurodesarrollo y la metodología Montessori. Más que sesiones, buscamos generar avances reales y sostenidos, adaptándonos a las necesidades de cada niño y al ritmo de cada familia.",
    tone: "orange",
  },
  {
    name: "Estrategia",
    text: "Nuestro espacio de formación para profesionales. Aquí transformamos la experiencia en conocimiento aplicable. Brindamos capacitación con herramientas prácticas, basadas en evidencia, para fortalecer la intervención infantil en distintos contextos. El objetivo es claro: formar profesionales capaces de generar cambios reales en los niños con los que trabajan.",
    tone: "navy",
    href: "/estrategia",
  },
];

export const parentsTestimonials = [
  {
    name: "María Fernanda López",
    child: "Mamá de Ian, Lima",
    quote:
      "Como papás estamos muy contentos con el servicio. Hemos visto avances en nuestro pequeño, especialmente en su comunicación y en cómo se relaciona con nosotros. Nos gusta mucho que el acompañamiento sea tan cercano y personalizado.",
  },
  {
    name: "Carlos Alberto Ramírez",
    child: "Papá de Miguel, Arequipa",
    quote:
      "La experiencia ha sido muy positiva para nuestra familia. Las especialistas son muy profesionales y siempre nos explican cómo continuar el trabajo en casa. Nuestro hijo está más tranquilo, atento y participa más en las actividades.",
  },
  {
    name: "Lucía Torres Sánchez",
    child: "Mamá de Sofia, Chiclayo",
    quote:
      "Estamos realmente agradecidos con el programa. Desde que empezamos, hemos notado cambios importantes en la conducta y en el lenguaje de nuestro pequeño. Además, nos sentimos acompañados como padres en todo el proceso, lo cual marca una gran diferencia.",
  },
] as const;

export const familyFinalCta = {
  title: "Empieza hoy a potenciar el desarrollo de tu hijo",
  subtitle: "Agenda una sesión de evaluación sin compromiso y conoce nuestro enfoque personalizado.",
  button: "Habla con una asesora",
};
