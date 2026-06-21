import { Header } from '../components/layout/Header'
import { HeroSection } from '../components/sections/HeroSection'
import { FeaturedSection } from '../components/sections/FeaturedSection'
import { WhyChooseSection } from '../components/sections/WhyChooseSection'
import { ForumSection } from '../components/sections/ForumSection'
import { SessionModeSection } from '../components/sections/SessionModeSection'
import { SmartWalletSection } from '../components/sections/SmartWalletSection'
import { WorkTimingSection } from '../components/sections/WorkTimingSection'
import { JoinCircleSection } from '../components/sections/JoinCircleSection'
import { JourneySection } from '../components/sections/JourneySection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { FaqSection } from '../components/sections/FaqSection'
import { AppDownloadSection } from '../components/sections/AppDownloadSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/layout/Footer'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <WhyChooseSection />
        <ForumSection />
        <SessionModeSection />
        <SmartWalletSection />
        <WorkTimingSection />
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
