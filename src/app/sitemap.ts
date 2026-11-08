import type { MetadataRoute } from "next";
import { automationServices } from "@/data/automationServices";
import { iframeSlugs } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// Public pages only. /workspace is a private tool and is excluded (it is also marked noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/automations", "/listings", "/ontrack"];
  return [
    ...staticPages.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...automationServices.map((s) => ({ url: `${SITE_URL}/automations/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...iframeSlugs().map((slug) => ({ url: `${SITE_URL}/apps/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
