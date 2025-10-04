'use client'

import { useRef } from 'react'
import { ResumeData, ResumeSettings } from '@/types/resume'
import { Download, Mail, Phone, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { ModernTemplate } from '@/components/templates/modern-template'
import { ExecutiveTemplate } from '@/components/templates/executive-template'
import { CreativeTemplate } from '@/components/templates/creative-template'
import { TechTemplate } from '@/components/templates/tech-template'
import { MinimalTemplate } from '@/components/templates/minimal-template'
import { ClassicTemplate } from '@/components/templates/classic-template'
import { ElegantTemplate } from '@/components/templates/elegant-template'
import { ProfessionalTemplate } from '@/components/templates/professional-template'
import { CompactTemplate } from '@/components/templates/compact-template'

interface ResumePreviewProps {
  resumeData: ResumeData
  settings: ResumeSettings
}

const sampleData: ResumeData = {
  personalInfo: {
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Product Manager',
    summary: 'Results-driven Product Manager with 6+ years of experience leading cross-functional teams to deliver innovative digital products.',
    website: '',
    linkedin: '',
    github: ''
  },
  experience: [
    {
      id: '1',
      position: 'Senior Product Manager',
      company: 'TechFlow Inc.',
      startDate: '2022-01',
      endDate: '2024-12',
      current: true,
      description: 'Led product strategy for B2B SaaS platform serving 50K+ users. Collaborated with engineering, design, and marketing teams to launch 3 major features.'
    }
  ],
  skills: [
    { id: '1', name: 'Product Strategy', level: 'Expert' },
    { id: '2', name: 'User Research', level: 'Advanced' },
    { id: '3', name: 'Data Analysis', level: 'Advanced' }
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
  projects: [],
  certifications: [],
  languages: []
}

export default function ResumePreview({ resumeData, settings }: ResumePreviewProps) {
  const resumeRef = useRef<HTMLDivElement>(null)
  
  // Use sample data if resume is mostly empty
  const isEmpty = !resumeData.personalInfo.fullName && !resumeData.personalInfo.email && resumeData.experience.length === 0
  const displayData = isEmpty ? sampleData : resumeData

  const downloadPDF = async () => {
    if (!resumeRef.current) {
      alert('Resume not ready for download. Please try again.')
      return
    }
    
    try {
      // Wait a moment for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 100))
      
      // Create canvas from the resume element
      const canvas = await html2canvas(resumeRef.current, {
        scale: 1.5,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        logging: false,
        width: resumeRef.current.scrollWidth,
        height: resumeRef.current.scrollHeight
      })
      
      // Create PDF
      const imgData = canvas.toDataURL('image/jpeg', 0.95)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })
      
      // Calculate dimensions to fit A4
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      
      // Add image to PDF
      if (imgHeight <= pageHeight) {
        // Single page
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight)
      } else {
        // Multiple pages
        let heightLeft = imgHeight
        let position = 0
        
        // Add first page
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
        
        // Add additional pages if needed
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }
      }
      
      // Download the PDF
      const fileName = displayData.personalInfo.fullName 
        ? `${displayData.personalInfo.fullName.replace(/[^a-zA-Z0-9]/g, '_')}_Resume.pdf`
        : 'Resume.pdf'
      
      // Create blob and download
      const pdfBlob = pdf.output('blob')
      const url = URL.createObjectURL(pdfBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF generation error:', error)
      // Fallback to print
      if (confirm('PDF generation failed. Would you like to use the browser print instead?')) {
        window.print()
      }
    }
  }

  const renderTemplate = () => {
    switch (settings.template) {
      case 'professional':
        return <ProfessionalTemplate data={displayData} settings={settings} />
      case 'executive':
        return <ExecutiveTemplate data={displayData} settings={settings} />
      case 'creative':
        return <CreativeTemplate data={displayData} settings={settings} />
      case 'elegant':
        return <ElegantTemplate data={displayData} settings={settings} />
      case 'tech':
        return <TechTemplate data={displayData} settings={settings} />
      case 'minimal':
        return <MinimalTemplate data={displayData} settings={settings} />
      case 'classic':
        return <ClassicTemplate data={displayData} settings={settings} />
      case 'compact':
        return <CompactTemplate data={displayData} settings={settings} />
      default:
        return <ModernTemplate data={displayData} settings={settings} />
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Preview</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">See how your resume looks with the {settings.template} template</p>
        </div>
        <Button onClick={downloadPDF} className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-xl overflow-auto" style={{ maxHeight: '80vh' }}>
        <div className="transform scale-90 origin-top transition-transform hover:scale-95">
          <div ref={resumeRef} className="bg-white">
            {renderTemplate()}
          </div>
        </div>
      </div>
      
      {isEmpty && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            💡 <strong>Preview Mode:</strong> This shows sample data to demonstrate the template. Fill in your information in the Edit tab to see your actual resume.
          </p>
        </div>
      )}
    </div>
  )
}