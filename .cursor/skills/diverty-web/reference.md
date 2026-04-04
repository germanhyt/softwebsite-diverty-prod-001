# Diverty — referencia PLANNER (snippets)

Material de apoyo; la fuente de verdad sigue siendo `PLANNER.md` y los archivos reales del repo.

## astro.config.mjs (patrón)

```javascript
// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: "static",
});
```

## Dependencias típicas (PLANNER)

**dependencies**: `@astrojs/react`, `@astrojs/sitemap`, `@astrojs/tailwind`, `astro`, `framer-motion`, `react`, `react-dom`, `sweetalert2`, `swiper`.

**devDependencies**: `@tailwindcss/typography`, `@types/node`, `@types/react`, `@types/react-dom`, `autoprefixer`, `postcss`, `react-icons`, `tailwindcss`, `typescript`.

## tailwind.config.ts (esqueleto)

```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        sans: [
          "Poppins",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: {},
        text: {},
        background: {},
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(/* definir */)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
```
