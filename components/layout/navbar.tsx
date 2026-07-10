import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { ContactCtaButton } from "@/components/contact/contact-cta-button";
import { primaryNavLinks } from "@/lib/navigation";

import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Navegação principal"
          className="relative flex h-16 items-center justify-between md:h-20"
        >
          <Logo className="relative z-10" />

          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <MobileNav
              cta={
                <ContactCtaButton className="w-full px-5 py-2.5 text-sm">
                  Quero participar
                </ContactCtaButton>
              }
            />
            <ContactCtaButton className="hidden px-5 py-2.5 text-sm md:inline-flex">
              Quero participar
            </ContactCtaButton>
          </div>
        </nav>
      </Container>
    </header>
  );
}
