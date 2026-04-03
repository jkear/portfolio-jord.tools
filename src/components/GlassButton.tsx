import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'icon'

interface GlassButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  'aria-label'?: string
  'aria-pressed'?: boolean
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary: [
    'bg-[#00D2A0] border border-[#00D2A0]',
    'text-black font-semibold',
    'hover:bg-[#00BD8F] hover:border-[#00BD8F]',
    'shadow-[0_2px_12px_rgba(0,210,160,0.20)]',
    'hover:shadow-[0_4px_20px_rgba(0,210,160,0.28)]',
  ].join(' '),

  ghost: [
    'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)]',
    'text-[var(--text-muted)]',
    'hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)]',
    'hover:text-[var(--text)]',
  ].join(' '),

  icon: [
    'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.10)]',
    'text-[var(--text-muted)]',
    'hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)]',
    'hover:text-[var(--primary)]',
  ].join(' '),
}

const BASE =
  'inline-flex items-center gap-2 rounded-full ' +
  'transition-all duration-200 cursor-pointer select-none ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2 ' +
  'active:scale-[0.97]'

export function GlassButton({
  children,
  href,
  onClick,
  variant = 'ghost',
  className = '',
  external = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-pressed': ariaPressed,
}: GlassButtonProps) {
  const cls = `${BASE} ${VARIANT_STYLES[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  )
}
