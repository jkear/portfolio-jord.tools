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
    color: '#00D2A0',
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
      className="py-24 px-6 border-t border-[var(--border)]"
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
                product demos, and eventually led our AI implementations. That
                gave me a clear picture of how businesses work, and how often
                they quietly extract more from people than they give back.
              </p>
              <p>
                Now I build the other direction. Automations that cut fees
                people shouldn't be paying, tools that recover time lost to
                repetitive work, systems that connect what should have been
                connected years ago. I'm not trying to automate roles away —
                jobs exist because the economy is a system for people, not
                for optimization metrics. AI is a better tool for making that
                economy work the way it should.
              </p>
              <p>
                Most real problems live between the technical and the human
                side. When something costs too much to run, takes too long,
                or depends on data that exists but can't be reached — I can
                build the fix and explain what it's actually doing. The stack
                is whatever the problem needs: Python, TypeScript, agents,
                graph databases.
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
