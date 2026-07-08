import Image from "next/image";

type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className = "" }: HeroBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-[#fafafa]/80 to-[#fafafa]" />

      <Image
        src="/hero-wave.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%] opacity-30 mix-blend-multiply md:object-[center_40%]"
      />

      <div
        className="absolute top-1/4 right-1/4 size-[600px] animate-pulse rounded-full bg-accent/8 blur-[120px]"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 size-[500px] animate-pulse rounded-full bg-[#7c3aed]/6 blur-[120px]"
        style={{ animationDuration: "12s" }}
      />
    </div>
  );
}
