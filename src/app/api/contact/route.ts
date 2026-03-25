import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, industry, budget, message, source } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const industryLabels: Record<string, string> = {
      'islamic-finance': 'Islamic Finance',
      'halal-food': 'Halal Food',
      'modest-fashion': 'Modest Fashion',
      'travel': 'Travel',
      'cosmetics': 'Cosmetics',
      'education': 'Education',
      'healthcare': 'Healthcare',
      'technology': 'Technology',
      'other': 'Other',
    }

    const budgetLabels: Record<string, string> = {
      'under-5k': 'Under $5,000',
      '5k-15k': '$5,000 - $15,000',
      '15k-50k': '$15,000 - $50,000',
      '50k-plus': '$50,000+',
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1B4332; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #D4AF37; margin: 0; font-size: 24px;">NidZid Agency</h1>
          <p style="color: white; margin: 5px 0 0;">New Contact Form Submission</p>
        </div>
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666; width: 40%;"><strong>Name:</strong></td>
              <td style="padding: 12px 0; color: #1B4332; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #1B4332;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 12px 0;">${company || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666;"><strong>Industry:</strong></td>
              <td style="padding: 12px 0;">${industryLabels[industry] || industry || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666;"><strong>Budget:</strong></td>
              <td style="padding: 12px 0;">${budgetLabels[budget] || budget || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 12px 0; color: #666;"><strong>Via:</strong></td>
              <td style="padding: 12px 0;">${source === 'whatsapp' ? 'WhatsApp' : 'Email'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #666; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #1B4332; border-radius: 6px;">
            <p style="color: #D4AF37; margin: 0; font-size: 14px;">
              Reply to: <a href="mailto:${email}" style="color: white;">${email}</a>
            </p>
          </div>
        </div>
        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
          Sent from nidzid.site contact form
        </p>
      </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: 'NidZid Agency <contact@nidzid.site>',
      to: ['zidinidhal7@gmail.com'],
      reply_to: email,
      subject: `New inquiry from ${name} - ${company || 'NidZid Agency Website'}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Email sent:', data?.id)
    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Contact API is running' })
}
