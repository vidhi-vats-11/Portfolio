import Reveal from './Reveal'
import SectionBackground from './SectionBackground'

const education = [
  {
    id: 1,
    degree: 'M.Tech, Computer Science & Engineering',
    institution: 'IIT Patna',
    period: '2026 – 2028',
    status: 'Pursuing',
    details: 'Postgraduate program in CSE with focus on distributed systems and AI.'
  },
  {
    id: 2,
    degree: 'B.Tech, Electrical Engineering',
    institution: 'Shri Mata Vaishno Devi University',
    period: 'Jul 2021 – May 2025',
    status: 'Completed',
    details: 'Undergraduate degree in Electrical Engineering with coursework in software development and system design.'
  }
]

const certifications = [
  {
    id: 1,
    title: 'Full Stack Generative & Agentic AI with Python',
    issuer: 'Udemy',
    instructors: 'Hitesh Choudhary & Piyush Garg',
    topics: 'LLMs, AI agents, RAG, and automation pipelines with hands-on projects'
  }
]

export default function Education() {
  return (
    <section id="education" className="education">
      <SectionBackground variant="cap" />
      <div className="container">
        <Reveal as="h2">Education &amp; Certifications</Reveal>

        <div className="education-content">
          <div className="education-section">
            <Reveal as="h3">Education</Reveal>
            <div className="education-list">
              {education.map((edu, idx) => (
                <Reveal key={edu.id} delay={idx * 120} className="education-item">
                  <div className="edu-header">
                    <div>
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                    </div>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p className="details">{edu.details}</p>
                  <span className="status">{edu.status}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="certification-section">
            <Reveal as="h3" delay={100}>Certifications</Reveal>
            <div className="certification-list">
              {certifications.map((cert, idx) => (
                <Reveal key={cert.id} delay={100 + idx * 120} className="certification-item">
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="instructors">Instructors: {cert.instructors}</p>
                  <p className="topics">{cert.topics}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
