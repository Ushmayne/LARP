import Link from "next/link";
import { LogOut } from "lucide-react";
import { getViewer } from "@/lib/auth";
import { Logo } from "./Logo";

type Props = { tone?: "pink" | "plum"; current?: "topics" | "write"; hideSignIn?: boolean };

export async function SiteHeader({ tone = "plum", current, hideSignIn = false }: Props) {
  const onPink = tone === "pink";
  const viewer = await getViewer();

  return (
    <header className={`site-header tone-${tone}${viewer ? " site-header--member" : ""}`}>
      <div className="wrap site-header__row">
        <Logo tone={onPink ? "on-pink" : "on-plum"} />
        <nav className="site-nav" aria-label="Main">
          {viewer ? (
            <>
              <Link href="/topics" aria-current={current === "topics" ? "page" : undefined}>
                Topics
              </Link>
              <Link
                href="/write"
                className={`btn site-nav__cta ${onPink ? "" : "btn--pink"}`}
                aria-current={current === "write" ? "page" : undefined}
              >
                Write a pack
              </Link>
              <form action="/auth/signout" method="post">
                <button
                  type="submit"
                  className="icon-btn site-nav__out"
                  aria-label={`Sign out${viewer.isTestUser ? " of the test account" : `, ${viewer.name}`}`}
                  title="Sign out"
                >
                  <LogOut aria-hidden="true" strokeWidth={2.5} />
                </button>
              </form>
            </>
          ) : hideSignIn ? null : (
            <Link href="/login" className={`btn site-nav__cta ${onPink ? "" : "btn--pink"}`}>
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
