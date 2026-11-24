import { NextResponse, type NextRequest } from "next/server";
import { DEV_COOKIE, supabaseConfigured } from "@/lib/supabase/config";
import { createSupabaseServer } from "@/lib/supabase/server";

/** POST only, so a link or image on another site can't sign people out. */
export async function POST(request: NextRequest) {
  if (supabaseConfigured) {
    const supabase = await createSupabaseServer();
    await supabase.auth.signOut();
  }
  const response = NextResponse.redirect(new URL("/", request.nextUrl.origin), 303);
  response.cookies.delete(DEV_COOKIE);
  return response;
}
