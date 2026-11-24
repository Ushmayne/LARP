"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TopicSearch({ id = "topic-search" }: { id?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <form
      className="search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const query = q.trim();
        router.push(query ? `/topics?q=${encodeURIComponent(query)}` : "/topics");
      }}
    >
      <Search className="search__icon" aria-hidden="true" strokeWidth={2.5} />
      <label htmlFor={id} className="sr-only">
        Search topics
      </label>
      <input
        id={id}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="What are they into?"
        autoComplete="off"
        enterKeyHint="search"
      />
      <button type="submit" className="btn">
        Find it
      </button>
    </form>
  );
}
