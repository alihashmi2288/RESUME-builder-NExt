import { ResumeData } from '@/types/resume'

export const demoResumeData: ResumeData = {
  personalInfo: {
    fullName: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'www.johnsmith.dev',
    linkedin: 'linkedin.com/in/johnsmith',
    github: 'github.com/johnsmith',
    summary: 'Experienced Software Engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and leading cross-functional teams.',
    title: 'Senior Software Engineer'
  },
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Engineer',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: '• Led development of microservices architecture serving 1M+ users\n• Improved application performance by 40% through code optimization\n• Mentored 3 junior developers and conducted technical interviews\n• Implemented CI/CD pipelines reducing deployment time by 60%',
      location: 'New York, NY'
    },
    {
      id: '2',
      company: 'Digital Innovations LLC',
      position: 'Full Stack Developer',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: '• Developed and maintained 5+ web applications using React and Node.js\n• Collaborated with UX/UI team to implement responsive designs\n• Integrated third-party APIs and payment gateways\n• Reduced bug reports by 35% through comprehensive testing',
      location: 'San Francisco, CA'
    },
    {
      id: '3',
      company: 'StartupXYZ',
      position: 'Junior Developer',
      startDate: '2019-06',
      endDate: '2020-02',
      current: false,
      description: '• Built responsive web applications using HTML, CSS, and JavaScript\n• Participated in agile development processes and daily standups\n• Contributed to open-source projects and internal tools\n• Learned modern frameworks and development best practices',
      location: 'Austin, TX'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2015-09',
      endDate: '2019-05',
      gpa: '3.8',
      honors: 'Magna Cum Laude'
    },
    {
      id: '2',
      institution: 'Tech Bootcamp',
      degree: 'Certificate',
      field: 'Full Stack Web Development',
      startDate: '2019-01',
      endDate: '2019-04',
      gpa: ''
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert' as const },
    { id: '2', name: 'React', level: 'Expert' as const },
    { id: '3', name: 'Node.js', level: 'Advanced' as const },
    { id: '4', name: 'TypeScript', level: 'Advanced' as const },
    { id: '5', name: 'Python', level: 'Intermediate' as const },
    { id: '6', name: 'AWS', level: 'Advanced' as const },
    { id: '7', name: 'Docker', level: 'Intermediate' as const },
    { id: '8', name: 'MongoDB', level: 'Advanced' as const },
    { id: '9', name: 'PostgreSQL', level: 'Advanced' as const },
    { id: '10', name: 'Git', level: 'Expert' as const }
  ],
  projects: [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      url: 'https://ecommerce-demo.com',
      github: 'https://github.com/johnsmith/ecommerce-platform'
    },
    {
      id: '2',
      name: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      url: 'https://taskmanager-demo.com',
      github: 'https://github.com/johnsmith/task-manager'
    },
    {
      id: '3',
      name: 'Weather Dashboard',
      description: 'Created a responsive weather dashboard that displays current conditions and forecasts for multiple cities with interactive charts and maps.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      url: 'https://weather-dashboard-demo.com',
      github: 'https://github.com/johnsmith/weather-dashboard'
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023-03',
      credentialId: 'AWS-SAA-123456'
    },
    {
      id: '2',
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022-11',
      credentialId: 'GCP-PD-789012'
    }
  ],
  languages: [
    { id: '1', name: 'English', proficiency: 'Native' as const },
    { id: '2', name: 'Spanish', proficiency: 'Conversational' as const },
    { id: '3', name: 'French', proficiency: 'Basic' as const }
  ]
}

export const emptyResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
    title: ''
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: []
}