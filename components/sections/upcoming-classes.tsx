import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

type ClassLocation = {
  city: string;
  status: "active" | "soon";
  modality?: string;
};

const locations: ClassLocation[] = [
  { city: "Curitiba", status: "active", modality: "Presencial" },
  { city: "São Paulo", status: "soon", modality: "Presencial" },
  { city: "Florianópolis", status: "soon", modality: "Presencial" },
  { city: "Online", status: "soon", modality: "Ao vivo" },
];

function StatusBadge({ status }: { status: ClassLocation["status"] }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
        Ativo
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-full bg-[#f8f9fb] px-3 py-1 text-xs font-semibold text-foreground/45">
      Em breve
    </span>
  );
}

export function UpcomingClasses() {
  return (
    <Section id="agenda">
      <SectionHeader
        centered
        eyebrow="Agenda"
        title="Próximas turmas"
        description="Estamos expandindo para novas cidades e modalidades. Garanta sua vaga na turma mais próxima de você."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {locations.map((location) => (
          <article
            key={location.city}
            className={`flex flex-col rounded-2xl p-7 md:p-8 ${
              location.status === "active"
                ? "border border-accent/20 bg-accent-light shadow-[0_4px_24px_rgba(59,111,245,0.08)]"
                : "border border-black/[0.04] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            }`}
          >
            <StatusBadge status={location.status} />
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {location.city}
            </h3>
            {location.modality ? (
              <p className="mt-1.5 text-sm text-foreground/45">
                {location.modality}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
