export type Category = 'all' | 'ai-agents' | 'mcp-tools' | 'web' | 'data-graph' | 'native'

export interface Project {
  id: string
  name: string
  displayName: string
  description: string
  category: Category
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
  status: 'active' | 'stable' | 'wip'
  accent: string
}

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai-agents', label: 'AI Agents' },
  { id: 'mcp-tools', label: 'MCP Tools' },
  { id: 'web', label: 'Web' },
  { id: 'data-graph', label: 'Data & Graph' },
  { id: 'native', label: 'Native' },
]

export const PROJECTS: Project[] = [
  {
    id: 'epstein-graphrag',
    name: 'Epstein-graphrag',
    displayName: 'Epstein GraphRAG',
    description:
      'GraphRAG pipeline for 850K+ Epstein case evidence files. 4-stage: classify → OCR → extract → ingest. Vision models (Qwen2-VL) for 11% requiring OCR, Neo4j knowledge graph with 18 entity types including Person, Aircraft, and Property.',
    category: 'data-graph',
    tags: ['Python', 'Neo4j', 'vLLM', 'Qwen2-VL', 'Pydantic'],
    github: 'https://github.com/jkear/Epstein-graphrag',
    featured: true,
    status: 'active',
    accent: '#f87171',
  },
  {
    id: 'fec-data-graph',
    name: 'FEC-data-and-HR1-199-graph',
    displayName: 'Federal Election Dark Money Trace',
    description:
      'FEC campaign finance analysis via Neo4j. Relationship mapping between candidates, committees, and transactions. Interactive Streamlit dashboard with pre-built Cypher queries for anomaly detection and compliance monitoring.',
    category: 'data-graph',
    tags: ['Python', 'Neo4j', 'Streamlit', 'pandas', 'networkx'],
    github: 'https://github.com/jkear/FEC-data-and-HR1-199-neo4j-dump',
    status: 'stable',
    accent: '#facc15',
  },
  {
    id: 'backflip-bdr',
    name: 'backflip-bdr',
    displayName: 'Lead Research to Meeting Pipeline',
    description:
      'Autonomous multi-agent pipeline: B2B lead discovery → qualification → email outreach → meeting booking. Uses Exa semantic search, ElevenLabs voice, and Google Calendar. Explicit call-gate — no voice contact without written permission.',
    category: 'ai-agents',
    tags: ['Python', 'Claude API', 'ElevenLabs', 'SQLAlchemy', 'Langfuse'],
    github: 'https://github.com/jkear/backflip-bdr',
    featured: true,
    status: 'active',
    accent: '#34d399',
  },
  {
    id: 'kuzu-memory-graph-mcp',
    name: 'kuzu-memory-graph-mcp',
    displayName: 'Kuzu Memory Graph MCP',
    description:
      'High-performance LLM memory server built on KuzuDB graph database. Multi-database support, hybrid text + semantic search, Apple Silicon acceleration via MLX embeddings, exposed as an MCP server for Claude.',
    category: 'mcp-tools',
    tags: ['Python', 'MCP', 'KuzuDB', 'MLX', 'Embeddings'],
    github: 'https://github.com/jkear/kuzu-memory-graph-mcp',
    featured: true,
    status: 'active',
    accent: '#a78bfa',
  },
  {
    id: 'elevenlabs-voice-mcp',
    name: 'elevenlabs-voice-mcp',
    displayName: 'ElevenLabs Voice MCP',
    description:
      'ElevenLabs TTS as a Model Context Protocol server for Claude Desktop. Six tools: speech synthesis, base64 audio, voice listing, voice details, model listing, and account quota tracking.',
    category: 'mcp-tools',
    tags: ['Python', 'MCP', 'ElevenLabs', 'httpx'],
    github: '#',
    status: 'stable',
    accent: '#c084fc',
  },
  {
    id: 'pdf-textsplitter',
    name: 'pdf-textsplitter-for-TTS',
    displayName: 'PDF Text Splitter for TTS',
    description:
      'Extracts and chunks PDF text optimised for OpenAI TTS pipelines. Uses pdfplumber as primary backend with PyPDF2 fallback for broader format support.',
    category: 'mcp-tools',
    tags: ['Python', 'pdfplumber', 'PyPDF2', 'TTS'],
    github: 'https://github.com/jkear/pdf-textsplitter-for-TTS',
    status: 'stable',
    accent: '#f472b6',
  },
  {
    id: 'historical-mirror',
    name: 'historical-mirror',
    displayName: 'Historical Mirror',
    description:
      'Civic tool mapping current US political events to analogous 1930s–40s Germany mechanisms using LLM pattern recognition. Weekly reports from Firecrawl-sourced news, curated USHMM/Nuremberg baselines, institutional resistance tracking.',
    category: 'web',
    tags: ['Python', 'Flask', 'React', 'TypeScript', 'Anthropic', 'Firecrawl'],
    github: 'https://github.com/jkear/historical-mirror',
    status: 'active',
    accent: '#fbbf24',
  },
  {
    id: 'exp4t',
    name: 'exp4t',
    displayName: 'ExPatPlan',
    description:
      'Job search platform for US professionals seeking HSM visa-sponsored roles in the Netherlands. AI-powered company matching via pgvector similarity, resume analysis with US→Dutch translation, real-time job discovery.',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI', 'pgvector'],
    github: 'https://github.com/jkear/exp4t',
    status: 'active',
    accent: '#60a5fa',
  },
  {
    id: 'swift-historical-mirror',
    name: 'Swift_Historical-Mirror',
    displayName: 'Historical Mirror for macOS',
    description:
      'Dark glassmorphic macOS Catalyst companion app for the Historical Mirror API. Three-column NavigationSplitView, week picker, analysis list, full report view, API status indicator. Swift 6.2 + MVVM with @Observable.',
    category: 'native',
    tags: ['Swift', 'SwiftUI', 'macOS', 'Catalyst', 'MVVM'],
    github: '#',
    status: 'active',
    accent: '#f97316',
  },
  {
    id: 'elevenlabs-macos-voice',
    name: 'elevenlabs_macOS_voice',
    displayName: 'ElevenLabs macOS Voice',
    description:
      'Replace macOS system TTS with a cloned ElevenLabs voice. Select any text in any app, trigger a keyboard shortcut via Automator Quick Action, hear it in your own voice. API key stored in macOS Keychain.',
    category: 'native',
    tags: ['Python', 'ElevenLabs', 'macOS', 'Automator', 'AppleScript'],
    github: 'https://github.com/jkear/elevenlabs_macOS_voice',
    status: 'stable',
    accent: '#fb923c',
  },
  {
    id: 'youswine-website',
    name: 'youswine-website',
    displayName: 'You Swine',
    description: 'Static website for You Swine. Simple HTML, CSS, and JavaScript.',
    category: 'web',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jkear/youswine-website',
    status: 'stable',
    accent: '#4ade80',
  },
  {
    id: 'agent-dojo',
    name: 'Agent_Dojo',
    displayName: 'Agent Dojo',
    description:
      'AI agent orchestration framework combining CrewAI concepts with LangGraph workflows. Features a drag-and-drop visual canvas, real-time collaboration, Langfuse observability, Composio integrations, and MCP tool support.',
    category: 'ai-agents',
    tags: ['Python', 'TypeScript', 'FastAPI', 'React', 'LangGraph', 'PostgreSQL'],
    github: 'https://github.com/jkear/Agent_Dojo',
    featured: true,
    status: 'wip',
    accent: '#38bdf8',
  },
]
