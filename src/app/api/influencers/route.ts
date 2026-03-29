import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const influencers = await prisma.influencer.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ influencers })
  } catch (error) {
    console.error('Get influencers error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const influencer = await prisma.influencer.create({
      data: {
        name: data.name,
        platform: data.platform || 'Instagram',
        handle: data.handle || '',
        followers: data.followers ? parseInt(data.followers) : null,
        niche: data.niche || null,
        country: data.country || null,
        language: data.language || null,
        engagementRate: data.engagementRate ? parseFloat(data.engagementRate) : null,
        email: data.email || null,
        phone: data.phone || null,
        notes: data.notes || null,
        rating: data.rating ? parseInt(data.rating) : null,
        status: data.status || 'to_research',
      },
    })
    
    return NextResponse.json({ success: true, influencer })
  } catch (error) {
    console.error('Create influencer error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
