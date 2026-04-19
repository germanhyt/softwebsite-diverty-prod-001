/**
 * Tipo compartido con programas de la home (`familiesHome.ts`).
 * Contenido de capacitación y página Quiénes somos: `nosotrosTraining.ts`.
 */

export type CourseTab = {
  id: string;
  label: string;
  title: string;
  /** Subtítulo (cursos de formación en `/nosotros`). */
  subtitle?: string;
  benefits: string[];
  /** Párrafo único de beneficios (lista apilada de cursos). */
  benefitParagraph?: string;
  /** Resumen en tabs de la home; opcional en módulos solo con `benefitParagraph`. */
  detail?: string;
  image: { src: string; alt: string };
};
