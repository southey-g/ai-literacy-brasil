import { Section } from "@/components/layout/section";

const audiences = [
  {
    title: "Profissionais",
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
          d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="8" y="6" width="8" height="4" rx="1" />
        <path d="M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Empresas",
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
          d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Empreendedores",
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
      </svg>
    ),
  },
  {
    title: "Educadores",
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
          d="M22 10v6M2 10l10-5 10 5-10 5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ForWhom() {
  return (
    <Section id="para-quem-e" className="bg-[#f8f9fb]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          Público
        </p>
        <h2 className="text-heading text-foreground">Para quem é?</h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="flex flex-col items-center rounded-2xl border border-black/[0.04] bg-white px-8 py-9 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-4 text-accent">{audience.icon}</div>
            <h3 className="text-base font-medium tracking-tight text-foreground">
              {audience.title}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
