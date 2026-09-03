import type { Metadata } from 'next'
import { CloudRain, Container, Cog, Filter, Recycle, PiggyBank } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ServiceHero } from '@/components/service-hero'
import { ServiceIntro } from '@/components/service-intro'
import { FeatureGrid } from '@/components/feature-grid'
import { QuoteSection } from '@/components/quote-section'

export const metadata: Metadata = {
  title: 'Rainwater Harvesting | Oliver Group',
  description:
    'Custom rainwater harvesting systems in Cape Town — gutters, tanks, pumps and filtration to capture, store and reuse rainwater.',
}

const features = [
  {
    icon: Container,
    title: 'Tank Supply & Install',
    description:
      'A full range of storage tanks supplied and installed to suit your space and needs.',
  },
  {
    icon: CloudRain,
    title: 'Gutter & Roof Collection',
    description: 'Guttering and downpipe connections that channel rainwater into your tanks.',
  },
  {
    icon: Cog,
    title: 'Pump Systems',
    description: 'Pressure pumps so harvested water can be used for the garden, toilets and more.',
  },
  {
    icon: Filter,
    title: 'Filtration & First-Flush',
    description:
      'Leaf traps, first-flush diverters and filtration to keep stored water clean.',
  },
  {
    icon: Recycle,
    title: 'Household Integration',
    description: 'Plumbing that feeds harvested water into toilets, laundry and outdoor taps.',
  },
  {
    icon: PiggyBank,
    title: 'Save on Water Bills',
    description: 'Cut municipal water usage and lower your monthly bills all year round.',
  },
]

export default function RainwaterPage() {
  return (
    <PageShell>
      <ServiceHero
        eyebrow="Rainwater Harvesting"
        title="Catch every drop, save every rand"
        description="Custom rainwater harvesting systems that capture, store and reuse rainwater to reduce your reliance on municipal supply."
        image="/images/rainwater-hero.png"
        imageAlt="Rainwater harvesting tanks connected to a home roof"
      />

      <ServiceIntro
        heading="Turn rainfall into a resource"
        paragraphs={[
          'Cape Town\'s rainy season is an opportunity. A rainwater harvesting system captures runoff from your roof and stores it for use during drier months, softening the impact of restrictions and rising water costs.',
          'We design complete systems — from gutters and tanks to pumps and filtration — sized to your roof area, water needs and available space.',
        ]}
        checklist={[
          'Roof & gutter collection',
          'Storage tanks',
          'First-flush diverters',
          'Pressure pump systems',
          'Filtration options',
          'Household integration',
        ]}
        image="/images/rainwater-hero.png"
        imageAlt="Water storage tanks for rainwater harvesting"
        reverse
      />

      <FeatureGrid
        eyebrow="Our Services"
        heading="Complete harvesting systems"
        intro="Everything needed to capture, store and put rainwater to work around your property."
        features={features}
      />

      <QuoteSection defaultService="Rainwater Harvesting" />
    </PageShell>
  )
}
