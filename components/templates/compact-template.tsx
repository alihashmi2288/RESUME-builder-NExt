import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function CompactTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="p-6 bg-green-50 border-l-8 border-green-500">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: settings.fonts.heading }}>
              {data.personalInfo.fullName || 'Your Name'}
            </h1>
            {data.personalInfo.title && (
              <p className="text-lg text-green-600 font-medium">{data.personalInfo.title}</p>
            )}
          </div>
          <div className="text-right text-sm text-gray-600">
            {data.personalInfo.email && <div className="mb-1">{data.personalInfo.email}</div>}
            {data.personalInfo.phone && <div className="mb-1">{data.personalInfo.phone}</div>}
            {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-green-600 mb-2 uppercase text-sm tracking-wide">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{data.personalInfo.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {/* Experience */}
            {data.experience.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-green-600 mb-3 uppercase text-sm tracking-wide">
                  Experience
                </h2>
                {data.experience.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{exp.position}</h3>
                      <span className="text-gray-500 text-xs">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="text-green-600 font-medium text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div>
            {/* Education */}
            {data.education.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-green-600 mb-3 uppercase text-sm tracking-wide">
                  Education
                </h2>
                {data.education.map((edu) => (
                  <div key={edu.id} className="mb-3">
                    <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                    <p className="text-green-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {data.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-green-600 mb-3 uppercase text-sm tracking-wide">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <span key={skill.id} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}