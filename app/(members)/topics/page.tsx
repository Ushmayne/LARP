import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { TopicBrowser } from "@/components/TopicBrowser";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Topics" };

export default function TopicsPage() {
  return (
    <>
      <SiteHeader current="topics" />
      <main id="main">
        <Suspense>
          <TopicBrowser />
        </Suspense>
      </main>
    </>
  );
}
