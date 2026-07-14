import { Button } from "@/components/ui/Button";
import { FEATURES } from "@/lib/feature-flags";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "Nos produits", href: "#produits" },
  ...(FEATURES.onlineOrdering ? [{ label: "Commander", href: "#commande" }] : []),
  { label: "Actualités", href: "#actualites" },
  { label: "Nous trouver", href: "#contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#accueil" className="flex items-center">
          <span className="relative block h-16 w-16">
            <Image
              src="/brand/logo.png"
              alt="La Reine des Blés"
              fill
              sizes="80px"
              className="object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="tel:0244040732" variant="primary" className="hidden sm:inline-flex">
          02 44 04 07 32
        </Button>
      </div>
    </header>
  );
}
