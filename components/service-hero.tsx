import Image from 'next/image'
import { CtaButtons } from '@/components/cta-buttons'

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image || '/placeholder.svg'} alt={imageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {description}
          </p>
          <CtaButtons variant="onDark" className="mt-8" />
        </div>
      </div>
    </section>
  )
}
