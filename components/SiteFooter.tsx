import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="site-footer tone-plum">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <Logo />
            <p className="site-footer__line">Larp responsibly.</p>
          </div>
          <ul className="site-footer__links">
            <li>
              <Link href="/topics">Topics</Link>
            </li>
            <li>
              <Link href="/write">Write a pack</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer__fine">
          <span>Know ball in 5 minutes.</span>
          <span>Every pack on this site is placeholder content for now.</span>
        </div>
      </div>
    </footer>
  );
}
