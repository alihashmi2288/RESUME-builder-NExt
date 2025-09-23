import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function MinimalTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="p-8 border-b border-gray-200">
        <h1 className="text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: settings.fonts.heading }}>
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        {data.personalInfo.title && (
          <p className="text-xl text-gray-600 mb-4 font-light">{data.personalInfo.title}</p>
        )}
        <div className="flex flex-wrap gap-6 text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              {data.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
                  <span className="text-gray-500 text-sm">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 font-light">{exp.company}</p>
                <p className="text-gray-700 leading-relaxed font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-light text-gray-900 mb-8 border-b border-gray-200 pb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span key={skill.id} className="text-gray-700 font-light">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}