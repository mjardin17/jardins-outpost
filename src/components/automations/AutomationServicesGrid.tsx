import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { automationServices } from "@/data/automationServices";

export default function AutomationServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {automationServices.map((service) => (
        <Link
          key={service.slug}
          href={`/automations/${service.slug}`}
          className="group flex min-h-64 flex-col justify-between rounded-2xl border border-border bg-background-raised p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent-soft">
              {service.eyebrow}
            </p>
            <h3 className="mt-4 font-display text-2xl leading-tight">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.summary}
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-accent-soft">
            Explore service
            <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
