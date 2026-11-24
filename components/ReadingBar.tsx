"use client";

import { Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string };

/** Sticky jump nav plus the five-minute rail: a salmon bar that counts down minutes left as you read. */
export function ReadingBar({ sections, minutes, targetId }: { sections: Section[]; minutes: number; targetId: string }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0]?.id);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const read = -rect.top + window.innerHeight * 0.25;
      const p = Math.min(1, Math.max(0, total > 0 ? read / total : 1));
      setProgress(p);

      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections, targetId]);

  const left = Math.ceil(minutes * (1 - progress));
  const label = progress >= 0.98 ? "Vibe check time" : left <= 1 ? "Under a minute left" : `${left} min left`;

  return (
    <div className="pack-bar tone-plum">
      <div className="wrap pack-bar__inner">
        <nav aria-label="Pack sections" style={{ flex: 1, minWidth: 0 }}>
          <ul className="jump">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="timer" aria-live="off">
          <Clock aria-hidden="true" strokeWidth={2.5} />
          {label}
        </p>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div ref={fillRef} className="progress__fill" style={{ ["--p" as string]: progress }} />
      </div>
    </div>
  );
}
