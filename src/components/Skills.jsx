const skills = {
  'Frontend': ['React', 'JavaScript', 'CSS', 'HTML', 'Tailwind CSS', 'Vite'],
  'Backend': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker']
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
