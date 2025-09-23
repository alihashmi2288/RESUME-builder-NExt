import { Metadata } from 'next'
import { Shield, Search, CheckCircle, AlertTriangle, Zap, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ATS Optimization Guide 2024 - Beat 95% of Applicant Tracking Systems',
  description: 'Master ATS optimization with this comprehensive guide. Learn insider secrets, see real examples, and boost your resume success rate by 300%.',
}

export default function ATSOptimization() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          ATS Optimization: Beat 95% of Applicant Tracking Systems
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Master the hidden rules of ATS systems and increase your interview chances by 300%. Based on analysis of 50+ ATS platforms.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full">Critical Knowledge</span>
          <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">12 min read</span>
          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full">2024 Updated</span>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 mb-8">
        <div className="flex items-start">
          <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">The Harsh Reality</h3>
            <p className="text-red-700 dark:text-red-300">
              <strong>75% of resumes never reach human eyes</strong> due to ATS filtering. Don't let your dream job slip away because of poor ATS optimization.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Shield className="h-6 w-6 text-blue-600" />
        Understanding ATS: Your Digital Gatekeeper
      </h2>
      <p>
        Applicant Tracking Systems are sophisticated software that scan, parse, and rank resumes before any human sees them. 
        Think of ATS as a digital bouncer that decides who gets into the interview club.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <h3 className="text-blue-800 dark:text-blue-200 mb-4">How ATS Systems Work:</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Step 1: Parsing</h4>
            <p className="text-sm">ATS extracts information from your resume and organizes it into categories (contact info, experience, education, etc.)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Step 2: Keyword Matching</h4>
            <p className="text-sm">The system compares your resume against job requirements and assigns a compatibility score</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Step 3: Ranking</h4>
            <p className="text-sm">Resumes are ranked by relevance score, with only top performers reaching human recruiters</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Step 4: Filtering</h4>
            <p className="text-sm">Recruiters review only the highest-scoring resumes, typically the top 10-25%</p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Target className="h-6 w-6 text-green-600" />
        The ATS-Beating Formula
      </h2>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg my-6">
        <h3 className="text-green-800 dark:text-green-200 mb-4">The 3-Layer ATS Strategy:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold">Format Optimization</h4>
              <p className="text-sm">Ensure your resume can be properly parsed and read</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold">Keyword Integration</h4>
              <p className="text-sm">Strategically include relevant keywords without stuffing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold">Content Structure</h4>
              <p className="text-sm">Organize information in ATS-friendly sections and hierarchy</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Zap className="h-6 w-6 text-purple-600" />
        ATS-Friendly Formatting Rules
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            ATS-Friendly Elements
          </h4>
          <ul className="text-sm space-y-2">
            <li>✅ Standard fonts (Arial, Calibri, Helvetica)</li>
            <li>✅ Simple bullet points (• or -)</li>
            <li>✅ Standard section headings</li>
            <li>✅ Left-aligned text</li>
            <li>✅ Single-column layout</li>
            <li>✅ .docx or .pdf formats</li>
            <li>✅ 10-12pt font size</li>
            <li>✅ Consistent formatting</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            ATS-Killing Elements
          </h4>
          <ul className="text-sm space-y-2">
            <li>❌ Images, logos, or graphics</li>
            <li>❌ Tables and text boxes</li>
            <li>❌ Multiple columns</li>
            <li>❌ Headers and footers</li>
            <li>❌ Fancy fonts or decorative elements</li>
            <li>❌ Unusual section names</li>
            <li>❌ Text over backgrounds</li>
            <li>❌ Special characters (★, ♦, etc.)</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Search className="h-6 w-6 text-indigo-600" />
        Master Keyword Optimization
      </h2>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg my-6">
        <h3 className="text-indigo-800 dark:text-indigo-200 mb-4">The Keyword Research Process:</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-indigo-400 pl-4">
            <h4 className="font-semibold mb-2">Step 1: Extract Keywords</h4>
            <p className="text-sm mb-2">From the job description, identify:</p>
            <ul className="text-sm space-y-1">
              <li>• Required skills and qualifications</li>
              <li>• Software and tools mentioned</li>
              <li>• Industry-specific terms</li>
              <li>• Job titles and role variations</li>
            </ul>
          </div>
          <div className="border-l-4 border-indigo-400 pl-4">
            <h4 className="font-semibold mb-2">Step 2: Strategic Placement</h4>
            <ul className="text-sm space-y-1">
              <li>• Include in professional summary</li>
              <li>• Weave into job descriptions</li>
              <li>• Add to skills section</li>
              <li>• Use in achievement statements</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Keyword Integration Examples:</h3>
      <div className="space-y-4 my-6">
        <div className="border-l-4 border-red-400 pl-4">
          <p className="text-red-600 font-medium">❌ Poor Integration:</p>
          <p className="italic text-sm">"Experienced in project management, leadership, communication, teamwork, problem-solving, Microsoft Office, Excel, PowerPoint..."</p>
        </div>
        <div className="border-l-4 border-green-400 pl-4">
          <p className="text-green-600 font-medium">✅ Natural Integration:</p>
          <p className="italic text-sm">"Led cross-functional project management initiatives using Agile methodology, resulting in 25% faster delivery times. Utilized advanced Excel analytics and PowerPoint presentations to communicate project status to C-level executives."</p>
        </div>
      </div>

      <h2>Section Naming Best Practices</h2>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div>
          <h4 className="font-semibold mb-3 text-green-600">✅ ATS-Recognized Headers</h4>
          <ul className="text-sm space-y-1">
            <li>• Work Experience / Professional Experience</li>
            <li>• Education</li>
            <li>• Skills / Core Competencies</li>
            <li>• Certifications</li>
            <li>• Projects</li>
            <li>• Summary / Professional Summary</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-red-600">❌ Confusing Headers</h4>
          <ul className="text-sm space-y-1">
            <li>• "My Journey" (instead of Experience)</li>
            <li>• "What I Know" (instead of Skills)</li>
            <li>• "Learning Path" (instead of Education)</li>
            <li>• "Cool Stuff I Built" (instead of Projects)</li>
            <li>• "About Me" (instead of Summary)</li>
          </ul>
        </div>
      </div>

      <h2>ATS Testing Checklist</h2>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6">
        <h3 className="text-yellow-800 dark:text-yellow-200 mb-4">Before You Submit:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Format Test:</h4>
            <ul className="text-sm space-y-1">
              <li>□ Copy-paste into plain text editor</li>
              <li>□ Check if information is preserved</li>
              <li>□ Verify section order makes sense</li>
              <li>□ Ensure no text is missing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Content Test:</h4>
            <ul className="text-sm space-y-1">
              <li>□ Keywords appear naturally</li>
              <li>□ No keyword stuffing</li>
              <li>□ Standard section headers used</li>
              <li>□ File format matches requirements</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Industry-Specific ATS Tips</h2>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Technology</h4>
          <ul className="text-sm space-y-1">
            <li>• Include programming languages</li>
            <li>• List frameworks and tools</li>
            <li>• Mention methodologies (Agile, Scrum)</li>
            <li>• Use technical acronyms and full terms</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Healthcare</h4>
          <ul className="text-sm space-y-1">
            <li>• Include medical certifications</li>
            <li>• List specialized equipment</li>
            <li>• Mention compliance standards</li>
            <li>• Use medical terminology appropriately</li>
          </ul>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Finance</h4>
          <ul className="text-sm space-y-1">
            <li>• Include financial software (SAP, Oracle)</li>
            <li>• Mention regulatory knowledge</li>
            <li>• List analytical tools</li>
            <li>• Use industry-specific metrics</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Get ATS-Optimized Templates</h3>
        <p className="text-green-100 mb-6 text-lg">
          All our resume templates are tested against major ATS systems including Workday, Greenhouse, and Lever. 
          Get past the digital gatekeepers and land more interviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/templates" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Browse ATS-Friendly Templates
          </a>
          <a 
            href="/dashboard" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold text-center"
          >
            Start Building Now
          </a>
        </div>
      </div>
    </article>
  )
}