/**
 * Personalización central del cliente — mantener sincronizado con `public/robots.txt` (Sitemap absoluto).
 */
export const siteConfig = {
  /** URL canónica sin barra final */
  origin: "https://www.diverty.pe",
  name: "DIVERTY",
  /** Línea bajo el logo en el header (marca). */
  tagline: "Cursos de capacitación profesional con enfoque práctico.",
  locale: "es",
  lang: "es-PE" as const,
  contact: {
    email: "perulearneasy@gmail.com",
    phone: "987 654 321",
    /** Para enlaces `tel:` y wa.me */
    phoneE164: "+51987654321",
    whatsapp: "https://wa.me/51987654321",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/diverty",
    facebook: "https://www.facebook.com/diverty",
    instagram: "https://www.instagram.com/diverty",
    youtube: "https://www.youtube.com/@diverty",
  },
} as const;
