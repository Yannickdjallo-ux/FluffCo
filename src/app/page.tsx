import { BuyingModule } from "@/components/buying-module/buying-module"
import { HeroSection } from "@/components/hero-section"
import { HowItsMadeSection } from "@/components/how-its-made-section"
import { TestimonialBar } from "@/components/testimonial-bar"
import { WellnessSection } from "@/components/wellness-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialBar />
      <BuyingModule />
      <WellnessSection />
      <HowItsMadeSection />
    </>
  )
}
