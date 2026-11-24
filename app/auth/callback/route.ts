import { NextResponse, type NextRequest } from "next/server";
import { safeNext, supabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServer } from "@/lib/supabase/server";

/** OAuth providers send the visitor back here with a one-time code. */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const next = safeNext(searchParams.get("next"));

  if (!supabaseConfigured || !code) {
    return NextResponse.redirect(new URL("/login?error=callback", origin));
  }

  const supabase = await createSupabaseServer();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(new URL(`/login?error=callback&next=${encodeURIComponent(next)}`, origin));
  }

  // `next` is a same-site path (see safeNext), so this can't bounce the visitor off-site.
  return NextResponse.redirect(new URL(next, origin));
}
