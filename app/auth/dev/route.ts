import { NextResponse, type NextRequest } from "next/server";
import { DEV_COOKIE, devAuthEnabled, safeNext } from "@/lib/supabase/config";

/**
 * Test sign-in for local development only. In a production build `devAuthEnabled` is the
 * constant false, so this route always answers 404 and the cookie is never honoured.
 */
export async function POST(request: NextRequest) {
  if (!devAuthEnabled) return new NextResponse(null, { status: 404 });

  const form = await request.formData();
  const next = safeNext(String(form.get("next") ?? ""));
  const response = NextResponse.redirect(new URL(next, request.nextUrl.origin), 303);
  response.cookies.set(DEV_COOKIE, "1", { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 8 });
  return response;
}

export function GET() {
  return new NextResponse(null, { status: 404 });
}
