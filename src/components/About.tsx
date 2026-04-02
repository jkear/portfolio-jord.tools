'use client'

import { motion } from 'framer-motion'

const SKILLS = [
  {
    group: 'AI & Agents',
    color: '#38bdf8',
    items: ['Claude API', 'LangGraph', 'LangChain', 'CrewAI', 'Langfuse'],
  },
  {
    group: 'MCP & Tooling',
    color: '#a78bfa',
    items: ['Model Context Protocol', 'FastAPI', 'ElevenLabs API', 'httpx', 'n8n'],
  },
  {
    group: 'Data & Graph',
    color: '#34d399',
    items: ['Neo4j', 'pgvector', 'pandas', 'Cypher', 'KuzuDB'],
  },
  {
    group: 'Frontend',
    color: '#94caff',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    group: 'Backend',
    color: '#22c55e',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'SQLAlchemy'],
  },
  {
    group: 'Cloud & Infra',
    color: '#f97316',
    items: ['Google Cloud Platform', 'Vertex AI', 'Docker', 'Kubernetes', 'n8n'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
}

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-[rgba(148,163,184,0.08)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading text-4xl font-bold text-[var(--text)] mb-7">
              About
            </h2>
            <div
              className="space-y-5 text-[var(--text-muted)]"
              style={{ lineHeight: '1.72' }}
            >
              <p>
                I came into tech through sales and revenue operations — five
                years at a SaaS company where I managed inbound pipelines, ran
                product demos at conferences, and eventually led our AI
                implementations for marketing and sales. That background taught
                me how businesses actually work before I started writing code
                for them.
              </p>
              <p>
                Now I build web applications and workflow automations, mostly
                with Python and TypeScript. I work with agent frameworks, graph
                databases, and tools like the Model Context Protocol — and I
                can put a React frontend in front of it when needed. I'm still
                learning plenty, but I ship working software and I understand
                the business problems behind it.
              </p>
              <p>
                When a client needs a lead pipeline automated or an internal
                tool built, I can speak both languages — the technical
                requirements and the business case. That's the part of my
                background I find most useful.
              </p>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {SKILLS.map((group, i) => (
              <motion.div
                key={group.group}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="glass rounded-[var(--radius-sm)] p-4"
              >
                <h3
                  className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: group.color }}
                >
                  {group.group}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-[var(--text-muted)]"
                      style={{ lineHeight: '1.45' }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
