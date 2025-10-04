'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Sparkles, ArrowLeft } from 'lucide-react'
import { ModernTemplate } from '@/components/templates/modern-template'
import { ExecutiveTemplate } from '@/components/templates/executive-template'
import { CreativeTemplate } from '@/components/templates/creative-template'
import { TechTemplate } from '@/components/templates/tech-template'
import { MinimalTemplate } from '@/components/templates/minimal-template'
import { ClassicTemplate } from '@/components/templates/classic-template'
import { ElegantTemplate } from '@/components/templates/elegant-template'
import { ProfessionalTemplate } from '@/components/templates/professional-template'
import { CompactTemplate } from '@/components/templates/compact-template'
import { ResumeData, ResumeSettings } from '@/types/resume'
import { emptyResumeData } from '@/lib/demo-data'
import Link from 'next/link'

const sampleData: ResumeData = {
  personalInfo: {
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Product Manager',
    summary: 'Results-driven Product Manager with 6+ years of experience leading cross-functional teams to deliver innovative digital products. Proven track record of increasing user engagement by 150% and driving $2M+ in revenue growth.',
    website: 'sarahjohnson.dev',
    linkedin: 'linkedin.com/in/sarahjohnson',
    github: 'github.com/sarahjohnson'
  },
  experience: [
    {
      id: '1',
      position: 'Senior Product Manager',
      company: 'TechFlow Inc.',
      startDate: '2022-01',
      endDate: '2024-12',
      current: true,
      description: 'Led product strategy for B2B SaaS platform serving 50K+ users. Collaborated with engineering, design, and marketing teams to launch 3 major features, resulting in 40% increase in user retention and $1.2M ARR growth.'
    },
    {
      id: '2',
      position: 'Product Manager',
      company: 'StartupXYZ',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Managed end-to-end product development for mobile app with 100K+ downloads. Conducted user research, defined product roadmap, and worked closely with development team to deliver features on time and within budget.'
    },
    {
      id: '3',
      position: 'Associate Product Manager',
      company: 'Digital Solutions Co.',
      startDate: '2018-06',
      endDate: '2020-02',
      current: false,
      description: 'Supported senior PM in managing e-commerce platform features. Analyzed user data, created product requirements, and coordinated with stakeholders to improve conversion rates by 25%.'
    }
  ],
  skills: [
    { id: '1', name: 'Product Strategy', level: 'Expert' },
    { id: '2', name: 'User Research', level: 'Advanced' },
    { id: '3', name: 'Data Analysis', level: 'Advanced' },
    { id: '4', name: 'Agile/Scrum', level: 'Expert' },
    { id: '5', name: 'SQL', level: 'Intermediate' },
    { id: '6', name: 'Figma', level: 'Advanced' }
  ],
  education: [
    {
      id: '1',
      institution: 'Stanford University',
      degree: 'Master of Business Administration',
      field: 'Technology Management',
      startDate: '2016-09',
      endDate: '2018-05',
      gpa: '3.8'
    },
    {
      id: '2',
      institution: 'UC Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2012-09',
      endDate: '2016-05',
      gpa: '3.7'
    }
  ],
  projects: [
    {
      id: '1',
      name: 'AI-Powered Analytics Dashboard',
      description: 'Led development of machine learning-powered analytics platform that provides real-time insights for product teams. Increased data-driven decision making by 60% across organization.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      url: 'https://analytics-demo.com',
      github: ''
    },
    {
      id: '2',
      name: 'Mobile App Redesign',
      description: 'Spearheaded complete UX/UI redesign of mobile application, resulting in 45% increase in user engagement and 30% improvement in app store ratings.',
      technologies: ['Figma', 'React Native', 'Firebase'],
      url: '',
      github: ''
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'Certified Scrum Product Owner',
      issuer: 'Scrum Alliance',
      date: '2023-03',
      url: ''
    },
    {
      id: '2',
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2022-11',
      url: ''
    }
  ],
  languages: [
    {
      id: '1',
      name: 'English',
      proficiency: 'Native'
    },
    {
      id: '2',
      name: 'Spanish',
      proficiency: 'Conversational'
    }
  ]
}

