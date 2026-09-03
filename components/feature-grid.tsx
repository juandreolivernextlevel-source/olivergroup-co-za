import type { LucideIcon } from 'lucide-react'

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureGrid({
  eyebrow,
  heading,
  intro,
  features,
}: {
  eyebrow: string
  heading: string
  intro?: string
  features: Feature[]
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
        <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
          {heading}
        </h2>
        {intro && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
