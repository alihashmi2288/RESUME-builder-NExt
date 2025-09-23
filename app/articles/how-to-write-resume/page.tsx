import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write a Perfect Resume in 2024 - Resume Builder Pro',
  description: 'Learn how to write a compelling resume that gets you hired. Step-by-step guide with examples and tips.',
}

export default function HowToWriteResume() {
  return (
    <article className="prose prose-lg max-w-none dark:prose-invert">
      <h1>How to Write a Perfect Resume in 2024</h1>
      
      <p className="lead">
        Writing a resume that stands out in today's competitive job market requires strategy, 
        attention to detail, and understanding what employers are looking for.
      </p>

      <h2>1. Start with a Strong Professional Summary</h2>
      <p>
        Your professional summary is the first thing recruiters see. Make it count by:
      </p>
      <ul>
        <li>Keeping it to 2-3 sentences</li>
        <li>Highlighting your most relevant skills and experience</li>
        <li>Including specific achievements with numbers when possible</li>
      </ul>

      <h2>2. Tailor Your Resume to Each Job</h2>
      <p>
        Generic resumes don't work. For each application:
      </p>
      <ul>
        <li>Read the job description carefully</li>
        <li>Match your skills to the requirements</li>
        <li>Use similar keywords and phrases</li>
        <li>Prioritize relevant experience</li>
      </ul>

      <h2>3. Use Action Verbs and Quantify Results</h2>
      <p>
        Instead of listing duties, showcase achievements:
      </p>
      <ul>
        <li>Start bullet points with strong action verbs</li>
        <li>Include specific numbers, percentages, and metrics</li>
        <li>Focus on results and impact</li>
      </ul>

      <h2>4. Keep It Clean and Professional</h2>
      <p>
        A well-formatted resume is easier to read:
      </p>
      <ul>
        <li>Use consistent formatting throughout</li>
        <li>Choose a professional font</li>
        <li>Maintain proper spacing and margins</li>
        <li>Keep it to 1-2 pages maximum</li>
      </ul>

      <h2>5. Proofread Everything</h2>
      <p>
        Typos and errors can instantly disqualify you:
      </p>
      <ul>
        <li>Read your resume multiple times</li>
        <li>Use spell check tools</li>
        <li>Ask someone else to review it</li>
        <li>Check all contact information</li>
      </ul>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
        <h3 className="text-blue-800 dark:text-blue-200 mb-3">Ready to Build Your Resume?</h3>
        <p className="text-blue-700 dark:text-blue-300 mb-4">
          Use our professional resume builder to create a perfect resume in minutes.
        </p>
        <a 
          href="/dashboard" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Building Now
        </a>
      </div>
    </article>
  )
}