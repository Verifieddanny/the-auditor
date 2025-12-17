import { FAQSection } from '@/components/faq'
import { FeaturesSection } from '@/components/feature-section'
import { Footer } from '@/components/footer'
import HeroSection from '@/components/hero-section'
import { HowItWorksVideo } from '@/components/how-it-works'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksVideo />
    <FAQSection />
    <Footer />
    </>
  )
}
