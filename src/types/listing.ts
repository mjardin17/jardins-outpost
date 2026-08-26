export type ListingSource = "EBAY_LINKED" | "INDEPENDENT";

export type ListingStatus =
  | "ACTIVE"
  | "DRAFT"
  | "INACTIVE"
  | "SOLD"
  | "OUT_OF_STOCK"
  | "RESERVED"
  | "UNKNOWN";

type BaseListing = {
  id: string;
  sku: string | null;
  title: string;
  price: number | null;
  quantity: number;
  status: ListingStatus;
  imageUrl: string | null;
  category: string | null;
  notes: string | null;
  channel: string | null;
};

export type EbayLinkedListing = BaseListing & {
  source: "EBAY_LINKED";
  ebayItemId: string;
  ebayConnectionStatus: "NOT_CONFIGURED";
  lastSyncedAt: string | null;
};

export type IndependentListing = BaseListing & {
  source: "INDEPENDENT";
};

export type Listing = EbayLinkedListing | IndependentListing;
