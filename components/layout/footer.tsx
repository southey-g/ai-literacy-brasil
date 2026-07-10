import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { ContactLink } from "@/components/contact/contact-link";
import { Container } from "./container";
import { NewsletterForm } from "./newsletter-form";

const navLinks = [
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#instrutores", label: "Instrutores" },
  { href: "#agenda", label: "Agenda" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ai_literacy_brasil",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-[#f8f9fb]">
      <Container className="py-section">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/55">
              Educação prática em Inteligência Artificial.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-foreground/40 transition-colors hover:text-accent"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href === "#contato" ? (
                    <ContactLink className="text-sm text-foreground/60 transition-colors hover:text-foreground">
                      {link.label}
                    </ContactLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Newsletter
            </p>
            <p className="mb-4 text-sm leading-relaxed text-foreground/55">
              Receba novidades sobre turmas, conteúdos e ferramentas de IA.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 border-t border-black/[0.06] pt-8">
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} AI Literacy Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
