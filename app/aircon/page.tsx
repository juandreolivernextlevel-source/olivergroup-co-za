import type { Metadata } from 'next'
import { Snowflake, Wrench, Settings, ThermometerSun, Building2, Home } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ServiceHero } from '@/components/service-hero'
import { ServiceIntro } from '@/components/service-intro'
import { FeatureGrid } from '@/components/feature-grid'
import { QuoteSection } from '@/components/quote-section'

export const metadata: Metadata = {
  title: 'Air Conditioning Installation & Repairs | Oliver Group',
  description:
    'Expert air conditioning supply, installation, servicing and repairs in Cape Town. Split, multi-split and ducted systems for homes and businesses.',
}

const features = [
  {
    icon: Snowflake,
    title: 'New Installations',
    description:
      'Supply and fitting of split, multi-split and ducted units sized correctly for your space.',
  },
  {
    icon: Settings,
    title: 'Servicing & Maintenance',
    description:
      'Regular cleaning, gas top-ups and filter changes to keep your system running efficiently.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Fault Finding',
    description:
      'Fast diagnosis and repair of leaks, electrical faults and units that no longer cool.',
  },
  {
    icon: Home,
    title: 'Residential Systems',
    description:
      'Quiet, energy-efficient cooling and heating for bedrooms, living areas and open-plan homes.',
  },
  {
    icon: Building2,
    title: 'Commercial Systems',
    description: 'Offices, shops and restaurants kept comfortable with reliable commercial units.',
  },
  {
    icon: ThermometerSun,
    title: 'Heating & Cooling',
    description:
      'Modern inverter units that both cool in summer and warm your space in winter.',
  },
]

export default function AirconPage() {
  return (
    <PageShell>
      <ServiceHero
        eyebrow="Air Conditioning"
        title="Stay comfortable all year round"
        description="Professional supply, installation, servicing and repair of air conditioning systems for homes and businesses across Cape Town."
        image="/images/aircon-hero.png"
        imageAlt="Technician installing a wall-mounted air conditioner"
      />

      <ServiceIntro
        heading="Cooling and heating you can rely on"
        paragraphs={[
          'Whether you are fitting out a new home, upgrading an old unit or keeping a busy office comfortable, our accredited technicians install and maintain air conditioning systems to the highest standard.',
          'We work with all major brands and recommend the right size and type of system for your space, so you get efficient performance and lower running costs.',
        ]}
        checklist={[
          'Split & multi-split units',
          'Ducted & concealed systems',
          'Correct sizing & placement',
          'Energy-efficient inverters',
          'Gas re-gassing & top-ups',
          'Annual service plans',
        ]}
        image="/images/aircon-card.png"
        imageAlt="Modern air conditioning unit mounted on a wall"
      />

      <FeatureGrid
        eyebrow="Our Services"
        heading="Everything air conditioning"
        intro="From first install to ongoing care, we handle every aspect of your cooling system."
        features={features}
      />

      <QuoteSection defaultService="Air Conditioning" />
    </PageShell>
  )
}
