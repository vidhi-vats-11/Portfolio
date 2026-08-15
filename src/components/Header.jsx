import { useEffect, useState } from 'react'
import ScrollProgress from './ScrollProgress'
import profilePhoto from '../assets/profile.jpg'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="header">
      <ScrollProgress />
      <nav className="nav">
        <div className="logo">
          <div
            className="logo-photo"
            style={{ backgroundImage: `url(${profilePhoto})` }}
            role="img"
            aria-label="Vidhi Vats"
          />
          Vidhi Vats
        </div>

        <ul className="nav-links nav-links-desktop">
          {links.map((link) => (
            <li key={link.href}><a href={link.href}><span>{link.label}</span></a></li>
          ))}
        </ul>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? ' nav-toggle-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' nav-mobile-open' : ''}`}>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}><span>{link.label}</span></a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
