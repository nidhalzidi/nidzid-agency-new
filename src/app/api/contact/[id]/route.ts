import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()
    
    const contact = await prisma.contact.update({
      where: { id },
      data: { 
        status: data.status,
        updatedAt: new Date(),
      },
    })
    
    return NextResponse.json({ success: true, contact })
  } catch (error) {
    console.error('Update contact error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.contact.delete({
      where: { id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete contact error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const contact = await prisma.contact.findUnique({
      where: { id },
    })
    
    if (!contact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ contact })
  } catch (error) {
    console.error('Get contact error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
