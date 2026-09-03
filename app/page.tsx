import { PageShell } from '@/components/page-shell'
import { HomeHero } from '@/components/home/home-hero'
import { ServicesOverview } from '@/components/home/services-overview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { QuoteSection } from '@/components/quote-section'

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <ServicesOverview />
      <WhyChooseUs />
      <QuoteSection />
    </PageShell>
  )
}
