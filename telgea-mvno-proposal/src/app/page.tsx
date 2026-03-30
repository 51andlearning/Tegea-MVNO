import NavBar from "@/components/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PlatformSection from "@/components/sections/PlatformSection";
import MarketSection from "@/components/sections/MarketSection";
import ScopeSection from "@/components/sections/ScopeSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CommercialSection from "@/components/sections/CommercialSection";
import SLASection from "@/components/sections/SLASection";
import RACISection from "@/components/sections/RACISection";
import RiskSection from "@/components/sections/RiskSection";
import TermsSection from "@/components/sections/TermsSection";
import SignatureSection from "@/components/sections/SignatureSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-background pt-14">
        <HeroSection />
        <AboutSection />
        <PlatformSection />
        <MarketSection />
        <ScopeSection />
        <TimelineSection />
        <CommercialSection />
        <SLASection />
        <RACISection />
        <RiskSection />
        <TermsSection />
        <SignatureSection />
      </main>
    </>
  );
}
