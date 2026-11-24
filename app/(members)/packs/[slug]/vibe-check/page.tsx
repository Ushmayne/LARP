import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { VibeCheck } from "@/components/VibeCheck";
import { getPack } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pack = getPack((await params).slug);
  return { title: pack ? `Vibe check: ${pack.title}` : "Vibe check" };
}

export default async function VibeCheckPage({ params }: Props) {
  const pack = getPack((await params).slug);
  if (!pack) notFound();
  return (
    <>
      <SiteHeader />
      <main id="main" className="tone-plum">
        <VibeCheck quiz={pack.quiz} packSlug={pack.slug} packTitle={pack.title} />
      </main>
    </>
  );
}
