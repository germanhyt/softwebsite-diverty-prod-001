El proyecto es un sitweb educativo "Diverty" y los prototipos de ui como imágen están en la ruta de src/assets/prototypes

Para maquetado y estilos:
- React island y typescript: con web componentes, hooks y buenas prácticas para un rendimiento óptimo de los renders.
- Tailwindcss 4 con tailwind.config.ts: estilos con orden jerárquico y buenas prácticas, en casos especiales usar css puro.
- React Icons: Para iconos
- Framer-motion: Para efectos y animaciones, en casos especiales usar css puro.
- Swiper: Para carousel de cards, reseñas, contenidos.

Para SEO:
- crear config/seoConfig.ts y config/site.config.ts: Preparado para personalizar datos del cliente
- además preparar el file de robots y sitemap
Helpers
- utils/helpers.ts: En caso de que se necesiten funciones comunes
Para el gestor de depndencias:
- yarn

Fuentes o tipografías (alineado a prototipos JPG en `src/assets/prototypes`):
- Familia única para UI: **Poppins** (Google Fonts), `font-display: swap` vía enlace en layout.
- Pesos en maquetación: **400** cuerpo, **500–600** párrafos de apoyo; **700–800** subtítulos y UI; titulares **H1** en **900** (`font-black`), **H2** en **800** (`font-extrabold`), **H3** en **800** — vía capa `@layer base` en `global.css` + Poppins cargada hasta **900**.
- Los mocks también recuerdan a **Montserrat**; el proyecto standardiza en Poppins para no duplicar cargas de fuente.
Para responsive: Adaptar los anchos, espaciados, tamaños de fuentes y mejroas para los tamaños de pantallas siguientes
    screens: {
    xs: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px",    
    "4xl": "2560px",
    }
Basado en el  astro.config.mjs:
- "// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.biotraining.pe",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-11-12"),
    }),
  ],
  output: "static",
});
"
Basado en el package.json:
- "  "dependencies": {
    "@astrojs/react": "^4.4.0",
    "@astrojs/sitemap": "^3.6.0",
    "@astrojs/tailwind": "^6.0.2",
    "astro": "^5.15.3",
    "framer-motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^24.9.1",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "react-icons": "^5.5.0",
    "tailwindcss": "^3.4.18",
    "typescript": "^5.9.3",
  }" 
Basado en el tailwind.config.ts:
- "import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.2rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
      },
      colors: {
        primary: {
        },
        text: {
        },
        background: {

        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient()',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
"