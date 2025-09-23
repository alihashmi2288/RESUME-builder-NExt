import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar, Award, Code } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function ModernTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="p-8 border-b-4" style={{ borderColor: settings.colors.primary }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: settings.colors.primary, fontFamily: settings.fonts.heading }}>
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        {data.personalInfo.title && (
          <p className="text-xl text-gray-600 mb-4">{data.personalInfo.title}</p>
        )}
        <div className="flex flex-wrap gap-4 text-gray-600">
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: settings.colors.primary }}>
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: settings.colors.primary }}>
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-lg font-medium" style={{ color: settings.colors.primary }}>{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: settings.colors.primary }}>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2" style={{ color: settings.colors.primary }} />
                    <span className="font-medium text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: settings.colors.primary + '20', color: settings.colors.primary }}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}