import { FlaskConical } from "lucide-react";

export function PlaceholderTag({ grey = false }: { grey?: boolean }) {
  return (
    <span className={`tag${grey ? " tag--grey" : ""}`} title="Sample content. Real packs are coming.">
      <FlaskConical aria-hidden="true" strokeWidth={2.5} />
      Placeholder
    </span>
  );
}
