import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          What We Do
        </span>
        <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
          Complete water &amp; cooling solutions
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Whatever you need to stay cool and keep the water flowing, our specialists have you
          covered with reliable workmanship and honest pricing.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={service.image || '/placeholder.svg'}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-primary shadow-sm backdrop-blur">
                <service.icon className="h-5 w-5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}

        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-primary/30 bg-secondary/50 p-6">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Not sure what you need?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Get in touch and our team will help you find the right solution for your home or
            business.
          </p>
          <Link
            href="#quote"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
