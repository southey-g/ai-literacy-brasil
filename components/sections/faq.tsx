import { ContactLink } from "@/components/contact/contact-link";
import { Section } from "@/components/layout/section";

const faqs = [
  {
    question: "Preciso saber programação?",
    answer:
      "Não. O treinamento é 100% prático e acessível — pensado para profissionais de qualquer área, sem necessidade de conhecimento técnico ou código.",
  },
  {
    question: "Levo notebook?",
    answer:
      "Sim. Você precisa trazer seu notebook para praticar durante todo o dia. Todas as ferramentas são acessadas pelo navegador.",
  },
  {
    question: "Recebo certificado?",
    answer:
      "Sim. Ao concluir o bootcamp, você recebe o certificado AI Literacy — comprovante da sua formação prática em Inteligência Artificial.",
  },
  {
    question: "Quais ferramentas serão utilizadas?",
    answer:
      "ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Canva, Midjourney, Gamma, Make e outras ferramentas do ecossistema de IA que você pode usar imediatamente no trabalho.",
  },
  {
    question: "Posso usar no trabalho?",
    answer:
      "Sim. Todo o conteúdo é pensado para aplicação imediata no dia a dia profissional — com foco em produtividade, segurança e boas práticas.",
  },
  {
    question: "Minha empresa pode enviar um grupo?",
    answer:
      "Sim. Oferecemos treinamentos corporativos para equipes de qualquer tamanho. Entre em contato para montar uma turma exclusiva para sua empresa.",
  },
  {
    question: "E se eu não puder comparecer na data marcada?",
    answer:
      "Entre em contato conosco com antecedência. Avaliamos opções de remarcação ou transferência para a próxima turma disponível.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div className="max-w-md lg:sticky lg:top-28">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            FAQ
          </p>
          <h2 className="text-display text-foreground">
            Perguntas? Temos respostas.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-foreground/55 md:text-base">
            Não encontrou o que procurava?{" "}
            <ContactLink className="font-medium text-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/30">
              Envie uma mensagem
            </ContactLink>{" "}
            e responderemos em até 24 horas.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-black/[0.04] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[0.95rem] font-semibold tracking-tight text-foreground transition-colors hover:text-accent md:px-7 md:py-5 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-4 shrink-0 text-foreground/30 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-foreground/55 md:px-7 md:pb-5">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
