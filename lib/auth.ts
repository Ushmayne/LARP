import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DEV_COOKIE, devAuthEnabled, supabaseConfigured } from "./supabase/config";
import { createSupabaseServer } from "./supabase/server";

export type Viewer = {
  id: string;
  name: string;
  email: string | null;
  avatarUrl: string | null;
  isTestUser: boolean;
};

/** The signed-in person, or null. Verifies the session with Supabase rather than trusting the cookie. */
export async function getViewer(): Promise<Viewer | null> {
  if (devAuthEnabled) {
    const store = await cookies();
    if (store.get(DEV_COOKIE)?.value === "1") {
      return { id: "dev-test-user", name: "Test user", email: null, avatarUrl: null, isTestUser: true };
    }
  }

  if (!supabaseConfigured) return null;

  const supabase = await createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;

  const meta = data.user.user_metadata ?? {};
  return {
    id: data.user.id,
    name: meta.full_name || meta.name || meta.user_name || data.user.email || "Larper",
    email: data.user.email ?? null,
    avatarUrl: meta.avatar_url ?? null,
    isTestUser: false,
  };
}

/** Use in server components that must not render for signed-out visitors. */
export async function requireViewer() {
  const viewer = await getViewer();
  if (!viewer) redirect("/login");
  return viewer;
}
