import { Section } from "@/components/layout/section";

const skills = [
  {
    title: "Conversar com IA",
    detail: "Prompts realmente úteis",
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
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Pesquisar com IA",
    detail: "Encontrar respostas em minutos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Automatizar tarefas",
    detail: "Economizar horas toda semana",
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
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Criar apresentações",
    detail: "PowerPoint em minutos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Criar imagens",
    detail: "Midjourney · ChatGPT · Canva",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
        <path
          d="m21 15-5-5L5 21"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Escrever melhor",
    detail: "Emails · Relatórios · Posts",
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
          d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trabalhar com segurança",
    detail: "Privacidade · Boas práticas · Verificação",
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
      </svg>
    ),
  },
  {
    title: "Criar seu primeiro Agente de IA",
    highlight: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="size-6"
        aria-hidden
      >
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
        <path d="M9 14h.01M15 14h.01" strokeLinecap="round" />
        <path d="M10 18h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhatYouLearn() {
  return (
    <Section id="o-que-voce-vai-aprender">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Habilidades
        </p>
        <h2 className="text-heading text-foreground">O que você vai aprender</h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className={`rounded-2xl p-7 md:p-8 ${
              skill.highlight
                ? "border border-accent/20 bg-accent-light shadow-[0_4px_24px_rgba(59,111,245,0.08)]"
                : "bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
            }`}
          >
            <div className="mb-5 text-accent">{skill.icon}</div>
            <h3 className="text-base leading-snug font-semibold tracking-tight text-foreground">
              {skill.title}
            </h3>
            {skill.detail ? (
              <p className="mt-2 text-[0.9rem] leading-relaxed text-foreground/55">
                {skill.detail}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
