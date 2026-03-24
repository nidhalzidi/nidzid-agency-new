import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, industry, budget, message, source } = body

    // Log the contact submission (always succeeds)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      industry,
      budget,
      message,
      source,
      timestamp: new Date().toISOString(),
    })

    // Return success - the Contact component will handle WhatsApp/email based on source
    return NextResponse.json({ 
      success: true, 
      message: 'Contact form received successfully' 
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Contact API is running' })
}
