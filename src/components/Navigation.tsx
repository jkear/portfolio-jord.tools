'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { GlassButton } from './GlassButton'

const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-heading font-bold text-lg tracking-tight cursor-pointer group">
          <span className="text-[var(--text)]">jord</span>
          <span
            style={{
              background: 'linear-gradient(90deg, #00dcc0, #94caff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            .tools
          </span>
        </a>

        <div className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <GlassButton
            href="https://github.com/jkear"
            external
            variant="icon"
            aria-label="GitHub profile"
            className="p-2"
          >
            <Github size={16} strokeWidth={1.75} />
          </GlassButton>
        </div>
      </div>
    </motion.nav>
  )
}
