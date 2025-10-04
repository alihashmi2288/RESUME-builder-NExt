'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ResumeData, ResumeSettings } from '@/types/resume'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import TemplateSelector from '@/components/TemplateSelector'
import ResumeSettingsComponent from '@/components/ResumeSettings'
import { FileText, Eye, Settings, Save, ArrowLeft } from 'lucide-react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { demoResumeData, emptyResumeData } from '@/lib/demo-data'



const initialSettings: ResumeSettings = {
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

export default function EditorPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [resumeData, setResumeData] = useState<ResumeData>(emptyResumeData)
  const [settings, setSettings] = useState<ResumeSettings>(initialSettings)
  const [activeView, setActiveView] = useState<'form' | 'preview' | 'settings'>('form')
  const [isLoading, setIsLoading] = useState(true)
  const [resumeTitle, setResumeTitle] = useState('Untitled Resume')
  const [isNewResume, setIsNewResume] = useState(false)

  useEffect(() => {
    // Load resume from localStorage
    const savedResumes = localStorage.getItem('resumes')
    if (savedResumes) {
      const resumes = JSON.parse(savedResumes)
      const currentResume = resumes.find((r: any) => r.id === params.id)
      if (currentResume) {
        setResumeTitle(currentResume.title)
        if (currentResume.data) {
          setResumeData(currentResume.data)
          setIsNewResume(false)
        } else {
          // New resume - keep form data empty but show demo in preview
          setResumeData(emptyResumeData)
          setIsNewResume(true)
        }
        if (currentResume.settings) {
          setSettings(currentResume.settings)
        }
      } else {
        // Resume not found - treat as new
        setIsNewResume(true)
      }
    } else {
      // No saved resumes - treat as new
      setIsNewResume(true)
    }
    setIsLoading(false)
  }, [params.id])

  const saveResume = () => {
    const savedResumes = localStorage.getItem('resumes')
    if (savedResumes) {
      const resumes = JSON.parse(savedResumes)
      const updatedResumes = resumes.map((r: any) => 
        r.id === params.id 
          ? { ...r, title: resumeTitle, data: resumeData, settings, updatedAt: new Date().toISOString() }
          : r
      )
      localStorage.setItem('resumes', JSON.stringify(updatedResumes))
      toast.success('Resume saved!')
    }
  }

  // Auto-save every 10 seconds
  useEffect(() => {
    const interval = setInterval(saveResume, 10000)
    return () => clearInterval(interval)
  }, [resumeData, settings, resumeTitle])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300">
                  Templates
                </Button>
              </Link>
              <input
                type="text"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
                className="text-xl font-semibold bg-transparent text-gray-900 dark:text-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
                onBlur={saveResume}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={saveResume} className="!text-purple-900 dark:!text-purple-100 border-purple-300 dark:border-purple-500 bg-white dark:bg-purple-900/20 hover:bg-purple-50 dark:hover:bg-purple-800/30">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>

              <div className="flex bg-white/60 dark:bg-gray-800/60 rounded-lg p-1">
                {[
                  { id: 'form', label: 'Edit', icon: FileText },
                  { id: 'preview', label: 'Preview', icon: Eye },
                  { id: 'settings', label: 'Style', icon: Settings }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveView(id as any)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                      activeView === id
                        ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="wait">
            <motion.div 
              className={`lg:col-span-5 ${activeView === 'preview' ? 'hidden lg:block' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="p-6">
                  {activeView === 'form' && (
                    <>
                      <TemplateSelector
                        selectedTemplate={settings.template}
                        onTemplateChange={(template) => setSettings(prev => ({ ...prev, template }))}
                      />
                      <ResumeForm
                        resumeData={resumeData}
                        onDataChange={setResumeData}
                      />
                    </>
                  )}
                  
                  {activeView === 'settings' && (
                    <ResumeSettingsComponent
                      settings={settings}
                      onSettingsChange={setSettings}
                    />
                  )}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className={`lg:col-span-7 ${activeView === 'form' || activeView === 'settings' ? 'hidden lg:block' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <div className="p-6">
                <ResumePreview
                  resumeData={isNewResume && Object.values(resumeData.personalInfo).every(v => !v) && resumeData.experience.length === 0 ? demoResumeData : resumeData}
                  settings={settings}
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}