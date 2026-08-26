import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  GitBranch,
  Mail,
  Megaphone,
  MessageSquareText,
  PackageSearch,
  RefreshCw,
  Sparkles,
  UserRoundPlus,
  Wrench,
} from "lucide-react";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Business Automations | Jardin's Outpost",
  description:
    "Custom AI agents, business workflow automations, and internal tools built by Jardin's Outpost.",
};

const capabilities = [
  { name: "Lead capture", description: "Collect and route new inquiries into a workflow your team can act on.", icon: UserRoundPlus },
  { name: "Lead follow-up", description: "Design consistent follow-up sequences around the way your business sells.", icon: RefreshCw },
  { name: "Scheduling & reminders", description: "Coordinate appointments, confirmations, and timely reminders.", icon: CalendarClock },
  { name: "Customer communication", description: "Connect the steps behind updates, responses, and handoffs.", icon: MessageSquareText },
  { name: "Marketing automation", description: "Build repeatable workflows for campaigns and content operations.", icon: Megaphone },
  { name: "AI agents", description: "Create focused agents that help with defined business tasks and decisions.", icon: Bot },
  { name: "Commercial & content generation", description: "Turn structured inputs into repeatable creative production workflows.", icon: Sparkles },
  { name: "Inventory & listings", description: "Organize product data and reduce repetitive listing work across a catalog.", icon: PackageSearch },
  { name: "Operations workflows", description: "Move routine work through clear stages, owners, and checkpoints.", icon: ClipboardList },
  { name: "Custom internal tools", description: "Build software around a process that off-the-shelf tools do not fit.", icon: Wrench },
  { name: "Workflow orchestration", description: "Coordinate tools and steps into one understandable operating flow.", icon: GitBranch },
  { name: "Connected systems", description: "Plan practical integrations where supported APIs and access actually exist.", icon: Boxes },
];

const projects = [
  {
    name: "Empire OS",
    eyebrow: "Built · repository marks Live",
    problem: "Repeatable production for multiple video channels without rebuilding the rendering workflow for every format.",
    description:
      "A unified video engine for Gods & Glory, Little Olympus, and Iron Legends. The repository documents channel-aware rendering, narration, images or clips, music mixing, parallel scene rendering, and a council quality-control gate.",
    state:
      "An internal project page and command-line usage are present in this repository. Provider availability and external accounts are not verified by this page.",
    href: "/projects/empire-os",
    linkLabel: "View Empire OS",
    external: false,
  },
  {
    name: "Boss Listers",
    eyebrow: "Built · repository marks Live",
    problem: "The repetitive work involved in scanning, pricing, and preparing inventory for multiple marketplaces.",
    description:
      "A separate inventory tool represented in Jardin’s Outpost as an app for scanning, pricing, and cross-listing inventory across marketplaces.",
    state:
      "The repository links to a deployed Boss Listers site. No marketplace API connection or automated publishing claim is made here.",
    href: "/apps/boss-listers",
    linkLabel: "Open project entry",
    external: false,
  },
  {
    name: "StoryForge",
    eyebrow: "Built · local app",
    problem: "Keeping characters, worlds, series, and book exports organized in one working environment.",
    description:
      "A book-building studio represented in the repository for managing characters, worlds, series, and exports.",
    state:
      "The repository marks it Live but configures its app URL to localhost. It requires its separate local server; a public deployment is not verified.",
    href: "/apps/storyforge",
    linkLabel: "View local app entry",
    external: false,
  },
];

const buildSteps = [
  ["01", "Identify the business problem", "Start with the bottleneck, repetitive task, or handoff that costs time and attention."],
  ["02", "Map the workflow", "Document the real inputs, decisions, people, tools, and exceptions involved."],
  ["03", "Design the automation", "Choose what should be automated, what needs human review, and what should stay manual."],
  ["04", "Build and integrate", "Create the tool and connect supported systems only where access and APIs are available."],
  ["05", "Test the complete flow", "Exercise expected paths, failure states, edge cases, and human handoffs."],
  ["06", "Deploy it", "Put the system into the environment where the business can use and support it."],
  ["07", "Improve from real usage", "Refine the workflow using what actually happens after people begin using it."],
];

export default function AutomationsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border px-6 py-20 sm:py-28">
          <div className="absolute inset-0 bg-grain opacity-70" />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-accent-soft">Custom business systems</p>
              <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Build the system your business <span className="text-gradient-accent italic">actually needs.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                I build custom AI-powered business systems, automations, agents, and workflow tools around real operational problems—not generic demos.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:hello@jardinsoutpost.com?subject=Business%20automation%20project" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-accent-soft">
                  Tell me what is slowing you down <ArrowRight aria-hidden size={16} />
                </a>
                <Link href="#projects" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground">See real systems</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl"><p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Capabilities</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">Business automation, made practical.</h2><p className="mt-4 text-sm leading-relaxed text-muted">Each build starts with the workflow. The final system depends on your process, available access, and the tools that can be connected responsibly.</p></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(({ name, description, icon: Icon }) => <article key={name} className="bg-background-raised p-6 transition-colors hover:bg-background sm:p-7"><Icon aria-hidden className="text-accent-soft" size={21} strokeWidth={1.7} /><h3 className="mt-5 font-display text-xl">{name}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border bg-background-raised px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl"><p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Repository-backed work</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">Real projects and systems.</h2><p className="mt-4 text-sm leading-relaxed text-muted">These descriptions stay within what is represented in Jardin’s Outpost. State labels describe repository evidence—not customer adoption or third-party account status.</p></div>
            <div className="space-y-5">
              {projects.map((project) => <article key={project.name} className="grid gap-7 rounded-2xl border border-border bg-background p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div><span className="inline-flex rounded-full border border-accent/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-accent-soft">{project.eyebrow}</span><h3 className="mt-5 font-display text-3xl">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted"><strong className="font-medium text-foreground">Problem:</strong> {project.problem}</p></div>
                <div className="flex flex-col justify-between"><div><p className="text-sm leading-relaxed text-muted">{project.description}</p><div className="mt-5 rounded-xl border border-border bg-background-raised p-4"><p className="text-xs uppercase tracking-[0.16em] text-muted">Current capability / state</p><p className="mt-2 text-sm leading-relaxed">{project.state}</p></div></div><Link href={project.href} className="mt-6 inline-flex items-center gap-2 self-start text-sm text-accent-soft hover:text-foreground">{project.linkLabel} {project.external ? <ExternalLink aria-hidden size={14} /> : <ArrowRight aria-hidden size={14} />}</Link></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl"><p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">The build process</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">From bottleneck to working system.</h2></div>
            <ol className="grid gap-4 md:grid-cols-2">
              {buildSteps.map(([number, title, description]) => <li key={number} className="flex gap-5 rounded-2xl border border-border bg-background-raised p-6"><span className="font-display text-lg text-accent-soft">{number}</span><div><h3 className="font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-accent/30 bg-background-raised p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div><p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent-soft">Custom builds</p><h2 className="font-display text-4xl tracking-tight sm:text-5xl">Bring the business problem. We’ll map the right build.</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">Custom AI automation, workflow automation, AI agent systems, websites with automation, internal business tools, and integrations grounded in the systems you actually use.</p></div>
              <div className="lg:text-right"><a href="mailto:hello@jardinsoutpost.com?subject=Custom%20business%20system" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-accent-soft"><Mail aria-hidden size={16} />Start a conversation</a><p className="mt-4 text-xs leading-relaxed text-muted"><CheckCircle2 aria-hidden className="mr-1 inline text-accent-soft" size={13} />Scope and integrations are confirmed before capability claims are made.</p></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
