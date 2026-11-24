import { requireViewer } from "@/lib/auth";

// Members-only pages read the session on every request.
export const dynamic = "force-dynamic";

/** Second line of defence behind middleware: never render member pages without a verified viewer. */
export default async function MembersLayout({ children }: { children: React.ReactNode }) {
  await requireViewer();
  return children;
}
