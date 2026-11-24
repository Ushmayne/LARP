"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Circle, Plus, Trash2 } from "lucide-react";

type Pair = { a: string; b: string };
type Q = { q: string; options: string[]; answer: number | null };
type Draft = {
  topic: string;
  title: string;
  tagline: string;
  facts: Pair[];
  slang: Pair[];
  takes: Pair[];
  cuts: Pair[];
  quiz: Q[];
};

const KEY = "larp:draft:v1";
const WPM = 200;

const blankPair = (): Pair => ({ a: "", b: "" });
const blankQ = (): Q => ({ q: "", options: ["", "", "", ""], answer: null });
const blankDraft = (topic = ""): Draft => ({
  topic,
  title: "",
  tagline: "",
  facts: [blankPair(), blankPair(), blankPair()],
  slang: [blankPair(), blankPair(), blankPair()],
  takes: [blankPair(), blankPair()],
  cuts: [blankPair(), blankPair()],
  quiz: [blankQ()],
});

function readDraft(): Draft | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Draft) : null;
  } catch {
    return null;
  }
}

const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const filled = (rows: Pair[]) => rows.filter((r) => r.a.trim() && r.b.trim()).length;

type PairSection = "facts" | "slang" | "takes" | "cuts";
const stacked: PairSection[] = ["takes", "cuts"];

const pairCopy: Record<PairSection, { title: string; hint: string; a: string; b: string; aPh: string; bPh: string; add: string }> = {
  facts: {
    title: "Key facts & names",
    hint: "The players, characters, teams or eras people expect you to know. One line each.",
    a: "Name",
    b: "Why it matters",
    aPh: "e.g. Michael Scott",
    bPh: "e.g. The regional manager. Desperate to be loved.",
    add: "Add a name",
  },
  slang: {
    title: "Slang & phrases",
    hint: "What fans actually say. Explain it like you would to a friend.",
    a: "Phrase",
    b: "What it means and when to say it",
    aPh: "e.g. He's cooking",
    bPh: "e.g. A player is scoring at will. Say it when he hits three in a row.",
    add: "Add a phrase",
  },
  takes: {
    title: "Hot takes",
    hint: "Opinions worth having, plus a comeback for when someone disagrees.",
    a: "Take",
    b: "If they push back",
    aPh: "e.g. Rings don't decide the GOAT debate.",
    bPh: "e.g. Ask where Bill Russell ranks. He has eleven.",
    add: "Add a take",
  },
  cuts: {
    title: "Insane ball knowledge",
    hint: "Deep cuts that make a real fan look twice. Facts only, nothing made up.",
    a: "Deep cut",
    b: "When to drop it",
    aPh: "e.g. Wilt scored 100 in 1962. No video exists.",
    bPh: "e.g. When someone calls a 50-point game historic.",
    add: "Add a deep cut",
  },
};

