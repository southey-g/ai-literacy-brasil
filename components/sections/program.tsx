import { Section } from "@/components/layout/section";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
  side: "left" | "right";
  marker: "hollow" | "solid";
};

const timeline: TimelineItem[] = [
  {
    time: "09:00",
    title: "Fundamentos",
    description: "Como a IA funciona, sem jargões técnicos.",
    side: "left",
    marker: "hollow",
  },
  {
    time: "10:00",
    title: "Prompting",
    description: "Como conversar com IA de forma eficaz.",
    side: "right",
    marker: "hollow",
  },
  {
    time: "11:00",
    title: "Pesquisa com IA",
    description: "Encontre e valide informações em minutos.",
    side: "left",
    marker: "hollow",
  },
  {
    time: "12:30",
    title: "Almoço",
    description: "Café de qualidade e networking real.",
    side: "right",
    marker: "solid",
  },
  {
    time: "13:30",
    title: "Automação",
    description: "Fluxos de trabalho que economizam horas.",
    side: "left",
    marker: "hollow",
  },
  {
    time: "14:15",
    title: "Imagens",
    description: "Crie visuais profissionais com IA.",
    side: "right",
    marker: "hollow",
  },
  {
    time: "15:00",
    title: "Documentos",
    description: "Relatórios, apresentações e textos com IA.",
    side: "left",
    marker: "hollow",
  },
  {
    time: "15:45",
    title: "Agentes de IA",
    description: "Construa seu primeiro agente inteligente.",
    side: "right",
    marker: "hollow",
  },
  {
    time: "16:30",
    title: "Desafio final",
    description: "Aplique tudo em um desafio em equipe.",
    side: "left",
    marker: "hollow",
  },
  {
    time: "17:15",
    title: "Certificado",
    description: "Entrega do certificado AI Literacy.",
    side: "right",
    marker: "solid",
  },
];

function TimelineMarker({ variant }: { variant: TimelineItem["marker"] }) {
  if (variant === "solid") {
    return (
      <div
        className="relative z-10 size-3 rounded-full bg-accent"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="relative z-10 size-3 rounded-full border-2 border-accent bg-background"
      aria-hidden
    />
  );
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  const isLeft = item.side === "left";

  return (
    <div
      className={`flex flex-col gap-1 ${
        isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
      }`}
    >
      <time
        dateTime={item.time}
        className="font-mono text-sm font-medium text-accent"
      >
        {item.time}
      </time>
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        {item.title}
      </h3>
      <p className="max-w-xs text-sm leading-relaxed text-foreground/50">
        {item.description}
      </p>
    </div>
  );
}

export function Program() {
  return (
    <Section id="programa" className="bg-[#f8f9fb]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Programação
        </p>
        <h2 className="text-heading text-foreground">Seu dia, mapeado</h2>
        <h3 className="text-lg font-medium text-foreground">AI Literacy Bootcamp</h3>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div
          className="absolute top-2 bottom-2 left-4 w-px bg-accent/25 md:left-1/2 md:-translate-x-1/2"
          aria-hidden
        />

        <ol className="space-y-10 md:space-y-12">
          {timeline.map((item) => {
            const isLeft = item.side === "left";

            return (
              <li
                key={`${item.time}-${item.title}`}
                className="relative grid grid-cols-[auto_1fr] items-start gap-x-5 md:grid-cols-[1fr_auto_1fr] md:gap-x-10"
              >
                {isLeft ? (
                  <>
                    <div className="col-start-1 row-start-1 flex justify-center pt-1.5 md:col-start-2">
                      <TimelineMarker variant={item.marker} />
                    </div>
                    <div className="col-start-2 row-start-1 md:col-start-1 md:row-start-1 md:pr-4">
                      <TimelineEntry item={item} />
                    </div>
                    <div className="hidden md:col-start-3 md:block" aria-hidden />
                  </>
                ) : (
                  <>
                    <div className="hidden md:col-start-1 md:block" aria-hidden />
                    <div className="col-start-1 row-start-1 flex justify-center pt-1.5 md:col-start-2">
                      <TimelineMarker variant={item.marker} />
                    </div>
                    <div className="col-start-2 row-start-1 md:col-start-3 md:pl-4">
                      <TimelineEntry item={item} />
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
