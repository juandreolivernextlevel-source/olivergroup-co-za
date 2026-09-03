import type { Metadata } from 'next'
import { Filter, Droplet, GlassWater, Home, FlaskConical, RefreshCw } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ServiceHero } from '@/components/service-hero'
import { ServiceIntro } from '@/components/service-intro'
import { FeatureGrid } from '@/components/feature-grid'
import { QuoteSection } from '@/components/quote-section'

export const metadata: Metadata = {
  title: 'Water Filtration & Purification | Oliver Group',
  description:
    'Whole-house, under-counter and reverse osmosis water filtration systems installed in Cape Town for clean, safe, great-tasting water.',
}

const features = [
  {
    icon: Home,
    title: 'Whole-House Filtration',
    description:
      'Point-of-entry systems that filter every tap in your home for cleaner water throughout.',
  },
  {
    icon: GlassWater,
    title: 'Under-Counter Systems',
    description: 'Compact filters delivering clean drinking water straight from your kitchen tap.',
  },
  {
    icon: Droplet,
    title: 'Reverse Osmosis',
    description:
      'Advanced RO systems that remove impurities for exceptionally pure drinking water.',
  },
  {
    icon: FlaskConical,
    title: 'Water Testing',
    description:
      'We test your water to recommend the right filtration for your specific supply.',
  },
  {
    icon: Filter,
    title: 'Borehole & Rain Filtration',
    description:
      'Purpose-built filtration to make borehole and rainwater safe for household use.',
  },
  {
    icon: RefreshCw,
    title: 'Cartridge Replacements',
    description: 'Scheduled filter and cartridge changes to keep your system performing.',
  },
]

export default function WaterFiltrationPage() {
  return (
    <PageShell>
      <ServiceHero
        eyebrow="Water Filtration"
        title="Clean, safe, great-tasting water"
        description="Protect your family with professionally installed filtration and purification systems tailored to your water supply."
        image="/images/filtration-hero.png"
        imageAlt="Under-counter water filtration and reverse osmosis system"
      />

      <ServiceIntro
        heading="Filtration matched to your water"
        paragraphs={[
          'Municipal, borehole and rainwater all have different qualities. We test your source and design a filtration solution that removes sediment, chlorine, bacteria and contaminants.',
          'From simple drinking-water filters to complete whole-house and reverse osmosis systems, we install and maintain everything you need for pure water on tap.',
        ]}
        checklist={[
          'Whole-house systems',
          'Under-counter filters',
          'Reverse osmosis',
          'Sediment & carbon stages',
          'UV purification',
          'Ongoing maintenance',
        ]}
        image="/images/filtration-hero.png"
        imageAlt="Multi-stage water filtration cartridges"
      />

      <FeatureGrid
        eyebrow="Our Services"
        heading="Filtration & purification"
        intro="Solutions for every source and every budget, professionally installed and serviced."
        features={features}
      />

      <QuoteSection defaultService="Water Filtration" />
    </PageShell>
  )
}
