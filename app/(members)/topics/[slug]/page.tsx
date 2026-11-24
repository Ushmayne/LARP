import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, PenLine } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { getTopic, packsForTopic } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return { title: topic ? topic.name : "Topic not found" };
}

export default async function TopicPage({ params }: Props) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const list = packsForTopic(topic.slug);
  const count = list.length === 0 ? "No packs yet" : list.length === 1 ? "1 pack" : `${list.length} packs`;

  return (
    <>
      <SiteHeader current="topics" />
      <main id="main">
        <section className="tone-plum page-head">
          <div className="wrap">
            <Link href="/topics" className="crumb">
              <ArrowLeft aria-hidden="true" strokeWidth={2.5} />
              All topics
            </Link>
            <h1 className="topic-sticker">{topic.name}</h1>
            <p className="t-lead page-head__lead">
              {topic.category}. {topic.blurb}
            </p>
          </div>
        </section>

        <section className="tone-grey band band--tight">
          <div className="wrap">
            <div className="section-head">
              <h2 className="t-small">{count}</h2>
              {list.length > 0 && <PlaceholderTag />}
            </div>
            {list.length > 0 ? (
              <ul className="rows">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/packs/${p.slug}`} className="row-link row-link--two">
                      <span>
                        <span className="row-link__title">{p.title}</span>
                        <span className="row-link__sub">{p.tagline}</span>
                      </span>
                      <span className="row-link__meta">
                        <span className="meta-inline">
                          <Clock aria-hidden="true" strokeWidth={2.5} />
                          {p.minutes} min
                        </span>
                        <span className="row-link__go" aria-hidden="true">
                          <ArrowRight strokeWidth={2.75} />
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty">
                <h2>Nobody&rsquo;s written a {topic.name} pack.</h2>
                <p>Know what {topic.name} fans actually say? Write the first pack and teach the rest of us.</p>
                <Link href={`/write?topic=${encodeURIComponent(topic.name)}`} className="btn">
                  <PenLine aria-hidden="true" strokeWidth={2.5} />
                  Write the first one
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
