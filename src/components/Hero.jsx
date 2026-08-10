import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <HeroBackground />
      <div className="hero-content">
        <p className="greeting hero-in hero-in-1">Hello, I'm</p>
        <h1 className="hero-in hero-in-2">
          <span className="gradient-text">Vidhi Vats</span>
        </h1>
        <p className="role hero-in hero-in-3">Software Development Engineer | Backend &amp; Full-Stack | AI-Powered Systems</p>
        <p className="subtitle hero-in hero-in-4">Building scalable, real-time distributed systems with React, Django, and Node.js. Specialized in AI-powered applications, data pipelines, and cloud infrastructure.</p>
        <div className="cta-buttons hero-in hero-in-5">
          <a href="#projects" className="btn btn-primary btn-shine">View My Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <a href="#experience" className="scroll-cue" aria-label="Scroll down">
        <span className="scroll-cue-mouse">
          <span className="scroll-cue-dot"></span>
        </span>
      </a>
    </section>
  )
}
