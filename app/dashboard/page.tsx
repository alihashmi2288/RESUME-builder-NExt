'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, FileText, Calendar, Crown, Zap, Edit, Trash2, ArrowLeft, User, Briefcase, GraduationCap, Code, FolderOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Resume {
  id: string
  title: string
  template: string
  updatedAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [resumes, setResumes] = useState<Resume[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('resumes')
    if (saved) {
      setResumes(JSON.parse(saved))
    }
  }, [])

  const deleteResume = (id: string) => {
    const updatedResumes = resumes.filter(r => r.id !== id)
    setResumes(updatedResumes)
    localStorage.setItem('resumes', JSON.stringify(updatedResumes))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="!text-purple-900 dark:!text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Resume Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Create and manage your professional resumes
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="!text-purple-900 dark:!text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                <Crown className="h-4 w-4 mr-2" />
                Upgrade to Pro
              </Button>
              <Link href="/templates">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                  <Plus className="h-4 w-4 mr-2" />
                  New Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-blue-100">Total Resumes</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">{resumes.length}</div>
              <p className="text-xs text-blue-200">+{resumes.filter(r => new Date(r.updatedAt) > new Date(Date.now() - 7*24*60*60*1000)).length} this week</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-emerald-100">Templates Used</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Calendar className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">{new Set(resumes.map(r => r.template)).size}</div>
              <p className="text-xs text-emerald-200">Different styles</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-purple-100">Success Rate</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">95%</div>
              <p className="text-xs text-purple-200">Job application success</p>
            </CardContent>
          </Card>
          <Link href="/templates">
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-orange-100">Quick Actions</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg">
                  <Plus className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold mb-2">Browse Templates</div>
                <p className="text-xs text-orange-200">Click to explore 9 templates</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Resume Sections Navigation */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Sections</h2>
            <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Quick Guide
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="rounded-lg border shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 border-blue-200 dark:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-500 flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Personal Info</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">Contact details & summary</p>
              </div>
            </div>
            
            <div className="rounded-lg border shadow-sm bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 border-green-200 dark:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-500 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Experience</h3>
                <p className="text-sm text-green-600 dark:text-green-300">Work history & achievements</p>
              </div>
            </div>
            
            <div className="rounded-lg border shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 border-purple-200 dark:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-500 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Education</h3>
                <p className="text-sm text-purple-600 dark:text-purple-300">Academic background</p>
              </div>
            </div>
            
            <div className="rounded-lg border shadow-sm bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/50 border-orange-200 dark:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Skills</h3>
                <p className="text-sm text-orange-600 dark:text-orange-300">Technical & soft skills</p>
              </div>
            </div>
            
            <div className="rounded-lg border shadow-sm bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/50 dark:to-pink-800/50 border-pink-200 dark:border-pink-500 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-pink-500 flex items-center justify-center">
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Projects</h3>
                <p className="text-sm text-pink-600 dark:text-pink-300">Portfolio & side projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        {resumes.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                View All
              </Button>
            </div>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {resumes
                    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
                    .slice(0, 3)
                    .map((resume) => (
                      <Link key={resume.id} href={`/editor/${resume.id}`}>
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              resume.template === 'modern' ? 'bg-blue-100 dark:bg-blue-900/30' :
                              resume.template === 'executive' ? 'bg-gray-100 dark:bg-gray-700' :
                              resume.template === 'creative' ? 'bg-orange-100 dark:bg-orange-900/30' :
                              'bg-purple-100 dark:bg-purple-900/30'
                            }`}>
                              <FileText className={`h-6 w-6 ${
                                resume.template === 'modern' ? 'text-blue-600 dark:text-blue-400' :
                                resume.template === 'executive' ? 'text-gray-600 dark:text-gray-400' :
                                resume.template === 'creative' ? 'text-orange-600 dark:text-orange-400' :
                                'text-purple-600 dark:text-purple-400'
                              }`} />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 dark:text-white">{resume.title}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                                  resume.template === 'modern' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                  resume.template === 'executive' ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' :
                                  resume.template === 'creative' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                                  'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                                }`}>
                                  {resume.template}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(resume.updatedAt).toLocaleDateString()}
                            </p>
                            <Button size="sm" variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mt-1">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Resume Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Resumes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/templates">
              <Card className="border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl">
                <CardContent className="flex flex-col items-center justify-center h-64 text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Create New Resume</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Choose from 9 professional templates</p>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {resumes.map((resume, index) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/editor/${resume.id}`}>
                <Card className="hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          resume.template === 'modern' ? 'bg-blue-100 dark:bg-blue-900/30' :
                          resume.template === 'executive' ? 'bg-gray-100 dark:bg-gray-700' :
                          resume.template === 'creative' ? 'bg-orange-100 dark:bg-orange-900/30' :
                          'bg-purple-100 dark:bg-purple-900/30'
                        }`}>
                          <FileText className={`h-6 w-6 ${
                            resume.template === 'modern' ? 'text-blue-600 dark:text-blue-400' :
                            resume.template === 'executive' ? 'text-gray-600 dark:text-gray-400' :
                            resume.template === 'creative' ? 'text-orange-600 dark:text-orange-400' :
                            'text-purple-600 dark:text-purple-400'
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{resume.title}</CardTitle>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Last edited {new Date(resume.updatedAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                          resume.template === 'modern' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                          resume.template === 'executive' ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300' :
                          resume.template === 'creative' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                        }`}>
                          {resume.template}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteResume(resume.id)
                      }}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>Created {new Date(resume.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 All rights reserved by Syed Ali Hashmi
          </p>
        </div>
      </footer>
    </div>
  )
}