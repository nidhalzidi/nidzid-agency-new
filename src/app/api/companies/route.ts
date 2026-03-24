import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { campaigns: true },
        },
      },
    })
    return NextResponse.json({ companies })
  } catch (error) {
    console.error('Get companies error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const company = await prisma.company.create({
      data: {
        name: data.name,
        industry: data.industry || 'General',
        country: data.country || 'Unknown',
        website: data.website || null,
        linkedin: data.linkedin || null,
        contactEmail: data.contactEmail || null,
        decisionMaker: data.decisionMaker || null,
        decisionMakerLinkedin: data.decisionMakerLinkedin || null,
        priority: data.priority || 'medium',
        status: data.status || 'to_contact',
        notes: data.notes || null,
      },
    })
    
    return NextResponse.json({ success: true, company })
  } catch (error) {
    console.error('Create company error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
