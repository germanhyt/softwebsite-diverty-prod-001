---
name: diverty-web
description: >-
  Construye y mantiene el sitio educativo Diverty (Astro + React + Tailwind).
  Cubre islas React, estilos jerárquicos, SEO (seoConfig, site.config, robots,
  sitemap), helpers, carousels y breakpoints. Usar al trabajar en
  softwebsite-diverty-prod-001, maquetado Diverty, prototipos en
  src/assets/prototypes, o cuando el usuario cite PLANNER.md.
---

# Diverty — convenciones del proyecto

## Alcance

Sitio educativo **Diverty**. Prototipos UI (imágenes) en `src/assets/prototypes`. Salida estática (`output: "static"` en Astro).

## Stack y herramientas

- **Framework**: Astro 5 con integración React (`@astrojs/react`).
- **UI interactiva**: componentes React en TypeScript como **islas** (`client:*` según necesidad de hidratación); hooks y prácticas que minimicen renders innecesarios.
- **Estilos**: Tailwind con `tailwind.config.ts`; orden jerárquico de utilidades y buenas prácticas; **CSS puro** solo en casos puntuales (animaciones complejas, overrides finos).
- **Nota de versiones**: PLANNER apunta a Tailwind 4; el `package.json` del repo puede listar Tailwind 3.x — al implementar, alinear con la versión instalada y migrar cuando toque.
- **Iconos**: `react-icons` (devDependency; importar solo los iconos usados).
- **Animación**: `framer-motion`; alternativa CSS pura si es más simple o evita hidratación.
- **Carruseles**: `swiper` (cards, reseñas, bloques de contenido).
- **Alertas/modales**: `sweetalert2` cuando aplique.
- **Paquetes**: gestor **yarn** (`yarn`, `yarn add`, no npm por defecto).

## Astro: sitio, sitemap, Tailwind base

- `site` en `astro.config.mjs` debe ser la URL canónica del cliente (sustituir placeholders de ejemplo).
- `@astrojs/sitemap`: ajustar `changefreq`, `priority`, `lastmod` según política del cliente.
- `tailwind({ applyBaseStyles: false })`: las capas base vienen de tu CSS global; no duplicar resets.

## SEO y configuración centralizada

- Mantener **`config/seoConfig.ts`** y **`config/site.config.ts`** como fuente de metadatos del cliente (título, descripción, OG, URLs canónicas, etc.).
- **robots** y **sitemap**: archivos/rutas que Astro o integraciones esperan (`public/robots.txt` si es estático, sitemap vía `@astrojs/sitemap` alineado con `site`).

## Helpers

- Funciones compartidas en **`utils/helpers.ts`**; evitar duplicar lógica en componentes.

## Tipografía

- **Poppins** (Google Fonts) como única familia sans para todo el sitio, acorde a los prototipos en `src/assets/prototypes` (sans geométrico). Cargar en `Layout.astro` con `preconnect` + `display=swap`; en Tailwind usar `fontFamily.sans` → `font-sans` en `global.css` sobre `body`.
- Jerarquía de peso (Poppins): cuerpo **400**; UI **500–600**; **H1** **900** (`font-black`), **H2** **800** (`font-extrabold`), **H3** **800** — definido en `global.css` `@layer base`; fuente cargada hasta 900.

## Responsive — breakpoints Tailwind

Extender `theme.extend.screens` (y diseño responsive) con:

| Token | Min width |
|-------|-----------|
| `xs` | 375px |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |
| `3xl` | 1920px |
| `4xl` | 2560px |

Adaptar anchos, espaciados y tamaños de fuente en cada salto. El `container` del tema puede usar padding por breakpoint (p. ej. DEFAULT 1rem hasta `2xl`: 6rem) según `tailwind.config.ts` del repo.

## Tema Tailwind (extend)

- `content`: incluir `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`.
- `colors`: escalas `primary`, `text`, `background` — rellenar tokens del diseño Diverty.
- `backgroundImage.gradient-primary`: definir el gradiente real del brand (no dejar `linear-gradient()` vacío en producción).
- Plugin: `@tailwindcss/typography` cuando haya prose/markdown.

## Checklist rápido al añadir una sección

- [ ] ¿Necesita interactividad? → isla React con directiva `client:*` adecuada.
- [ ] ¿Icono? → `react-icons`.
- [ ] ¿Carrusel? → Swiper.
- [ ] ¿Animación? → Framer Motion o CSS.
- [ ] ¿SEO? → datos desde `seoConfig` / `site.config`.
- [ ] ¿Comparar con prototipo? → `src/assets/prototypes`.

## Detalles adicionales

Para tablas largas de dependencias o snippets completos de config, ver [reference.md](reference.md).
