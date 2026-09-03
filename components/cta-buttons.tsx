import { Phone, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function CtaButtons({
  className,
  variant = 'onLight',
}: {
  className?: string
  variant?: 'onLight' | 'onDark'
}) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={site.phoneHref}
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.03] active:scale-95',
          variant === 'onDark'
            ? 'bg-primary-foreground text-primary'
            : 'bg-primary text-primary-foreground',
        )}
      >
        <Phone className="h-4 w-4" />
        Call {site.phoneDisplay}
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95',
          variant === 'onDark'
            ? 'border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10'
            : 'border-primary/30 text-primary hover:bg-secondary',
        )}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
    </div>
  )
}
