import ThemeToggle from './ThemeToggle'
import ScrollProgress from './ScrollProgress'

export default function Header() {
  return (
    <header className="header">
      <ScrollProgress />
      <nav className="nav">
        <div className="logo">Vidhi Vats</div>
        <ul className="nav-links">
          <li><a href="#home"><span>Home</span></a></li>
          <li><a href="#experience"><span>Experience</span></a></li>
          <li><a href="#projects"><span>Projects</span></a></li>
          <li><a href="#skills"><span>Skills</span></a></li>
          <li><a href="#education"><span>Education</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
