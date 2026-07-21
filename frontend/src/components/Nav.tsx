import { useEffect, useState } from 'react'
import { NAV_STOPS } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

interface Props {
  onOpenPalette: () => void
}

const IDS = NAV_STOPS.map((s) => s.id)

export default function Nav({ onOpenPalette }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={(e) => go(e, 'home')} aria-label="brewcase — home">
          <img className="logo" src={`${import.meta.env.BASE_URL}favicon.ico`} alt="brewcase logo" width={44} height={44} />
          <span className="name">
            <span className="accent">brew</span>
            <b>case</b>
          </span>
        </a>

        <div className="nav-links">
          {NAV_STOPS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              onClick={(e) => go(e, s.id)}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="kbd-hint" onClick={onOpenPalette} aria-label="Open command palette">
            ⌘K
          </button>
          <button className="btn btn-primary btn-sm" onClick={(e) => go(e, 'contact')}>
            Start a project
          </button>
        </div>
      </div>
    </nav>
  )
}
