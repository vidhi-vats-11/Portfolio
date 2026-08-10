import SectionBackground from './SectionBackground'

export default function Footer() {
  return (
    <footer className="footer">
      <SectionBackground variant="binary" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vidhi Vats</h3>
            <p>Software Development Engineer | Backend & Full-Stack | AI-Powered Systems</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/vidhi-vats-11" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/vidhivats-" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:vidhii.vats@gmail.com">Email</a></li>
              <li><a href="tel:+919906843553">Phone</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Vidhi Vats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
