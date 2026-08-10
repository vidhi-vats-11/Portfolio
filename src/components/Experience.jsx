import Reveal from './Reveal'
import SectionBackground from './SectionBackground'

const experiences = [
  {
    id: 1,
    company: 'Data Sailors Private Limited',
    position: 'Software Developer Intern',
    period: '06/2025 – 02/2026',
    responsibilities: [
      'Built an enterprise-grade real-time monitoring dashboard in React.js, improving data visibility across a 12-node distributed sensor network.',
      'Designed scalable backend services with Django + MongoDB to ingest and process high-frequency real-time data streams.',
      'Introduced Redis caching and a RabbitMQ message queue to decouple ingestion from processing, smoothing traffic spikes and keeping the dashboard responsive under load.',
      'Engineered a Data Concentrator Unit on Raspberry Pi for secure data collection and transmission from edge devices.',
      'Developed Python-based services with WebSocket-driven live updates for real-time communication between edge devices and cloud systems.',
      'Deployed and managed infrastructure on Google Cloud Platform (GCP) with Docker, ensuring scalability and reliability.',
      'Implemented secure remote access via VPN + SSH, improving system accessibility and security.',
      'Scaled the architecture from a single node to a distributed cluster, improving performance and fault tolerance.'
    ],
    technologies: ['React.js', 'Django', 'MongoDB', 'Redis', 'RabbitMQ', 'Python', 'WebSocket', 'GCP', 'Docker', 'Raspberry Pi']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <SectionBackground variant="circuit" />
      <div className="container">
        <Reveal as="h2">Professional Experience</Reveal>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 120} className="experience-item">
              <div className="exp-header">
                <div>
                  <h3>{exp.position}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, ridx) => (
                  <li key={ridx} style={{ transitionDelay: `${ridx * 60}ms` }}>{resp}</li>
                ))}
              </ul>
              <div className="technologies">
                {exp.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
