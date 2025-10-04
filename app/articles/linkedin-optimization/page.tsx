import { Metadata } from 'next'
import { Linkedin, Users, Search, TrendingUp, MessageSquare, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LinkedIn Profile Optimization Guide 2024 - Get Found by Recruiters',
  description: 'Optimize your LinkedIn profile to attract recruiters and land job opportunities. Complete guide with examples and proven strategies.',
}

export default function LinkedInOptimization() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-blue-50 to-linkedin-50 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          LinkedIn Profile Optimization Guide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Transform your LinkedIn profile into a recruiter magnet. 87% of recruiters use LinkedIn to find candidates.
        </p>
      </div>

      <h2 className="flex items-center gap-3">
        <Eye className="h-6 w-6 text-blue-600" />
        Profile Photo and Header
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Perfect Profile Photo</h4>
          <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
            <li>• Professional headshot</li>
            <li>• Smiling and approachable</li>
            <li>• High resolution (400x400px min)</li>
            <li>• Plain background</li>
            <li>• Business appropriate attire</li>
            <li>• Face takes up 60% of frame</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">❌ Photo Mistakes</h4>
          <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
            <li>• Selfies or casual photos</li>
            <li>• Group photos or pets</li>
            <li>• Sunglasses or hats</li>
            <li>• Blurry or pixelated images</li>
            <li>• Inappropriate backgrounds</li>
            <li>• No photo at all</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Search className="h-6 w-6 text-green-600" />
        Headline Optimization
      </h2>

      <div className="space-y-4 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
          <p className="text-red-600 font-medium">❌ Weak Headline:</p>
          <p className="italic text-sm mt-1">"Marketing Professional at ABC Company"</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
          <p className="text-green-600 font-medium">✅ Strong Headline:</p>
          <p className="italic text-sm mt-1">"Digital Marketing Manager | Increased Brand Awareness by 150% | SEO & PPC Expert | Helping B2B Companies Scale"</p>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <h3 className="text-blue-800 dark:text-blue-200 mb-4">Headline Formula</h3>
        <div className="text-sm space-y-2">
          <div><strong>Job Title</strong> + <strong>Key Achievement</strong> + <strong>Skills</strong> + <strong>Value Proposition</strong></div>
          <div className="mt-4">
            <strong>Example:</strong> "Senior Software Engineer | Built Apps Used by 1M+ Users | React, Node.js, AWS | Turning Ideas into Scalable Solutions"
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <MessageSquare className="h-6 w-6 text-purple-600" />
        About Section Mastery
      </h2>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
        <h3 className="text-purple-800 dark:text-purple-200 mb-4">About Section Structure</h3>
        <div className="space-y-3 text-sm">
          <div>
            <strong>Hook (First 2 lines):</strong> Grab attention with your biggest achievement or unique value
          </div>
          <div>
            <strong>Story (Middle):</strong> Brief career journey and key accomplishments with numbers
          </div>
          <div>
            <strong>Skills & Expertise:</strong> List your core competencies and technologies
          </div>
          <div>
            <strong>Call to Action:</strong> Invite connections and provide contact information
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <TrendingUp className="h-6 w-6 text-orange-600" />
        Experience Section Optimization
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">Best Practices</h4>
          <ul className="text-sm space-y-2">
            <li>• Use action verbs to start bullet points</li>
            <li>• Include quantified achievements</li>
            <li>• Add relevant keywords for your industry</li>
            <li>• Keep descriptions concise but impactful</li>
            <li>• Update regularly with new accomplishments</li>
          </ul>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">Power Words</h4>
          <div className="text-sm space-y-2">
            <div><strong>Leadership:</strong> Led, Managed, Directed, Supervised</div>
            <div><strong>Achievement:</strong> Increased, Improved, Generated, Delivered</div>
            <div><strong>Innovation:</strong> Developed, Created, Launched, Implemented</div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Users className="h-6 w-6 text-indigo-600" />
        Skills and Endorsements Strategy
      </h2>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-6">
        <h3 className="text-indigo-800 dark:text-indigo-200 mb-4">Skills Section Optimization</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Top 3 Skills (Most Important)</h4>
            <ul className="text-sm space-y-1">
              <li>• Choose skills most relevant to your target role</li>
              <li>• These appear prominently on your profile</li>
              <li>• Ask colleagues to endorse these specifically</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Additional Skills</h4>
            <ul className="text-sm space-y-1">
              <li>• Add up to 50 skills total</li>
              <li>• Include industry-specific keywords</li>
              <li>• Mix hard and soft skills</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>LinkedIn Activity and Engagement</h2>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Daily Actions</h4>
          <ul className="text-sm space-y-1">
            <li>• Like and comment on posts</li>
            <li>• Share valuable content</li>
            <li>• Connect with new people</li>
            <li>• Update your status</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Weekly Actions</h4>
          <ul className="text-sm space-y-1">
            <li>• Publish original content</li>
            <li>• Engage with your network</li>
            <li>• Join relevant groups</li>
            <li>• Send personalized messages</li>
          </ul>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Monthly Actions</h4>
          <ul className="text-sm space-y-1">
            <li>• Update your profile</li>
            <li>• Review and optimize keywords</li>
            <li>• Ask for recommendations</li>
            <li>• Analyze profile views</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Optimize Your Professional Brand</h3>
        <p className="text-blue-100 mb-6 text-lg">
          Start with a professional resume, then optimize your LinkedIn profile to create a consistent professional brand across all platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/dashboard" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Build Your Resume First
          </a>
          <a 
            href="/templates" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-center"
          >
            Choose Template
          </a>
        </div>
      </div>
    </article>
  )
}