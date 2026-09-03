import type { Metadata } from 'next'
import { Sprout, Timer, Droplets, Trees, MapPin, Wrench } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ServiceHero } from '@/components/service-hero'
import { ServiceIntro } from '@/components/service-intro'
import { FeatureGrid } from '@/components/feature-grid'
import { QuoteSection } from '@/components/quote-section'

export const metadata: Metadata = {
  title: 'Irrigation Systems | Oliver Group',
  description:
    'Smart, automated irrigation system design, installation and repairs in Cape Town to keep your garden green while saving water.',
}

const features = [
  {
    icon: Sprout,
    title: 'System Design',
    description:
      'Custom irrigation layouts that give every part of your garden the right amount of water.',
  },
  {
    icon: Timer,
    title: 'Automated Timers',
    description:
      'Programmable and smart controllers that water at the best times, automatically.',
  },
  {
    icon: Droplets,
    title: 'Drip & Micro Irrigation',
    description: 'Water-wise drip lines that deliver moisture straight to the roots with less waste.',
  },
  {
    icon: Trees,
    title: 'Pop-Up Sprinklers',
    description: 'Neat, retractable sprinkler systems for lawns and larger planted areas.',
  },
  {
    icon: MapPin,
    title: 'Zoning & Coverage',
    description: 'Properly zoned systems so beds, lawns and pots each get tailored watering.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Upgrades',
    description: 'Fault finding, leak repairs and upgrades to existing irrigation systems.',
  },
]

export default function IrrigationPage() {
  return (
    <PageShell>
      <ServiceHero
        eyebrow="Irrigation"
        title="A greener garden, less effort"
        description="Smart, automated irrigation systems designed and installed to keep your garden thriving while using water efficiently."
        image="/images/irrigation-hero.png"
        imageAlt="Automated sprinkler watering a green lawn"
      />

      <ServiceIntro
        heading="Watering that works while you relax"
        paragraphs={[
          'A well-designed irrigation system takes the guesswork and effort out of keeping your garden healthy. We plan coverage and zoning around your specific plants, soil and layout.',
          'Pair it with automated timers or smart controllers and your garden stays lush year-round — using only the water it actually needs.',
        ]}
        checklist={[
          'Custom system design',
          'Drip & micro irrigation',
          'Pop-up sprinklers',
          'Smart & timed controllers',
          'Multi-zone setups',
          'Repairs & upgrades',
        ]}
        image="/images/irrigation-hero.png"
        imageAlt="Drip irrigation line watering garden beds"
        reverse
      />

      <FeatureGrid
        eyebrow="Our Services"
        heading="Irrigation done right"
        intro="From new installs to smart upgrades, we build systems that save you water and time."
        features={features}
      />

      <QuoteSection defaultService="Irrigation" />
    </PageShell>
  )
}
