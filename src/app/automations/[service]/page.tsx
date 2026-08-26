import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AutomationServicePage from "@/components/automations/AutomationServicePage";
import NavBar from "@/components/NavBar";
import { automationServices, getAutomationService } from "@/data/automationServices";

export function generateStaticParams() {
  return automationServices.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getAutomationService(slug);
  if (!service) return {};
  return { title: `${service.title} | Jardin's Outpost`, description: service.summary };
}

export default async function AutomationServiceRoute({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const service = getAutomationService(slug);
  if (!service) notFound();
  return <div className="flex flex-1 flex-col"><NavBar /><main className="flex-1"><AutomationServicePage service={service} /></main></div>;
}
