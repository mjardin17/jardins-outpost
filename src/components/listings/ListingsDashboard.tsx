"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AlertCircle, Box, ExternalLink, Link2Off, PackageSearch, RefreshCw, Search, Store } from "lucide-react";
import { fetchListings } from "@/data/listings";
import type { Listing, ListingSource, ListingStatus } from "@/types/listing";

type Tab = "ALL" | ListingSource;
const tabs: { value: Tab; label: string }[] = [
  { value: "ALL", label: "All" }, { value: "EBAY_LINKED", label: "eBay" },
  { value: "INDEPENDENT", label: "Independent" },
];
const statuses: ListingStatus[] = ["ACTIVE", "DRAFT", "RESERVED", "SOLD", "OUT_OF_STOCK", "INACTIVE", "UNKNOWN"];
const statusClass: Record<ListingStatus, string> = {
  ACTIVE: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  DRAFT: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  RESERVED: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  SOLD: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  OUT_OF_STOCK: "border-rose-400/30 bg-rose-400/10 text-rose-200",
  INACTIVE: "border-white/10 bg-white/5 text-muted",
  UNKNOWN: "border-white/10 bg-white/5 text-muted",
};

const label = (value: string) => value.toLowerCase().replaceAll("_", " ");
const price = (value: number | null) => value === null ? "Price unavailable" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
function syncTime(value: string | null) {
  if (!value) return "Unavailable";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Unavailable" : new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function Stat({ title, count, icon }: { title: string; count: number; icon: React.ReactNode }) {
  return <div className="rounded-2xl border border-border bg-background-raised p-5">
    <div className="flex items-center justify-between text-muted"><span className="text-xs uppercase tracking-[.16em]">{title}</span>{icon}</div>
    <p className="mt-3 font-display text-3xl">{count}</p>
  </div>;
}

function ListingCard({ listing }: { listing: Listing }) {
  const [open, setOpen] = useState(false);
  return <article className="overflow-hidden rounded-2xl border border-border bg-background-raised transition-colors hover:border-accent/35">
    <div className="grid sm:grid-cols-[10rem_1fr]">
      <div className="relative aspect-[4/3] bg-grain sm:aspect-auto sm:min-h-56">
        {listing.imageUrl ? <Image src={listing.imageUrl} alt={listing.title} fill unoptimized className="object-cover" sizes="(min-width:640px) 160px, 100vw" /> :
          <div className="flex h-full min-h-44 items-center justify-center text-muted"><Box aria-hidden size={30} /><span className="sr-only">No image available</span></div>}
      </div>
      <div className="min-w-0 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2"><span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[.12em] ${statusClass[listing.status]}`}>{label(listing.status)}</span><span className="text-xs text-muted">{listing.source === "EBAY_LINKED" ? "eBay-linked" : "Independent"}</span></div>
            <h2 className="font-display text-xl leading-snug sm:text-2xl">{listing.title}</h2>
            <p className="mt-1 text-xs text-muted">{listing.sku ? `SKU ${listing.sku}` : `ID ${listing.id}`}</p>
          </div>
          <p className="font-display text-xl text-accent-soft">{price(listing.price)}</p>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm sm:grid-cols-3">
          <div><dt className="text-xs text-muted">Quantity</dt><dd className="mt-1">{listing.quantity}</dd></div>
          <div><dt className="text-xs text-muted">Category</dt><dd className="mt-1 capitalize">{listing.category ?? "Uncategorized"}</dd></div>
          <div><dt className="text-xs text-muted">Channel</dt><dd className="mt-1 capitalize">{listing.source === "EBAY_LINKED" ? "eBay" : listing.channel ?? "Jardin’s Outpost"}</dd></div>
        </dl>
        {open ? <div className="mt-4 rounded-xl border border-border bg-background p-4 text-sm">
          {listing.source === "EBAY_LINKED" ? <dl className="grid gap-3 sm:grid-cols-3">
            <div><dt className="text-xs text-muted">eBay item ID</dt><dd className="mt-1 break-all">{listing.ebayItemId}</dd></div>
            <div><dt className="text-xs text-muted">Connection</dt><dd className="mt-1 text-amber-200">API not configured</dd></div>
            <div><dt className="text-xs text-muted">Last sync</dt><dd className="mt-1">{syncTime(listing.lastSyncedAt)}</dd></div>
          </dl> : <div><p className="text-xs text-muted">Notes</p><p className="mt-1 leading-relaxed">{listing.notes ?? "No notes are stored for this item."}</p></div>}
        </div> : null}
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="rounded-full border border-border px-4 py-2 text-sm hover:border-accent/40 hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-accent">{open ? "Hide details" : "View details"}</button>
          {listing.source === "EBAY_LINKED" ? <a href={`https://www.ebay.com/itm/${encodeURIComponent(listing.ebayItemId)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm text-accent-soft hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-accent">View on eBay <ExternalLink aria-hidden size={14} /></a> : null}
        </div>
      </div>
    </div>
  </article>;
}

