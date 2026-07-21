import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Skills from './components/Skills'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  useReveal()

  // Global keyboard shortcut for the command palette.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Skills />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
