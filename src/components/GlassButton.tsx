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
    'bg-[rgba(148,202,255,0.08)] border border-[rgba(148,202,255,0.28)]',
    'text-[#94caff]',
    'hover:bg-[rgba(148,202,255,0.16)] hover:border-[rgba(148,202,255,0.48)]',
    'shadow-[0_2px_14px_rgba(0,210,170,0.08),inset_0_1px_0_rgba(255,255,255,0.07)]',
    'hover:shadow-[0_4px_20px_rgba(148,202,255,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]',
  ].join(' '),

  ghost: [
    'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)]',
    'text-[rgba(220,228,242,0.62)]',
    'hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.17)]',
    'hover:text-[rgba(240,244,252,0.95)]',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
  ].join(' '),

  icon: [
    'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)]',
    'text-[rgba(220,228,242,0.55)]',
    'hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.17)]',
    'hover:text-[#94caff]',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
  ].join(' '),
}

const BASE =
  'inline-flex items-center gap-2 rounded-full backdrop-blur-[12px] ' +
  'transition-all duration-200 cursor-pointer select-none ' +
  'focus-visible:outline-2 focus-visible:outline-[#94caff] focus-visible:outline-offset-2 ' +
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
