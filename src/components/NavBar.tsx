import Link from "next/link";
import NeonSign from "./NeonSign";

const links = [
  { href: "/#apps", label: "Apps" },
  { href: "/#store", label: "Store" },
  { href: "/#inventory", label: "Inventory" },
  { href: "/listings", label: "My Listings" },
  { href: "/automations", label: "Automation Services" },
  { href: "/#services", label: "Services" },
  { href: "/workspace", label: "Workspace" },
  { href: "/#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NeonSign />
        <ul className="hidden items-center gap-5 text-sm text-muted lg:flex xl:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent-soft transition-colors hover:bg-accent/10"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
