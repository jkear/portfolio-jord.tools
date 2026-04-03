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
    'bg-[var(--primary)] border border-[var(--primary)]',
    'text-white',
    'hover:bg-blue-700 hover:border-blue-700',
    'shadow-sm',
  ].join(' '),

  ghost: [
    'bg-transparent border border-[var(--border)]',
    'text-[var(--text-muted)]',
    'hover:bg-[rgba(0,0,0,0.04)] hover:border-[var(--border-hover)]',
    'hover:text-[var(--text)]',
  ].join(' '),

  icon: [
    'bg-transparent border border-[var(--border)]',
    'text-[var(--text-muted)]',
    'hover:bg-[rgba(0,0,0,0.04)] hover:border-[var(--border-hover)]',
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
