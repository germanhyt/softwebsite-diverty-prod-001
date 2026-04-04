/**
 * Personalización central del cliente — mantener sincronizado con `public/robots.txt` (Sitemap absoluto).
 */
export const siteConfig = {
  /** URL canónica sin barra final */
  origin: "https://www.diverty.pe",
  name: "DIVERTY",
  tagline: "Cursos de capacitación profesional con enfoque práctico.",
  locale: "es",
  lang: "es-PE" as const,
  contact: {
    email: "diverty.p@gmail.com",
    phone: "+51 999 999 999",
    /** URL completa wa.me para el ícono de WhatsApp en footer */
    whatsapp: "https://wa.me/51999999999",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/diverty",
    facebook: "https://www.facebook.com/diverty",
    instagram: "https://www.instagram.com/diverty",
    youtube: "https://www.youtube.com/@diverty",
  },
} as const;
