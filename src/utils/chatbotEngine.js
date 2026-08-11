import profile from '../data/profile'

const topics = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'sup', 'good morning', 'good evening'],
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
    id: 'project-rag',
    keywords: ['rag', 'genai', 'langchain', 'chatbot project', 'document assistant'],
    respond: () => formatProject(profile.projects[0])
  },
  {
    id: 'project-dashboard',
    keywords: ['monitoring dashboard', 'sensor network', 'real-time dashboard', 'dashboard project'],
    respond: () => formatProject(profile.projects[1])
  },
  {
    id: 'project-scanner',
    keywords: ['vulnerability', 'scanner', 'security tool', 'network security'],
    respond: () => formatProject(profile.projects[2])
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'built', 'build', 'portfolio piece'],
    respond: () =>
      `She's built a few notable projects:\n${profile.projects
        .map(p => `• ${p.title} (${p.stack})`)
        .join('\n')}\nWant details on any of them? Just ask by name.`
  },
  {
    id: 'skills',
    keywords: ['skill', 'skills', 'tech stack', 'technology', 'technologies', 'language', 'languages', 'stack', 'tools', 'know how to', 'proficient'],
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
    id: 'marks',
    keywords: ['marks', 'percentage', 'score', 'grades'],
    respond: (input) => {
      const s10 = profile.schooling.find(sc => sc.level === '10th')
      const s12 = profile.schooling.find(sc => sc.level === '12th')
      const is10 = /\b(10th|tenth|10)\b/.test(input)
      const is12 = /\b(12th|twelfth|xii|12)\b/.test(input)
      if (is10 && !is12) return `Marks in 10th: ${s10.marks}`
      if (is12 && !is10) return `Marks in 12th: ${s12.marks}`
      return `Marks:\n• 10th: ${s10.marks}\n• 12th: ${s12.marks}`
    }
  },
  {
    id: 'school-12th',
    keywords: ['12th', 'twelfth', 'xii', 'intermediate', '12', 'k.l. international', 'kl international', 'klischool'],
    respond: () => {
      const s = profile.schooling.find(sc => sc.level === '12th')
      return `12th details:\nSchool: ${s.school}\nWebsite: ${s.website}\nMarks: ${s.marks}\nSubjects: ${s.subjects.join(', ')}\nOptional: ${s.optionalSubject}`
    }
  },
  {
    id: 'school-10th',
    keywords: ['10th', 'tenth', '10', 'x board', 'j.p academy', 'jp academy', 'jpacademy'],
    respond: () => {
      const s = profile.schooling.find(sc => sc.level === '10th')
      return `10th details:\nSchool: ${s.school}\nWebsite: ${s.website}\nMarks: ${s.marks}\nSubjects: ${s.subjects.join(', ')}`
    }
  },
  {
    id: 'schooling',
    keywords: ['school', 'schooling'],
    respond: () =>
      `Schooling:\n${profile.schooling.map(s => `• ${s.level} — ${s.school} (${s.website})`).join('\n')}\nAsk about "10th" or "12th" for more detail.`
  },
  {
    id: 'graduation',
    keywords: ['graduation', 'b.tech', 'undergraduate', 'bachelor', 'smvdu', 'electrical engineering'],
    respond: () => {
      const g = profile.higherEducation.graduation
      return `Graduation details:\nDegree: ${g.degree}\nInstitution: ${g.institution}\nPeriod: ${g.period}\nEmail: ${g.email}`
    }
  },
  {
    id: 'postgraduation',
    keywords: ['postgraduation', 'post-graduation', 'post graduation', 'm.tech', 'masters', "master's", 'iit patna', 'iit', 'pursuing'],
    respond: () => {
      const p = profile.higherEducation.postGraduation
      return `Post-graduation details:\nDegree: ${p.degree}\nInstitution: ${p.institution}\nPeriod: ${p.period}\nEmail: ${p.email}`
    }
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'degrees', 'study', 'studies', 'college', 'university', 'academic', 'qualification', 'qualifications'],
    respond: () =>
      `Education:\n${profile.education.map(e => `• ${e.degree} — ${e.institution} (${e.period})`).join('\n')}\nAsk about "graduation" or "post-graduation" for more detail.`
  },
  {
    id: 'family',
    keywords: ['father', 'mother', 'parents', 'family', 'siblings', 'brother'],
    respond: () =>
      `Family:\n• Father: ${profile.family.father}\n• Mother: ${profile.family.mother}\n• Siblings: ${profile.family.siblings}`
  },
  {
    id: 'dob',
    keywords: ['dob', 'date of birth', 'birthday', 'born'],
    respond: () => `Her date of birth is ${profile.personal.dob}.`
  },
  {
    id: 'gender',
    keywords: ['gender', 'sex'],
    respond: () => `${profile.personal.gender}.`
  },
  {
    id: 'resume',
    keywords: ['resume', 'cv'],
    respond: () => ({
      text: "Here's her resume — you can download it or view it directly:",
      actions: [
        { label: 'Download Resume', href: '/resume.pdf', download: true },
        { label: 'View Resume', href: '/resume.pdf', download: false }
      ]
    })
  },
  {
    id: 'certifications',
    keywords: ['certificate', 'certificates', 'certification', 'certifications', 'certified', 'course', 'courses', 'udemy'],
    respond: () =>
      `Certifications:\n${profile.certifications
        .map(c => `• ${c.title} — ${c.issuer}\n  Topics: ${c.topics}`)
        .join('\n')}`
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'linkedin', 'github', 'number'],
    respond: () =>
      `You can reach her at:\n• Email: ${profile.email}\n• LinkedIn: ${profile.linkedin}`
  },
  {
    id: 'location',
    keywords: ['where is she', 'location', 'based in', 'live in', 'city', 'hometown', 'home town'],
    respond: () => `She's based in ${profile.location}.`
  }
]

function formatProject(project) {
  return `${project.title}: ${project.description}\nTech stack: ${project.stack}`
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function matchesKeyword(input, keyword) {
  const pattern = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'i')
  return pattern.test(input)
}

export function getBotResponse(rawInput) {
  const input = rawInput.toLowerCase().trim()

  if (!input) {
    return { text: "I didn't catch that — could you rephrase?" }
  }

  for (const topic of topics) {
    if (topic.keywords.some(kw => matchesKeyword(input, kw))) {
      const result = topic.respond(input)
      return typeof result === 'string' ? { text: result } : result
    }
  }

  return { text: "I don't have that information. Try asking about her skills, experience, projects, education, or contact details." }
}

export const suggestedQuestions = [
  'What are your skills?',
  'Tell me about your experience',
  'What projects have you built?',
  'What is your education?',
  'How can I contact you?'
]
