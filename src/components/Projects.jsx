import Reveal from './Reveal'
import SectionBackground from './SectionBackground'

const projects = [
  {
    id: 1,
    title: 'Thrift Vault — Production E-Commerce Platform',
    description: 'Designed and built a full e-commerce platform end to end. A 14-table PostgreSQL schema in Prisma backs a modular Express API across 9 domains, with JWT access/refresh authentication, bcrypt hashing, Zod request validation, Helmet hardening and Redis-backed rate limiting. Because every item is one-of-one, checkout reserves stock and a scheduled job releases inventory from expired orders so nothing can be oversold. Payments sit behind a gateway interface, so a live provider drops in without touching order logic.',
    tags: ['PostgreSQL', 'Prisma', 'Redis', 'JWT', 'Docker', 'Node.js', 'Express', 'React'],
    link: 'https://github.com/vidhi-vats-11/thrift-vault-backend',
    live: 'https://thriftvaultstore.vercel.app'
  },
  {
    id: 2,
    title: 'Real-Time Monitoring Dashboard',
    description: 'Built an enterprise-grade real-time monitoring dashboard in React.js for a 12-node distributed sensor network. Designed scalable backend services with Django + MongoDB to ingest and process high-frequency data streams. Introduced Redis caching and a RabbitMQ message queue to decouple ingestion from processing, and delivered live updates over WebSockets. Deployed on GCP with Docker.',
    tags: ['React.js', 'Django', 'MongoDB', 'Redis', 'RabbitMQ', 'GCP', 'Docker', 'WebSocket'],
    note: 'Built during my internship at Data Sailors — source code is proprietary.'
  },
  {
    id: 3,
    title: 'GenAI RAG Document Assistant',
    description: 'Built a Retrieval-Augmented Generation assistant answering natural-language questions over an internal document corpus. Designed the ingestion pipeline that chunks documents, generates embeddings and indexes them in a vector store for fast semantic retrieval, with source citations to keep answers grounded. Containerized with Docker and automated build and deploy through GitHub Actions.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Vector Stores', 'Docker', 'CI/CD'],
    note: 'Built during my internship at Data Sailors — source code is proprietary.'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'This site. A responsive React + Vite portfolio with an EmailJS-powered contact form and an interactive resume chatbot, deployed through a GitHub to Vercel CI/CD pipeline with environment-based secret management.',
    tags: ['React', 'Vite', 'JavaScript', 'EmailJS', 'Vercel'],
    link: 'https://github.com/vidhi-vats-11/Portfolio',
    live: 'https://vidhivats-portfolio.vercel.app'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionBackground variant="code" />
      <div className="container">
        <Reveal as="h2">Featured Projects</Reveal>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 120} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                    Live demo →
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View code →
                  </a>
                )}
                {project.note && <span className="project-note">{project.note}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
