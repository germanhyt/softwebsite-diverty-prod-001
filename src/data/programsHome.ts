/**
 * Programas para la home de familias — 3 categorías, cada una con lista de ítems (carrusel).
 * Textos alineados al maquetado base (terapia, estimulación, integral).
 */

import imgProgramas from "../assets/prototype-inicio/inicio_seccion_nuestros-programas_1.webp";

export type ProgramBenefit = {
  label: string;
  text: string;
};

export type ProgramItem = {
  id: string;
  title: string;
  /** Párrafos de cuerpo en orden */
  paragraphs: string[];
  /** Texto antes de listas (p. ej. condiciones de intervención) */
  listIntro?: string;
  /** Viñetas con etiqueta en negrita + texto */
  benefits?: ProgramBenefit[];
  /** Lista simple con viñeta (sin etiqueta negrita) */
  simpleBullets?: string[];
  /**
   * Si hay `benefits`, controla el título de sección encima de la lista.
   * Por defecto "Beneficios". `false` lo omite.
   */
  benefitsSectionTitle?: string | false;
  /** Pie tipo “Ideal si…” */
  idealFor?: string;
};

export type ProgramCategory = {
  id: string;
  label: string;
  heroImage: { src: string; alt: string };
  items: ProgramItem[];
};

export const programCategories: ProgramCategory[] = [
  {
    id: "terapia",
    label: "Programas de terapia",
    heroImage: {
      src: imgProgramas.src,
      alt: "Especialista acompañando a un niño en terapia",
    },
    items: [
      {
        id: "lenguaje",
        title: "Terapia de lenguaje",
        paragraphs: [
          "Lenguaje comprensivo y expresivo: Trabajamos para que el niño pueda comprender mejor lo que escucha y expresar sus ideas con mayor claridad, fortaleciendo vocabulario, frases y comprensión, fundamentales para el aprendizaje y la comunicación diaria.",
        ],
        benefits: [
          {
            label: "Habla y pronunciación",
            text: "Acompañamos al niño para lograr un habla clara y comprensible, mejorando la pronunciación de sonidos y favoreciendo su seguridad y confianza al comunicarse.",
          },
          {
            label: "Deglución y masticación",
            text: "Intervenimos en las funciones orales relacionadas con comer y tragar, trabajando masticación, control de lengua y labios, y patrones adecuados de deglución. Esto impacta positivamente en la alimentación, el habla y el desarrollo orofacial.",
          },
        ],
      },
      {
        id: "sensorial",
        title: "Terapia de integración sensorial",
        paragraphs: [
          "Ayudamos al niño a organizar los estímulos del entorno como sonidos, movimientos, texturas y contacto físico. A través de actividades estructuradas, favorecemos una mejor regulación, disminuyendo la sensibilidad o búsqueda excesiva de estímulos. Esto le permite adaptarse con mayor facilidad a su entorno, mejorar su atención, tolerar cambios y desenvolverse de manera más tranquila tanto en casa como en el colegio.",
        ],
      },
      {
        id: "gestion-emocional",
        title: "Programa de Gestión emocional y Conductual",
        paragraphs: [
          "Acompañamos al niño en el reconocimiento y manejo de sus emociones, enseñándole a expresarlas de forma adecuada y respetuosa. Trabajamos en el control de impulsos, tolerancia a la frustración y desarrollo de conductas funcionales. A través de estrategias cognitivo-conductuales, ayudamos a reducir berrinches, conductas desafiantes o dificultades de adaptación, promoviendo mayor autocontrol y habilidades sociales positivas.",
        ],
        listIntro:
          "La intervención se aplicará según lo indicado en el informe de la evaluación psicopedagógica:",
        simpleBullets: [
          "Terapia de emociones",
          "Terapia cognitivo-conductual",
          "Terapia de modificación de conducta",
        ],
      },
      {
        id: "aprendizaje",
        title: "Terapia de aprendizaje",
        paragraphs: [
          "Fortalecemos procesos fundamentales para el aprendizaje como la atención sostenida, memoria, comprensión, razonamiento y funciones ejecutivas (planificación, organización y seguimiento de instrucciones). Esto permite que el niño no solo mejore su rendimiento académico, sino que también gane autonomía, seguridad y confianza para enfrentar los retos escolares de manera más efectiva.",
        ],
      },
    ],
  },
  {
    id: "estimulacion",
    label: "Programas de estimulación",
    heroImage: {
      src: imgProgramas.src,
      alt: "Estimulación temprana con material lúdico",
    },
    items: [
      {
        id: "aprendo-baby",
        title: "Aprendo Baby – Estimulación temprana (5 a 11 meses)",
        paragraphs: [
          "Acompaña a tu bebé en sus primeras etapas mediante experiencias sensoriales y motoras basadas en la metodología Montessori y el neurodesarrollo.",
        ],
      },
      {
        id: "aprendo-junior",
        title: "Aprendo Junior – Estimulación oportuna (1 a 3 años)",
        paragraphs: [
          "Potenciamos las 6 áreas del desarrollo en la primera infancia: cognitiva, motriz, lenguaje, socioemocional, sensorial y adaptativa.",
        ],
      },
    ],
  },
  {
    id: "integral",
    label: "Programa integral",
    heroImage: {
      src: imgProgramas.src,
      alt: "Programa integral Diverty",
    },
    items: [
      {
        id: "pre-nido",
        title: "Programa integral de preparación para el nivel inicial (Pre-nido)",
        paragraphs: [
          "Preparamos a tu hijo para su ingreso al colegio desarrollando autonomía, lenguaje, socialización y adaptación a rutinas.",
          "No es solo preparación académica: trabajamos desde el neurodesarrollo y la metodología Montessori para que el niño aprenda a separarse con seguridad, seguir consignas, interactuar con otros y desenvolverse con confianza en un entorno escolar.",
        ],
        idealFor:
          "Ideal si tu hijo ingresará al nido o presenta dificultades para adaptarse a nuevos entornos.",
      },
      {
        id: "intervencion-integral",
        title: "Programa integral de intervención terapéutica",
        paragraphs: [
          "Programa que integra distintas terapias según las necesidades de tu hijo, ya sea por evaluación o indicación profesional.",
          "Trabajamos de manera articulada y personalizada, abordando las dificultades desde el neurodesarrollo para lograr avances reales en comunicación, conducta y aprendizaje.",
        ],
        idealFor:
          "Ideal si tu hijo requiere más de una terapia o un abordaje integral.",
      },
      {
        id: "acompanamiento-educativo",
        title: "Programa de acompañamiento educativo",
        paragraphs: [
          "Reforzamiento escolar desarrollando atención, concentración, comprensión, organización y hábitos de estudio, ya sea para colegios de educación básica regular o con bachillerato internacional.",
          "No es solo apoyo en tareas: enseñamos a aprender con estrategias basadas en el neurodesarrollo y la metodología Montessori, promoviendo autonomía y seguridad.",
          "Revisión y cumplimiento de actividades correspondientes a la plataforma del colegio; mantenemos comunicados a los padres sobre actividades y eventos del colegio.",
        ],
        idealFor:
          "Ideal si tu hijo presenta dificultades en el aprendizaje o necesita reforzamiento escolar.",
      },
      {
        id: "diverty-nana",
        title: "Programa Diverty Nana / Tutoría",
        paragraphs: [
          "Acompañamiento personalizado en casa que integra cuidado, estimulación y desarrollo de habilidades según la edad del niño (programa brindado a partir de 1 año).",
          "Potenciamos la autonomía, el lenguaje, la conducta y el juego funcional, incorporando el aprendizaje en la rutina diaria de forma natural.",
        ],
        idealFor:
          "Ideal si buscas un acompañamiento constante que, además de cuidar, contribuya activamente al desarrollo de tu hijo.",
      },
    ],
  },
];
