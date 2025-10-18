import { Hero } from "@/components/Hero";
import { WellnessModules } from "@/components/WellnessModules";
import { AISupport } from "@/components/AISupport";
import { MoodTracker } from "@/components/MoodTracker";
import { QuickResources } from "@/components/QuickResources";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WellnessModules />
      <AISupport />
      <MoodTracker />
      <QuickResources />
      <SafetyDisclaimer />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
