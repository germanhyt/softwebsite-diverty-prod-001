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
    phone: "+51 915 913 451",
    /** Para enlaces `tel:` y wa.me */
    phoneE164: "+51915913451",
    whatsapp: "https://wa.me/51915913451",
  },
  social: {
    facebook: "https://www.facebook.com/DIVERTY.PE/",
    instagram: "https://www.instagram.com/diverty.pe/",
    instagramEstrategia: "https://www.instagram.com/estrategia.peru/",
    instagramStore: "https://www.instagram.com/divertystore/",
    tiktok: "https://www.tiktok.com/@diverty.pe",
  },
  /** Texto junto al icono en el pie (diferenciar varias cuentas de Instagram). */
  socialHandle: {
    facebook: "DIVERTY.PE",
    instagram: "@diverty.pe",
    instagramEstrategia: "@estrategia.peru",
    instagramStore: "@divertystore",
    tiktok: "@diverty.pe",
  },
} as const;
