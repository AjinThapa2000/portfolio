import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { IconMenu, IconSun, IconMoon } from './Icons.jsx'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTIONS.map((s) => s.id))

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header>
      <div className="nav-inner">
        <button className="logo" onClick={() => go('home')}>
          <span className="dot" />Dinesh Thapa
        </button>

        <nav className={`navlinks ${open ? 'open' : ''}`}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={active === s.id ? 'active' : ''}
              onClick={() => go(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <span className="status-pill">
            <span className="blip" />
            <span className="long">Open to work</span>
          </span>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <button className="navtoggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
            <IconMenu width={22} height={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
