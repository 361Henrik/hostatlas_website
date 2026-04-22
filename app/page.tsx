import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TheMomentSection from "@/components/sections/TheMomentSection";
import TheExperienceSection from "@/components/sections/TheExperienceSection";
import UnreadLandscapeSection from "@/components/sections/UnreadLandscapeSection";
import PersonalRelevanceSection from "@/components/sections/PersonalRelevanceSection";
import OperatorSection from "@/components/sections/OperatorSection";
import InsightSection from "@/components/sections/InsightSection";
import OperatorGainsSection from "@/components/sections/OperatorGainsSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TheMomentSection />         {/* Screen 2 — The Problem / Silent Stretches */}
        <TheExperienceSection />     {/* Screen 3 — The Guest Experience */}
        <UnreadLandscapeSection />   {/* Screen 4 — The Transformation / Lenses */}
        <PersonalRelevanceSection /> {/* Screen 5 — Personal Relevance / Each Guest */}
        <OperatorSection />          {/* Screen 6 — Operator Platform */}
        <InsightSection />           {/* Screen 7 — Insight Layer */}
        <OperatorGainsSection />     {/* Screen 8 — What Operators Gain */}
        <ClosingSection />           {/* Screen 9 — Closing CTA */}
      </main>
    </>
  );
}