export default function ListingsDashboard() {
  const [listings, setListings] = useState<Listing[] | null>(null);
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<Tab>("ALL");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<ListingStatus | "ALL">("ALL");
  const load = useCallback(async (signal?: AbortSignal) => {
    try { setListings(await fetchListings(signal)); }
    catch (reason) { if (!(reason instanceof DOMException && reason.name === "AbortError")) { setError(true); setListings(null); } }
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    async function loadInitialListings() {
      try {
        const data = await fetchListings(controller.signal);
        if (!controller.signal.aborted) setListings(data);
      } catch (reason) {
        if (!(reason instanceof DOMException && reason.name === "AbortError")) {
          setError(true);
          setListings(null);
        }
      }
    }
    void loadInitialListings();
    return () => controller.abort();
  }, []);
  const counts = useMemo(() => ({ total: listings?.length ?? 0, ebay: listings?.filter((x) => x.source === "EBAY_LINKED").length ?? 0, independent: listings?.filter((x) => x.source === "INDEPENDENT").length ?? 0 }), [listings]);
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (listings ?? []).filter((item) => (tab === "ALL" || item.source === tab) && (status === "ALL" || item.status === status) && (!q || item.title.toLowerCase().includes(q) || item.sku?.toLowerCase().includes(q) || item.id.toLowerCase().includes(q) || (item.source === "EBAY_LINKED" && item.ebayItemId.toLowerCase().includes(q))));
  }, [listings, query, status, tab]);

  return <>
    <section className="border-b border-border px-6 pb-12 pt-16"><div className="mx-auto max-w-6xl">
      <p className="mb-3 text-sm uppercase tracking-[.2em] text-muted">Owner inventory</p>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h1 className="font-display text-4xl tracking-tight sm:text-5xl">My Listings</h1><p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">One clear view of inventory linked to eBay and items kept independent.</p></div><div className="inline-flex items-center gap-2 self-start rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-xs text-amber-100"><Link2Off aria-hidden size={14} />eBay API not configured</div></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3"><Stat title="Total inventory" count={counts.total} icon={<Box size={18} />} /><Stat title="eBay linked" count={counts.ebay} icon={<Store size={18} />} /><Stat title="Independent" count={counts.independent} icon={<PackageSearch size={18} />} /></div>
    </div></section>
    <section className="px-6 py-10"><div className="mx-auto max-w-6xl">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background-raised p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-1 overflow-x-auto" role="tablist" aria-label="Listing source">{tabs.map((item) => <button key={item.value} type="button" role="tab" aria-selected={tab === item.value} onClick={() => setTab(item.value)} className={`shrink-0 rounded-full px-4 py-2 text-sm ${tab === item.value ? "bg-accent text-background" : "text-muted hover:bg-white/5 hover:text-foreground"}`}>{item.label}</button>)}</div>
        <div className="flex flex-col gap-3 sm:flex-row"><label className="relative sm:w-72"><span className="sr-only">Search listings</span><Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title, SKU, or ID" className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-accent/60" /></label>
        <label><span className="sr-only">Filter by status</span><select value={status} onChange={(e) => setStatus(e.target.value as ListingStatus | "ALL")} className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-accent/60"><option value="ALL">All statuses</option>{statuses.map((value) => <option key={value} value={value}>{label(value)}</option>)}</select></label></div>
      </div>
      <div className="mt-8">{error ? <div className="rounded-2xl border border-rose-400/25 bg-rose-400/5 px-6 py-12 text-center"><AlertCircle className="mx-auto text-rose-200" /><h2 className="mt-4 font-display text-2xl">Listings unavailable</h2><p className="mt-2 text-sm text-muted">Inventory could not be loaded from the configured data source.</p><button type="button" onClick={() => { setError(false); setListings(null); void load(); }} className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"><RefreshCw size={14} />Try again</button></div> :
      listings === null ? <div aria-label="Loading listings" aria-live="polite" className="space-y-4">{[0,1,2].map((x) => <div key={x} className="h-56 animate-pulse rounded-2xl border border-border bg-background-raised" />)}</div> :
      shown.length === 0 ? <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center"><PackageSearch className="mx-auto text-muted" size={32} /><h2 className="mt-4 font-display text-2xl">No listings found</h2><p className="mt-2 text-sm text-muted">{listings.length === 0 ? "No inventory records are available yet." : "Try changing the search, source, or status filter."}</p></div> :
      <div className="space-y-4">{shown.map((item) => <ListingCard key={item.id} listing={item} />)}</div>}</div>
    </div></section>
  </>;
}
