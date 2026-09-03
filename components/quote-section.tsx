import { Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react'
import { QuoteForm } from '@/components/quote-form'
import { site } from '@/lib/site'

export function QuoteSection({ defaultService }: { defaultService?: string }) {
  return (
    <section id="quote" className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <h2 className="mt-2 text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Fill in the form or reach us directly — we offer free site assessments and honest,
            upfront pricing on every job.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Call us</span>
                <span className="block font-semibold text-foreground">{site.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">WhatsApp</span>
                <span className="block font-semibold text-foreground">Chat with our team</span>
              </span>
            </a>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm text-foreground shadow-sm">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Fully insured &amp; guaranteed
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-4 text-sm text-foreground shadow-sm">
                <Clock className="h-5 w-5 text-accent" />
                Fast, reliable turnaround
              </div>
            </div>
          </div>
        </div>

        <QuoteForm defaultService={defaultService} />
      </div>
    </section>
  )
}
