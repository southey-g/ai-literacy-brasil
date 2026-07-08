import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

const navLinks = [
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#instrutores", label: "Instrutores" },
  { href: "#agenda", label: "Agenda" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="relative flex h-16 items-center justify-between md:h-20">
          <Logo className="relative z-10" />

          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button href="#contato" className="relative z-10 px-5 py-2.5 text-sm">
            Quero participar
          </Button>
        </nav>
      </Container>
    </header>
  );
}
