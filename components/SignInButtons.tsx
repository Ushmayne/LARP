"use client";

import { createBrowserClient } from "@supabase/ssr";
import { FlaskConical, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabaseKey, supabaseUrl } from "@/lib/supabase/config";

type Provider = "google" | "github";

type Props = {
  next: string;
  configured: boolean;
  devEnabled: boolean;
};

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" width="22" height="22" aria-hidden="true" focusable="false">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 16 16" width="22" height="22" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function SignInButtons({ next, configured, devEnabled }: Props) {
  const [busy, setBusy] = useState<Provider | null>(null);
  const [error, setError] = useState("");

  async function signIn(provider: Provider) {
    setError("");
    setBusy(provider);
    try {
      const supabase = createBrowserClient(supabaseUrl, supabaseKey);
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
      const { error: err } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
      if (err) throw err;
      // On success the browser is already navigating to the provider.
    } catch {
      setBusy(null);
      setError(`Couldn't reach ${provider === "google" ? "Google" : "GitHub"}. Try again in a second.`);
    }
  }

  return (
    <div className="signin">
      <div className="signin__buttons">
        <button
          type="button"
          className="btn signin__btn signin__btn--google"
          onClick={() => signIn("google")}
          disabled={!configured || busy !== null}
        >
          {busy === "google" ? <Loader2 className="spin" aria-hidden="true" strokeWidth={2.5} /> : <GoogleMark />}
          Continue with Google
        </button>
        <button
          type="button"
          className="btn signin__btn"
          onClick={() => signIn("github")}
          disabled={!configured || busy !== null}
        >
          {busy === "github" ? <Loader2 className="spin" aria-hidden="true" strokeWidth={2.5} /> : <GitHubMark />}
          Continue with GitHub
        </button>
      </div>

      <p className="signin__note" role={error ? "alert" : undefined}>
        {error ||
          (configured
            ? "Sign in to read packs and take vibe checks."
            : "Sign-in isn't set up yet. Add the Supabase keys from the README to turn it on.")}
      </p>

      {devEnabled && (
        <form action="/auth/dev" method="post" className="signin__dev">
          <input type="hidden" name="next" value={next} />
          <button type="submit" className="btn btn--outline btn--small">
            <FlaskConical aria-hidden="true" strokeWidth={2.5} />
            Continue as test user
          </button>
          <span>Only shows up in local development.</span>
        </form>
      )}
    </div>
  );
}
