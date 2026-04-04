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
        center: true,
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
        /** Poppins: familia única de los prototipos (sans geométrico; mocks también se asemejan a Montserrat). */
        sans: ["Poppins", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0070C0",
          dark: "#005a9a",
          muted: "#3d8fc9",
        },
        accent: {
          orange: "#FF914D",
          green: "#2E8B57",
        },
        surface: {
          cream: "#FDF2E9",
          peach: "#FFECD9",
          card: "#FFFFFF",
        },
        footer: {
          DEFAULT: "#003359",
        },
        hero: {
          green: "#1B593D",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0070C0 0%, #005a9a 100%)",
        "gradient-cta": "linear-gradient(90deg, #0070C0 0%, #0090e8 100%)",
      },
      boxShadow: {
        nav: "0 8px 32px rgba(0, 51, 89, 0.12)",
        card: "0 4px 24px rgba(0, 80, 120, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
