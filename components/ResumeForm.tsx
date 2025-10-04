'use client'

import { useState } from 'react'
import { ResumeData, Experience, Education, Skill, Project } from '@/types/resume'
import { Plus, Trash2, User, Briefcase, GraduationCap, Code, FolderOpen } from 'lucide-react'

interface ResumeFormProps {
  resumeData: ResumeData
  onDataChange: (data: ResumeData) => void
}

export default function ResumeForm({ resumeData, onDataChange }: ResumeFormProps) {
  const [activeSection, setActiveSection] = useState('personal')

  const updatePersonalInfo = (field: string, value: string) => {
    onDataChange({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value }
    })
  }

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
    onDataChange({
      ...resumeData,
      experience: [...resumeData.experience, newExp]
    })
  }

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    onDataChange({
      ...resumeData,
      experience: resumeData.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    })
  }

  const removeExperience = (id: string) => {
    onDataChange({
      ...resumeData,
      experience: resumeData.experience.filter(exp => exp.id !== id)
    })
  }

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    }
    onDataChange({
      ...resumeData,
      education: [...resumeData.education, newEdu]
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      education: resumeData.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    })
  }

  const removeEducation = (id: string) => {
    onDataChange({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id)
    })
  }

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate'
    }
    onDataChange({
      ...resumeData,
      skills: [...resumeData.skills, newSkill]
    })
  }

  const updateSkill = (id: string, field: string, value: string) => {
    onDataChange({
      ...resumeData,
      skills: resumeData.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    })
  }

  const removeSkill = (id: string) => {
    onDataChange({
      ...resumeData,
      skills: resumeData.skills.filter(skill => skill.id !== id)
    })
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      url: '',
      github: ''
    }
    onDataChange({
      ...resumeData,
      projects: [...resumeData.projects, newProject]
    })
  }

  const updateProject = (id: string, field: string, value: string | string[]) => {
    onDataChange({
      ...resumeData,
      projects: resumeData.projects.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    })
  }

  const removeProject = (id: string) => {
    onDataChange({
      ...resumeData,
      projects: resumeData.projects.filter(project => project.id !== id)
    })
  }

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'skills', name: 'Skills', icon: Code },
    { id: 'projects', name: 'Projects', icon: FolderOpen }
  ]

  return (
    <div>
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-600'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-transparent'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{section.name}</span>
            </button>
          )
        })}
      </div>

      {/* Personal Information */}
      {activeSection === 'personal' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={resumeData.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              value={resumeData.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="input-field"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={resumeData.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Location"
              value={resumeData.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
              className="input-field"
            />
            <input
              type="url"
              placeholder="Website (optional)"
              value={resumeData.personalInfo.website}
              onChange={(e) => updatePersonalInfo('website', e.target.value)}
              className="input-field"
            />
            <input
              type="url"
              placeholder="LinkedIn (optional)"
              value={resumeData.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
              className="input-field"
            />
          </div>
          <textarea
            placeholder="Professional Summary"
            value={resumeData.personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            rows={4}
            className="input-field"
          />
        </div>
      )}

      {/* Experience */}
      {activeSection === 'experience' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Work Experience</h3>
            <button onClick={addExperience} className="btn-primary">
              <Plus className="h-4 w-4 inline mr-1" />
              Add Experience
            </button>
          </div>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="resume-section">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Experience Entry</h4>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="btn-danger"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  className="input-field"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  className="input-field"
                />
                <div className="flex flex-col space-y-2">
                  <input
                    type="month"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    className="input-field"
                    disabled={exp.current}
                  />
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-gray-700 dark:text-gray-300">Currently working here</span>
                  </label>
                </div>
              </div>
              <textarea
                placeholder="Job description and achievements"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                rows={3}
                className="input-field"
              />
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {activeSection === 'education' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
            <button onClick={addEducation} className="btn-primary">
              <Plus className="h-4 w-4 inline mr-1" />
              Add Education
            </button>
          </div>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="resume-section">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Education Entry</h4>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="btn-danger"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="GPA (optional)"
                  value={edu.gpa}
                  onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                  className="input-field"
                />
                <input
                  type="month"
                  placeholder="Start Date"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  className="input-field"
                />
                <input
                  type="month"
                  placeholder="End Date"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {activeSection === 'skills' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
            <button onClick={addSkill} className="btn-primary">
              <Plus className="h-4 w-4 inline mr-1" />
              Add Skill
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                <input
                  type="text"
                  placeholder="Skill name"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  className="flex-1 input-field"
                />
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                  className="input-field w-32"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <button
                  onClick={() => removeSkill(skill.id)}
                  className="btn-danger"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {activeSection === 'projects' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h3>
            <button onClick={addProject} className="btn-primary">
              <Plus className="h-4 w-4 inline mr-1" />
              Add Project
            </button>
          </div>
          {resumeData.projects.map((project) => (
            <div key={project.id} className="resume-section">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Project Entry</h4>
                <button
                  onClick={() => removeProject(project.id)}
                  className="btn-danger"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                  className="input-field"
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  rows={3}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Technologies (comma-separated)"
                  value={project.technologies.join(', ')}
                  onChange={(e) => updateProject(project.id, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                  className="input-field"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="url"
                    placeholder="Project URL (optional)"
                    value={project.url}
                    onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                    className="input-field"
                  />
                  <input
                    type="url"
                    placeholder="GitHub URL (optional)"
                    value={project.github}
                    onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}