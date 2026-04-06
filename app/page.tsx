import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import TheMomentSection from "@/components/sections/TheMomentSection";
import UnreadLandscapeSection from "@/components/sections/UnreadLandscapeSection";
import TheGapSection from "@/components/sections/TheGapSection";
import TheExperienceSection from "@/components/sections/TheExperienceSection";
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
        <TheMomentSection />
        <UnreadLandscapeSection />
        <TheGapSection />
        <TheExperienceSection />
        <OperatorSection />
        <InsightSection />
        <OperatorGainsSection />
        <ClosingSection />
      </main>
    </>
  );
}
