import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const createResumeSchema = z.object({
  title: z.string().min(1),
  template: z.string().default('modern'),
  data: z.object({}).optional(),
  settings: z.object({}).optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const resumes = await prisma.resume.findMany({
      where: { userId: session.user.id },
      select: {
        id: true,
        title: true,
        template: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: 'desc' },
    })

    const formattedResumes = resumes.map(resume => ({
      ...resume,
      data: JSON.parse(resume.data),
      settings: JSON.parse(resume.settings)
    }))
    
    return NextResponse.json(formattedResumes)
  } catch (error) {
    console.error('Failed to fetch resumes:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, template, data, settings } = createResumeSchema.parse(body)

    const resume = await prisma.resume.create({
      data: {
        title,
        template,
        data: JSON.stringify(data || {}),
        settings: JSON.stringify(settings || {}),
        userId: session.user.id,
      },
    })

    return NextResponse.json(resume)
  } catch (error) {
    console.error('Failed to create resume:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}