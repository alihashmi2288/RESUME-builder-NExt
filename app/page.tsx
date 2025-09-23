'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'
import { FileText, Sparkles, Zap, Shield, Crown, ArrowRight, Check, Linkedin, Github, Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Create professional resumes in under 5 minutes with our intuitive builder' },
  { icon: Shield, title: 'ATS Optimized', description: 'Beat applicant tracking systems with our optimized templates' },
  { icon: Crown, title: '9 Premium Templates', description: 'Choose from modern, creative, and professional designs' },
  { icon: FileText, title: 'Instant PDF Export', description: 'Download high-quality PDFs ready for job applications' },
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <FileText className="h-8 w-8 text-primary" />
                <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Resume Builder Pro
                </h1>
                <p className="text-xs text-muted-foreground">Professional Resume Creator by Ali Hashmi</p>
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/dashboard">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              9 Professional Templates Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Create Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Dream Resume
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Build professional, ATS-optimized resumes in minutes. Choose from 9 stunning templates and land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Start Building Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-purple-600 hover:bg-purple-600 hover:!text-white" style={{ color: '#581c87' }}>
                  View Templates
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Free Forever
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                Export to PDF
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Create your professional resume in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  1
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="h-3 w-3 text-yellow-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Choose Template</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Browse through 9 professionally designed templates. Each template is ATS-optimized and tailored for different industries and career levels.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  2
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <Check className="h-3 w-3 text-green-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fill Information</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Use our intuitive form builder to add your personal details, work experience, education, skills, and projects. Real-time preview shows your progress.
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  3
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-3 w-3 text-blue-800" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Download & Apply</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Export your resume as a high-quality PDF with perfect formatting. Your resume is ready to impress recruiters and land interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Resume Builder Pro?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create a professional resume that gets you hired faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group">
                  <Card className="text-center p-8 h-full hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-0 shadow-lg group-hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Resume Builder FAQ</h2>
            <p className="text-gray-600 dark:text-gray-300">Everything you need to know about our resume builder</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Why should I use a resume builder?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Using a resume builder makes creating a resume significantly faster and easier. Ever tried building your resume with Word? The whole process is a huge pain – you make a TINY change and the entire layout gets messed up. With our builder, you don't worry about formatting, fonts, or layout. Just pick a template, fill it in, and you're ready to apply!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">What is the best resume builder?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                We've worked hard to make Resume Builder Pro the best out there. Here's what sets us apart:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Easy to use - Even if you're not tech-friendly</li>
                <li>• Get started in under 5 minutes</li>
                <li>• 100% free - No hidden paywalls</li>
                <li>• 9 professional templates</li>
                <li>• ATS-friendly templates</li>
                <li>• Instant PDF export</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Is this completely free?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Yes, Resume Builder Pro is 100% free. You can create and download your resume completely free of charge. No hidden fees, no paywalls after completion. Everything you need is available for free.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">What should a resume include?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                The must-have sections in your resume:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-3">
                <li>• Work Experience</li>
                <li>• Educational Background</li>
                <li>• Contact Information</li>
                <li>• Professional Summary</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
                Optional sections:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Skills</li>
                <li>• Projects</li>
                <li>• Certifications</li>
                <li>• Languages</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">How can I create my resume?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Creating a resume with Resume Builder Pro is straightforward. Just pick one of our 9 professional templates, then fill in your information using our intuitive form builder. That's it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Resume Analyzer Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            🤖 AI Resume Analyzer - FREE
          </h2>
          <p className="text-green-100 mb-8 max-w-3xl mx-auto text-lg">
            Want to analyze your resume according to job description? Get interview questions? Rewrite your resume according to job description? Write cover letter for free?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-white mb-2">Resume Analysis</h3>
              <p className="text-green-100 text-sm">Analyze your resume against specific job descriptions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-semibold text-white mb-2">Interview Questions</h3>
              <p className="text-green-100 text-sm">Get tailored interview questions for your role</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="font-semibold text-white mb-2">Resume Rewrite</h3>
              <p className="text-green-100 text-sm">AI-powered resume improvements and optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">💌</div>
              <h3 className="font-semibold text-white mb-2">Cover Letters</h3>
              <p className="text-green-100 text-sm">Generate perfect cover letters for any job</p>
            </div>
          </div>
          <a href="https://resume-analyzer-ali.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-10 py-4 bg-white text-green-600 hover:bg-gray-100 font-bold shadow-lg text-lg">
              🚀 Try AI Analyzer - FREE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Create your professional resume today and take the next step in your career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-bold">
                Start Building Now - Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/templates">
              <Button variant="outline" size="lg" className="px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-600" style={{ color: '#374151' }}>
                Explore Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>




      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Social */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="h-8 w-8 text-purple-500" />
                <span className="text-xl font-bold text-purple-500">Resume Builder</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/hashmiali2288/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/alihashmi2288" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="mailto:hashmi.ali2288@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/hashmi.ali_1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Resume Guide */}
            <div>
              <h3 className="font-semibold mb-4">Resume Guide</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/articles/how-to-write-resume" className="hover:text-white transition-colors">How to Write a Perfect Resume</Link></li>
                <li><Link href="/articles/ats-optimization" className="hover:text-white transition-colors">ATS Optimization Tips</Link></li>
                <li><Link href="/articles/resume-formats" className="hover:text-white transition-colors">Best Resume Formats 2024</Link></li>
                <li><Link href="/articles/common-mistakes" className="hover:text-white transition-colors">Common Resume Mistakes</Link></li>
                <li><Link href="/articles/skills-section" className="hover:text-white transition-colors">Writing Skills Section</Link></li>
              </ul>
            </div>

            {/* Templates & Design */}
            <div>
              <h3 className="font-semibold mb-4">Templates & Design</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/templates" className="hover:text-white transition-colors">Browse Templates</Link></li>
                <li><Link href="/articles/choosing-template" className="hover:text-white transition-colors">Choosing Right Template</Link></li>
                <li><Link href="/articles/resume-fonts" className="hover:text-white transition-colors">Best Fonts for Resume</Link></li>
                <li><Link href="/articles/color-psychology" className="hover:text-white transition-colors">Color Psychology in Resumes</Link></li>
                <li><Link href="/articles/design-principles" className="hover:text-white transition-colors">Resume Design Principles</Link></li>
              </ul>
            </div>

            {/* Career Resources */}
            <div>
              <h3 className="font-semibold mb-4">Career Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/articles/job-search-strategy" className="hover:text-white transition-colors">Job Search Strategy</Link></li>
                <li><Link href="/articles/interview-preparation" className="hover:text-white transition-colors">Interview Preparation</Link></li>
                <li><Link href="/articles/salary-negotiation" className="hover:text-white transition-colors">Salary Negotiation Tips</Link></li>
                <li><Link href="/articles/linkedin-optimization" className="hover:text-white transition-colors">LinkedIn Profile Tips</Link></li>
                <li><Link href="/articles/career-change" className="hover:text-white transition-colors">Career Change Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025, Syed Ali Hashmi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}