import { Navigation } from "@/components/navigation"
import { HeroVideo } from "@/components/hero-video"
import { VideoPortfolio } from "@/components/video-portfolio"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroVideo />
      <VideoPortfolio />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
