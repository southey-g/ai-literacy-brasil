import { Section } from "@/components/layout/section";

const cards = [
  {
    title: "A IA já faz parte do mercado.",
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
          d="M3 17l5-5 4 4 9-9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body: (
      <>
        Marketing · RH · Finanças · Vendas · Educação · Saúde.
        <br />
        <span className="mt-3 block">Quem aprende primeiro ganha vantagem.</span>
      </>
    ),
  },
  {
    title: "Não basta usar ChatGPT",
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
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body: "Você precisa aprender como integrar IA ao seu trabalho com segurança, estratégia e produtividade.",
  },
  {
    title: "Aprenda fazendo.",
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
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    body: "Cada participante cria projetos reais durante o treinamento e sai preparado para aplicar IA imediatamente.",
  },
];

export function WhyLearnNow() {
  return (
    <Section id="por-que-aprender">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Por que agora
        </p>
        <h2 className="text-heading text-foreground">
          Por que aprender IA agora?
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] md:p-9"
          >
            <div className="mb-5 text-accent">{card.icon}</div>
            <h3 className="mb-3 text-lg leading-snug font-semibold tracking-tight text-foreground">
              {card.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-foreground/55">
              {card.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
