import { siteConfig } from "./site.config";

export type PageSeo = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
};

const familiesDescription =
  "Acompañamiento en neurodesarrollo y metodología Montessori: terapias, programas para niños y visitas a domicilio. Agenda una evaluación en Diverty.";

const estrategiaDescription =
  "Conoce la esencia de Perú Learn Easy: enfoque integral, impacto en la primera infancia y el equipo que impulsa Diverty.";

const nosotrosDescription =
  "Cursos de capacitación profesional con enfoque práctico: programas, certificación, metodología y testimonios. Diverty — Perú Learn Easy.";

export const seoConfig = {
  familiesTitle: `${siteConfig.name} — Neurodesarrollo y Montessori`,
  estrategiaTitle: `${siteConfig.name} — Estrategia | Perú Learn Easy`,
  nosotrosTitle: `${siteConfig.name} — Quiénes somos | Capacitación`,
  titleTemplate: `%s | ${siteConfig.name}`,
  familiesDescription,
  estrategiaDescription,
  nosotrosDescription,
  twitterHandle: "@diverty",
} as const;

export function resolveCanonical(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.origin.replace(/\/$/, "")}${p}`;
}

export function buildPageSeo(overrides: Partial<PageSeo> & Pick<PageSeo, "title" | "description">): PageSeo {
  return {
    path: "/",
    ...overrides,
  };
}

export const familiesHomeSeo = buildPageSeo({
  title: seoConfig.familiesTitle,
  description: seoConfig.familiesDescription,
  path: "/",
});

export const estrategiaSeo = buildPageSeo({
  title: seoConfig.estrategiaTitle,
  description: seoConfig.estrategiaDescription,
  path: "/estrategia",
});

export const nosotrosSeo = buildPageSeo({
  title: seoConfig.nosotrosTitle,
  description: seoConfig.nosotrosDescription,
  path: "/nosotros",
});
