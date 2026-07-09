import { AiTools } from "@/components/sections/ai-tools";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ForBusiness } from "@/components/sections/for-business";
import { Hero } from "@/components/sections/hero";
import { Instructors } from "@/components/sections/instructors";
import { LearningPath } from "@/components/sections/learning-path";
import { OurMission } from "@/components/sections/our-mission";
import { Program } from "@/components/sections/program";
import { UpcomingClasses } from "@/components/sections/upcoming-classes";
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
      <Program />
      <LearningPath />
      <AiTools />
      <ForBusiness />
      <Instructors />
      <UpcomingClasses />
      <Faq />
      <FinalCta />
    </main>
  );
}
