import { Snowflake, Waves, Filter, Sprout, CloudRain, type LucideIcon } from 'lucide-react'

export type ServiceSummary = {
  title: string
  href: string
  image: string
  imageAlt: string
  icon: LucideIcon
  blurb: string
}

export const services: ServiceSummary[] = [
  {
    title: 'Air Conditioning',
    href: '/aircon',
    image: '/images/aircon-hero.png',
    imageAlt: 'Technician installing a wall-mounted air conditioning unit',
    icon: Snowflake,
    blurb:
      'Supply, installation, servicing and repairs of split, multi-split and ducted air conditioning systems for homes and businesses.',
  },
  {
    title: 'Wellpoints & Boreholes',
    href: '/wellpoints-boreholes',
    image: '/images/wellpoints-hero.png',
    imageAlt: 'Wellpoint and borehole drilling equipment in a garden',
    icon: Waves,
    blurb:
      'Professional wellpoint and borehole installation with pumps and tanks to give you your own reliable, off-grid water supply.',
  },
  {
    title: 'Water Filtration',
    href: '/water-filtration',
    image: '/images/filtration-hero.png',
    imageAlt: 'Under-counter water filtration and reverse osmosis system',
    icon: Filter,
    blurb:
      'Whole-house, under-counter and reverse osmosis filtration for clean, great-tasting and safe drinking water.',
  },
  {
    title: 'Irrigation',
    href: '/irrigation',
    image: '/images/irrigation-hero.png',
    imageAlt: 'Automated sprinkler irrigating a green garden lawn',
    icon: Sprout,
    blurb:
      'Smart, automated irrigation systems designed to keep your garden lush while saving water and time.',
  },
  {
    title: 'Rainwater Harvesting',
    href: '/rainwater-harvesting',
    image: '/images/rainwater-hero.png',
    imageAlt: 'Rainwater harvesting tanks connected to a home roof',
    icon: CloudRain,
    blurb:
      'Capture, store and reuse rainwater with custom tank and pump setups that cut your municipal water bill.',
  },
]
