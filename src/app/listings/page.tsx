import type { Metadata } from "next";
import ListingsDashboard from "@/components/listings/ListingsDashboard";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = { title: "My Listings | Jardin's Outpost", description: "Owner inventory for Jardin's Outpost." };
export default function ListingsPage() {
  return <div className="flex flex-1 flex-col"><NavBar /><main className="flex-1"><ListingsDashboard /></main></div>;
}
