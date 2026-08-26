import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleCheck, Mail, ShieldCheck, UserRound } from "lucide-react";
import type { AutomationService } from "@/data/automationServices";

export default function AutomationServicePage({ service }: { service: AutomationService }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border px-6 py-16 sm:py-24">
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="relative mx-auto max-w-6xl">
          <Link href="/automations" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
            <ArrowLeft aria-hidden="true" size={15} /> Automation Services
          </Link>
          <div className="mt-12 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-soft">{service.eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">{service.headline}</h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:hello@jardinsoutpost.com?subject=${encodeURIComponent(service.title)}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-accent-soft">
                Discuss this automation <ArrowRight aria-hidden="true" size={16} />
              </a>
              <Link href="#workflow" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground">See the workflow</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background-raised p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">The problem</p>
            <h2 className="mt-4 font-display text-3xl">Where work gets lost</h2>
            <p className="mt-5 leading-relaxed text-muted">{service.problem}</p>
          </article>
          <article className="rounded-2xl border border-accent/25 bg-accent/5 p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-accent-soft">The solution</p>
            <h2 className="mt-4 font-display text-3xl">A workflow built around reality</h2>
            <p className="mt-5 leading-relaxed text-muted">{service.solution}</p>
          </article>
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-accent-soft"><UserRound aria-hidden="true" size={20} /><p className="text-xs uppercase tracking-[0.18em]">Who it is for</p></div>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">A fit for businesses with a repeatable bottleneck.</h2>
            <ul className="mt-7 space-y-3">
              {service.audience.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted"><CircleCheck aria-hidden="true" className="mt-0.5 shrink-0 text-accent-soft" size={17} />{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Business benefits</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => <div key={benefit} className="rounded-xl border border-border bg-background-raised p-5"><Check aria-hidden="true" className="text-accent-soft" size={18} /><p className="mt-3 font-display text-lg">{benefit}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background-raised px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.18em] text-muted">What is included</p><h2 className="mt-4 font-display text-3xl sm:text-4xl">The pieces needed for a dependable custom build.</h2></div>
          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item, index) => <div key={item} className="bg-background p-6"><span className="font-display text-sm text-accent-soft">0{index + 1}</span><p className="mt-3 text-sm leading-relaxed">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-b border-border px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.18em] text-muted">Example workflow</p><h2 className="mt-4 font-display text-3xl sm:text-4xl">A clear path from input to useful action.</h2><p className="mt-4 text-sm leading-relaxed text-muted">The exact flow is customized after the real business process and available systems are confirmed.</p></div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {service.workflow.map((step, index) => <li key={step.title} className="rounded-2xl border border-border bg-background-raised p-6"><span className="text-xs text-accent-soft">0{index + 1}</span><h3 className="mt-4 font-display text-xl">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-accent/30 bg-background-raised p-8 sm:p-12 lg:p-16">
          <div className="grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div><div className="flex items-center gap-2 text-accent-soft"><ShieldCheck aria-hidden="true" size={18} /><p className="text-xs uppercase tracking-[0.18em]">Truthful by design</p></div><h2 className="mt-5 font-display text-4xl tracking-tight sm:text-5xl">Let&rsquo;s solve the actual workflow problem.</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">{service.integrationNote}</p></div>
            <div className="lg:text-right"><a href={`mailto:hello@jardinsoutpost.com?subject=${encodeURIComponent(`Custom ${service.title}`)}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 hover:bg-accent-soft"><Mail aria-hidden="true" size={16} />Start a conversation</a><div className="mt-5"><Link href="/automations" className="text-sm text-muted hover:text-foreground">Browse all Automation Services</Link></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
