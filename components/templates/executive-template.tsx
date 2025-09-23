import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function ExecutiveTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="bg-gray-900 text-white p-8">
        <h1 className="text-5xl font-bold mb-3" style={{ fontFamily: settings.fonts.heading }}>
          {data.personalInfo.fullName || 'Your Name'}
        </h1>
        {data.personalInfo.title && (
          <p className="text-2xl mb-6 text-gray-300">{data.personalInfo.title}</p>
        )}
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          {data.personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Executive Summary */}
        {data.personalInfo.summary && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-2">
              Executive Summary
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Professional Experience */}
        {data.experience.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-2">
              Professional Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-xl font-semibold text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-2">
              Core Competencies
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {data.skills.map((skill) => (
                <div key={skill.id} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
                  <p className="text-gray-600 mt-2">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}