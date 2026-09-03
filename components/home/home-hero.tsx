import Image from 'next/image'
import { Star } from 'lucide-react'
import { CtaButtons } from '@/components/cta-buttons'

const stats = [
  { value: '15+', label: 'Years experience' },
  { value: '2,500+', label: 'Jobs completed' },
  { value: '4.9', label: 'Average rating', star: true },
]

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Air conditioning and water systems installation in Cape Town"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-32">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            Cape Town&apos;s Water &amp; Cooling Experts
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Cool air and clean water, done right.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            From air conditioning to boreholes, filtration, irrigation and rainwater harvesting —
            one trusted team for all your cooling and water needs across Cape Town.
          </p>
          <CtaButtons variant="onDark" className="mt-8" />

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="flex items-center gap-1 font-display text-2xl font-extrabold sm:text-3xl">
                  {s.value}
                  {s.star && <Star className="h-5 w-5 fill-current" />}
                </dt>
                <dd className="mt-1 text-xs text-primary-foreground/80 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
