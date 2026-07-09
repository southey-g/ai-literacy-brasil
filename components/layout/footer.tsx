import Link from "next/link";

import { Logo } from "@/components/brand/logo";
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
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-5" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" strokeLinecap="round" strokeLinejoin="round" />
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
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
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
