'use client'

import { useEffect, useState, type ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LGComponent = React.ComponentType<any>

interface LiquidButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  /** Classes applied to the inner <a> or <button> element */
  innerClass?: string
  external?: boolean
  type?: 'button' | 'submit'
  'aria-label'?: string
  'aria-pressed'?: boolean
}

export function LiquidButton({
  children,
  href,
  onClick,
  className = '',
  innerClass = '',
  external = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-pressed': ariaPressed,
}: LiquidButtonProps) {
  const [LG, setLG] = useState<LGComponent | null>(null)

  useEffect(() => {
    import('@liquidglass/react').then((m) => {
      // must use updater fn so React doesn't call the component as an initializer
      setLG(() => m.LiquidGlass as LGComponent)
    })
  }, [])

  const baseInner = [
    'inline-flex items-center gap-2 cursor-pointer select-none',
    'focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2',
    'active:scale-[0.97] transition-transform duration-150',
    innerClass,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = href ? (
    <a
      href={href}
      className={baseInner}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={baseInner}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  )

  /* CSS glassmorphism fallback until LiquidGlass hydrates */
  if (!LG) {
    return (
      <span className={`glass inline-flex items-center rounded-full overflow-hidden ${className}`}>
        {inner}
      </span>
    )
  }

  return (
    <LG
      borderRadius={100}
      blur={1.6}
      brightness={0.8}
      contrast={1.2}
      shadowIntensity={2}
      elasticity={0.3}
      displacementScale={20}
      className={`overflow-hidden ${className}`}
    >
      {inner}
    </LG>
  )
}
