"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";
import type { Question } from "@/lib/content";

type Props = { quiz: Question[]; packSlug: string; packTitle: string };

function verdict(score: number, total: number) {
  const ratio = score / total;
  if (ratio === 1) return { title: "You'd pass. Easily.", lead: "Nobody at that table will suspect a thing. Larp responsibly." };
  if (ratio >= 0.8) return { title: "You'd pass.", lead: "One slip, but a real fan slips too. Walk in confident." };
  if (ratio >= 0.6) return { title: "Shaky cover.", lead: "You'd survive small talk. Skim the pack once more before you go." };
  return { title: "Cover blown.", lead: "No shame. That's what the reread is for. Run it back." };
}

export function VibeCheck({ quiz, packSlug, packTitle }: Props) {
  const [index, setIndex] = useState(0);
  const [picks, setPicks] = useState<(number | null)[]>(() => quiz.map(() => null));
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const q = quiz[index];
  const pick = picks[index];
  const answered = pick !== null;
  const score = picks.reduce<number>((n, p, i) => (p === quiz[i].answer ? n + 1 : n), 0);

  // Move focus to the new question (or result) so keyboard and screen reader users follow along.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [index, done]);

  function choose(i: number) {
    if (answered) return;
    setPicks((prev) => prev.map((p, k) => (k === index ? i : p)));
  }

  function next() {
    if (index < quiz.length - 1) setIndex(index + 1);
    else setDone(true);
  }

  function restart() {
    setPicks(quiz.map(() => null));
    setIndex(0);
    setDone(false);
  }

  const steps = (
    <ol className="quiz__steps" aria-hidden="true">
      {quiz.map((item, i) => {
        const p = picks[i];
        const state = p === null ? (i === index && !done ? "current" : "todo") : p === item.answer ? "right" : "wrong";
        return <li key={i} data-state={state} />;
      })}
    </ol>
  );

  if (done) {
    const v = verdict(score, quiz.length);
    const misses = quiz.filter((item, i) => picks[i] !== item.answer);
    return (
      <div className="wrap quiz result pop-in">
        {steps}
        <p className="result__score" style={{ marginTop: "2.5rem" }} aria-hidden="true">
          {score}
          <span>/{quiz.length}</span>
        </p>
        <h1 ref={headingRef} tabIndex={-1}>
          <span className="sr-only">
            {score} out of {quiz.length}.{" "}
          </span>
          {v.title}
        </h1>
        <p className="t-lead result__lead">{v.lead}</p>
        <div className="result__actions">
          <button type="button" className="btn btn--pink" onClick={restart}>
            <RotateCcw aria-hidden="true" strokeWidth={2.5} />
            Run it back
          </button>
          <Link href={`/packs/${packSlug}`} className="btn btn--outline-light">
            Reread the pack
          </Link>
        </div>
        {misses.length > 0 && (
          <>
            <h2 className="t-label" style={{ marginTop: "3.5rem", color: "var(--salmon)", letterSpacing: "0.09em" }}>
              What tripped you up
            </h2>
            <ul className="result__misses" style={{ marginTop: "1rem" }}>
              {misses.map((m) => (
                <li key={m.q}>
                  <strong>{m.q}</strong>
                  {m.options[m.answer]}. {m.explain}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="wrap quiz">
      <div className="quiz__top">
        <Link href={`/packs/${packSlug}`} className="crumb" style={{ marginBottom: 0 }}>
          <ArrowLeft aria-hidden="true" strokeWidth={2.5} />
          {packTitle}
        </Link>
        <p className="t-label" style={{ color: "var(--salmon)" }}>
          Question {index + 1} of {quiz.length}
        </p>
      </div>
      {steps}

      <div key={index} className="vibe-chat">
        <div className="bubble bubble--fan bubble--big pop-in">
          <span className="bubble__who">Real fan</span>
          <h1 ref={headingRef} tabIndex={-1} className="vibe-chat__q">
            {q.q}
          </h1>
        </div>

        <fieldset className="replies">
          <legend className="bubble__who replies__who">You, larping</legend>
          {q.options.map((opt, i) => {
            let state: string | undefined;
            if (answered) {
              if (i === q.answer) state = "right";
              else if (i === pick) state = "wrong";
              else state = "dim";
            }
            return (
              <button
                key={opt}
                type="button"
                className="reply"
                data-state={state}
                disabled={answered}
                aria-pressed={pick === i}
                onClick={() => choose(i)}
              >
                <span>{opt}</span>
                {state === "right" && <Check aria-label="Correct answer" strokeWidth={3} />}
                {state === "wrong" && <X aria-label="Your answer, wrong" strokeWidth={3} />}
              </button>
            );
          })}
        </fieldset>

        <div aria-live="polite">
          {answered && (
            <div className="vibe-chat__after">
              <p className="bubble bubble--fan pop-in">
                <span className="bubble__who">Real fan</span>
                {pick === q.answer ? "Nailed it. " : "Hm. Not quite. "}
                {q.explain}
              </p>
              <button type="button" className="btn btn--pink" onClick={next}>
                {index < quiz.length - 1 ? "Next question" : "See if you'd pass"}
                <ArrowRight aria-hidden="true" strokeWidth={2.75} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
