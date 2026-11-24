"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowRight, PenLine, Search } from "lucide-react";
import { categories, packsForTopic, topics, type Category } from "@/lib/content";

export function TopicBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<Category | "All">("All");

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return topics.filter(
      (t) =>
        (cat === "All" || t.category === cat) &&
        (!needle || t.name.toLowerCase().includes(needle) || t.blurb.toLowerCase().includes(needle)),
    );
  }, [q, cat]);

  function updateQuery(value: string) {
    setQ(value);
    const v = value.trim();
    router.replace(v ? `/topics?q=${encodeURIComponent(v)}` : "/topics", { scroll: false });
  }

  const needle = q.trim();

  return (
    <>
      <section className="tone-plum page-head">
        <div className="wrap">
          <h1>Pick a topic.</h1>
          <p className="t-lead page-head__lead">Sports, shows, games, music, cars, wine. Whatever they&rsquo;re into.</p>
          <form className="search search--on-plum browse-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <Search className="search__icon" aria-hidden="true" strokeWidth={2.5} />
            <label htmlFor="browse-search" className="sr-only">
              Search topics
            </label>
            <input
              id="browse-search"
              type="search"
              value={q}
              onChange={(e) => updateQuery(e.target.value)}
              placeholder="Search topics"
              autoComplete="off"
              enterKeyHint="search"
            />
          </form>
          <div className="filters" role="group" aria-label="Filter by category">
            {(["All", ...categories] as const).map((c) => (
              <button key={c} type="button" className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="tone-grey band band--tight">
        <div className="wrap">
          <p className="result-count" aria-live="polite">
            {results.length === 1 ? "1 topic" : `${results.length} topics`}
          </p>
          {results.length > 0 ? (
            <ul className="rows rows--ruled">
              {results.map((t) => {
                const n = packsForTopic(t.slug).length;
                return (
                  <li key={t.slug}>
                    <Link href={`/topics/${t.slug}`} className="row-link row-link--two">
                      <span>
                        <span className="row-link__title">{t.name}</span>
                        <span className="row-link__sub">{t.blurb}</span>
                        <span className="row-link__cat">
                          {t.category} · {n === 0 ? "No packs yet" : n === 1 ? "1 pack" : `${n} packs`}
                        </span>
                      </span>
                      <span className="row-link__meta">
                        <span className="row-link__go" aria-hidden="true">
                          <ArrowRight strokeWidth={2.75} />
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="empty">
              <h2>{needle ? <>Nothing on &ldquo;{needle}&rdquo; yet.</> : "Nothing in this category yet."}</h2>
              <p>Nobody&rsquo;s written this one. If you know it cold, you could be first.</p>
              <Link href={needle ? `/write?topic=${encodeURIComponent(needle)}` : "/write"} className="btn">
                <PenLine aria-hidden="true" strokeWidth={2.5} />
                Write a pack about it
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
