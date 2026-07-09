import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";

const linkedInUrl = "https://linkedin.com";

export function Instructors() {
  return (
    <Section id="instrutores" className="bg-[#f8f9fb]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Instrutores
          </p>
          <h2 className="text-display text-foreground">
            Conheça quem vai conduzir sua jornada.
          </h2>
          <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-foreground/55 md:text-base">
            <p>
              Nossa experiência está na interseção entre tecnologia e educação
              — ajudando profissionais de todas as áreas, de gerentes de
              marketing a médicos, a integrar IA com confiança na rotina.
            </p>
            <p>
              A abordagem é prática: você sai do treinamento com ferramentas e
              soluções reais que pode usar no dia seguinte, não teoria que fica
              no caderno.
            </p>
          </div>
          <Link
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-white px-5 py-3 text-sm font-medium text-foreground/70 shadow-[0_1px_4px_rgba(15,23,42,0.04)] transition-colors hover:border-black/[0.12] hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-[#0A66C2]"
              aria-hidden
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Conecte-se no LinkedIn
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-3.5 text-foreground/35"
              aria-hidden
            >
              <path
                d="M7 17 17 7M7 7h10v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/instructors/giovana.jpg"
              alt="Instrutor AI Literacy Brasil"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-top"
              priority={false}
            />
          </div>
          <div className="absolute right-4 bottom-4 rounded-2xl border border-black/[0.04] bg-white px-5 py-4 shadow-[0_4px_24px_rgba(15,23,42,0.1)] sm:right-6 sm:bottom-6">
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              500+
            </p>
            <p className="mt-0.5 text-sm text-foreground/45">
              profissionais treinados
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
