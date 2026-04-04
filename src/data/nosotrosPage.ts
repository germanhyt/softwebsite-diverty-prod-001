/** Contenido alineado a `src/assets/prototypes/nosotros.jpg` — Quiénes somos. */

export const aboutHero = {
  /** Texto del prototipo (marca grupo); sustituir si unifican solo “DIVERTY”. */
  title: "Somos Perú Learn Easy",
  body:
    "Somos un equipo peruano que une neurodesarrollo, metodología Montessori y formación permanente. Trabajamos para que cada niño y cada familia accedan a intervenciones coherentes, éticas y sostenibles en el tiempo.",
  slides: [
    {
      src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1100&q=80",
      alt: "Adulto y niño en sesión de aprendizaje con material educativo",
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1100&q=80",
      alt: "Especialista acompañando a un niño en actividad lúdica",
    },
  ] as const,
};

export const essence = {
  title: "Nuestra esencia",
  body:
    "Creemos en el respeto por el ritmo evolutivo, en ambientes preparados y en la alianza genuina con las familias. Nuestra metodología combina observación clínica, evidencia internacional y calidez humana.",
  image: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=80",
    alt: "Niñas leyendo en ambiente escolar",
  },
};

export const impact = {
  title: "Impacto que buscamos",
  body:
    "Ser referencia nacional en intervención temprana y acompañamiento educativo, con profesionales formados, continuidad domiciliaria y resultados medibles que dignifiquen a la niñez.",
  image: {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1000&q=80",
    alt: "Niños interactuando en aula",
  },
};

export const founder = {
  title: "Nuestra fundadora",
  paragraphs: [
    "Rocío impulsa una visión donde la terapia no termina en la consulta: se traduce en hábitos, vínculos y redes de apoyo en casa y en el colegio.",
    "Desde Perú Learn Easy articulamos formación de equipos, protocolos clínicos y experiencias para familias, manteniendo siempre el foco en la dignidad del niño.",
  ],
  name: "Rocio Vilchez",
  portrait: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    alt: "Retrato de Rocio Vilchez, fundadora",
  },
};

export const staff = [
  {
    name: "Rocio Vilchez",
    role: "CEO & Founder",
    photo: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
      alt: "Rocio Vilchez",
    },
  },
  {
    name: "Sandra Alvarado",
    role: "Coordinadora general",
    photo: {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
      alt: "Sandra Alvarado",
    },
  },
  {
    name: "Nataly Huerta",
    role: "Directora general",
    photo: {
      src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&q=80",
      alt: "Nataly Huerta",
    },
  },
] as const;
