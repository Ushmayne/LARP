import type { Metadata } from "next";
import { Suspense } from "react";
import { Info } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PackComposer } from "@/components/PackComposer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Write a pack" };

export default function WritePage() {
  return (
    <>
      <SiteHeader current="write" />
      <main id="main">
        <section className="tone-plum page-head">
          <div className="wrap">
            <h1>Write a pack.</h1>
            <p className="t-lead page-head__lead">
              Know a topic cold? Teach everyone what fans actually say. Keep it to five minutes or it failed.
            </p>
            <p className="notice">
              <Info aria-hidden="true" strokeWidth={2.5} />
              <span>Submitting isn&rsquo;t open yet. Your draft saves in this browser only, so you won&rsquo;t lose it.</span>
            </p>
          </div>
        </section>
        <div className="tone-grey">
          <Suspense>
            <PackComposer />
          </Suspense>
        </div>
      </main>
    </>
  );
}
