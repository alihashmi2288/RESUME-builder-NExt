import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function ElegantTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto" style={{ fontFamily: settings.fonts.body }}>
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-800 text-white p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: settings.fonts.heading }}>
              {data.personalInfo.fullName || 'Your Name'}
            </h1>
            {data.personalInfo.title && (
              <p className="text-gray-300 text-sm uppercase tracking-wide">{data.personalInfo.title}</p>
            )}
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-200">Contact</h2>
            <div className="space-y-3 text-sm">
              {data.personalInfo.email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-gray-300">{data.personalInfo.email}</span>
                </div>
              )}
              {data.personalInfo.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-gray-300">{data.personalInfo.phone}</span>
                </div>
              )}
              {data.personalInfo.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-gray-300">{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-200">Skills</h2>
              <div className="space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full" 
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : 
                                 skill.level === 'Intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="w-2/3 p-8">
          {/* Summary */}
          {data.personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 pb-2">
                Profile
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">
                Experience
              </h2>
              {data.experience.map((exp) => (
                <div key={exp.id} className="mb-6 relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="absolute left-1.5 top-5 w-0.5 h-full bg-blue-200"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-gray-600 text-sm">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">
                Education
              </h2>
              {data.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
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