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
  "Cursos y capacitación profesional para docentes y especialistas del desarrollo infantil. Certificación, práctica guiada y comunidad Diverty.";

const nosotrosDescription =
  "Conoce la historia de Diverty, nuestra fundadora y el equipo que impulsa intervención de calidad para niñas y niños en Perú.";

export const seoConfig = {
  familiesTitle: `${siteConfig.name} — Neurodesarrollo y Montessori`,
  estrategiaTitle: `${siteConfig.name} — Estrategia y capacitación`,
  nosotrosTitle: `Quiénes somos | ${siteConfig.name}`,
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
