import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function ClassicTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-6 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: settings.fonts.heading }}>
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        {data.personalInfo.title && (
          <p className="text-lg text-gray-700 mb-4">{data.personalInfo.title}</p>
        )}
        <div className="text-gray-600 space-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
              Professional Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-base font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-gray-700">
                  • {skill.name} ({skill.level})
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}