import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Background } from '@/components/Background'
import { ThemeProvider } from '@/components/ThemeProvider'
import { DPad } from '@/components/DPad'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'jord.tools — Developer & Builder',
  description:
    'Developer focused on AI agents, MCP tooling, graph databases, and full-stack web. Building the infrastructure layer for how humans and AI collaborate.',
  keywords: ['portfolio', 'developer', 'AI agents', 'MCP', 'Next.js', 'Python', 'Swift'],
  openGraph: {
    title: 'jord.tools — Developer & Builder',
    description: 'AI agents, MCP servers, graph databases, and full-stack web.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Anti-FOUC: apply saved theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>
          <Background />
          {children}
          <DPad />
        </ThemeProvider>
      </body>
    </html>
  )
}
