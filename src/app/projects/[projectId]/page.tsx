import NavBar from "@/components/NavBar";
import DiscussionRoom from "@/components/council/DiscussionRoom";
import PipelineTracker from "@/components/council/PipelineTracker";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { projectId: "empire-os" },
    { projectId: "storyforge" },
    { projectId: "adhd-focus-companion" },
  ];
}

function EmpireOsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
              Video Engine
            </p>
            <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
              Empire OS
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Unified renderer for Gods & Glory, Little Olympus, and Iron
              Legends. One pipeline. Three channels.
            </p>
          </div>
        </section>

        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-display text-2xl">Channels</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background-raised p-6">
                <span className="mb-3 inline-block rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-wide text-accent-soft">
                  GG
                </span>
                <h3 className="font-display text-xl">Gods & Glory</h3>
                <p className="mt-2 text-sm text-muted">
                  Historical documentary style. Wikimedia + Pollinations images,
                  Ken Burns motion, British male narration, battle-theme music.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background-raised p-6">
                <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  LO
                </span>
                <h3 className="font-display text-xl">Little Olympus</h3>
                <p className="mt-2 text-sm text-muted">
                  Kids storytelling. Higgsfield clips (play once, never loop),
                  warm female narration, light music bed.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background-raised p-6">
                <span className="mb-3 inline-block rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted">
                  IL
                </span>
                <h3 className="font-display text-xl">Iron Legends</h3>
                <p className="mt-2 text-sm text-muted">
                  High-energy animated style. Same reliable Higgsfield pipeline,
                  dramatic male voice, fast punchy pacing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 font-display text-2xl">Core capabilities</h2>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-muted">
              <li>• Unified CLI for GG / LO / IL</li>
              <li>• Kokoro TTS with per-channel voices & speeds</li>
              <li>• Ken Burns slideshows with rotating presets</li>
              <li>• Higgsfield clip fitting — trim or freeze, never loop</li>
              <li>• Smart image prompts via Gemini text models</li>
              <li>• Action scene video clips (FAL / Replicate)</li>
              <li>• Parallel scene rendering + strict scene order</li>
              <li>• Council QC gate before upload staging</li>
              <li>• Background music mix with fade in/out</li>
              <li>• Engineering reports & multi-agent path</li>
            </ul>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 font-display text-2xl">Usage</h2>
            <pre className="overflow-x-auto rounded-2xl border border-border bg-background-raised p-6 text-sm text-muted">
{`# Gods & Glory
python empire_render.py --channel GG --episode GG_EP012

# Little Olympus (Higgsfield clips)
python empire_render.py --channel LO --episode LO_EP001 \\\n  --clips-dir higgsfield_clips/LO_EP001/

# Iron Legends + provider waterfall
python empire_render.py --channel IL --episode IL_EP001`}
            </pre>
            <div className="mt-8">
              <Link
                href="/#apps"
                className="text-sm text-accent-soft hover:text-accent"
              >
                ← Back to apps
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  if (projectId === "empire-os") {
    return <EmpireOsPage />;
  }

  return (
    <div className="flex flex-1 flex-col bg-slate-950">
      <NavBar />
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">
            Project
          </p>
          <h1 className="mb-8 font-display text-3xl tracking-tight text-slate-100 sm:text-4xl">
            {projectId}
          </h1>

          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="h-[640px]">
              <DiscussionRoom projectId={projectId} />
            </div>
            <PipelineTracker projectId={projectId} />
          </div>
        </div>
      </main>
    </div>
  );
}
