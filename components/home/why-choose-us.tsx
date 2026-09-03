import { Award, Clock, ThumbsUp, Wallet } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Qualified specialists',
    description: 'Experienced, accredited technicians for both cooling and water systems.',
  },
  {
    icon: Wallet,
    title: 'Honest pricing',
    description: 'Free quotes and upfront, transparent costs — no surprises on your invoice.',
  },
  {
    icon: Clock,
    title: 'Reliable & on time',
    description: 'We show up when we say we will and finish the job properly.',
  },
  {
    icon: ThumbsUp,
    title: 'Guaranteed work',
    description: 'Fully insured installations backed by workmanship guarantees.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold sm:text-4xl">
            One trusted team, built on doing it properly
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
