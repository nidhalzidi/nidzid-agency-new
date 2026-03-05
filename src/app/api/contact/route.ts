import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Company email where notifications will be sent
const COMPANY_EMAIL = 'nidhalzidi@nidzid.site'

interface ContactFormData {
  name: string
  email: string
  company?: string
  industry?: string
  budget?: string
  message: string
  source?: 'whatsapp' | 'email'
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company || null,
        industry: data.industry || null,
        budget: data.budget || null,
        message: data.message,
        status: 'new',
      },
    })

    console.log('New contact form submission saved:', contact.id)

    // Industry labels
    const industryLabels: Record<string, string> = {
      'islamic-finance': 'Islamic Finance',
      'halal-food': 'Halal Food & Beverage',
      'modest-fashion': 'Modest Fashion',
      'travel': 'Muslim Travel & Tourism',
      'cosmetics': 'Halal Cosmetics',
      'education': 'Islamic Education',
      'healthcare': 'Halal Healthcare',
      'technology': 'Islamic FinTech',
      'other': 'Other',
    }

    const budgetLabels: Record<string, string> = {
      'under-5k': 'Under $5,000',
      '5k-15k': '$5,000 - $15,000',
      '15k-50k': '$15,000 - $50,000',
      '50k-plus': '$50,000+',
    }

    // Send email using FormSubmit.co (FREE, no API key needed!)
    try {
      const formData = new URLSearchParams()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('subject', `New Inquiry from ${data.name}${data.company ? ` - ${data.company}` : ''}`)
      formData.append('message', `
New Contact Form Submission from NidZid Agency Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${data.name}
📧 Email: ${data.email}
🏢 Company: ${data.company || 'Not specified'}
🏭 Industry: ${data.industry ? (industryLabels[data.industry] || data.industry) : 'Not specified'}
💰 Budget: ${data.budget ? (budgetLabels[data.budget] || data.budget) : 'Not specified'}
📱 Source: ${data.source || 'website'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Message:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submission ID: ${contact.id}
Received: ${new Date().toLocaleString()}

Reply to this lead: ${data.email}
WhatsApp UAE: https://wa.me/971524505803
WhatsApp Tunisia: https://wa.me/21622607030

---
NidZid Agency - 100% Halal Influencer Marketing
https://nidzid-halal-agency.vercel.app
      `)
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      formData.append('_next', 'https://nidzid-halal-agency.vercel.app')

      const emailResponse = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })

      if (emailResponse.ok) {
        console.log('Email sent successfully via FormSubmit!')
        
        // Also send confirmation to user
        const userFormData = new URLSearchParams()
        userFormData.append('name', data.name)
        userFormData.append('email', COMPANY_EMAIL)
        userFormData.append('subject', 'Thank you for contacting NidZid Agency!')
        userFormData.append('message', `
Dear ${data.name},

Thank you for reaching out to NidZid Agency! 🌟

We have received your message and our team will review your inquiry and get back to you within 24 hours.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your Message Summary:
${data.message.substring(0, 300)}${data.message.length > 300 ? '...' : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In the meantime, feel free to connect with us:
📱 WhatsApp UAE: +971 52 450 5803
📱 WhatsApp Tunisia: +216 22 607 030
📧 Email: nidhalzidi@nidzid.site

---
NidZid Agency
100% Halal & Shariah-Compliant Marketing
https://nidzid-halal-agency.vercel.app
        `)
        userFormData.append('_template', 'plain')
        userFormData.append('_captcha', 'false')
        
        await fetch(`https://formsubmit.co/ajax/${data.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: userFormData.toString(),
        })
        
        console.log('Confirmation email sent to user!')
      } else {
        console.log('FormSubmit response:', await emailResponse.text())
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Continue - contact is saved in database
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting NidZid Agency! We will get back to you within 24 hours.',
        contactId: contact.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ contacts })
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
