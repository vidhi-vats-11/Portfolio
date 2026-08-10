import profile from '../data/profile'

const topics = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'yo', 'sup', 'good morning', 'good evening'],
    respond: () =>
      `Hi! I'm ${profile.name}'s portfolio assistant. Ask me about her skills, experience, projects, education, or how to get in touch.`
  },
  {
    id: 'thanks',
    keywords: ['thank', 'thanks', 'thx', 'appreciate'],
    respond: () => `You're welcome! Anything else you'd like to know about ${profile.name}?`
  },
  {
    id: 'summary',
    keywords: ['who are you', 'about vidhi', 'about you', 'tell me about', 'summary', 'introduce', 'who is vidhi'],
    respond: () => profile.summary
  },
  {
    id: 'skills',
    keywords: ['skill', 'tech stack', 'technolog', 'language', 'stack', 'tools', 'know how to', 'proficient'],
    respond: () => {
      const lines = Object.entries(profile.skills)
        .map(([cat, items]) => `• ${cat}: ${items.join(', ')}`)
        .join('\n')
      return `Here's a breakdown of her technical skills:\n${lines}`
    }
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'intern', 'company', 'employer', 'career'],
    respond: () => {
      const exp = profile.experience[0]
      return `${exp.role} at ${exp.company} (${exp.period}):\n${exp.highlights.slice(0, 4).map(h => `• ${h}`).join('\n')}\n...and more — check the Experience section for the full list.`
    }
  },
  {
    id: 'projects',
    keywords: ['project', 'built', 'build', 'portfolio piece', 'genai', 'rag', 'scanner', 'dashboard'],
    respond: () =>
      `She's built a few notable projects:\n${profile.projects
        .map(p => `• ${p.title} (${p.stack})`)
        .join('\n')}\nWant details on any of them? Just ask by name.`
  },
  {
    id: 'project-rag',
    keywords: ['rag', 'genai', 'langchain', 'chatbot project', 'document assistant'],
    respond: () => profile.projects[0].description
  },
  {
    id: 'project-dashboard',
    keywords: ['monitoring dashboard', 'sensor network', 'real-time dashboard', 'dashboard project'],
    respond: () => profile.projects[1].description
  },
  {
    id: 'project-scanner',
    keywords: ['vulnerability', 'scanner', 'security tool', 'network security'],
    respond: () => profile.projects[2].description
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'study', 'college', 'university', 'iit', 'b.tech', 'm.tech', 'academic'],
    respond: () =>
      `Education:\n${profile.education.map(e => `• ${e.degree} — ${e.institution} (${e.period})`).join('\n')}`
  },
  {
    id: 'certifications',
    keywords: ['certificat', 'course', 'udemy'],
    respond: () =>
      `Certifications:\n${profile.certifications
        .map(c => `• ${c.title} — ${c.issuer}\n  Topics: ${c.topics}`)
        .join('\n')}`
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'linkedin', 'github', 'number'],
    respond: () =>
      `You can reach her at:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• GitHub: ${profile.github}\n• LinkedIn: ${profile.linkedin}\n• Location: ${profile.location}`
  },
  {
    id: 'location',
    keywords: ['where is she', 'location', 'based in', 'live in', 'city'],
    respond: () => `She's based in ${profile.location}.`
  }
]

export function getBotResponse(rawInput) {
  const input = rawInput.toLowerCase().trim()

  if (!input) {
    return "I didn't catch that — could you rephrase?"
  }

  for (const topic of topics) {
    if (topic.keywords.some(kw => input.includes(kw))) {
      return topic.respond()
    }
  }

  return `I don't have specifics on that yet. You can ask about her skills, experience, projects, education, or contact details — or reach out directly at ${profile.email}.`
}

export const suggestedQuestions = [
  'What are your skills?',
  'Tell me about your experience',
  'What projects have you built?',
  'What is your education?',
  'How can I contact you?'
]
