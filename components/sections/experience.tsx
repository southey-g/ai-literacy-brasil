import Image from "next/image";

import { Section } from "@/components/layout/section";

const benefits = [
  "Projetos reais",
  "Exercícios práticos",
  "Networking",
  "Feedback ao vivo",
];

const gallery = [
  {
    src: "/experience/meeting.jpg",
    alt: "Equipe diversa colaborando em uma sessão prática de trabalho",
    label: "Colaboração prática",
    className: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-0",
  },
  {
    src: "/experience/focus.jpg",
    alt: "Participante em sessão de foco trabalhando no notebook",
    label: "Sessões de foco",
    className: "min-h-[200px] md:min-h-0",
  },
  {
    src: "/experience/conversation.jpg",
    alt: "Profissionais em conversa durante o treinamento",
    label: "Conversas reais",
    className: "min-h-[200px] md:min-h-0",
  },
];

function ImageCard({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.06)] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experiencia">
      <div className="max-w-4xl">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          A experiência
        </p>
        <h2 className="text-display text-foreground">
          Você não vai assistir.
          <br className="hidden sm:block" /> Você vai construir.
        </h2>

        <ul className="mt-8 flex flex-wrap gap-3">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-4 py-2 text-sm font-medium text-foreground/80 shadow-[0_1px_4px_rgba(15,23,42,0.04)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="size-3.5 text-emerald-500"
                aria-hidden
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5 md:min-h-[480px]">
        {gallery.map((item) => (
          <ImageCard key={item.label} {...item} />
        ))}
      </div>
    </Section>
  );
}
