import { Hero } from "@/components/sections/hero";
import { OurMission } from "@/components/sections/our-mission";
import { WhyLearnNow } from "@/components/sections/why-learn-now";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyLearnNow />
      <OurMission />
    </main>
  );
}
