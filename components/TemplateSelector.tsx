'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateChange: (template: string) => void
}

const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean and professional' },
  { id: 'professional', name: 'Professional', description: 'Sophisticated gradient design' },
  { id: 'executive', name: 'Executive', description: 'Bold and sophisticated' },
  { id: 'creative', name: 'Creative', description: 'Colorful and unique' },
  { id: 'elegant', name: 'Elegant', description: 'Two-column sidebar layout' },
  { id: 'tech', name: 'Tech', description: 'Dark theme for developers' },
  { id: 'minimal', name: 'Minimal', description: 'Simple and clean' },
  { id: 'classic', name: 'Classic', description: 'Traditional format' },
  { id: 'compact', name: 'Compact', description: 'Space-efficient design' },
]

export default function TemplateSelector({ selectedTemplate, onTemplateChange }: TemplateSelectorProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Choose Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedTemplate === template.id 
                ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">{template.name}</h4>
                {selectedTemplate === template.id && (
                  <Check className="h-5 w-5 text-blue-600" />
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{template.description}</p>
              <div className="mt-3 h-20 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded overflow-hidden relative group shadow-sm cursor-pointer" onClick={() => window.location.href = `/preview/${template.id}`}>
                {template.id === 'modern' && (
                  <div className="w-full h-full bg-white">
                    <div className="h-3 bg-blue-500 border-b-2 border-blue-600"></div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[4px] font-bold text-blue-600">SARAH JOHNSON</div>
                      <div className="text-[3px] text-gray-600">Product Manager</div>
                      <div className="flex space-x-1 text-[2px] text-gray-500">
                        <span>📧</span><span>📞</span><span>📍</span>
                      </div>
                      <div className="space-y-0.5 mt-1">
                        <div className="text-[3px] font-semibold text-blue-600">EXPERIENCE</div>
                        <div className="h-0.5 bg-gray-200 w-full"></div>
                        <div className="h-0.5 bg-gray-200 w-3/4"></div>
                      </div>
                    </div>
                  </div>
                )}
                {template.id === 'professional' && (
                  <div className="w-full h-full bg-white">
                    <div className="h-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-0.5">
                      <div className="text-[4px] font-bold">SARAH JOHNSON</div>
                      <div className="text-[2px]">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="flex items-center space-x-0.5">
                        <div className="w-2 h-0.5 bg-indigo-600"></div>
                        <div className="text-[3px] font-semibold text-indigo-600">EXPERIENCE</div>
                      </div>
                      <div className="h-0.5 bg-gray-200 w-full"></div>
                      <div className="h-0.5 bg-gray-200 w-4/5"></div>
                    </div>
                  </div>
                )}
                {template.id === 'executive' && (
                  <div className="w-full h-full bg-white">
                    <div className="h-4 bg-gray-900 text-white p-0.5">
                      <div className="text-[4px] font-bold">SARAH JOHNSON</div>
                      <div className="text-[2px] text-gray-300">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[3px] font-bold text-gray-900 uppercase tracking-wide">EXPERIENCE</div>
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <div className="h-0.5 bg-gray-300 w-3/4"></div>
                      <div className="h-0.5 bg-gray-300 w-4/5"></div>
                    </div>
                  </div>
                )}
                {template.id === 'creative' && (
                  <div className="w-full h-full bg-white">
                    <div className="h-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-0.5 relative">
                      <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20 rounded-full"></div>
                      <div className="text-[4px] font-bold">SARAH JOHNSON</div>
                      <div className="text-[2px]">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[3px] font-bold text-orange-600">ABOUT ME</div>
                      <div className="h-0.5 bg-gray-200 w-full"></div>
                      <div className="h-0.5 bg-gray-200 w-2/3"></div>
                    </div>
                  </div>
                )}
                {template.id === 'elegant' && (
                  <div className="w-full h-full bg-white flex">
                    <div className="w-1/3 bg-gray-800 p-0.5">
                      <div className="text-[3px] font-bold text-white">SARAH</div>
                      <div className="text-[3px] font-bold text-white">JOHNSON</div>
                      <div className="text-[2px] text-gray-300 mt-0.5">CONTACT</div>
                      <div className="space-y-0.5 mt-0.5">
                        <div className="h-0.5 bg-gray-600 w-full"></div>
                        <div className="h-0.5 bg-gray-600 w-3/4"></div>
                      </div>
                    </div>
                    <div className="w-2/3 p-0.5">
                      <div className="text-[3px] font-semibold text-gray-800 border-b border-blue-500 pb-0.5">PROFILE</div>
                      <div className="space-y-0.5 mt-0.5">
                        <div className="h-0.5 bg-gray-200 w-full"></div>
                        <div className="h-0.5 bg-gray-200 w-4/5"></div>
                      </div>
                    </div>
                  </div>
                )}
                {template.id === 'tech' && (
                  <div className="w-full h-full bg-gray-900">
                    <div className="h-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-0.5">
                      <div className="text-[4px] font-bold">SARAH JOHNSON</div>
                      <div className="text-[2px] text-cyan-100">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[3px] font-semibold text-cyan-400">ABOUT</div>
                      <div className="h-0.5 bg-gray-700 w-full"></div>
                      <div className="h-0.5 bg-gray-700 w-3/4"></div>
                      <div className="h-0.5 bg-gray-700 w-4/5"></div>
                    </div>
                  </div>
                )}
                {template.id === 'minimal' && (
                  <div className="w-full h-full bg-white">
                    <div className="p-1 border-b border-gray-200">
                      <div className="text-[4px] font-light text-gray-900">SARAH JOHNSON</div>
                      <div className="text-[2px] text-gray-600 font-light">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[3px] font-light text-gray-900 border-b border-gray-200 pb-0.5">Experience</div>
                      <div className="h-0.5 bg-gray-200 w-full"></div>
                      <div className="h-0.5 bg-gray-200 w-2/3"></div>
                    </div>
                  </div>
                )}
                {template.id === 'classic' && (
                  <div className="w-full h-full bg-white">
                    <div className="text-center border-b-2 border-gray-800 pb-1 p-0.5">
                      <div className="text-[4px] font-bold text-gray-900">SARAH JOHNSON</div>
                      <div className="text-[2px] text-gray-700">Product Manager</div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="text-[3px] font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300">EXPERIENCE</div>
                      <div className="h-0.5 bg-gray-200 w-full"></div>
                      <div className="h-0.5 bg-gray-200 w-3/4"></div>
                    </div>
                  </div>
                )}
                {template.id === 'compact' && (
                  <div className="w-full h-full bg-white">
                    <div className="bg-green-50 border-l-2 border-green-500 p-0.5">
                      <div className="text-[4px] font-bold text-gray-900">SARAH JOHNSON</div>
                      <div className="text-[2px] text-green-600 font-medium">Product Manager</div>
                    </div>
                    <div className="p-1 grid grid-cols-2 gap-0.5">
                      <div>
                        <div className="text-[2px] font-semibold text-green-600 uppercase">EXPERIENCE</div>
                        <div className="h-0.5 bg-gray-200 w-full"></div>
                      </div>
                      <div>
                        <div className="text-[2px] font-semibold text-green-600 uppercase">SKILLS</div>
                        <div className="h-0.5 bg-green-100 w-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                  <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 px-2 py-1 rounded font-medium">
                    Preview
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}