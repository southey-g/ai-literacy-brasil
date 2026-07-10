import { Section } from "@/components/layout/section";

type RoadmapStep = {
  title: string;
  subtitle?: string;
  tags?: string[];
  active?: boolean;
  future?: boolean;
};

const steps: RoadmapStep[] = [
  {
    title: "AI Literacy Bootcamp",
    tags: ["1 dia", "Iniciante"],
    active: true,
  },
  {
    title: "AI Productivity",
    subtitle: "Produtividade com IA",
    future: true,
  },
  {
    title: "AI Content Studio",
    subtitle: "Conteúdo com IA",
    future: true,
  },
  {
    title: "Automação com IA",
    future: true,
  },
  {
    title: "Agentes de IA",
    future: true,
  },
  {
    title: "Certificação AI Literacy",
    future: true,
  },
];

function StepConnector() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div className="h-6 w-px bg-accent/25" />
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="size-4 text-accent/50"
      >
        <path
          d="M8 3v10M4 9l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="h-6 w-px bg-accent/25" />
    </div>
  );
}

function StepCard({ step }: { step: RoadmapStep }) {
  const isActive = step.active;
  const isFuture = step.future;

  return (
    <article
      className={`relative w-full max-w-md rounded-2xl px-7 py-6 md:px-8 md:py-7 ${
        isActive
          ? "border border-accent/20 bg-accent-light shadow-[0_4px_24px_rgba(59,111,245,0.08)]"
          : isFuture
            ? "border border-black/[0.04] bg-white/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            : "bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
      }`}
    >
      {isActive ? (
        <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-white uppercase">
          Disponível agora
        </span>
      ) : null}

      <h3
        className={`text-base font-semibold tracking-tight ${
          isFuture && !isActive ? "text-foreground/70" : "text-foreground"
        }`}
      >
        {step.title}
      </h3>

      {step.subtitle ? (
        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-foreground/55">
          {step.subtitle}
        </p>
      ) : null}

      {step.tags && step.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isActive
                  ? "bg-white/80 text-accent"
                  : "bg-[#f8f9fb] text-foreground/50"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function LearningPath() {
  return (
    <Section id="treinamentos">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Trilha
        </p>
        <h2 className="text-heading text-foreground">
          Nossa trilha de aprendizagem
        </h2>
        <p className="mt-5 text-subheading text-foreground/55">
          O bootcamp é só o começo. Uma progressão completa para dominar IA no
          trabalho.
        </p>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-md flex-col items-center">
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-accent/15"
          aria-hidden
        />

        <ol className="relative flex w-full flex-col items-center">
          {steps.map((step, index) => (
            <li key={step.title} className="flex w-full flex-col items-center">
              <StepCard step={step} />
              {index < steps.length - 1 ? <StepConnector /> : null}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
