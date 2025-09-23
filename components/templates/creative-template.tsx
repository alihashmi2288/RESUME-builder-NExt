import { ResumeData, ResumeSettings } from '@/types/resume'
import { Mail, Phone, MapPin, Star, Briefcase } from 'lucide-react'

interface TemplateProps {
  data: ResumeData
  settings: ResumeSettings
}

export function CreativeTemplate({ data, settings }: TemplateProps) {
  return (
    <div className="bg-white shadow-lg max-w-4xl mx-auto overflow-hidden" style={{ fontFamily: settings.fonts.body }}>
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3" style={{ fontFamily: settings.fonts.heading }}>
            {data.personalInfo.fullName || 'Your Name'}
          </h1>
          {data.personalInfo.title && (
            <p className="text-2xl mb-6 opacity-90">{data.personalInfo.title}</p>
          )}
          <div className="flex flex-wrap gap-6 text-white">
            {data.personalInfo.email && (
              <div className="flex items-center bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <Mail className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <Phone className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center bg-white bg-opacity-20 px-3 py-2 rounded-full">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* About Me */}
        {data.personalInfo.summary && (
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed ml-16">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            </div>
            <div className="ml-16 space-y-8">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index !== data.experience.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
                  )}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-6 relative z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                        <p className="text-lg font-semibold text-orange-600 mb-2">{exp.company}</p>
                        <p className="text-gray-600 mb-3">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 ml-16">Skills & Expertise</h2>
            <div className="ml-16 flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <div key={skill.id} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full">
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-2 opacity-80">• {skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}