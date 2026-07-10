import { Section } from "@/components/layout/section";

const stats = [
  {
    title: "Mais produtividade",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Mais confiança",
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
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Mais oportunidades",
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
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function OurMission() {
  return (
    <Section id="nossa-missao" className="bg-[#f8f9fb]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Nossa missão
        </p>
        <h2 className="text-display text-foreground">
          Democratizar o uso da Inteligência Artificial através de uma educação
          prática que gera{" "}
          <span className="text-accent">resultados reais.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
        {stats.map((stat) => (
          <article
            key={stat.title}
            className="flex flex-col items-center rounded-2xl border border-black/[0.04] bg-white px-8 py-9 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-4 text-accent">{stat.icon}</div>
            <h3 className="text-base font-medium tracking-tight text-foreground">
              {stat.title}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
