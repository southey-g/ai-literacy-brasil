import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ContactCtaButton } from "@/components/contact/contact-cta-button";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden py-section-lg md:scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-[#080c14]" aria-hidden>
        <Image
          src="/cta-wave-art.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.18] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/40 via-[#080c14]/70 to-[#080c14]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display text-white">
            O futuro do trabalho
            <br />
            <span className="text-accent">já começou.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-subheading text-white/70">
            Aprenda a utilizar Inteligência Artificial com confiança.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ContactCtaButton className="min-h-12 min-w-[200px] px-8 py-4 font-semibold">
              Quero fazer parte
            </ContactCtaButton>
            <Button
              href="#programa"
              variant="secondary"
              className="min-h-12 min-w-[200px] border-white/15 bg-white/5 px-8 py-4 font-semibold text-white/80 hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              Ver programação
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
