import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-section ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
