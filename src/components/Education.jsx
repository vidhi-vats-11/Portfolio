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
      <div className="container">
        <h2>Education & Certifications</h2>

        <div className="education-content">
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-list">
              {education.map(edu => (
                <div key={edu.id} className="education-item">
                  <div className="edu-header">
                    <div>
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                    </div>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p className="details">{edu.details}</p>
                  <span className="status">{edu.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="certification-section">
            <h3>Certifications</h3>
            <div className="certification-list">
              {certifications.map(cert => (
                <div key={cert.id} className="certification-item">
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="instructors">Instructors: {cert.instructors}</p>
                  <p className="topics">{cert.topics}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
