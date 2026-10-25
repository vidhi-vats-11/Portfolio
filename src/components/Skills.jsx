import Reveal from './Reveal'
import SectionBackground from './SectionBackground'

const skills = {
  'Languages': ['Python', 'C++', 'C', 'SQL', 'JavaScript'],
  'Backend': ['Django', 'Flask', 'REST APIs', 'WebSockets', 'JWT Auth', 'Node.js / Express'],
  'Frontend': ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
  'AI/LLM': ['LangChain', 'OpenAI APIs', 'RAG', 'Embeddings', 'Vector Stores', 'AI Agents', 'Prompt Engineering'],
  'Databases & Messaging': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  'Cloud & DevOps': ['Docker', 'GCP', 'Linux', 'Git', 'GitHub Actions', 'Postman'],
  'Core Concepts': ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP']
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionBackground variant="hex" />
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
