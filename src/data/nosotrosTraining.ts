/**
 * Contenido e imágenes — capacitación profesional (prototipo `prototype-quienes-somos/`).
 * Componentes en `components/nosotros/` se montan en la ruta **`/estrategia`**.
 */

import imgHero from "../assets/prototype-quienes-somos/nosotros_section_hero-1.png";
import imgIntro from "../assets/prototype-quienes-somos/nosotros_section_formacion-profesionales-1.png";
import imgAudience from "../assets/prototype-quienes-somos/nosotros_section_dirigido-1.png";
import imgCert from "../assets/prototype-quienes-somos/nosotros_section_cerificacion-valida-1.png";
import imgBenefitCert from "../assets/prototype-quienes-somos/nosotros_section_certificacion-1.png";
import imgBenefitPractice from "../assets/prototype-quienes-somos/nosotros_section_aplicacion-practica-1.png";
import imgBenefitGrowth from "../assets/prototype-quienes-somos/nosotros_section_mejora-prfofesional-1.png";
import imgMethod1 from "../assets/prototype-quienes-somos/nosotros_section_como-desarrollan-cursos-1.png";
import imgMethod2 from "../assets/prototype-quienes-somos/nosotros_section_como-desarrollan-cursos-2.png";
import imgTestimonial1 from "../assets/prototype-quienes-somos/nosotros_section_testimonios-1.png";
import imgTestimonial2 from "../assets/prototype-quienes-somos/nosotros_section_testimonios-1.png";
import imgTestimonial3 from "../assets/prototype-quienes-somos/nosotros_section_testimonios-1.png";

export { trainingCourses } from "./trainingCourses";

export const trainingHero = {
  image: {
    src: imgHero.src,
    alt: "Profesional con carpeta Diverty sonriendo",
  },
} as const;

export const intro = {
  title: "Formación para profesionales como tú",
  body:
    "En Diverty diseñamos experiencias de aprendizaje que conectan teoría y práctica. Fortalece tus habilidades para acompañar el desarrollo infantil con herramientas actualizadas, evidencia y comunidad profesional.",
  illustration: {
    src: imgIntro.src,
    alt: "Ilustración sobre salto y crecimiento profesional",
  },
  cta: { label: "Inscríbete" } as const,
};

export const audience = {
  highlight: "Dirigido a profesionales y personas comprometidas con el desarrollo infantil.",
  roles: [
    "Coordinadores y profesionales de instituciones educativas que buscan mejorar la calidad de la intervención infantil.",
    "Psicólogos, psicopedagogos y terapeutas de primera infancia.",
    "Docentes de educación inicial y primaria interesados en metodologías innovadoras.",
    "Estudiantes de educación y psicología.",
    "Madres, padres y personas interesadas en conocer estrategias efectivas para el desarrollo integral de los niños.",
  ],
  photo: {
    src: imgAudience.src,
    alt: "Reunión profesional en sala de juntas",
  },
  usePhotoBackground: true as const,
};

export const certification = {
  title: "Certificación que valida tu crecimiento",
  body:
    "Recibe un certificado avalado por la Cámara de Comercio y fortalece tu perfil profesional.",
  badge: {
    src: imgCert.src,
    alt: "Participantes en capacitación Diverty",
  },
};

export const benefits = [
  {
    key: "cert",
    title: "Certificación",
    text: "Diploma con valor institucional para tu hoja de vida.",
    image: { src: imgBenefitCert.src, alt: "Certificación y logro académico" },
  },
  {
    key: "practice",
    title: "Aplicación práctica",
    text: "Casos, talleres y plantillas listas para usar el próximo día.",
    image: { src: imgBenefitPractice.src, alt: "Ideas y aplicación práctica" },
  },
  {
    key: "growth",
    title: "Mejora profesional",
    text: "Actualización continua y red de contactos del sector.",
    image: { src: imgBenefitGrowth.src, alt: "Crecimiento profesional" },
  },
] as const;

export const methodology = {
  title: "¿Cómo se desarrollan los cursos?",
  columns: [
    {
      image: { src: imgMethod1.src, alt: "Participante en curso virtual con laptop" },
      title: "Modalidad virtual en vivo",
      body: "Sesiones sincrónicas con especialistas, espacios de consulta y material de apoyo para avanzar con estructura desde cualquier lugar.",
    },
    {
      image: { src: imgMethod2.src, alt: "Taller presencial grupal" },
      title: "Encuentros presenciales",
      body: "Talleres prácticos donde se profundiza con dinámicas grupales, retroalimentación inmediata y redes entre colegas.",
    },
  ],
} as const;

export const testimonials = [
  {
    name: "María González",
    role: "Psicopedagoga",
    photo: {
      src: imgTestimonial1.src,
      alt: "Retrato de María González",
    },
    quote: ""
    // "El enfoque práctico me permitió implementar cambios inmediatos en mi consulta. El equipo de Diverty acompaña de verdad.",
  },
  {
    name: "Carla Ramírez",
    role: "Docente de inicial",
    photo: {
      src: imgTestimonial2.src,
      alt: "Retrato de Carla Ramírez",
    },
    quote: ""
    // "Las sesiones en vivo y el material descargable son de altísima calidad. Recomiendo los cursos al 100%.",
  },
  {
    name: "Ana Martínez",
    role: "Psicóloga educativa",
    photo: {
      src: imgTestimonial3.src,
      alt: "Retrato de Ana Martínez",
    },
    quote: ""
    // "Por fin una capacitación que respeta el ritmo del aula real. Salí con herramientas concretas y red de colegas.",
  },
] as const;

export const finalCta = {
  title: "Eleva tu práctica profesional",
  subtitle: "Inscríbete en nuestros programas y potencia tu impacto en la niñez y adolescencia.",
  button: "Inscríbete",
} as const;
