export type ResendRuntimeEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM?: string;
};

export type ResendRuntimeConfig = {
  apiKey: string;
  from: string;
};

function unwrap(value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

export function getResendRuntimeConfig(
  env: ResendRuntimeEnv,
): ResendRuntimeConfig | null {
  const apiKey = unwrap(env.RESEND_API_KEY);
  const from = unwrap(env.RESEND_FROM);
  if (!apiKey || !from) return null;
  return { apiKey, from };
}
