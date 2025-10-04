import { Metadata } from 'next'
import { Palette, Target, Users, Briefcase, Code, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Choose the Perfect Resume Template - Complete Guide 2024',
  description: 'Learn how to select the ideal resume template for your industry, experience level, and career goals. Expert tips and examples included.',
}

export default function ChoosingTemplate() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          How to Choose the Perfect Resume Template
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Your template choice can make or break your first impression. Learn how to select the perfect design for your industry and career level.
        </p>
      </div>

      <h2 className="flex items-center gap-3">
        <Target className="h-6 w-6 text-blue-600" />
        Template Selection by Industry
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Conservative Industries
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Finance, Law, Healthcare, Government, Insurance
          </p>
          <div className="space-y-2 text-sm">
            <div><strong>Best Templates:</strong> Classic, Professional, Minimal</div>
            <div><strong>Colors:</strong> Navy, black, dark gray</div>
            <div><strong>Style:</strong> Clean, traditional, no graphics</div>
          </div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h3 className="text-orange-800 dark:text-orange-200 mb-4 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Creative Industries
          </h3>
          <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
            Design, Marketing, Media, Advertising, Arts
          </p>
          <div className="space-y-2 text-sm">
            <div><strong>Best Templates:</strong> Creative, Modern, Elegant</div>
            <div><strong>Colors:</strong> Bold accents, gradients</div>
            <div><strong>Style:</strong> Visual elements, modern fonts</div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Users className="h-6 w-6 text-green-600" />
        Template by Experience Level
      </h2>

      <div className="space-y-4 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-3">Entry Level (0-2 years)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Recommended:</strong> Modern, Clean templates
              <ul className="mt-2 space-y-1">
                <li>• Emphasize education and skills</li>
                <li>• Include projects and internships</li>
                <li>• Use fresh, contemporary design</li>
              </ul>
            </div>
            <div>
              <strong>Avoid:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Overly complex layouts</li>
                <li>• Too much white space</li>
                <li>• Executive-style templates</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-purple-800 dark:text-purple-200 mb-3">Senior Level (10+ years)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Recommended:</strong> Executive, Professional templates
              <ul className="mt-2 space-y-1">
                <li>• Sophisticated, polished design</li>
                <li>• Focus on leadership experience</li>
                <li>• Premium, authoritative feel</li>
              </ul>
            </div>
            <div>
              <strong>Avoid:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Trendy, youthful designs</li>
                <li>• Bright, playful colors</li>
                <li>• Overly creative layouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Find Your Perfect Template</h3>
        <p className="text-purple-100 mb-6 text-lg">
          Browse our collection of 9 professionally designed templates, each optimized for different industries and career levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/templates" 
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Browse All Templates
          </a>
          <a 
            href="/dashboard" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-center"
          >
            Start Building
          </a>
        </div>
      </div>
    </article>
  )
}