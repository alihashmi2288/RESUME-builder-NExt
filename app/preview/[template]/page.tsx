'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Edit, Download } from 'lucide-react'
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
    }
  ],
  skills: [
    { id: '1', name: 'Product Strategy', level: 'Expert' },
    { id: '2', name: 'User Research', level: 'Advanced' },
    { id: '3', name: 'Data Analysis', level: 'Advanced' },
    { id: '4', name: 'Agile/Scrum', level: 'Expert' }
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
    }
  ],
  projects: [
    {
      id: '1',
      name: 'AI-Powered Analytics Dashboard',
      description: 'Led development of machine learning-powered analytics platform that provides real-time insights for product teams.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      url: 'https://analytics-demo.com',
      github: ''
    }
  ],
  certifications: [],
  languages: []
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

export default function PreviewPage({ params }: { params: { template: string } }) {
  const templateName = params.template

  const renderTemplate = () => {
    const settings = { ...sampleSettings, template: templateName }
    
    switch (templateName) {
      case 'professional':
        return <ProfessionalTemplate data={sampleData} settings={settings} />
      case 'executive':
        return <ExecutiveTemplate data={sampleData} settings={settings} />
      case 'creative':
        return <CreativeTemplate data={sampleData} settings={settings} />
      case 'elegant':
        return <ElegantTemplate data={sampleData} settings={settings} />
      case 'tech':
        return <TechTemplate data={sampleData} settings={settings} />
      case 'minimal':
        return <MinimalTemplate data={sampleData} settings={settings} />
      case 'classic':
        return <ClassicTemplate data={sampleData} settings={settings} />
      case 'compact':
        return <CompactTemplate data={sampleData} settings={settings} />
      default:
        return <ModernTemplate data={sampleData} settings={settings} />
    }
  }

  const useTemplate = () => {
    const newResume = {
      id: Date.now().toString(),
      title: `My ${templateName.charAt(0).toUpperCase() + templateName.slice(1)} Resume`,
      template: templateName,
      data: {
        ...sampleData,
        personalInfo: {
          ...sampleData.personalInfo,
          fullName: '',
          email: '',
          phone: '',
          summary: ''
        },
        experience: [],
        education: [],
        skills: [],
        projects: []
      },
      settings: { ...sampleSettings, template: templateName },
      updatedAt: new Date().toISOString()
    }
    const saved = localStorage.getItem('resumes')
    const resumes = saved ? JSON.parse(saved) : []
    const updatedResumes = [...resumes, newResume]
    localStorage.setItem('resumes', JSON.stringify(updatedResumes))
    window.location.href = `/editor/${newResume.id}`
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300">
                  Dashboard
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                {templateName} Template Preview
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button onClick={useTemplate} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Edit className="h-4 w-4 mr-2" />
                Use This Template
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {renderTemplate()}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is a preview with sample data. Click "Use This Template" to start creating your own resume.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/templates">
              <Button variant="outline">
                Browse More Templates
              </Button>
            </Link>
            <Button onClick={useTemplate} className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Creating My Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}