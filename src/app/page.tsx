import { BuyingModule } from "@/components/buying-module/buying-module"
import { HeroSection } from "@/components/hero-section"
import { TestimonialBar } from "@/components/testimonial-bar"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialBar />
      <BuyingModule />
    </>
  )
}
