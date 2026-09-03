import type { Metadata } from 'next'
import { Waves, Drill, Gauge, Droplets, Container, Cog } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ServiceHero } from '@/components/service-hero'
import { ServiceIntro } from '@/components/service-intro'
import { FeatureGrid } from '@/components/feature-grid'
import { QuoteSection } from '@/components/quote-section'

export const metadata: Metadata = {
  title: 'Wellpoints & Boreholes | Oliver Group',
  description:
    'Professional wellpoint and borehole installation in Cape Town, including pumps, tanks and testing for a reliable off-grid water supply.',
}

const features = [
  {
    icon: Drill,
    title: 'Wellpoint Installation',
    description:
      'Cost-effective wellpoints installed into shallow aquifers, ideal for garden and outdoor use.',
  },
  {
    icon: Waves,
    title: 'Borehole Drilling',
    description:
      'Deeper boreholes for higher yields and a dependable supply for the whole property.',
  },
  {
    icon: Cog,
    title: 'Pump Supply & Fitting',
    description:
      'Correctly sized pumps and pressure systems supplied, installed and commissioned.',
  },
  {
    icon: Container,
    title: 'Storage Tanks',
    description: 'Tank installation and plumbing to store and distribute your water supply.',
  },
  {
    icon: Gauge,
    title: 'Testing & Yield Checks',
    description:
      'Water yield and quality testing so you know exactly what your source can deliver.',
  },
  {
    icon: Droplets,
    title: 'Maintenance & Repairs',
    description: 'Servicing of existing wellpoints, boreholes and pumps to keep water flowing.',
  },
]

export default function WellpointsPage() {
  return (
    <PageShell>
      <ServiceHero
        eyebrow="Wellpoints & Boreholes"
        title="Your own reliable water supply"
        description="Take control of your water with professionally installed wellpoints and boreholes — complete with pumps, tanks and testing."
        image="/images/wellpoints-hero.png"
        imageAlt="Borehole and wellpoint drilling equipment in a garden"
      />

      <ServiceIntro
        heading="Independent water, straight from the ground"
        paragraphs={[
          'A wellpoint or borehole gives you a private, sustainable source of water for your garden, pool and home — reducing your reliance on municipal supply and saving money over time.',
          'We assess your property, recommend the best option for your needs and budget, and handle everything from drilling to the final pump and tank installation.',
        ]}
        checklist={[
          'Site assessment & advice',
          'Shallow wellpoints',
          'Deep boreholes',
          'Pump & pressure systems',
          'Tank storage & plumbing',
          'Yield & water testing',
        ]}
        image="/images/water-card.png"
        imageAlt="Clean water flowing from a borehole pump system"
        reverse
      />

      <FeatureGrid
        eyebrow="Our Services"
        heading="Wellpoint & borehole solutions"
        intro="Everything you need to tap into your own groundwater supply, done to spec."
        features={features}
      />

      <QuoteSection defaultService="Wellpoints & Boreholes" />
    </PageShell>
  )
}
