/**
 * Personalización central del cliente. `public/robots.txt` va a `dist/` en build;
 * mantener sincronizada la línea `Sitemap:` con este `origin`.
 */
const whatsappPrefilledMessage =
  "Hola Diverty, quiero más información sobre sus programas y horarios.";

export const siteConfig = {
  /** URL absoluta sin barra final (canónicas construidas con `resolveCanonical`) */
  origin: "https://www.diverty.pe",
  name: "DIVERTY",
  /**
   * Imagen por defecto Open Graph/Twitter cuando la página no define `ogImage`.
   * Ideal: recurso horizontal ~1200×630 en `public/` y actualizar esta ruta.
   */
  defaultShareImagePath: "/logo.png",
  /**
   * GTM en `Layout`; GA4 debe dispararse desde GTM (etiqueta “Google Analytics:
   * etiqueta de Google” / GA4 Configuration con este measurement ID) para evitar
   * doble page_view cargando también gtag.js aquí.
   */
  analytics: {
    googleTagManagerId: "GTM-NDGL32CT",
    ga4MeasurementId: "G-RHX74NC273",
  },
  /** Línea bajo el logo en el header (marca). */
  tagline: "Cursos de capacitación profesional con enfoque práctico.",
  locale: "es",
  lang: "es-PE" as const,
  contact: {
    email: "perulearneasy@gmail.com",
    phone: "+51 915 913 451",
    /** Para enlaces `tel:` y wa.me */
    phoneE164: "+51915913451",
    whatsappMessage: whatsappPrefilledMessage,
    whatsapp: `https://wa.me/51915913451?text=${encodeURIComponent(whatsappPrefilledMessage)}`,
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
