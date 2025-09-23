import { Metadata } from 'next'
import { CheckCircle, AlertTriangle, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Resume Formats 2024 - Complete Guide with Examples',
  description: 'Master resume formats with this comprehensive guide. Learn when to use chronological, functional, or combination formats with real examples and expert tips.',
}

export default function ResumeFormats() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Best Resume Formats for 2024: Complete Guide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Choose the perfect resume format based on your career stage, industry, and goals. 
          Includes real examples and expert recommendations.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">Format Guide</span>
          <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1 rounded-full">10 min read</span>
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">With Examples</span>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
        <div className="flex items-start">
          <Target className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Quick Format Selector</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-3">
              <strong>Consistent work history?</strong> → Chronological | 
              <strong>Career change?</strong> → Functional | 
              <strong>Experienced professional?</strong> → Combination
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
        Chronological Resume Format
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        The gold standard of resume formats. <strong>85% of recruiters prefer this format</strong> because it clearly shows career progression and stability.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Perfect For:
          </h3>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Consistent work history</strong> with no major gaps</li>
            <li>✅ <strong>Career progression</strong> in the same field</li>
            <li>✅ <strong>Traditional industries</strong> (finance, healthcare, law)</li>
            <li>✅ <strong>Experienced professionals</strong> with 3+ years experience</li>
            <li>✅ <strong>Promotions and growth</strong> within companies</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h3 className="text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Avoid If:
          </h3>
          <ul className="text-sm space-y-2">
            <li>❌ Employment gaps longer than 6 months</li>
            <li>❌ Frequent job changes (job hopping)</li>
            <li>❌ Career change to different industry</li>
            <li>❌ Recent graduate with limited experience</li>
            <li>❌ Returning to workforce after long break</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <h3 className="text-blue-800 dark:text-blue-200 mb-4">Chronological Format Structure:</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
            <span><strong>Contact Information</strong> - Name, phone, email, LinkedIn, location</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
            <span><strong>Professional Summary</strong> - 2-3 sentences highlighting your value</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
            <span><strong>Work Experience</strong> - Reverse chronological order (newest first)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
            <span><strong>Education</strong> - Degree, institution, graduation year</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">5</div>
            <span><strong>Skills</strong> - Technical and soft skills relevant to the role</span>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
        Functional Resume Format
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Skills-focused format that <strong>emphasizes what you can do rather than where you've worked</strong>. 
        Great for overcoming employment challenges.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Perfect For:
          </h3>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Career changers</strong> transitioning industries</li>
            <li>✅ <strong>Recent graduates</strong> with limited work experience</li>
            <li>✅ <strong>Employment gaps</strong> due to personal reasons</li>
            <li>✅ <strong>Freelancers/consultants</strong> with project-based work</li>
            <li>✅ <strong>Military veterans</strong> transitioning to civilian roles</li>
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Important Note:
          </h3>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Some recruiters are skeptical of functional resumes, suspecting candidates are hiding something. 
            Use only when chronological format doesn't work for your situation.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
        <h3 className="text-purple-800 dark:text-purple-200 mb-4">Functional Format Structure:</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">1</div>
            <span><strong>Contact Information</strong> - Standard contact details</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">2</div>
            <span><strong>Professional Summary</strong> - Focus on transferable skills</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">3</div>
            <span><strong>Skills Categories</strong> - Group achievements by skill type</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">4</div>
            <span><strong>Work History</strong> - Brief list of positions and dates</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">5</div>
            <span><strong>Education</strong> - Academic credentials</span>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
        Combination Resume Format
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        The best of both worlds. <strong>Highlights skills while showing career progression</strong>. 
        Increasingly popular among experienced professionals.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Perfect For:
          </h3>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Experienced professionals</strong> with 5+ years experience</li>
            <li>✅ <strong>Career changers</strong> with relevant transferable skills</li>
            <li>✅ <strong>Senior-level positions</strong> requiring diverse skill sets</li>
            <li>✅ <strong>Technical roles</strong> where skills are crucial</li>
            <li>✅ <strong>Consultants</strong> with varied project experience</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-blue-800 dark:text-blue-200 mb-3">Key Advantages:</h3>
          <ul className="text-sm space-y-2">
            <li>• Showcases relevant skills upfront</li>
            <li>• Maintains chronological work history</li>
            <li>• Flexible for different career paths</li>
            <li>• ATS-friendly when done correctly</li>
            <li>• Appeals to both HR and hiring managers</li>
          </ul>
        </div>
      </div>

      <h2>2024 Resume Format Trends</h2>
      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Design Trends</h3>
          <ul className="text-sm space-y-2">
            <li>• Minimalist, clean layouts</li>
            <li>• Strategic white space usage</li>
            <li>• Professional color accents</li>
            <li>• Modern typography</li>
            <li>• Subtle visual hierarchy</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Content Trends</h3>
          <ul className="text-sm space-y-2">
            <li>• Quantified achievements</li>
            <li>• Skills-based keywords</li>
            <li>• Industry-specific metrics</li>
            <li>• Remote work experience</li>
            <li>• Digital collaboration tools</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Technical Trends</h3>
          <ul className="text-sm space-y-2">
            <li>• ATS optimization priority</li>
            <li>• Mobile-friendly layouts</li>
            <li>• LinkedIn integration</li>
            <li>• QR codes for portfolios</li>
            <li>• Scannable formats</li>
          </ul>
        </div>
      </div>

      <h2>Format Selection Decision Tree</h2>
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Start Here: Do you have consistent work history?</h4>
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <div className="border-l-4 border-green-500 pl-4">
                <strong className="text-green-700 dark:text-green-300">YES →</strong> Are you staying in the same field?
                <div className="ml-4 mt-1">
                  <span className="text-green-600">✅ YES → Use <strong>Chronological Format</strong></span><br/>
                  <span className="text-purple-600">✅ NO → Use <strong>Combination Format</strong></span>
                </div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <strong className="text-orange-700 dark:text-orange-300">NO →</strong> Do you have relevant skills for the target role?
                <div className="ml-4 mt-1">
                  <span className="text-purple-600">✅ YES → Use <strong>Functional Format</strong></span><br/>
                  <span className="text-red-600">❌ NO → Focus on building experience first</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Industry-Specific Format Recommendations</h2>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Conservative Industries</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Finance, Law, Healthcare, Government</p>
            <p className="text-sm"><strong>Recommended:</strong> Chronological format with traditional design</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Creative Industries</h4>
            <p className="text-sm text-green-700 dark:text-green-300 mb-2">Design, Marketing, Media, Advertising</p>
            <p className="text-sm"><strong>Recommended:</strong> Combination format with modern design elements</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Technology</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Software, IT, Engineering, Startups</p>
            <p className="text-sm"><strong>Recommended:</strong> Combination format with skills emphasis</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Consulting & Services</h4>
            <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">Consulting, Sales, Customer Service</p>
            <p className="text-sm"><strong>Recommended:</strong> Chronological or combination based on experience level</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Professional Resume Templates</h3>
        <p className="text-purple-100 mb-6 text-lg">
          Choose from 9 expertly designed templates that follow the best format practices for 2024. 
          Each template is optimized for ATS systems and modern hiring practices.
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
            Start Building Resume
          </a>
        </div>
      </div>
    </article>
  )
}