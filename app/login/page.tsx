import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SignInButtons } from "@/components/SignInButtons";
import { devAuthEnabled, safeNext, supabaseConfigured } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Sign in" };

type Props = { searchParams: Promise<{ next?: string; error?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const next = safeNext(params.next);
  const failed = params.error === "callback";

  return (
    <>
      <SiteHeader tone="pink" hideSignIn />
      <main id="main" className="tone-pink">
        <div className="wrap login">
          <h1>Sign in. Then act natural.</h1>
          <p className="t-lead login__lead">
            Packs are for members. Pick an account and you&rsquo;ll go straight to{" "}
            {next === "/topics" ? "the topics" : "the page you wanted"}.
          </p>
          {failed && (
            <p className="login__error" role="alert">
              That sign-in didn&rsquo;t go through. Give it another go.
            </p>
          )}
          <SignInButtons next={next} configured={supabaseConfigured} devEnabled={devAuthEnabled} />
        </div>
      </main>
    </>
  );
}
