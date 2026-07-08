import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OurMission } from "@/components/sections/our-mission";
import { WhatYouLearn } from "@/components/sections/what-you-learn";
import { WhyLearnNow } from "@/components/sections/why-learn-now";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyLearnNow />
      <OurMission />
      <WhatYouLearn />
      <Experience />
    </main>
  );
}
