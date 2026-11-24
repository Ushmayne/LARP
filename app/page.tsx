import Link from "next/link";
import { ArrowRight, Clock, Lock, PenLine } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { TopicSearch } from "@/components/TopicSearch";
import { SignInButtons } from "@/components/SignInButtons";
import { PlaceholderTag } from "@/components/PlaceholderTag";
import { getViewer } from "@/lib/auth";
import { getPack, getTopic, packs, topics } from "@/lib/content";
import { devAuthEnabled, supabaseConfigured } from "@/lib/supabase/config";

export const dynamic = "force-dynamic";

const steps = [
  { stamp: "0:00", title: "Key facts & names", body: "The players, characters and eras you're expected to know." },
  { stamp: "1:15", title: "Slang & phrases", body: "Lines you can drop, and what they actually mean." },
  { stamp: "2:30", title: "Hot takes", body: "Ready-made opinions, plus what to say when someone pushes back." },
  { stamp: "3:45", title: "Insane ball knowledge", body: "Deep cuts that make you sound like you've been here for years." },
  { stamp: "5:00", title: "Vibe check", body: "A quick quiz. Would you pass as a real fan?" },
];

const PEEK_PACK = "nba-starter";

export default async function Home() {
  const viewer = await getViewer();
  const stickerTopics = topics.slice(0, 6);
  const peek = getPack(PEEK_PACK);

  return (
    <>
      <SiteHeader tone="pink" />
      <main id="main">
        <section className="tone-pink hero" aria-label="Act like you know ball">
          <div className="wrap hero__grid">
            <div>
              <h1>Act like you know ball.</h1>
              <p className="t-lead hero__lead">
                Five-minute packs on any fandom. The names, the slang, the hot takes. Then a vibe check tells you if
                you&rsquo;d pass.
              </p>
              {viewer ? (
                <TopicSearch id="hero-search" />
              ) : (
                <SignInButtons next="/topics" configured={supabaseConfigured} devEnabled={devAuthEnabled} />
              )}
              <div className="hero__stickers">
                <span className="t-label hero__stickers-label">{viewer ? "Or start with" : "Packs on things like"}</span>
                {stickerTopics.map((t, i) => (
                  <Link key={t.slug} href={`/topics/${t.slug}`} className={`sticker ${i % 2 ? "sticker--indigo" : ""}`}>
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>

            <figure className="chat" aria-label="Sample conversation using lines from the NBA pack">
              <figcaption className="chat__caption">
                <PlaceholderTag grey />
                <span className="t-label">Lines from the NBA pack</span>
              </figcaption>
              <p className="bubble bubble--fan">
                <span className="bubble__who">Real fan</span>
                Jokić with another triple-double. Unreal.
              </p>
              <p className="bubble bubble--you">
                <span className="bubble__who">You, larping</span>
                Passes like a point guard. Most skilled big man ever, honestly.
              </p>
              <p className="bubble bubble--fan bubble--big">
                <span className="bubble__who">Real fan</span>
                Okay, you know ball.
              </p>
            </figure>
          </div>
        </section>

        <section id="how" className="tone-plum band" aria-labelledby="how-heading">
          <div className="wrap">
            <div className="rail-intro">
              <h2 id="how-heading" className="t-section">
                Five minutes. Four parts. One vibe check.
              </h2>
              <p>
                A pack is not a course. It&rsquo;s what fans actually say and argue about, cut down to read on the way
                there.
              </p>
            </div>
            <ol className="rail">
              {steps.map((s) => (
                <li key={s.stamp} className="rail__step">
                  <span className="t-label rail__stamp">{s.stamp}</span>
                  <span className="rail__dot" aria-hidden="true" />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {viewer ? (
          <section className="tone-grey band" aria-labelledby="packs-heading">
            <div className="wrap">
              <div className="section-head">
                <h2 id="packs-heading" className="t-section">
                  Packs to start with
                </h2>
                <div className="section-head__aside">
                  <PlaceholderTag />
                  <Link href="/topics" className="btn btn--outline btn--small">
                    All topics
                  </Link>
                </div>
              </div>
              <ul className="rows">
                {packs.map((p) => {
                  const topic = getTopic(p.topic);
                  return (
                    <li key={p.slug}>
                      <Link href={`/packs/${p.slug}`} className="row-link">
                        <span className="row-link__lead">
                          <span className="sticker sticker--small">{topic?.name}</span>
                        </span>
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
                  );
                })}
              </ul>
            </div>
          </section>
        ) : (
          peek && (
            <section className="tone-grey band" aria-labelledby="peek-heading">
              <div className="wrap">
                <div className="section-head">
                  <h2 id="peek-heading" className="t-section">
                    A peek inside a pack
                  </h2>
                  <div className="section-head__aside">
                    <PlaceholderTag />
                    <span className="peek__from">From &ldquo;{peek.title}&rdquo;</span>
                  </div>
                </div>
                <div className="peek">
                  <dl className="peek__rows">
                    {peek.slang.slice(0, 4).map((s) => (
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
                  <div className="peek__gate">
                    <Lock aria-hidden="true" strokeWidth={2.5} />
                    <h3 className="t-small">The rest is for members.</h3>
                    <p>Names, hot takes, deep cuts and the vibe check. Sign in to read the whole thing.</p>
                    <Link href={`/login?next=${encodeURIComponent(`/packs/${peek.slug}`)}`} className="btn">
                      Sign in to read it
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        )}

        <section className="tone-indigo band" aria-labelledby="write-heading">
          <div className="wrap cta">
            <h2 id="write-heading" className="t-section">
              Think you know ball? <em>Write a pack.</em>
            </h2>
            <div className="cta__body">
              <p className="t-lead">Packs come from people that know what they are talking about.</p>
              <p>Teach everyone what actual fans are supposed to say and know.</p>
              <Link href="/write" className="btn btn--pink">
                <PenLine aria-hidden="true" strokeWidth={2.5} />
                Write a pack
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
