export const interestOptions = [
  { value: "", label: "Selecione uma opção" },
  { value: "treinamento-presencial", label: "Treinamento presencial" },
  { value: "treinamento-corporativo", label: "Treinamento corporativo" },
  { value: "proximas-turmas", label: "Próximas turmas" },
  { value: "parcerias", label: "Parcerias" },
  { value: "outro", label: "Outro" },
] as const;

export type ContactInterest = Exclude<
  (typeof interestOptions)[number]["value"],
  ""
>;

export type ContactModalOptions = {
  defaultInterest?: ContactInterest;
  showCompanyField?: boolean;
};
