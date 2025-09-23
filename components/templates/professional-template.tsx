import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar, Award } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function ProfessionalTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: settings.fonts.heading }}>
              {data.personalInfo.fullName || 'Your Name'}
            </h1>
            {data.personalInfo.title && (
              <p className="text-xl text-indigo-100 mb-4">{data.personalInfo.title}</p>
            )}
          </div>
          <div className="text-right text-indigo-100">
            {data.personalInfo.email && (
              <div className="flex items-center justify-end mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center justify-end mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center justify-end">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
              <div className="w-8 h-0.5 bg-indigo-600 mr-3"></div>
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center">
              <div className="w-8 h-0.5 bg-indigo-600 mr-3"></div>
              Professional Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-6 p-4 border-l-4 border-indigo-200 bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-lg font-medium text-indigo-600">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 text-sm flex items-center bg-white px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          {data.skills.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center">
                <div className="w-8 h-0.5 bg-indigo-600 mr-3"></div>
                Core Skills
              </h2>
              <div className="space-y-3">
                {data.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-indigo-600 text-white">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-indigo-600 flex items-center">
                <div className="w-8 h-0.5 bg-indigo-600 mr-3"></div>
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}