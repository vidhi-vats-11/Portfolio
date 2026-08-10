import Reveal from './Reveal'

const skills = {
  'Languages': ['Python', 'C++', 'JavaScript', 'TypeScript'],
  'Backend': ['Django', 'Node.js', 'Express.js', 'Nest.js', 'Flask', 'REST APIs'],
  'Frontend': ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI'],
  'AI/LLM': ['LangChain', 'OpenAI APIs', 'RAG', 'Embeddings', 'Vector Stores', 'AI Agents', 'Prompt Engineering'],
  'Databases & Messaging': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Firebase', 'GitHub Actions', 'CI/CD'],
  'Core Concepts': ['Data Structures & Algorithms', 'OOP', 'Microservices', 'System Design', 'Distributed Systems']
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal as="h2">Skills &amp; Technologies</Reveal>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 90} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {items.map((item, itemIdx) => (
                  <li key={item} style={{ transitionDelay: `${idx * 90 + itemIdx * 40}ms` }}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
