type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleClassName = "text-heading text-foreground",
  className = "",
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}>
      <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className={titleClassName}>{title}</h2>
      {description ? (
        <div className="mt-5 text-subheading text-subtle">{description}</div>
      ) : null}
    </div>
  );
}
