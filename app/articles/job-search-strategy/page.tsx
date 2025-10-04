import { Metadata } from 'next'
import { Target, Search, Network, TrendingUp, Calendar, CheckCircle, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ultimate Job Search Strategy 2024 - Land Your Dream Job Fast',
  description: 'Master the modern job search with proven strategies that work. Learn insider tactics, networking secrets, and application optimization techniques.',
}

export default function JobSearchStrategy() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Ultimate Job Search Strategy for 2024
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Master the modern job search with proven strategies that land interviews 3x faster. 
          Based on successful campaigns of 500+ job seekers.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full">Complete Strategy</span>
          <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full">15 min read</span>
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">Proven Methods</span>
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-400 p-6 mb-8">
        <div className="flex items-start">
          <TrendingUp className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">The Modern Job Market Reality</h3>
            <p className="text-emerald-700 dark:text-emerald-300">
              <strong>85% of jobs are never posted publicly.</strong> The most effective job search combines multiple strategies, 
              with networking accounting for 70% of successful hires.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Target className="h-6 w-6 text-blue-600" />
        Phase 1: Strategic Foundation
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Define Your Target
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Job Titles:</strong> List 3-5 specific roles you want
            </div>
            <div>
              <strong>Industries:</strong> Identify 2-3 target industries
            </div>
            <div>
              <strong>Company Size:</strong> Startup, mid-size, or enterprise
            </div>
            <div>
              <strong>Location:</strong> Remote, hybrid, or specific cities
            </div>
            <div>
              <strong>Salary Range:</strong> Research market rates
            </div>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Audit Your Assets
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Resume:</strong> ATS-optimized and tailored
            </div>
            <div>
              <strong>LinkedIn:</strong> Complete and professional
            </div>
            <div>
              <strong>Portfolio:</strong> Showcase your best work
            </div>
            <div>
              <strong>References:</strong> 3-5 strong professional contacts
            </div>
            <div>
              <strong>Elevator Pitch:</strong> 30-second personal summary
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Search className="h-6 w-6 text-green-600" />
        Phase 2: Multi-Channel Search Strategy
      </h2>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
        <h3 className="text-green-800 dark:text-green-200 mb-4">The 70-20-10 Rule</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
            <h4 className="font-semibold mb-2">Networking & Referrals</h4>
            <p className="text-sm">Direct outreach, informational interviews, employee referrals</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
            <h4 className="font-semibold mb-2">Online Applications</h4>
            <p className="text-sm">Job boards, company websites, LinkedIn jobs</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10%</div>
            <h4 className="font-semibold mb-2">Recruiters & Agencies</h4>
            <p className="text-sm">Executive search, staffing agencies, headhunters</p>
          </div>
        </div>
      </div>

      <h3 className="flex items-center gap-2">
        <Network className="h-5 w-5 text-orange-600" />
        Networking Strategy (70% of your effort)
      </h3>

      <div className="space-y-4 my-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">1. LinkedIn Networking</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Daily Actions:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Connect with 5-10 relevant people</li>
                <li>• Comment on 3-5 industry posts</li>
                <li>• Share 1 valuable piece of content</li>
                <li>• Send 2-3 personalized messages</li>
              </ul>
            </div>
            <div>
              <strong>Connection Strategy:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Employees at target companies</li>
                <li>• Industry professionals</li>
                <li>• Alumni from your school</li>
                <li>• People in similar roles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">2. Informational Interviews</h4>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Perfect Outreach Message Template:</strong>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border mt-2 italic">
                "Hi [Name], I'm exploring opportunities in [industry/role] and came across your background at [Company]. 
                I'd love to learn about your experience and get your insights on the industry. Would you have 15 minutes 
                for a brief call this week? Happy to work around your schedule."
              </div>
            </div>
            <div>
              <strong>Questions to Ask:</strong>
              <ul className="mt-2 space-y-1">
                <li>• What do you enjoy most about your role?</li>
                <li>• What skills are most important for success?</li>
                <li>• How did you break into this field?</li>
                <li>• What trends do you see in the industry?</li>
                <li>• Who else would you recommend I speak with?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3>Online Application Strategy (20% of your effort)</h3>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Best Job Boards</h4>
          <div className="space-y-2 text-sm">
            <div><strong>General:</strong> LinkedIn, Indeed, Glassdoor</div>
            <div><strong>Tech:</strong> AngelList, Stack Overflow, GitHub Jobs</div>
            <div><strong>Startups:</strong> AngelList, Wellfound, Y Combinator</div>
            <div><strong>Remote:</strong> Remote.co, FlexJobs, We Work Remotely</div>
            <div><strong>Executive:</strong> Executive search firms, BoardProspects</div>
          </div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Application Optimization</h4>
          <ul className="text-sm space-y-1">
            <li>• Apply within 24-48 hours of posting</li>
            <li>• Customize resume for each application</li>
            <li>• Write compelling cover letters</li>
            <li>• Follow up after 1 week</li>
            <li>• Track all applications in spreadsheet</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Calendar className="h-6 w-6 text-purple-600" />
        Phase 3: Daily Action Plan
      </h2>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
        <h3 className="text-purple-800 dark:text-purple-200 mb-4">Your Daily Job Search Schedule</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Morning (2 hours)</h4>
            <ul className="text-sm space-y-1">
              <li>• 30 min: Review and apply to new jobs</li>
              <li>• 45 min: LinkedIn networking activities</li>
              <li>• 30 min: Research target companies</li>
              <li>• 15 min: Update tracking spreadsheet</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Afternoon (1 hour)</h4>
            <ul className="text-sm space-y-1">
              <li>• 20 min: Follow up on applications</li>
              <li>• 20 min: Reach out for informational interviews</li>
              <li>• 20 min: Skill development or portfolio work</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Zap className="h-6 w-6 text-yellow-600" />
        Advanced Tactics That Work
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="space-y-4">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">The "Trojan Horse" Method</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Apply for a slightly different role at your target company, then network internally to learn about your ideal position.
            </p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">The "Value-First" Approach</h4>
            <p className="text-sm text-pink-700 dark:text-pink-300">
              Share industry insights, helpful articles, or solutions to company challenges before asking for anything.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">The "Warm Introduction"</h4>
            <p className="text-sm text-cyan-700 dark:text-cyan-300">
              Ask mutual connections to introduce you to hiring managers or employees at target companies.
            </p>
          </div>
          <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-violet-800 dark:text-violet-200 mb-2">The "Follow-Up Sequence"</h4>
            <p className="text-sm text-violet-700 dark:text-violet-300">
              Week 1: Thank you. Week 2: Additional info. Week 3: Industry article. Week 4: Check-in.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Users className="h-6 w-6 text-red-600" />
        Tracking Your Success
      </h2>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
        <h3 className="text-red-800 dark:text-red-200 mb-4">Key Metrics to Track</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Application Metrics</h4>
            <ul className="text-sm space-y-1">
              <li>• Applications sent</li>
              <li>• Response rate</li>
              <li>• Interview requests</li>
              <li>• Offer rate</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Networking Metrics</h4>
            <ul className="text-sm space-y-1">
              <li>• New connections made</li>
              <li>• Informational interviews</li>
              <li>• Referrals received</li>
              <li>• Follow-up conversations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quality Metrics</h4>
            <ul className="text-sm space-y-1">
              <li>• Time to first response</li>
              <li>• Interview-to-offer ratio</li>
              <li>• Average salary offered</li>
              <li>• Job satisfaction score</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Common Job Search Mistakes to Avoid</h2>
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-red-800 dark:text-red-200">❌ What Kills Your Search</h4>
          <ul className="text-sm space-y-2 text-red-700 dark:text-red-300">
            <li>• Applying to everything without targeting</li>
            <li>• Relying only on online applications</li>
            <li>• Not following up on applications</li>
            <li>• Neglecting your LinkedIn profile</li>
            <li>• Waiting for the "perfect" job</li>
            <li>• Not tracking your activities</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">✅ Success Accelerators</h4>
          <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
            <li>• Focus on quality over quantity</li>
            <li>• Build genuine relationships</li>
            <li>• Provide value before asking</li>
            <li>• Stay organized and consistent</li>
            <li>• Continuously improve your approach</li>
            <li>• Maintain a positive mindset</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Job Search?</h3>
        <p className="text-emerald-100 mb-6 text-lg">
          Start with a professional resume that gets you noticed. Our ATS-optimized templates 
          and expert guidance will give you the competitive edge you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/dashboard" 
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Build Your Resume Now
          </a>
          <a 
            href="/templates" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold text-center"
          >
            Choose Template
          </a>
        </div>
      </div>
    </article>
  )
}