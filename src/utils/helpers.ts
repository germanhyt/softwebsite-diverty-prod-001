/** Une clases condicionales (patrón tipo clsx) sin dependencia extra. */
export function cn(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(" ");
}

/** URL absoluta bajo el origen del sitio. */
export function withOrigin(origin: string, path: string): string {
  const base = origin.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
