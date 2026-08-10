const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts and location search',
    tags: ['React', 'API Integration', 'Charts'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
