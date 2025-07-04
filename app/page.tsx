import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { CTASection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}