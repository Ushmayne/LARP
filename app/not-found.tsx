import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader tone="pink" />
      <main id="main" className="tone-pink">
        <div className="wrap lost">
          <h1>This page is bluffing.</h1>
          <p className="t-lead">There&rsquo;s nothing here. Act natural and head back to the topics.</p>
          <Link href="/topics" className="btn">
            Browse topics
          </Link>
        </div>
      </main>
    </>
  );
}
