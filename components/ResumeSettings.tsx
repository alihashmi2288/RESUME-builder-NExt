'use client'

import { ResumeSettings } from '@/types/resume'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ResumeSettingsProps {
  settings: ResumeSettings
  onSettingsChange: (settings: ResumeSettings) => void
}

export default function ResumeSettingsComponent({ settings, onSettingsChange }: ResumeSettingsProps) {
  const updateSettings = (field: string, value: any) => {
    onSettingsChange({ ...settings, [field]: value })
  }

  const updateColors = (field: string, value: string) => {
    onSettingsChange({
      ...settings,
      colors: { ...settings.colors, [field]: value }
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Color
            </label>
            <input
              type="color"
              value={settings.colors.primary}
              onChange={(e) => updateColors('primary', e.target.value)}
              className="w-full h-10 rounded border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Color
            </label>
            <input
              type="color"
              value={settings.colors.secondary}
              onChange={(e) => updateColors('secondary', e.target.value)}
              className="w-full h-10 rounded border border-gray-300"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Family
            </label>
            <select
              value={settings.fonts.body}
              onChange={(e) => onSettingsChange({
                ...settings,
                fonts: { heading: e.target.value, body: e.target.value }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Inter">Inter</option>
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spacing
            </label>
            <select
              value={settings.spacing}
              onChange={(e) => updateSettings('spacing', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="compact">Compact</option>
              <option value="normal">Normal</option>
              <option value="relaxed">Relaxed</option>
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}