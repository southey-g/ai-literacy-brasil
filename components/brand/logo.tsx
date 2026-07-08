import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="AI Literacy Brasil"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src="/icon-brain.png"
        alt=""
        width={36}
        height={36}
        className="size-8 shrink-0 md:size-9"
        priority
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] font-bold tracking-[0.18em] text-foreground md:text-xs">
            AI LITERACY
          </span>
          <span className="text-[0.75rem] font-bold tracking-[0.22em] text-accent md:text-sm">
            BRASIL
          </span>
        </span>
      )}
    </Link>
  );
}
