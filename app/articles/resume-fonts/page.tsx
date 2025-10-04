import { Metadata } from 'next'
import { Type, Eye, CheckCircle, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Resume Fonts 2024 - Typography That Gets You Hired',
  description: 'Discover the best fonts for resumes that are both ATS-friendly and visually appealing. Learn which fonts to use and which to avoid.',
}

export default function ResumeFonts() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Best Resume Fonts That Get You Hired
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Typography can make or break your resume. Learn which fonts recruiters prefer and which ones to avoid at all costs.
        </p>
      </div>

      <h2 className="flex items-center gap-3">
        <CheckCircle className="h-6 w-6 text-green-600" />
        Top ATS-Friendly Fonts
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-green-800 dark:text-green-200 mb-3" style={{fontFamily: 'Arial'}}>Arial</h3>
            <p className="text-sm text-green-700 dark:text-green-300 mb-2">
              Clean, professional, and universally readable. Perfect for conservative industries.
            </p>
            <div className="text-xs">
              <strong>Best for:</strong> Finance, Healthcare, Government
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-blue-800 dark:text-blue-200 mb-3" style={{fontFamily: 'Calibri'}}>Calibri</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
              Modern and friendly while maintaining professionalism. Microsoft's default choice.
            </p>
            <div className="text-xs">
              <strong>Best for:</strong> Business, Technology, Consulting
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-purple-800 dark:text-purple-200 mb-3" style={{fontFamily: 'Helvetica'}}>Helvetica</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
              Timeless and elegant. The gold standard for professional documents.
            </p>
            <div className="text-xs">
              <strong>Best for:</strong> Design, Marketing, Creative fields
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
            <h3 className="text-teal-800 dark:text-teal-200 mb-3" style={{fontFamily: 'Georgia'}}>Georgia</h3>
            <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
              Serif font that's highly readable on screen. Adds sophistication.
            </p>
            <div className="text-xs">
              <strong>Best for:</strong> Law, Academia, Publishing
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <X className="h-6 w-6 text-red-600" />
        Fonts to Avoid
      </h2>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Never Use These:</h4>
            <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
              <li>❌ <span style={{fontFamily: 'Comic Sans MS'}}>Comic Sans</span> - Unprofessional</li>
              <li>❌ <span style={{fontFamily: 'Papyrus'}}>Papyrus</span> - Outdated</li>
              <li>❌ <span style={{fontFamily: 'Impact'}}>Impact</span> - Too bold</li>
              <li>❌ <span style={{fontFamily: 'Brush Script MT'}}>Script fonts</span> - Hard to read</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Why They Fail:</h4>
            <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
              <li>• ATS systems can't read them properly</li>
              <li>• Look unprofessional to recruiters</li>
              <li>• Difficult to read in small sizes</li>
              <li>• May not display correctly on all devices</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Eye className="h-6 w-6 text-blue-600" />
        Font Size and Formatting Guidelines
      </h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Body Text</h4>
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <div><strong>Size:</strong> 10-12pt</div>
              <div><strong>Line spacing:</strong> 1.15-1.5</div>
              <div><strong>Style:</strong> Regular weight</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Headings</h4>
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <div><strong>Size:</strong> 14-16pt</div>
              <div><strong>Style:</strong> Bold or semi-bold</div>
              <div><strong>Case:</strong> Title case</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Name</h4>
            <div className="text-sm text-blue-700 dark:text-blue-300">
              <div><strong>Size:</strong> 18-24pt</div>
              <div><strong>Style:</strong> Bold</div>
              <div><strong>Position:</strong> Top center</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Perfect Typography Awaits</h3>
        <p className="text-indigo-100 mb-6 text-lg">
          Our resume templates use professionally selected fonts that are both ATS-friendly and visually appealing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/templates" 
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            See Font Examples
          </a>
          <a 
            href="/dashboard" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-center"
          >
            Start Building
          </a>
        </div>
      </div>
    </article>
  )
}