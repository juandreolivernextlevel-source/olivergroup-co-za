'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { serviceOptions, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function QuoteForm({
  defaultService,
  className,
}: {
  defaultService?: string
  className?: string
}) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25'

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm',
          className,
        )}
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">Request received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. One of our specialists will call you back shortly with your
          free, no-obligation quote.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8',
        className,
      )}
    >
      <h3 className="font-display text-xl font-bold text-foreground">Request a Free Quote</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us what you need and we&apos;ll get back to you fast. You can also email{' '}
        <a href={`mailto:${site.email}`} className="font-medium text-primary underline-offset-2 hover:underline">
          {site.email}
        </a>
        .
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="082 123 4567"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="suburb" className="mb-1.5 block text-sm font-medium text-foreground">
            Suburb
          </label>
          <input
            id="suburb"
            name="suburb"
            required
            placeholder="e.g. Claremont"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
            Service
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ''}
            required
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Briefly describe what you need..."
            className={cn(fieldClass, 'resize-none')}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Get My Free Quote
      </button>
    </form>
  )
}
