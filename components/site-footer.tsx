import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { site, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center rounded-xl bg-primary-foreground px-4 py-3">
            <Image
              src="/images/oliver-group-logo.png"
              alt="Oliver Group — Driven by solutions"
              width={800}
              height={311}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Cape Town&apos;s trusted specialists for air conditioning and complete water
            solutions. Reliable installations, servicing and repairs.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" /> {site.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            Our Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {navLinks
              .filter((l) => l.href !== '/')
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/85 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            <Clock className="h-4 w-4" /> Operating Hours
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-3 text-primary-foreground/85">
                <span>{h.days}</span>
                <span className="text-right">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            <MapPin className="h-4 w-4" /> Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-primary-foreground/85">
            {site.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-primary-foreground/70">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved. Proudly serving
          Cape Town &amp; surrounds.
        </div>
      </div>
    </footer>
  )
}