const sampleSettings: ResumeSettings = {
  template: 'modern',
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#06b6d4'
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  spacing: 'normal',
  showPhoto: false,
  sectionOrder: ['experience', 'education', 'skills', 'projects', 'certifications', 'languages']
}

const templates = [
  { 
    id: 'modern', 
    name: 'Modern', 
    description: 'Clean, contemporary design with blue accents',
    component: ModernTemplate,
    color: 'blue'
  },
  { 
    id: 'professional', 
    name: 'Professional', 
    description: 'Sophisticated gradient header design',
    component: ProfessionalTemplate,
    color: 'indigo'
  },
  { 
    id: 'executive', 
    name: 'Executive', 
    description: 'Bold dark header for senior positions',
    component: ExecutiveTemplate,
    color: 'gray'
  },
  { 
    id: 'creative', 
    name: 'Creative', 
    description: 'Colorful gradient design for creative roles',
    component: CreativeTemplate,
    color: 'orange'
  },
  { 
    id: 'elegant', 
    name: 'Elegant', 
    description: 'Two-column sidebar layout with skills bars',
    component: ElegantTemplate,
    color: 'slate'
  },
  { 
    id: 'tech', 
    name: 'Tech', 
    description: 'Dark theme perfect for developers',
    component: TechTemplate,
    color: 'cyan'
  },
  { 
    id: 'minimal', 
    name: 'Minimal', 
    description: 'Clean and simple with lots of white space',
    component: MinimalTemplate,
    color: 'gray'
  },
  { 
    id: 'classic', 
    name: 'Classic', 
    description: 'Traditional format for conservative industries',
    component: ClassicTemplate,
    color: 'stone'
  },
  { 
    id: 'compact', 
    name: 'Compact', 
    description: 'Space-efficient two-column design',
    component: CompactTemplate,
    color: 'green'
  }
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300">
              Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-primary mr-3" />
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Professional Resume Templates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates, crafted to help you stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => {
            const TemplateComponent = template.component
            return (
              <Card key={template.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden border border-gray-200 dark:border-gray-600">
                    <div className="transform scale-[0.3] origin-top-left w-[333%] h-[333%]">
                      <TemplateComponent data={sampleData} settings={{...sampleSettings, template: template.id}} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{template.name}</CardTitle>
                    <div className={`w-3 h-3 rounded-full bg-${template.color}-500`}></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{template.description}</p>
                  <div className="space-y-3">
                    <Link href={`/preview/${template.id}`}>
                      <Button 
                        variant="outline"
                        size="lg"
                        className="w-full h-12 border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-600 bg-white dark:bg-gray-800 hover:!text-white text-purple-900 dark:text-purple-300 font-semibold transition-all duration-300 hover:scale-105"
                        onClick={() => console.log(`Navigating to: /preview/${template.id}`)}
                      >
                        👁️ Preview Template
                      </Button>
                    </Link>
                    <Button 
                      size="lg"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl font-semibold transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        const newResume = {
                          id: Date.now().toString(),
                          title: `My ${template.name} Resume`,
                          template: template.id,
                          data: emptyResumeData,
                          settings: { ...sampleSettings, template: template.id },
                          updatedAt: new Date().toISOString()
                        }
                        const saved = localStorage.getItem('resumes')
                        const resumes = saved ? JSON.parse(saved) : []
                        const updatedResumes = [...resumes, newResume]
                        localStorage.setItem('resumes', JSON.stringify(updatedResumes))
                        window.location.href = `/editor/${newResume.id}`
                      }}
                    >
                      ✨ Use This Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Create your professional resume in minutes with our easy-to-use builder.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              const newResume = {
                id: Date.now().toString(),
                title: 'My Resume',
                template: 'modern',
                data: emptyResumeData,
                settings: sampleSettings,
                updatedAt: new Date().toISOString()
              }
              const saved = localStorage.getItem('resumes')
              const resumes = saved ? JSON.parse(saved) : []
              const updatedResumes = [...resumes, newResume]
              localStorage.setItem('resumes', JSON.stringify(updatedResumes))
              window.location.href = `/editor/${newResume.id}`
            }}
          >
            Start Building Your Resume
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 All rights reserved by Syed Ali Hashmi
          </p>
        </div>
      </footer>
    </div>
  )
}