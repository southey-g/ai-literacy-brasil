import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";

const badges = [
  {
    label: "Curitiba",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px] shrink-0">
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Turmas presenciais",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px] shrink-0">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Leve seu notebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px] shrink-0">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M2 16h20" />
      </svg>
    ),
  },
  {
    label: "Certificado",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-[18px] shrink-0">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/12 bg-accent/8 px-4 py-2">
            <span className="size-2 animate-pulse rounded-full bg-emerald-600" />
            <span className="text-sm font-medium text-foreground/70">
              A educação prática em IA do Brasil
            </span>
          </div>

          <h1 className="mb-8 text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[80px] xl:text-[92px]">
            <span className="block">Aprenda IA de</span>
            <span className="block text-accent">forma prática.</span>
          </h1>

          <p className="mb-3 max-w-xl text-lg leading-relaxed font-normal text-foreground/60 sm:text-xl">
            A IA está mudando todas as profissões. Nós ensinamos profissionais,
            empresas e empreendedores a utilizá-la com confiança no trabalho do
            dia a dia.
          </p>
          <p className="mb-12 max-w-xl text-base leading-relaxed font-medium text-foreground/45">
            Sem hype. Sem programação. Sem teoria desnecessária.
          </p>

          <div className="mb-16 flex flex-col gap-4 sm:flex-row">
            <Button href="#contato" className="min-h-12 min-w-[200px] px-8 py-4 font-semibold">
              Quero participar
            </Button>
            <Button
              href="#treinamentos"
              variant="secondary"
              className="min-h-12 min-w-[200px] border-foreground/10 px-8 py-4 font-semibold hover:border-foreground/20"
            >
              Conheça os treinamentos
            </Button>
          </div>
        </div>
      </Container>

      <Container className="relative z-10 pb-12 md:pb-20">
        <div className="mx-auto flex max-w-4xl flex-wrap items-start gap-4 rounded-2xl border border-black/5 bg-white/60 px-6 py-5 backdrop-blur-xl sm:items-center sm:gap-8">
          {badges.map((badge, index) => (
            <div key={badge.label} className="flex items-center gap-4 sm:gap-8">
              {index > 0 && (
                <div className="hidden h-5 w-px bg-black/10 sm:block" />
              )}
              <div className="flex items-center gap-3">
                <span className="text-accent">{badge.icon}</span>
                <span className="text-sm font-medium tracking-wide text-foreground/70">
                  {badge.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
