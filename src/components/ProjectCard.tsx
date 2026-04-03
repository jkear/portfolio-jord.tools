'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

const TAG_BG: Record<string, string> = {
  Python: 'rgba(96,165,250,0.15)',
  TypeScript: 'rgba(56,189,248,0.15)',
  Swift: 'rgba(249,115,22,0.15)',
  'Next.js': 'rgba(226,232,240,0.1)',
  React: 'rgba(34,211,238,0.14)',
  'Claude API': 'rgba(148,130,248,0.15)',
  FastAPI: 'rgba(16,185,129,0.15)',
  Neo4j: 'rgba(52,211,153,0.15)',
  MCP: 'rgba(167,139,250,0.15)',
  ElevenLabs: 'rgba(251,191,36,0.15)',
  Supabase: 'rgba(62,207,142,0.15)',
  Langfuse: 'rgba(251,113,133,0.14)',
  LangGraph: 'rgba(52,211,153,0.15)',
  Streamlit: 'rgba(255,75,75,0.14)',
  KuzuDB: 'rgba(167,139,250,0.15)',
  MLX: 'rgba(251,191,36,0.14)',
  Embeddings: 'rgba(167,139,250,0.14)',
}

const STATUS_STYLES = {
  active: {
    bg: 'var(--status-active-bg)',
    text: 'var(--status-active-text)',
    label: 'Active',
  },
  wip: {
    bg: 'rgba(251,191,36,0.12)',
    text: '#D97706',
    label: 'In Progress',
  },
  stable: {
    bg: 'var(--status-stable-bg)',
    text: 'var(--status-stable-text)',
    label: 'Stable',
  },
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = STATUS_STYLES[project.status]

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-[var(--radius)] p-5 glow-card
                 hover:border-[var(--border-hover)] hover:glow-card-hover hover:-translate-y-0.5
                 transition-all duration-300 cursor-default flex flex-col h-full"
    >
      {/* Accent line along top */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-40 group-hover:opacity-80 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Top row: icon + status */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold font-heading flex-shrink-0"
          style={{
            background: `${project.accent}1c`,
            color: project.accent,
            border: `1px solid ${project.accent}30`,
          }}
        >
          {project.displayName.charAt(0)}
        </div>

        <span
          className="text-[11px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: status.bg, color: status.text }}
        >
          {status.label}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-heading font-semibold text-[var(--text)] text-base mb-2.5 leading-tight
                   group-hover:text-[var(--primary)] transition-colors duration-200"
      >
        {project.displayName}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1"
        style={{ lineHeight: '1.65', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="proj-tag text-[11px] px-2 py-0.5 rounded-md font-medium"
            style={{
              background: TAG_BG[tag] ?? 'rgba(148,163,184,0.1)',
              color: 'var(--tag-text)',
              border: '1px solid rgba(148,163,184,0.1)',
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-[11px] px-1.5 py-0.5 text-[var(--text-subtle)]">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-3.5 border-t border-[var(--border)]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-subtle)] hover:text-[var(--primary)] transition-colors duration-150 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={13} strokeWidth={1.75} />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-subtle)] hover:text-[var(--primary)] transition-colors duration-150 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} strokeWidth={1.75} />
            Demo
          </a>
        )}
      </div>

    </motion.article>
  )
}
