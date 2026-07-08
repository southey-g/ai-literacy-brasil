type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-card border border-border bg-card p-8 shadow-sm shadow-black/[0.03] ${className}`}
    >
      {children}
    </div>
  );
}
