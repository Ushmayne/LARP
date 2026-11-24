import Link from "next/link";

type Tone = "on-plum" | "on-pink";

/** The Groucho-glasses mark. On plum: pink tile, plum glasses. On pink: the inverted plum tile. */
export function LogoMark({ tone = "on-plum", size = 40 }: { tone?: Tone; size?: number }) {
  const tile = tone === "on-pink" ? "#2A1B3D" : "#D83F87";
  const ink = tone === "on-pink" ? "#D83F87" : "#2A1B3D";
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">
      <rect width="1024" height="1024" rx="230" fill={tile} />
      <g transform="translate(112 112) scale(4)">
        <g fill="none" stroke={ink} strokeLinecap="round">
          <path d="M38 58 Q64 40 92 56" strokeWidth="13" />
          <path d="M108 56 Q136 40 162 58" strokeWidth="13" />
          <circle cx="68" cy="90" r="26" strokeWidth="9" />
          <circle cx="132" cy="90" r="26" strokeWidth="9" />
          <path d="M94 88 Q100 80 106 88" strokeWidth="8" />
        </g>
        <ellipse cx="100" cy="124" rx="17" ry="22" fill="#E98074" stroke={ink} strokeWidth="6" />
        <path d="M52 156 Q76 134 100 148 Q124 134 148 156 Q124 152 100 162 Q76 152 52 156 Z" fill={ink} />
      </g>
    </svg>
  );
}

export function Logo({ tone = "on-plum" }: { tone?: Tone }) {
  return (
    <Link href="/" className="logo" aria-label="larp, home">
      <LogoMark tone={tone} size={44} />
      <span className="logo__word" style={{ color: tone === "on-pink" ? "#2A1B3D" : "#D83F87" }}>
        larp
      </span>
    </Link>
  );
}
