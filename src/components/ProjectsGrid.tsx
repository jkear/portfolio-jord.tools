'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { GlassButton } from './GlassButton'
import { PROJECTS, CATEGORIES, type Category } from '@/data/projects'

export function ProjectsGrid() {
  const [active, setActive] = useState<Category>('all')

  const filtered = active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="font-heading text-4xl font-bold text-[var(--text)] mb-3">
            Projects
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-lg" style={{ lineHeight: '1.65' }}>
            Things I've built — from autonomous agents to macOS apps.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => (
            <GlassButton
              key={cat.id}
              onClick={() => setActive(cat.id)}
              variant={active === cat.id ? 'primary' : 'ghost'}
              aria-pressed={active === cat.id}
              className="px-4 py-1.5 text-sm"
            >
              {cat.label}
            </GlassButton>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active + '-count'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="mt-8 text-center text-xs text-[var(--text-subtle)] uppercase tracking-wider"
          >
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {active !== 'all' && ` · ${CATEGORIES.find((c) => c.id === active)?.label}`}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
