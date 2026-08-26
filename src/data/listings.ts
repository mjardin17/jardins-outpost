import type { Listing, ListingStatus } from "@/types/listing";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type ProductRow = Record<string, unknown>;

function optionalString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function parsePrice(value: unknown): number | null {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseQuantity(value: unknown): number {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? Math.floor(parsed) : 0;
}

function parseStatus(value: unknown): ListingStatus {
  const normalized = optionalString(value)?.toUpperCase().replaceAll(" ", "_");
  switch (normalized) {
    case "ACTIVE":
    case "DRAFT":
    case "INACTIVE":
    case "SOLD":
    case "OUT_OF_STOCK":
    case "RESERVED":
      return normalized;
    default:
      return "UNKNOWN";
  }
}

function normalizeProduct(row: ProductRow, index: number): Listing {
  const ebayItemId = optionalString(row.ebay_listing_id);
  const base = {
    id: optionalString(row.id) ?? `product-${index}`,
    sku: optionalString(row.sku),
    title: optionalString(row.title) ?? "Untitled listing",
    price: parsePrice(row.price),
    quantity: parseQuantity(row.quantity),
    status: parseStatus(row.status),
    imageUrl: optionalString(row.image_url),
    category: optionalString(row.category),
    notes: optionalString(row.notes),
    channel: optionalString(row.marketplace) ?? optionalString(row.channel),
  };

  if (ebayItemId) {
    return {
      ...base,
      source: "EBAY_LINKED",
      ebayItemId,
      ebayConnectionStatus: "NOT_CONFIGURED",
      lastSyncedAt:
        optionalString(row.ebay_last_synced_at) ??
        optionalString(row.last_synced_at),
    };
  }

  return { ...base, source: "INDEPENDENT" };
}

export async function fetchListings(signal?: AbortSignal): Promise<Listing[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Inventory data source is not configured.");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    cache: "no-store",
    signal,
  });

  if (!response.ok) {
    throw new Error(`Inventory request failed with status ${response.status}.`);
  }

  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) {
    throw new Error("Inventory response was not a list.");
  }

  return payload.map((row, index) =>
    normalizeProduct(row as ProductRow, index),
  );
}
