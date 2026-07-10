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
    <section id={id} className={`scroll-mt-20 py-section md:scroll-mt-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
