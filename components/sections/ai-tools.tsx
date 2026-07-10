import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

type Tool = {
  name: string;
  category: string;
  initial: string;
};

const tools: Tool[] = [
  { name: "ChatGPT", category: "Conversação", initial: "C" },
  { name: "Claude", category: "Conversação", initial: "Cl" },
  { name: "Gemini", category: "Conversação", initial: "G" },
  { name: "NotebookLM", category: "Pesquisa", initial: "N" },
  { name: "Perplexity", category: "Pesquisa", initial: "P" },
  { name: "Gamma", category: "Apresentações", initial: "Ga" },
  { name: "Canva AI", category: "Design", initial: "Ca" },
  { name: "Midjourney", category: "Imagens", initial: "M" },
  { name: "Runway", category: "Vídeo", initial: "R" },
  { name: "ElevenLabs", category: "Áudio", initial: "E" },
  { name: "Cursor", category: "Desenvolvimento", initial: "C" },
  { name: "Lovable", category: "Desenvolvimento", initial: "L" },
  { name: "Bolt", category: "Desenvolvimento", initial: "B" },
  { name: "Make", category: "Automação", initial: "Mk" },
  { name: "n8n", category: "Automação", initial: "n8" },
];

export function AiTools() {
  return (
    <Section id="ferramentas-de-ia" className="bg-[#f8f9fb]">
      <SectionHeader
        centered
        eyebrow="Ecossistema"
        title="Ferramentas de IA"
        description="Você aprende a usar as ferramentas que o mercado já adotou — do básico à automação avançada."
      />

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {tools.map((tool) => (
          <li key={tool.name}>
            <article className="flex h-full flex-col items-center rounded-2xl border border-black/[0.04] bg-white px-4 py-7 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
              <div
                className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent-light text-xs font-semibold text-accent"
                aria-hidden
              >
                {tool.initial}
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {tool.name}
              </h3>
              <p className="mt-1.5 text-xs text-foreground/45">{tool.category}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
