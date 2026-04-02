import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProjectsGrid />
      <About />
      <Footer />
    </main>
  )
}
