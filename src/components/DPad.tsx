'use client'

import { useTheme, type Theme } from './ThemeProvider'

const THEMES: Record<Theme, { name: string; short: string; accent: string; textOnAccent: string }> = {
  dark:      { name: 'OLED Dark',  short: 'DARK', accent: '#00D2A0', textOnAccent: '#000000' },
  light:     { name: 'Swiss Light', short: 'LITE', accent: '#2563EB', textOnAccent: '#FFFFFF' },
  editorial: { name: 'Editorial',   short: 'EDIT', accent: '#7C3AED', textOnAccent: '#FFFFFF' },
  anthropic: { name: 'Anthropic',   short: 'ANT',  accent: '#E8602D', textOnAccent: '#FFFFFF' },
}

// D-pad direction → theme
const DIR_THEME: Record<'up' | 'down' | 'left' | 'right', Theme> = {
  up:    'dark',
  down:  'light',
  left:  'editorial',
  right: 'anthropic',
}

const CORNER_RADIUS: Record<string, string> = {
  up:    'rounded-tl-[5px] rounded-tr-[5px]',
  down:  'rounded-bl-[5px] rounded-br-[5px]',
  left:  'rounded-tl-[5px] rounded-bl-[5px]',
  right: 'rounded-tr-[5px] rounded-br-[5px]',
}

const Up    = () => <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3L8 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
const Down  = () => <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3L5 7L8 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
const Left  = () => <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 2L3 5L7 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
const Right = () => <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2L7 5L3 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>

const ARROWS = { up: Up, down: Down, left: Left, right: Right }

function Arm({
  dir,
  currentTheme,
  onSelect,
}: {
  dir: 'up' | 'down' | 'left' | 'right'
  currentTheme: Theme
  onSelect: (t: Theme) => void
}) {
  const target = DIR_THEME[dir]
  const isActive = currentTheme === target
  const { accent, textOnAccent, name } = THEMES[target]
  const Arrow = ARROWS[dir]

  return (
    <button
      onClick={() => onSelect(target)}
      title={name}
      aria-label={`${name} theme`}
      aria-pressed={isActive}
      className={`w-8 h-8 flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 ${CORNER_RADIUS[dir]}`}
      style={{
        background: isActive ? accent : 'rgba(255,255,255,0.07)',
        color: isActive ? textOnAccent : 'rgba(255,255,255,0.50)',
      }}
    >
      <Arrow />
    </button>
  )
}

export function DPad() {
  const { theme, setTheme } = useTheme()
  const { accent, short } = THEMES[theme]

  return (
    <div
      className="fixed bottom-4 right-4 z-50 select-none"
      aria-label="Theme switcher"
    >
      <div
        className="rounded-xl p-2.5"
        style={{
          background: 'rgba(8, 8, 8, 0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.10)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
        }}
      >
        {/* 3×3 D-pad grid */}
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: 'repeat(3, 2rem)', gridTemplateRows: 'repeat(3, 2rem)' }}
        >
          {/* Row 1 */}
          <div className="w-8 h-8" />
          <Arm dir="up" currentTheme={theme} onSelect={setTheme} />
          <div className="w-8 h-8" />

          {/* Row 2 */}
          <Arm dir="left" currentTheme={theme} onSelect={setTheme} />

          {/* Center dot */}
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <div
              className="w-2 h-2 rounded-full transition-colors duration-300"
              style={{ background: accent }}
            />
          </div>

          <Arm dir="right" currentTheme={theme} onSelect={setTheme} />

          {/* Row 3 */}
          <div className="w-8 h-8" />
          <Arm dir="down" currentTheme={theme} onSelect={setTheme} />
          <div className="w-8 h-8" />
        </div>

        {/* Current theme label */}
        <p
          className="text-center mt-2 transition-colors duration-300"
          style={{ fontSize: 9, letterSpacing: '0.12em', color: accent }}
        >
          {short}
        </p>
      </div>
    </div>
  )
}
