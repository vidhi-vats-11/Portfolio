import Reveal from './Reveal'

const projects = [
  {
    id: 1,
    title: 'GenAI RAG Document Assistant',
    description: 'Built a Retrieval-Augmented Generation chatbot that answers natural-language questions over a custom document corpus. Designed an ingestion pipeline that chunks documents, generates embeddings, and indexes them in a vector store for fast semantic retrieval. Implemented context-aware query handling with low-hallucination answers and source citations. Containerized with Docker and automated CI/CD with GitHub Actions.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Vector Stores', 'Docker', 'CI/CD', 'Firebase'],
    link: 'https://github.com/vidhi-vats-11'
  },
  {
    id: 2,
    title: 'Real-Time Monitoring Dashboard',
    description: 'Built an enterprise-grade real-time monitoring dashboard in React.js for a 12-node distributed sensor network. Designed scalable backend services with Django + MongoDB to ingest and process high-frequency data streams. Introduced Redis caching and RabbitMQ message queue to decouple ingestion from processing. Deployed on GCP with Docker for scalability.',
    tags: ['React.js', 'Django', 'MongoDB', 'Redis', 'RabbitMQ', 'GCP', 'Docker', 'WebSocket'],
    link: 'https://github.com/vidhi-vats-11'
  },
  {
    id: 3,
    title: 'Network Vulnerability Scanner',
    description: 'Built a full-stack security tool in React + Django to scan and analyze network vulnerabilities with real-time device discovery and scanning. Simulated real-world attacks (MITM, ARP spoofing, packet sniffing) and built Python brute-force modules for SSH/Telnet security testing. Optimized packet processing for real-time vulnerability detection.',
    tags: ['React', 'Django', 'Python', 'Network Security', 'Real-Time'],
    link: 'https://github.com/vidhi-vats-11'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
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
              <a href={project.link} className="project-link">View Project →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
