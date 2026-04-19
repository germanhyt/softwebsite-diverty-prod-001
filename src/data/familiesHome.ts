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
    "Integramos principios del neurodesarrollo y ambientes preparados estilo Montessori para respetar los ritmos de cada niño. Observamos, ajustamos y celebramos avances con objetivos claros para la familia y el hogar.",
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
  body:
    "Nacimos de la necesidad de ofrecer intervenciones humanas, basadas en evidencia y cercanas a la familia. Hoy unimos terapia domiciliaria, formación de facilitadores y recursos tangibles para que el progreso continúe más allá de la consulta.",
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
    text: "Atención clínica y educativa centrada en el niño, con seguimiento domiciliario y coordinación con colegio y familia.",
    tone: "orange",
  },
  {
    name: "Estrategia",
    text: "Línea de formación y acompañamiento a instituciones: herramientas y rutas para escalar buenas prácticas con rigor y calidez.",
    tone: "navy",
    href: "/estrategia",
  },
];

export const parentsTestimonials = [
  {
    name: "María Fernanda López",
    child: "Madre de Tomás, 4 años",
    quote:
      "En pocos meses vimos más confianza al hablar y jugar. Siempre nos explicaron con claridad qué trabajábamos y cómo apoyar en casa.",
  },
  {
    name: "Carla Mendoza",
    child: "Madre de Lucía, 3 años",
    quote:
      "La combinación de sesiones y material en casa hizo la diferencia. Lucía está más tranquila y nosotros sabemos cómo acompañarla día a día.",
  },
  {
    name: "Patricia León",
    child: "Madre de Mateo, 7 años",
    quote:
      "Profesionales muy dedicados y puntuales. El informe mensual nos ayudó a alinear con el colegio sin sobresaltos.",
  },
] as const;

export const familyFinalCta = {
  title: "Empieza hoy a potenciar el desarrollo de tu hijo",
  subtitle: "Agenda una evaluación sin compromiso y conoce cómo podemos ayudar a tu familia.",
  button: "Habla con una asesora",
};
