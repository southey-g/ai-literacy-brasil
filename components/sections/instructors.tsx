import Image from "next/image";

import { Section } from "@/components/layout/section";

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
          <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-subtle md:text-base">
            <p>
            Giovana Southey é engenheira de software com mais de 6 anos de experiência desenvolvendo tecnologia na África do Sul, na Inglaterra e além. Tendo atuado diretamente na indústria em diversos mercados e, atualmente, construindo sua própria startup no Reino Unido, Giovana traz uma perspectiva prática e concreta sobre como a inteligência artificial está transformando a forma como trabalhamos e criamos produtos. Ela participou recentemente da London Tech Week e da London AI Summit, mantendo-se atualizada sobre as conversas globais em torno do desenvolvimento e adoção de IA.
</p>
<p>
Além de fundar seu novo empreendimento, Giovana também atua como freelancer em engenharia de software, o que lhe dá uma visão ampla e atualizada de como as ferramentas de IA vêm sendo utilizadas em diferentes equipes e projetos. Apaixonada por tornar a IA acessível para todos — independentemente da experiência técnica — ela está animada para trazer essa abordagem prática e voltada para iniciantes a este workshop, ajudando os participantes a construírem confiança e conhecimento reais sobre IA desde o início.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(15,23,42,0.1)]">
            <Image
              src="/instructors/giovana_profile.png"
              alt="Retrato de Giovana Southey, instrutora do AI Literacy Brasil"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
