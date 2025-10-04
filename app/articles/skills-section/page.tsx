import { Metadata } from 'next'
import { Star, TrendingUp, Award, Zap, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Write a Powerful Skills Section - Resume Skills Guide 2024',
  description: 'Master the art of writing skills sections that get you hired. Learn which skills to include, how to organize them, and common mistakes to avoid.',
}

export default function SkillsSection() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          How to Write a Powerful Skills Section
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Transform your skills section from a boring list into a compelling showcase that gets you hired. 
          Based on analysis of 1,000+ successful resumes.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">Skills Strategy</span>
          <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full">10 min read</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">Expert Tips</span>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
        <div className="flex items-start">
          <Star className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Why Skills Sections Matter</h3>
            <p className="text-blue-700 dark:text-blue-300">
              <strong>89% of recruiters</strong> scan the skills section first to quickly assess candidate fit. 
              A well-crafted skills section can get you past ATS filters and into human hands.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Target className="h-6 w-6 text-green-600" />
        Types of Skills to Include
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Hard Skills
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mb-3">
            Technical, measurable abilities that can be learned and tested.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Programming languages</li>
            <li>• Software proficiency</li>
            <li>• Certifications</li>
            <li>• Technical tools</li>
            <li>• Languages spoken</li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Soft Skills
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            Personal attributes and interpersonal abilities.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Leadership</li>
            <li>• Communication</li>
            <li>• Problem-solving</li>
            <li>• Team collaboration</li>
            <li>• Time management</li>
          </ul>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Industry Skills
          </h3>
          <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
            Specific knowledge relevant to your field.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Industry regulations</li>
            <li>• Specialized processes</li>
            <li>• Domain expertise</li>
            <li>• Market knowledge</li>
            <li>• Best practices</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <CheckCircle className="h-6 w-6 text-indigo-600" />
        Skills Section Formats That Work
      </h2>

      <div className="space-y-6 my-8">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h3 className="text-indigo-800 dark:text-indigo-200 mb-4">Format 1: Categorized Skills</h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border">
            <div className="space-y-3 text-sm">
              <div>
                <strong>Technical Skills:</strong> Python, JavaScript, React, Node.js, PostgreSQL, AWS, Docker
              </div>
              <div>
                <strong>Design Tools:</strong> Figma, Adobe Creative Suite, Sketch, InVision, Canva
              </div>
              <div>
                <strong>Marketing:</strong> Google Analytics, SEO/SEM, Social Media Marketing, Email Marketing
              </div>
            </div>
          </div>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-2">
            <strong>Best for:</strong> Technical roles, diverse skill sets, senior positions
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="text-green-800 dark:text-green-200 mb-4">Format 2: Simple List</h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border">
            <div className="text-sm">
              <strong>Core Competencies:</strong> Project Management • Data Analysis • Team Leadership • 
              Strategic Planning • Budget Management • Stakeholder Communication • Process Improvement • 
              Risk Assessment • Quality Assurance • Cross-functional Collaboration
            </div>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300 mt-2">
            <strong>Best for:</strong> Management roles, consulting, general business positions
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h3 className="text-orange-800 dark:text-orange-200 mb-4">Format 3: Proficiency Levels</h3>
          <div className="bg-white dark:bg-gray-800 p-4 rounded border">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><strong>JavaScript:</strong> Expert (5+ years)</span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>)}
                </div>
              </div>
              <div className="flex justify-between">
                <span><strong>Python:</strong> Advanced (3+ years)</span>
                <div className="flex gap-1">
                  {[1,2,3,4].map(i => <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>)}
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between">
                <span><strong>Go:</strong> Intermediate (1+ year)</span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>)}
                  {[1,2].map(i => <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>)}
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
            <strong>Best for:</strong> Technical roles, when proficiency levels matter
          </p>
        </div>
      </div>

      <h2>How to Choose the Right Skills</h2>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6">
        <h3 className="text-yellow-800 dark:text-yellow-200 mb-4">The 3-Step Skills Selection Process:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold">Analyze the Job Description</h4>
              <p className="text-sm">Extract required and preferred skills from the job posting. Look for repeated keywords and phrases.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold">Match Your Experience</h4>
              <p className="text-sm">Only include skills you can confidently discuss in an interview. Be honest about your proficiency level.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 className="font-semibold">Prioritize by Relevance</h4>
              <p className="text-sm">List the most important skills first. Aim for 8-12 skills total to avoid overwhelming the reader.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Industry-Specific Skills Examples</h2>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Software Development</h4>
            <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
              <li>• Programming Languages: Python, JavaScript, Java</li>
              <li>• Frameworks: React, Django, Spring Boot</li>
              <li>• Databases: PostgreSQL, MongoDB, Redis</li>
              <li>• Tools: Git, Docker, AWS, Jenkins</li>
              <li>• Methodologies: Agile, Scrum, TDD</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Digital Marketing</h4>
            <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
              <li>• Analytics: Google Analytics, Adobe Analytics</li>
              <li>• Advertising: Google Ads, Facebook Ads, LinkedIn Ads</li>
              <li>• SEO Tools: SEMrush, Ahrefs, Moz</li>
              <li>• Email: Mailchimp, HubSpot, Klaviyo</li>
              <li>• Social Media: Hootsuite, Buffer, Sprout Social</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Data Analysis</h4>
            <ul className="text-sm space-y-1 text-purple-700 dark:text-purple-300">
              <li>• Languages: Python, R, SQL</li>
              <li>• Tools: Tableau, Power BI, Excel</li>
              <li>• Libraries: Pandas, NumPy, Matplotlib</li>
              <li>• Databases: MySQL, PostgreSQL, BigQuery</li>
              <li>• Statistics: Regression, A/B Testing, ML</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Project Management</h4>
            <ul className="text-sm space-y-1 text-orange-700 dark:text-orange-300">
              <li>• Methodologies: Agile, Scrum, Waterfall</li>
              <li>• Tools: Jira, Asana, Monday.com, Trello</li>
              <li>• Certifications: PMP, Scrum Master, SAFe</li>
              <li>• Skills: Risk Management, Budgeting</li>
              <li>• Software: MS Project, Smartsheet</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Common Skills Section Mistakes</h2>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200">❌ What NOT to Do</h4>
          <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
            <li>• Including basic skills everyone has (Microsoft Word)</li>
            <li>• Listing skills you can't demonstrate</li>
            <li>• Using vague terms like "computer literate"</li>
            <li>• Including outdated technologies</li>
            <li>• Mixing skill types without organization</li>
            <li>• Rating skills with stars or bars</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">✅ Best Practices</h4>
          <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
            <li>• Focus on job-relevant skills</li>
            <li>• Use specific, searchable keywords</li>
            <li>• Group similar skills together</li>
            <li>• Keep the list concise (8-12 skills)</li>
            <li>• Update regularly with new skills</li>
            <li>• Match the job description language</li>
          </ul>
        </div>
      </div>

      <h2>Skills Section Placement</h2>
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
        <h3 className="text-gray-800 dark:text-gray-200 mb-4">Where to Place Your Skills Section:</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Near the Top</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              For technical roles, career changers, or when skills are your strongest asset.
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">After Experience</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              For experienced professionals where work history is the main focus.
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Integrated</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Weave skills throughout experience descriptions for maximum impact.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Build Your Perfect Skills Section</h3>
        <p className="text-blue-100 mb-6 text-lg">
          Use our professional resume builder with smart skills suggestions based on your industry. 
          Our templates automatically format your skills for maximum impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/dashboard" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Start Building Now
          </a>
          <a 
            href="/templates" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-center"
          >
            View Templates
          </a>
        </div>
      </div>
    </article>
  )
}