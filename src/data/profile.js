const profile = {
  name: 'Vidhi Vats',
  title: 'Software Development Engineer | Backend & Full-Stack | AI-Powered Systems',
  location: 'Meerut, Uttar Pradesh, India',
  email: 'vidhii.vats@gmail.com',
  phone: '+91 9906843553',
  github: 'https://github.com/vidhi-vats-11',
  linkedin: 'https://linkedin.com/in/vidhivats-',
  summary:
    "Vidhi is a Software Development Engineer skilled in building scalable, real-time distributed systems with React, Django, and Node.js on GCP/AWS. She has hands-on experience with high-throughput data pipelines using Redis and RabbitMQ, and AI-powered applications built on LangChain, RAG, and vector search. She's focused on clean backend architecture and shipping reliable products.",
  skills: {
    Languages: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    Backend: ['Django', 'Node.js', 'Express.js', 'Nest.js', 'Flask', 'REST APIs'],
    Frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Material-UI'],
    'AI / LLM': ['LangChain', 'OpenAI APIs', 'RAG', 'Embeddings', 'Vector Stores', 'AI Agents', 'Prompt Engineering'],
    'Databases & Messaging': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ'],
    'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Firebase', 'GitHub Actions', 'CI/CD'],
    'Core Concepts': ['Data Structures & Algorithms', 'OOP', 'Microservices', 'System Design', 'Distributed Systems']
  },
  experience: [
    {
      role: 'Software Developer Intern',
      company: 'Data Sailors Private Limited',
      period: '06/2025 – 02/2026',
      highlights: [
        'Built an enterprise-grade real-time monitoring dashboard in React.js across a 12-node distributed sensor network.',
        'Designed scalable backend services with Django + MongoDB to ingest and process high-frequency real-time data streams.',
        'Introduced Redis caching and a RabbitMQ message queue to decouple ingestion from processing.',
        'Engineered a Data Concentrator Unit on Raspberry Pi for secure edge data collection.',
        'Built Python/WebSocket services for real-time communication between edge devices and the cloud.',
        'Deployed and managed infrastructure on GCP with Docker; secured remote access via VPN + SSH.',
        'Scaled the architecture from a single node to a distributed cluster, improving fault tolerance.'
      ]
    }
  ],
  projects: [
    {
      title: 'GenAI RAG Document Assistant',
      stack: 'Python, LangChain, OpenAI, Vector Stores, Docker, CI/CD, Firebase',
      description:
        'A Retrieval-Augmented Generation chatbot answering natural-language questions over a custom document corpus, with a chunking + embeddings ingestion pipeline, context-aware low-hallucination answers with source citations, and Dockerized CI/CD deployment on Firebase.'
    },
    {
      title: 'Real-Time Monitoring Dashboard',
      stack: 'React.js, Django, MongoDB, Redis, RabbitMQ, GCP, Docker, WebSocket',
      description:
        'An enterprise-grade real-time monitoring dashboard for a 12-node distributed sensor network, using Redis caching and RabbitMQ to smooth traffic spikes and keep things responsive under load.'
    },
    {
      title: 'Network Vulnerability Scanner',
      stack: 'React, Django, Python',
      description:
        'A full-stack security tool for scanning and analyzing network vulnerabilities, with real-time device discovery, simulated attacks (MITM, ARP spoofing, packet sniffing), and Python brute-force modules for SSH/Telnet testing.'
    }
  ],
  education: [
    {
      degree: 'M.Tech, Computer Science & Engineering',
      institution: 'IIT Patna',
      period: '2026 – 2028 (Pursuing)'
    },
    {
      degree: 'B.Tech, Electrical Engineering',
      institution: 'Shri Mata Vaishno Devi University',
      period: 'Jul 2021 – May 2025'
    }
  ],
  certifications: [
    {
      title: 'Full Stack Generative & Agentic AI with Python',
      issuer: 'Udemy (Hitesh Choudhary & Piyush Garg)',
      topics: 'LLMs, AI agents, RAG, and automation pipelines with hands-on projects'
    }
  ],
  personal: {
    dob: '11 October',
    gender: 'Female',
    hometown: 'Meerut, Uttar Pradesh, India'
  },
  schooling: [
    {
      level: '12th',
      school: 'K.L. International School',
      website: 'https://www.klischool.com/',
      marks: '80%',
      subjects: ['Physics', 'Chemistry', 'Maths', 'English'],
      optionalSubject: 'Fine Arts'
    },
    {
      level: '10th',
      school: 'J.P Academy',
      website: 'https://jpacademy.in/',
      marks: '86.62%',
      subjects: ['Hindi', 'English', 'Maths', 'Science', 'SST', 'IT']
    }
  ],
  higherEducation: {
    graduation: {
      degree: 'B.Tech, Electrical Engineering',
      institution: 'Shri Mata Vaishno Devi University',
      period: 'Jul 2021 – May 2025',
      email: '21bee079@smvdu.ac.in'
    },
    postGraduation: {
      degree: 'M.Tech, Computer Science & Engineering',
      institution: 'IIT Patna',
      period: '2026 – 2028 (Pursuing)',
      email: 'vidhi_pa2602mth181@iitp.ac.in'
    }
  },
  family: {
    father: 'Mr. Umesh Kumar Sharma',
    mother: 'Seema Sharma',
    siblings: 'One brother'
  }
}

export default profile
