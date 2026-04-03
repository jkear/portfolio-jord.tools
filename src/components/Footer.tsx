import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[var(--text-subtle)] tracking-wide">
          Built for people · Next.js · Framer Motion
        </span>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/jkear"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 text-xs text-[var(--text-subtle)] hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer"
          >
            <Github size={14} strokeWidth={1.75} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
