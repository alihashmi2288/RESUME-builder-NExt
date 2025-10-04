import { Metadata } from 'next'
import { MessageCircle, Clock, Target, CheckCircle, Star, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ultimate Interview Preparation Guide 2024 - Ace Any Interview',
  description: 'Master interview preparation with proven strategies, common questions, and expert tips. Land your dream job with confidence.',
}

export default function InterviewPreparation() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Ultimate Interview Preparation Guide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Transform interview anxiety into confidence. Master the strategies that help 90% of our users land job offers.
        </p>
      </div>

      <h2 className="flex items-center gap-3">
        <Target className="h-6 w-6 text-blue-600" />
        The STAR Method Mastery
      </h2>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
        <h3 className="text-blue-800 dark:text-blue-200 mb-4">STAR Framework</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">S</div>
            <h4 className="font-semibold">Situation</h4>
            <p className="text-sm">Set the context</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">T</div>
            <h4 className="font-semibold">Task</h4>
            <p className="text-sm">Describe the challenge</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">A</div>
            <h4 className="font-semibold">Action</h4>
            <p className="text-sm">Explain what you did</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">R</div>
            <h4 className="font-semibold">Result</h4>
            <p className="text-sm">Share the outcome</p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <MessageCircle className="h-6 w-6 text-green-600" />
        Common Interview Questions
      </h2>

      <div className="space-y-4 my-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Tell me about yourself</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-red-600">❌ Wrong Answer:</strong>
              <p className="italic mt-1">"I'm a hard worker who loves challenges and wants to grow with your company."</p>
            </div>
            <div>
              <strong className="text-green-600">✅ Right Answer:</strong>
              <p className="italic mt-1">"I'm a marketing professional with 5 years of experience increasing brand awareness by 150%. I specialize in digital campaigns and data-driven strategies..."</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Why do you want this job?</h4>
          <div className="text-sm">
            <strong>Formula:</strong> Company research + Role alignment + Career goals
            <p className="mt-2 italic">"I'm excited about this role because [specific company achievement/value] aligns with my experience in [relevant skill]. This position would allow me to [specific contribution] while developing [career goal]."</p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Clock className="h-6 w-6 text-orange-600" />
        24-Hour Preparation Timeline
      </h2>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-semibold">Day Before (2 hours)</h4>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Research company and interviewer</li>
                <li>• Prepare 5 STAR stories</li>
                <li>• Plan your outfit and route</li>
                <li>• Prepare thoughtful questions</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-semibold">Day Of (1 hour)</h4>
              <ul className="text-sm mt-1 space-y-1">
                <li>• Review your resume and job description</li>
                <li>• Practice key answers out loud</li>
                <li>• Arrive 10-15 minutes early</li>
                <li>• Do power poses for confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-3">
        <Users className="h-6 w-6 text-purple-600" />
        Questions to Ask Them
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">About the Role</h4>
          <ul className="text-sm space-y-2">
            <li>• What does success look like in this position?</li>
            <li>• What are the biggest challenges facing the team?</li>
            <li>• How do you measure performance?</li>
            <li>• What opportunities exist for growth?</li>
          </ul>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
          <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">About the Company</h4>
          <ul className="text-sm space-y-2">
            <li>• What excites you most about working here?</li>
            <li>• How has the company changed recently?</li>
            <li>• What are the company's biggest priorities?</li>
            <li>• How would you describe the culture?</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Ready to Ace Your Interview?</h3>
        <p className="text-green-100 mb-6 text-lg">
          Start with a professional resume that gets you the interview. Our templates are designed to impress hiring managers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/dashboard" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
          >
            Build Your Resume
          </a>
          <a 
            href="/templates" 
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold text-center"
          >
            Choose Template
          </a>
        </div>
      </div>
    </article>
  )
}