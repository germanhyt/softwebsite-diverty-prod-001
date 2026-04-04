/** Contenido alineado a `src/assets/prototypes/home.jpg` — familias, neurodesarrollo y Montessori. */

import type { CourseTab } from "./estrategia";

export const familyHero = {
  title: "Acompañamos el desarrollo de tu hijo",
  body:
    "Terapias y programas basados en neurodesarrollo y metodología Montessori, con especialistas que te acompañan en cada paso hacia una comunicación, autonomía y bienestar sólidos.",
  image: {
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1000&q=80",
    alt: "Madre o terapeuta realizando actividad sensorial con un niño pequeño",
  },
};

export const familyNeuro = {
  title: "Enfoque en neurodesarrollo y metodología Montessori",
  body:
    "Integramos principios del neurodesarrollo y ambientes preparados estilo Montessori para respetar los ritmos de cada niño. Observamos, ajustamos y celebramos avances con objetivos claros para la familia y el hogar.",
  illustration: {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
    alt: "Material educativo y recursos para estimulación del aprendizaje",
  },
};

export type HowStep = {
  key: string;
  title: string;
  body: string;
  palette: "sky" | "green" | "orange" | "blue" | "pink";
  image?: { src: string; alt: string };
};

export const howItWorks: HowStep[] = [
  {
    key: "1",
    title: "Entrevista inicial",
    body: "Conocemos la historia de tu hijo o hija y tus objetivos (virtual).",
    palette: "sky",
  },
  {
    key: "2",
    title: "Evaluación",
    body: "Evaluación psicopedagógica presencial u online según el caso.",
    palette: "green",
  },
  {
    key: "3",
    title: "DivertyBox",
    body: "Recibes materiales y guías para continuar el trabajo en casa.",
    palette: "orange",
    image: {
      src: "https://images.unsplash.com/photo-1596464716127-f9a8759f8a1b?w=600&q=80",
      alt: "Material didáctico para estimulación en casa",
    },
  },
  {
    key: "4",
    title: "Sesiones",
    body: "Inicio de sesiones personalizadas con tu especialista.",
    palette: "blue",
  },
  {
    key: "5",
    title: "Seguimiento",
    body: "Informe de progreso mensual y ajustes al plan.",
    palette: "pink",
  },
];

export const familyPrograms: CourseTab[] = [
  {
    id: "lenguaje",
    label: "Programa de lenguaje",
    title: "Terapia de lenguaje",
    benefits: [
      "Habla y pronunciación adaptadas a la edad.",
      "Deglución y masticación seguras cuando corresponda.",
      "Comunicación funcional en familia y colegio.",
    ],
    detail:
      "Trabajamos habilidades de comunicación oral y prerequisitos del aprendizaje lector, con ejercicios prácticos y seguimiento cercano.",
    image: {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      alt: "Terapeuta de lenguaje trabajando con un niño",
    },
  },
  {
    id: "estimulacion",
    label: "Programa de estimulación",
    title: "Programa de estimulación temprana",
    benefits: [
      "Estimulación cognitiva y sensorial.",
      "Rutinas de juego guiado en casa.",
      "Indicadores observables de avance.",
    ],
    detail:
      "Plan progresivo para potenciar atención, motricidad fina y resolución de problemas en las primeras etapas.",
    image: {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      alt: "Niño en actividades de estimulación",
    },
  },
  {
    id: "integral",
    label: "Programa integral",
    title: "Programa integral",
    benefits: [
      "Coordinación entre especialistas.",
      "Un solo plan compartido con la familia.",
      "Flexibilidad presencial y seguimiento domiciliario.",
    ],
    detail:
      "Cuando se requiere varias áreas a la vez, integramos objetivos y sesiones para evitar fragmentación y maximizar resultados.",
    image: {
      src: "https://images.unsplash.com/photo-1516627773781-a3631897b36b?w=800&q=80",
      alt: "Sesión integral con niño y especialista",
    },
  },
];

export const domicilio = {
  title: "Atención a domicilio",
  body: "Llevamos la evaluación y las sesiones hasta tu hogar cuando la logística o el contexto del niño lo favorecen, sin perder calidad ni objetivos claros.",
  image: {
    src: "https://images.unsplash.com/photo-1609220136736-395140e45c89?w=1000&q=80",
    alt: "Terapeuta realizando visita domiciliaria con una familia",
  },
};

export const benefitsKids = [
  {
    key: "focus",
    title: "Mejora la concentración",
    text: "Rutinas y materiales que ayudan a regular la atención sostenida.",
    image: {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
      alt: "Niño concentrado en actividad educativa",
    },
  },
  {
    key: "emotion",
    title: "Desarrollo emocional",
    text: "Acompañamos la regulación emocional y la confianza en sí mismos.",
    image: {
      src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&q=80",
      alt: "Niño sonriente en entorno seguro",
    },
  },
  {
    key: "independence",
    title: "Mayor independencia",
    text: "Autonomía en tareas cotidianas acorde a su edad y posibilidades.",
    image: {
      src: "https://images.unsplash.com/photo-1502086223507-b74f2767ff3b?w=600&q=80",
      alt: "Niño practicando autonomía en actividades",
    },
  },
] as const;

export const ourStory = {
  title: "Nuestra historia",
  body:
    "Nacimos de la necesidad de ofrecer intervenciones humanas, basadas en evidencia y cercanas a la familia. Hoy unimos terapia domiciliaria, formación de facilitadores y recursos tangibles para que el progreso continúe más allá de la consulta.",
};

export const brandPillars = [
  {
    name: "Diverty",
    text: "Atención clínica y educativa centrada en el niño, con seguimiento domiciliario y coordinación con colegio y familia.",
  },
  {
    name: "Lidology",
    text: "Brazo de formación y liderazgo educativo: capacitamos a profesionales que replican buenas prácticas en todo el país.",
  },
] as const;

export const parentsTestimonials = [
  {
    name: "María González",
    child: "Madre de Juan, 5 años",
    quote:
      "En pocos meses vimos cómo Juan ganó confianza para expresarse. El equipo siempre nos explicó con claridad qué estábamos trabajando y por qué.",
  },
  {
    name: "Carla Mendoza",
    child: "Madre de Lucía, 3 años",
    quote:
      "La combinación de sesiones y material en casa hizo la diferencia. Lucía está más tranquila y nosotros sabemos cómo apoyarla día a día.",
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
  button: "Agenda una sesión",
};
