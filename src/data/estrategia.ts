/** Contenido alineado a `src/assets/prototypes/estrategia.jpg` — capacitación profesional. */

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
    alt: "Profesionales celebrando la finalización de un curso con certificados",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=80",
    alt: "Taller grupal de formación y trabajo colaborativo",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    alt: "Educadores en sesión de aprendizaje presencial",
  },
] as const;

export const intro = {
  title: "Formación para profesionales como tú",
  body: "En Diverty diseñamos experiencias de aprendizaje que conectan teoría y práctica. Fortalece tus habilidades para acompañar el desarrollo infantil con herramientas actualizadas, evidencia y comunidad profesional.",
  illustration: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    alt: "Profesional alcanzando objetivos de carrera y desarrollo",
  },
};

export const audience = {
  highlight: "Dirigido a profesionales y personas comprometidas con el desarrollo infantil.",
  roles: ["Psicólogas y psicólogos", "Educadores", "Estudiantes afines", "Familias y cuidadores"],
  photo: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    alt: "Equipo profesional en sesión de trabajo",
  },
  usePhotoBackground: true as const,
};

export type CourseTab = {
  id: string;
  label: string;
  title: string;
  benefits: string[];
  detail: string;
  image: { src: string; alt: string };
};

export const courses: CourseTab[] = [
  {
    id: "acompanamiento",
    label: "Acompañamiento educativo especializado",
    title: "Acompañamiento educativo especializado",
    benefits: [
      "Habla y pronunciación con enfoque integral.",
      "Deglución y masticación en desarrollo infantil.",
      "Planes personalizados y seguimiento con la familia.",
    ],
    detail:
      "Fortalece la intervención educativa y terapéutica con niñas y niños, integrando observación clínica, planificación y evaluación formativa.",
    image: {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      alt: "Terapeuta trabajando con un niño en actividad educativa",
    },
  },
  {
    id: "lenguaje",
    label: "Terapia de lenguaje",
    title: "Terapia de lenguaje",
    benefits: [
      "Evaluación y estimulación del lenguaje oral y escrito.",
      "Trabajo interdisciplinario con familia y colegio.",
      "Material práctico para continuar en casa.",
    ],
    detail:
      "Intervención centrada en la comunicación funcional, alimentación segura y hábitos de vocalización adaptados a cada etapa.",
    image: {
      src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
      alt: "Sesión de estimulación del lenguaje con material lúdico",
    },
  },
  {
    id: "psicomotricidad",
    label: "Psicomotricidad",
    title: "Psicomotricidad y aprendizaje",
    benefits: [
      "Integración sensorial y coordinación.",
      "Preparación para habilidades académicas.",
      "Actividades lúdicas basadas en evidencia.",
    ],
    detail:
      "Apoyo para el desarrollo motor, espacial y atencional que sustenta el aprendizaje escolar y la autonomía diaria.",
    image: {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      alt: "Niño en actividad psicomotriz guiada",
    },
  },
  {
    id: "integral",
    label: "Programa integral",
    title: "Programa integral Diverty",
    benefits: [
      "Coordinación de especialistas en un solo plan.",
      "Seguimiento compartido con la familia.",
      "Indicadores claros de progreso.",
    ],
    detail:
      "Combina estimulación, lenguaje y apoyo emocional cuando el niño o la niña requiere un abordaje transversal.",
    image: {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      alt: "Familia y equipo terapéutico en coordinación",
    },
  },
];

export const certification = {
  title: "Certificación que valida tu crecimiento",
  body: "Recibe un certificado oficial que respalda tu formación profesional y refuerza tu perfil ante instituciones y familias.",
  badge: {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    alt: "Sesión de capacitación y entrega de certificación",
  },
};

export const benefits = [
  {
    key: "cert",
    title: "Certificación",
    text: "Diploma con valor institucional para tu hoja de vida.",
  },
  {
    key: "practice",
    title: "Aplicación práctica",
    text: "Casos, talleres y plantillas listas para usar el próximo día.",
  },
  {
    key: "growth",
    title: "Mejora profesional",
    text: "Actualización continua y red de contactos del sector.",
  },
] as const;

export const methodology = {
  title: "¿Cómo se desarrollan los cursos?",
  body: "Combinamos sesiones virtuales en vivo, microaprendizaje asíncrono y entregas guiadas para que avances con claridad y acompañamiento cercano.",
  highlight:
    "Incluye 10 sesiones virtuales en vivo con especialistas, espacios de duda en vivo y proyecto final aplicado a tu contexto.",
  illustration: {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
    alt: "Participantes conectados en videoconferencia educativa desde el hogar",
  },
};

export const testimonials = [
  {
    name: "María González",
    role: "Psicopedagoga",
    photo: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      alt: "Retrato de María González, psicopedagoga",
    },
    quote:
      "El enfoque práctico me permitió implementar cambios inmediatos en mi consulta. El equipo de Diverty acompaña de verdad.",
  },
  {
    name: "Laura Martínez",
    role: "Docente de inicial",
    photo: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      alt: "Retrato de Laura Martínez, docente",
    },
    quote:
      "Las sesiones en vivo y el material descargable son de altísima calidad. Recomiendo los cursos al 100%.",
  },
  {
    name: "Ana Ruiz",
    role: "Psicóloga educativa",
    photo: {
      src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
      alt: "Retrato de Ana Ruiz, psicóloga educativa",
    },
    quote:
      "Por fin una capacitación que respeta el ritmo del aula real. Salí con herramientas concretas y red de colegas.",
  },
] as const;

export const finalCta = {
  title: "Eleva tu práctica profesional",
  subtitle: "Inscríbete en nuestros programas y potencia tu impacto en la niñez y adolescencia.",
  button: "Conoce más",
};
