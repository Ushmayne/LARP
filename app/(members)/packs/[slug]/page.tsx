import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, CornerDownRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { ReadingBar } from "@/components/ReadingBar";
import { getPack, getTopic } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pack = getPack((await params).slug);
  return { title: pack ? pack.title : "Pack not found", description: pack?.tagline };
}

const sections = [
  { id: "facts", label: "Facts & names" },
  { id: "slang", label: "Slang" },
  { id: "takes", label: "Hot takes" },
  { id: "deep-cuts", label: "Deep cuts" },
  { id: "vibe-check", label: "Vibe check" },
];

export default async function PackPage({ params }: Props) {
  const pack = getPack((await params).slug);
  if (!pack) notFound();
  const topic = getTopic(pack.topic);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="tone-plum page-head">
          <div className="wrap">
            {topic && (
              <Link href={`/topics/${topic.slug}`} className="crumb">
                <ArrowLeft aria-hidden="true" strokeWidth={2.5} />
                {topic.name}
              </Link>
            )}
            <h1>{pack.title}</h1>
            <p className="t-lead page-head__lead">{pack.tagline}</p>
            <div className="pack-head__meta">
              <span className="meta-inline">
                <Clock aria-hidden="true" strokeWidth={2.5} width={20} height={20} />
                {pack.minutes} min read
              </span>
              <PlaceholderTag />
            </div>
          </div>
        </section>

        <ReadingBar sections={sections} minutes={pack.minutes} targetId="sheet" />

        <div className="tone-grey">
          <div id="sheet" className="wrap sheet">
            <section id="facts" className="sheet-section" aria-labelledby="facts-h">
              <div className="sheet-section__head">
                <h2 id="facts-h">Key facts &amp; names</h2>
                <p>The names you&rsquo;re expected to know. Skim these first.</p>
              </div>
              <dl>
                {pack.facts.map((f) => (
                  <div key={f.name} className="sheet-row">
                    <dt className="sheet-row__label">{f.name}</dt>
                    <dd className="sheet-row__body">
                      {f.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="slang" className="sheet-section" aria-labelledby="slang-h">
              <div className="sheet-section__head">
                <h2 id="slang-h">Slang &amp; phrases</h2>
                <p>Lines you can drop, what they mean, and when they land.</p>
              </div>
              <dl>
                {pack.slang.map((s) => (
                  <div key={s.phrase} className="sheet-row">
                    <dt className="sheet-row__label">{s.phrase}</dt>
                    <dd className="sheet-row__body">
                      <p>{s.meaning}</p>
                      <p className="sheet-row__use">
                        <span className="tag">Use it</span>
                        <span>{s.use}</span>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="takes" className="sheet-section" aria-labelledby="takes-h">
              <div className="sheet-section__head">
                <h2 id="takes-h">Hot takes</h2>
                <p>Pick one. Say it like you mean it. Here&rsquo;s your backup when someone argues.</p>
              </div>
              <ul className="rows">
                {pack.takes.map((t) => (
                  <li key={t.take} className="sheet-row">
                    <p className="take">&ldquo;{t.take}&rdquo;</p>
                    <div className="sheet-row__body">
                      <p>{t.why}</p>
                      <p className="pushback">
                        <CornerDownRight aria-hidden="true" strokeWidth={2.5} />
                        <span>{t.pushback}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="deep-cuts" className="sheet-section" aria-labelledby="cuts-h">
              <div className="sheet-section__head">
                <h2 id="cuts-h">Insane ball knowledge</h2>
                <p>Deep cuts. Use one, maybe two. Any more and they&rsquo;ll get suspicious.</p>
              </div>
              <ul className="rows">
                {pack.deepCuts.map((c) => (
                  <li key={c.fact} className="sheet-row sheet-row--cut">
                    <p className="cut">{c.fact}</p>
                    <p className="sheet-row__body sheet-row__use sheet-row__use--flush">
                      <span className="tag">Drop it</span>
                      <span>{c.drop}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section id="vibe-check" className="tone-indigo band" aria-labelledby="vibe-h">
          <div className="wrap cta">
            <h2 id="vibe-h" className="t-section">
              Could you pass as a <em>real fan?</em>
            </h2>
            <div className="cta__body">
              <p className="t-lead">
                {pack.quiz.length} questions. About a minute. No one has to know how you did.
              </p>
              <Link href={`/packs/${pack.slug}/vibe-check`} className="btn btn--pink">
                Take the vibe check
                <ArrowRight aria-hidden="true" strokeWidth={2.75} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
