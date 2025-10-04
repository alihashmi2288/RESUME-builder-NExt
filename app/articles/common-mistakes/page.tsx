import { Metadata } from 'next'
import { AlertTriangle, X, CheckCircle, Eye, Clock, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Top 10 Resume Mistakes That Kill Your Job Chances - Avoid These Now',
  description: 'Discover the most common resume mistakes that cost you interviews. Learn what recruiters hate and how to fix these critical errors.',
}

export default function CommonMistakes() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          10 Resume Mistakes That Kill Your Job Chances
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Avoid these critical errors that cause 90% of resumes to be rejected. Based on feedback from 200+ hiring managers.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 mb-8">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">The Cost of Resume Mistakes</h3>
            <p className="text-red-700 dark:text-red-300">
              <strong>75% of resumes are rejected within 6 seconds</strong> due to common mistakes.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
        Typos and Grammar Errors
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
            <X className="h-5 w-5" />
            Common Errors
          </h4>
          <ul className="text-sm space-y-2">
            <li>❌ Recieved instead of Received</li>
            <li>❌ Managment instead of Management</li>
            <li>❌ Missing apostrophes</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Prevention Tips
          </h4>
          <ul className="text-sm space-y-2">
            <li>✅ Use spell check tools</li>
            <li>✅ Read your resume aloud</li>
            <li>✅ Ask someone to proofread</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Fix Your Resume?</h3>
        <p className="text-red-100 mb-6 text-lg">
          Use our professional resume builder to avoid all these common mistakes automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/dashboard" 
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Build Perfect Resume Now
          </a>
          <a 
            href="/templates" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold text-center"
          >
            Browse Templates
          </a>
        </div>
      </div>
    </article>
  )
}