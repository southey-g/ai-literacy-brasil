import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

const areas = [
  {
    title: "RH",
    description: "Recrutamento, onboarding e gestão de pessoas com IA.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Marketing",
    description: "Conteúdo, campanhas e análise acelerados com IA.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <path
          d="m3 11 18-5v12L3 14v-3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11 12v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Vendas",
    description: "Prospecção, follow-up e propostas mais rápidas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <path
          d="M3 3v18h18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m7 14 4-4 3 3 5-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ForBusiness() {
  return (
    <Section id="empresas">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Corporativo
        </p>
        <h2 className="text-heading text-foreground">IA para Empresas</h2>
        <p className="mt-5 text-subheading text-foreground/55">
          Capacite sua equipe para utilizar Inteligência Artificial de forma
          segura e produtiva.
        </p>
        <div className="mt-8">
          <Button href="#contato" className="min-h-12 px-8 py-4 font-semibold">
            Conheça os treinamentos corporativos
          </Button>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
        {areas.map((area) => (
          <article
            key={area.title}
            className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] md:p-9"
          >
            <div className="mb-5 text-accent">{area.icon}</div>
            <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
              {area.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-foreground/55">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
