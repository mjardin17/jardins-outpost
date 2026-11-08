import type { Metadata } from "next";

// Private workspace tool: keep it out of search results.
export const metadata: Metadata = {
  title: "Workspace",
  robots: { index: false, follow: false, nocache: true },
};

export default function WorkspaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
