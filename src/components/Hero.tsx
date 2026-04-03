'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Mail, Linkedin, CalendarDays, Briefcase } from 'lucide-react'
import { GlassButton } from './GlassButton'

const STACK = [
  { label: 'Python', color: '#60a5fa' },
  { label: 'TypeScript', color: '#38bdf8' },
  { label: 'LangGraph', color: '#00d2a0' },
  { label: 'MCP', color: '#a78bfa' },
  { label: 'Neo4j', color: '#22c55e' },
  { label: 'Next.js', color: '#94caff' },
  { label: 'Docker', color: '#38bdf8' },
]

const LINKS = [
  {
    label: 'Book a Call',
    href: 'https://calendar.app.google/8fP33YiJ39vt7KY3A',
    icon: CalendarDays,
    color: '#00d2a0',
    description: 'Schedule time with me',
  },
  {
    label: 'Email',
    href: 'mailto:jordankearfott@gmail.com',
    icon: Mail,
    color: '#94caff',
    description: 'jordankearfott@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jkearfott',
    icon: Linkedin,
    color: '#38bdf8',
    description: '/in/jkearfott',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/jkear',
    icon: Github,
    color: '#a78bfa',
    description: '/jkear',
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01724cda7651017349?mp_source=share',
    icon: Briefcase,
    color: '#6fda44',
    description: 'Hire me on Upwork',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            className="lg:col-span-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-[var(--text-muted)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                Building at the intersection of AI and infrastructure
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading font-extrabold tracking-tight text-[var(--text)] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
            >
              Building the
              <br />
              <span className="text-gradient">tools AI needs.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-[var(--text-muted)] mb-8 max-w-[480px]"
              style={{ lineHeight: '1.72' }}
            >
              Developer focused on AI agents, MCP servers, and graph databases.
              I build the infrastructure layer for how humans and AI collaborate.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-3 flex-wrap">
              <GlassButton
                href="#projects"
                variant="primary"
                className="px-5 py-2.5 text-sm font-semibold"
              >
                View Projects
              </GlassButton>

              <GlassButton
                href="https://github.com/jkear"
                external
                variant="ghost"
                className="px-5 py-2.5 text-sm font-medium"
              >
                <Github size={15} strokeWidth={1.75} />
                GitHub
              </GlassButton>
            </motion.div>
          </motion.div>

          {/* ── Right: stats card ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Contact card */}
            <div className="rounded-[var(--radius)] overflow-hidden bg-white border border-[var(--border)] glow-card">
              {/* Content */}
              <div className="p-6">
                {/* Contact links */}
                <div className="space-y-2 mb-5 pb-5 border-b border-[var(--border)] last:border-b-0">
                  {LINKS.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group hover:bg-[rgba(0,0,0,0.04)]"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(37,99,235,0.08)' }}
                        >
                          <Icon size={15} style={{ color: 'var(--primary)' }} strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-medium text-[var(--text)]">
                            {link.label}
                          </div>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity duration-200">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Stack */}
                <div>
                  <p className="text-[9px] text-[var(--text-subtle)] uppercase tracking-widest mb-3">
                    Core Stack
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {STACK.map((tech) => (
                      <div key={tech.label} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: tech.color }}
                        />
                        <span className="text-[13px] text-[var(--text-muted)]">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-1.5 text-[var(--text-subtle)] hover:text-[var(--text-muted)] transition-colors duration-200 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
