import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar, Code, ExternalLink } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function TechTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-gray-900 text-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8">
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: settings.fonts.heading }}>
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        {data.personalInfo.title && (
          <p className="text-xl text-cyan-100 mb-4">{data.personalInfo.title}</p>
        )}
        <div className="flex flex-wrap gap-4 text-cyan-100">
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
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              About
            </h2>
            <p className="text-gray-300 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 pb-6 border-b border-gray-700 last:border-b-0">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <p className="text-lg font-medium text-cyan-400">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skill) => (
                <div key={skill.id} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <Code className="h-4 w-4 mr-2 text-cyan-400" />
                    <span className="font-medium text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm px-2 py-1 rounded bg-cyan-500 text-white">
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