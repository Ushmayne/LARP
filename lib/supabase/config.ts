// Public Supabase settings. The URL and publishable (anon) key are safe to expose to the browser;
// never put the service-role key in a NEXT_PUBLIC_ variable.
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabaseConfigured = Boolean(supabaseUrl && supabaseKey);

// Dev-only test sign-in. NODE_ENV is inlined at build time, so in a production build this is
// the constant `false` and every code path guarded by it is dead.
export const devAuthEnabled = process.env.NODE_ENV === "development";
export const DEV_COOKIE = "larp_dev_user";

export const MEMBER_PATHS = ["/topics", "/packs", "/write"];

export function isMemberPath(pathname: string) {
  return MEMBER_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/**
 * Only allow redirects to a path on this site. Rejects absolute URLs, protocol-relative
 * URLs ("//evil.com") and backslash tricks ("/\\evil.com") that browsers treat as off-site.
 */
export function safeNext(value: string | null | undefined, fallback = "/topics") {
  if (!value || typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return fallback;
  try {
    const url = new URL(value, "http://larp.local");
    if (url.origin !== "http://larp.local") return fallback;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}
