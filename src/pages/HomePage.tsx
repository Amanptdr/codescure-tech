import { Header } from '../components/layout/Header'
import { HeroSection } from '../components/sections/HeroSection'
import { FeaturedSection } from '../components/sections/FeaturedSection'
import { JoinCircleSection } from '../components/sections/JoinCircleSection'
import { JourneySection } from '../components/sections/JourneySection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { AppDownloadSection } from '../components/sections/AppDownloadSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/layout/Footer'
import { SplitFeatureSection } from '../components/sections/SplitFeatureSection'
import { featureSections } from '../data/featureSections'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        {featureSections.map((section) => (
          <SplitFeatureSection
            key={section.id}
            id={section.id}
            reverse={section.reverse}
            visual={section.visual}
            content={section.content}
          />
        ))}
        <JoinCircleSection />
        <JourneySection />
        <TestimonialsSection />
        <FaqSection />
        <AppDownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