export function PackComposer() {
  const params = useSearchParams();
  const [draft, setDraft] = useState<Draft>(() => blankDraft());
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load a saved draft, or prefill the topic from ?topic=
  useEffect(() => {
    const saved = readDraft();
    const topic = params.get("topic") ?? "";
    if (saved) setDraft(topic && !saved.topic ? { ...saved, topic } : saved);
    else if (topic) setDraft(blankDraft(topic));
    setLoaded(true);
  }, [params]);

  // Autosave, debounced
  useEffect(() => {
    if (!loaded) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(KEY, JSON.stringify(draft));
        setStatus("Draft saved in this browser.");
      } catch {
        setStatus("Couldn't save. This browser is blocking storage, so keep this tab open.");
      }
    }, 500);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [draft, loaded]);

  const stats = useMemo(() => {
    const pairWords = (rows: Pair[]) => rows.reduce((n, r) => n + words(r.a) + words(r.b), 0);
    const total =
      words(draft.title) +
      words(draft.tagline) +
      pairWords(draft.facts) +
      pairWords(draft.slang) +
      pairWords(draft.takes) +
      pairWords(draft.cuts);
    const quizReady = draft.quiz.filter((q) => q.q.trim() && q.options.every((o) => o.trim()) && q.answer !== null).length;
    return { total, minutes: total / WPM, quizReady };
  }, [draft]);

  const checks = [
    { label: "Topic and title", done: Boolean(draft.topic.trim() && draft.title.trim()) },
    { label: "4 or more names", done: filled(draft.facts) >= 4 },
    { label: "4 or more phrases", done: filled(draft.slang) >= 4 },
    { label: "3 or more hot takes", done: filled(draft.takes) >= 3 },
    { label: "3 or more deep cuts", done: filled(draft.cuts) >= 3 },
    { label: "5 vibe check questions", done: stats.quizReady >= 5 },
    { label: "Reads in 5 minutes or less", done: stats.total > 0 && stats.minutes <= 5 },
  ];
  const doneCount = checks.filter((c) => c.done).length;

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft((d) => ({ ...d, [k]: v }));

  function updatePair(section: PairSection, i: number, key: keyof Pair, value: string) {
    setDraft((d) => ({ ...d, [section]: d[section].map((r, k) => (k === i ? { ...r, [key]: value } : r)) }));
  }
  function addPair(section: PairSection) {
    setDraft((d) => ({ ...d, [section]: [...d[section], blankPair()] }));
  }
  function removePair(section: PairSection, i: number) {
    setDraft((d) => ({ ...d, [section]: d[section].filter((_, k) => k !== i) }));
  }
  function updateQ(i: number, patch: Partial<Q>) {
    setDraft((d) => ({ ...d, quiz: d.quiz.map((q, k) => (k === i ? { ...q, ...patch } : q)) }));
  }

  function clearDraft() {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* storage unavailable: nothing to remove */
    }
    setDraft(blankDraft());
    setConfirmClear(false);
    setStatus("Draft cleared.");
  }

  const mins = stats.minutes;
  const minsLabel = stats.total === 0 ? "0" : mins < 1 ? "<1" : mins.toFixed(1).replace(/\.0$/, "");

  return (
    <div className="wrap composer">
      <form className="composer__main" onSubmit={(e) => e.preventDefault()} aria-label="Pack draft">
        <section aria-labelledby="basics-h">
          <div className="composer__section-head">
            <h2 id="basics-h">The basics</h2>
            <p className="composer__hint">What it&rsquo;s about, and a one-liner that sells it.</p>
          </div>
          <div className="field">
            <label htmlFor="f-topic">Topic</label>
            <input
              id="f-topic"
              className="input"
              value={draft.topic}
              onChange={(e) => set("topic", e.target.value)}
              placeholder="e.g. Formula 1"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label htmlFor="f-title">Pack title</label>
            <input
              id="f-title"
              className="input"
              value={draft.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. F1: survive a race day watch party"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label htmlFor="f-tagline">One-line pitch</label>
            <input
              id="f-tagline"
              className="input"
              value={draft.tagline}
              onChange={(e) => set("tagline", e.target.value)}
              placeholder="e.g. Enough to know why everyone's yelling about tyres."
              autoComplete="off"
            />
          </div>
        </section>

        {(Object.keys(pairCopy) as PairSection[]).map((section) => {
          const c = pairCopy[section];
          return (
            <section key={section} aria-labelledby={`${section}-h`}>
              <div className="composer__section-head">
                <h2 id={`${section}-h`}>{c.title}</h2>
                <p className="composer__hint">{c.hint}</p>
              </div>
              {draft[section].map((row, i) => (
                <div key={i} className="entry">
                  <div className={`entry__fields${stacked.includes(section) ? " entry__fields--stack" : ""}`}>
                    <div className="field">
                      <label htmlFor={`${section}-${i}-a`}>
                        {c.a} {i + 1}
                      </label>
                      {stacked.includes(section) ? (
                        <textarea
                          id={`${section}-${i}-a`}
                          className="textarea textarea--short"
                          rows={2}
                          value={row.a}
                          onChange={(e) => updatePair(section, i, "a", e.target.value)}
                          placeholder={i === 0 ? c.aPh : undefined}
                        />
                      ) : (
                        <input
                          id={`${section}-${i}-a`}
                          className="input"
                          value={row.a}
                          onChange={(e) => updatePair(section, i, "a", e.target.value)}
                          placeholder={i === 0 ? c.aPh : undefined}
                          autoComplete="off"
                        />
                      )}
                    </div>
                    <div className="field" style={{ marginTop: 0 }}>
                      <label htmlFor={`${section}-${i}-b`}>{c.b}</label>
                      <textarea
                        id={`${section}-${i}-b`}
                        className="textarea"
                        rows={2}
                        value={row.b}
                        onChange={(e) => updatePair(section, i, "b", e.target.value)}
                        placeholder={i === 0 ? c.bPh : undefined}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => removePair(section, i)}
                    aria-label={`Remove ${c.a.toLowerCase()} ${i + 1}`}
                    disabled={draft[section].length === 1}
                  >
                    <Trash2 aria-hidden="true" strokeWidth={2.25} />
                  </button>
                </div>
              ))}
              <button type="button" className="btn btn--outline btn--small add-row" onClick={() => addPair(section)}>
                <Plus aria-hidden="true" strokeWidth={2.75} />
                {c.add}
              </button>
            </section>
          );
        })}

        <section aria-labelledby="quiz-h">
          <div className="composer__section-head">
            <h2 id="quiz-h">Vibe check</h2>
            <p className="composer__hint">
              Five questions that test what the pack taught. Four answers each; mark the right one.
            </p>
          </div>
          {draft.quiz.map((q, i) => (
            <div key={i} className="entry">
              <div className="entry__fields entry__fields--stack">
                <div className="field">
                  <label htmlFor={`q-${i}`}>Question {i + 1}</label>
                  <input
                    id={`q-${i}`}
                    className="input"
                    value={q.q}
                    onChange={(e) => updateQ(i, { q: e.target.value })}
                    placeholder={i === 0 ? "e.g. Your friend yells “He's cooking!” What's happening?" : undefined}
                    autoComplete="off"
                  />
                </div>
                <fieldset className="q-options">
                  <legend className="field-label" style={{ marginBottom: "0.4rem" }}>
                    Answers (pick the right one)
                  </legend>
                  {q.options.map((opt, k) => (
                    <div key={k} className="q-option">
                      <input
                        type="radio"
                        name={`q-${i}-answer`}
                        checked={q.answer === k}
                        onChange={() => updateQ(i, { answer: k })}
                        aria-label={`Answer ${k + 1} is correct`}
                      />
                      <input
                        className="input"
                        value={opt}
                        onChange={(e) =>
                          updateQ(i, { options: q.options.map((o, j) => (j === k ? e.target.value : o)) })
                        }
                        aria-label={`Question ${i + 1}, answer ${k + 1}`}
                        placeholder={`Answer ${k + 1}`}
                        autoComplete="off"
                      />
                    </div>
                  ))}
                </fieldset>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setDraft((d) => ({ ...d, quiz: d.quiz.filter((_, k) => k !== i) }))}
                aria-label={`Remove question ${i + 1}`}
                disabled={draft.quiz.length === 1}
              >
                <Trash2 aria-hidden="true" strokeWidth={2.25} />
              </button>
            </div>
          ))}
          {draft.quiz.length < 5 && (
            <button
              type="button"
              className="btn btn--outline btn--small add-row"
              onClick={() => setDraft((d) => ({ ...d, quiz: [...d.quiz, blankQ()] }))}
            >
              <Plus aria-hidden="true" strokeWidth={2.75} />
              Add a question
            </button>
          )}
        </section>
      </form>

      <aside className="checklist tone-plum" aria-labelledby="check-h">
        <h2 id="check-h">Pack check</h2>
        <p className="checklist__time">
          {minsLabel}
          <small>min read</small>
        </p>
        <p className={`checklist__verdict${mins > 5 ? " checklist__verdict--over" : ""}`}>
          {stats.total === 0
            ? "Start writing and we'll time it."
            : mins > 5
              ? "Over five minutes. Cut something."
              : "Under five minutes. Nice."}
        </p>
        <ul aria-label={`${doneCount} of ${checks.length} done`}>
          {checks.map((c) => (
            <li key={c.label} data-done={c.done}>
              {c.done ? <Check aria-hidden="true" strokeWidth={3} /> : <Circle aria-hidden="true" strokeWidth={2.25} />}
              <span>
                {c.label}
                <span className="sr-only">{c.done ? ", done" : ", not yet"}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="checklist__actions">
          <button type="button" className="btn btn--pink" disabled aria-describedby="submit-note">
            Submit for review
          </button>
          <p id="submit-note" className="checklist__status" style={{ marginTop: 0 }}>
            Submitting isn&rsquo;t open yet.
          </p>
          <button type="button" className="btn btn--outline-light btn--small" onClick={clearDraft} onBlur={() => setConfirmClear(false)}>
            {confirmClear ? "Tap again to clear" : "Clear draft"}
          </button>
        </div>
        <p className="checklist__status" role="status">
          {status}
        </p>
      </aside>
    </div>
  );
}
