'use client'

import { useTheme } from './ThemeProvider'

export function Background() {
  const { theme } = useTheme()

  if (theme === 'light') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#FAFAFA]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.35,
          }}
        />
      </div>
    )
  }

  if (theme === 'editorial') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[#F5F0E8]" />
      </div>
    )
  }

  if (theme === 'anthropic') {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: '#1F1F1E' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px',
          }}
        />
        <div
          className="aurora-a absolute"
          style={{
            top: '-8%', left: '-6%', width: '68vw', height: '65vh', borderRadius: '50%',
            background: 'radial-gradient(ellipse 55% 50% at 30% 35%, rgba(203,123,93,0.08) 0%, rgba(203,123,93,0.03) 45%, transparent 72%)',
          }}
        />
      </div>
    )
  }

  // OLED Dark (default)
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />
      {/* Single teal glow */}
      <div
        className="aurora-a absolute"
        style={{
          top: '-8%', left: '-6%', width: '68vw', height: '65vh', borderRadius: '50%',
          background: 'radial-gradient(ellipse 55% 50% at 30% 35%, rgba(0,210,170,0.14) 0%, rgba(0,180,200,0.06) 45%, transparent 72%)',
        }}
      />
      <div
        className="aurora-b absolute"
        style={{
          top: '-5%', right: '-8%', width: '62vw', height: '60vh', borderRadius: '50%',
          background: 'radial-gradient(ellipse 52% 48% at 65% 30%, rgba(0,210,160,0.10) 0%, rgba(0,180,200,0.05) 45%, transparent 72%)',
        }}
      />
      <div
        className="aurora-hue absolute"
        style={{
          top: '22%', left: '28%', width: '50vw', height: '50vh', borderRadius: '50%',
          mixBlendMode: 'screen',
          background: 'radial-gradient(ellipse 48% 44% at 50% 50%, rgba(0,200,160,0.08) 0%, rgba(0,210,160,0.03) 50%, transparent 72%)',
        }}
      />
    </div>
  )
}
