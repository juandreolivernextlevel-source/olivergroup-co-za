import Image from 'next/image'
import { Check } from 'lucide-react'

export function ServiceIntro({
  heading,
  paragraphs,
  checklist,
  image,
  imageAlt,
  reverse,
}: {
  heading: string
  paragraphs: string[]
  checklist: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className={reverse ? 'lg:order-2' : undefined}>
          <h2 className="text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
          {paragraphs.map((p) => (
            <p key={p} className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={reverse ? 'lg:order-1' : undefined}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image src={image || '/placeholder.svg'} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
