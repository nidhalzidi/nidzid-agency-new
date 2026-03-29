'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, CheckCircle, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Contact() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  
  const [isSubmitting, setIsSubmitting] = useState<string | null>(null)
  const [submittedVia, setSubmittedVia] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    budget: '',
    message: '',
  })

  const industryLabels: Record<string, string> = {
    'islamic-finance': t('contact.industries.islamicFinance'),
    'halal-food': t('contact.industries.halalFood'),
    'modest-fashion': t('contact.industries.modestFashion'),
    'travel': t('contact.industries.travel'),
    'cosmetics': t('contact.industries.cosmetics'),
    'education': t('contact.industries.education'),
    'healthcare': t('contact.industries.healthcare'),
    'technology': t('contact.industries.technology'),
    'other': t('contact.industries.other'),
  }

  const budgetLabels: Record<string, string> = {
    'under-5k': t('contact.budgets.under5k'),
    '5k-15k': t('contact.budgets.5k-15k'),
    '15k-50k': t('contact.budgets.15k-50k'),
    '50k-plus': t('contact.budgets.50k-plus'),
  }

  const buildMessages = () => {
    const whatsappMessage = `🚀 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🏢 *Company:* ${formData.company}
🏭 *Industry:* ${industryLabels[formData.industry] || 'Not specified'}
💰 *Budget:* ${budgetLabels[formData.budget] || 'Not specified'}

📝 *Message:*
${formData.message}

---
Sent from NidZid Agency Website`

    const emailSubject = `New Inquiry from ${formData.name} - ${formData.company}`
    const emailBody = `New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Industry: ${industryLabels[formData.industry] || 'Not specified'}
Budget: ${budgetLabels[formData.budget] || 'Not specified'}

Message:
${formData.message}

---
Sent from NidZid Agency Website`

    return { whatsappMessage, emailSubject, emailBody }
  }

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting('whatsapp')

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'whatsapp' }),
      })

      const { whatsappMessage } = buildMessages()
      const whatsappUrl = `https://wa.me/971524505803?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')

      setSubmittedVia('whatsapp')
      setFormData({ name: '', email: '', company: '', industry: '', budget: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(null)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting('email')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'email' }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmittedVia('email')
        setFormData({ name: '', email: '', company: '', industry: '', budget: '', message: '' })
      } else {
        console.error('Error:', result.error)
        // Fallback to mailto if API fails
        const { emailSubject, emailBody } = buildMessages()
        window.open(`mailto:nidhalzidi@nidzid.site?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank')
        setSubmittedVia('email')
        setFormData({ name: '', email: '', company: '', industry: '', budget: '', message: '' })
      }
    } catch (error) {
      console.error('Error:', error)
      // Fallback to mailto on error
      const { emailSubject, emailBody } = buildMessages()
      window.open(`mailto:nidhalzidi@nidzid.site?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank')
      setSubmittedVia('email')
      setFormData({ name: '', email: '', company: '', industry: '', budget: '', message: '' })
    } finally {
      setIsSubmitting(null)
    }
  }

  // Direct email fallback - always works
  const handleDirectEmail = () => {
    const { emailSubject, emailBody } = buildMessages()
    window.open(`mailto:nidhalzidi@nidzid.site?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank')
  }

  const resetForm = () => {
    setSubmittedVia(null)
  }

  return (
    <section id="contact" className={`py-20 lg:py-28 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info */}
          <div className={isRTL ? 'text-right' : ''}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('contact.badge')}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.subtitle')}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <Card className="border border-gray-200 hover:border-[#D4AF37] transition-colors">
                <CardContent className={`p-4 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332]">{t('contact.email')}</div>
                    <a href="mailto:nidhalzidi@nidzid.site" className="text-gray-600 hover:text-[#D4AF37]">
                      nidhalzidi@nidzid.site
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-[#D4AF37] transition-colors">
                <CardContent className={`p-4 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332]">{t('contact.whatsapp')}</div>
                    <div className={`flex flex-col gap-1 ${isRTL ? 'items-end' : ''}`}>
                      <a 
                        href="https://wa.me/971524505803" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-gray-600 hover:text-[#D4AF37] text-sm flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        🇦🇪 +971 52 450 5803 ({t('contact.uaeBusiness')})
                      </a>
                      <a 
                        href="https://wa.me/21622607030" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-gray-600 hover:text-[#D4AF37] text-sm flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}
                      >
                        🇹🇳 +216 22 607 030 ({t('contact.tunisia')})
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-[#D4AF37] transition-colors">
                <CardContent className={`p-4 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332]">{t('contact.call')}</div>
                    <div className={`flex flex-col gap-1 ${isRTL ? 'items-end' : ''}`}>
                      <a href="tel:+971524505803" className="text-gray-600 hover:text-[#D4AF37] text-sm">
                        🇦🇪 +971 52 450 5803 (UAE)
                      </a>
                      <a href="tel:+21622607030" className="text-gray-600 hover:text-[#D4AF37] text-sm">
                        🇹🇳 +216 22 607 030 (Tunisia)
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-[#D4AF37] transition-colors">
                <CardContent className={`p-4 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332]">{t('contact.offices')}</div>
                    <div className="text-gray-600 text-sm">
                      <div>📍 Sousse, Tunisia</div>
                      <div>📍 Dubai, UAE</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:border-[#D4AF37] transition-colors">
                <CardContent className={`p-4 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332]">{t('contact.businessHours')}</div>
                    <div className="text-gray-600 text-sm">
                      {t('contact.businessHoursValue')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 p-4 bg-[#1B4332]/5 rounded-lg border border-[#1B4332]/10">
              <p className={`text-sm text-gray-600 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                {t('contact.trustBadge')}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="border border-gray-200 shadow-lg">
            <CardContent className="p-6 lg:p-8">
              {submittedVia ? (
                <div className="text-center py-12">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${submittedVia === 'whatsapp' ? 'bg-[#25D366]' : 'bg-[#1B4332]'}`}>
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B4332] mb-2">
                    {t('contact.form.thankYou')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {submittedVia === 'whatsapp' 
                      ? isRTL ? 'تم إرسال رسالتك عبر واتساب. سنتواصل معك خلال 24 ساعة!' : 'Your message has been sent via WhatsApp. We\'ll get back to you within 24 hours!'
                      : isRTL ? 'تم إرسال رسالتك عبر البريد الإلكتروني بنجاح! سنتواصل معك خلال 24 ساعة!' : 'Your email has been sent successfully! We\'ll get back to you within 24 hours!'}
                  </p>
                  <Button
                    onClick={resetForm}
                    variant="outline"
                    className="border-[#1B4332] text-[#1B4332]"
                  >
                    {t('contact.form.sendAnother')}
                  </Button>
                </div>
              ) : (
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.fullName')} *</Label>
                      <Input
                        id="name"
                        required
                        placeholder={isRTL ? 'اسمك' : 'Your name'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] ${isRTL ? 'text-right' : ''}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder={isRTL ? 'بريدك@الإلكتروني.com' : 'your@email.com'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] ${isRTL ? 'text-right' : ''}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.companyName')} *</Label>
                    <Input
                      id="company"
                      required
                      placeholder={isRTL ? 'اسم شركتك' : 'Your Company'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.industry')}</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      >
                        <SelectTrigger className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white ${isRTL ? 'text-right' : ''}`}>
                          <SelectValue placeholder={t('contact.form.selectIndustry')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="islamic-finance">{t('contact.industries.islamicFinance')}</SelectItem>
                          <SelectItem value="halal-food">{t('contact.industries.halalFood')}</SelectItem>
                          <SelectItem value="modest-fashion">{t('contact.industries.modestFashion')}</SelectItem>
                          <SelectItem value="travel">{t('contact.industries.travel')}</SelectItem>
                          <SelectItem value="cosmetics">{t('contact.industries.cosmetics')}</SelectItem>
                          <SelectItem value="education">{t('contact.industries.education')}</SelectItem>
                          <SelectItem value="healthcare">{t('contact.industries.healthcare')}</SelectItem>
                          <SelectItem value="technology">{t('contact.industries.technology')}</SelectItem>
                          <SelectItem value="other">{t('contact.industries.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.budget')}</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white ${isRTL ? 'text-right' : ''}`}>
                          <SelectValue placeholder={t('contact.form.selectBudget')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 shadow-lg">
                          <SelectItem value="under-5k">{t('contact.budgets.under5k')}</SelectItem>
                          <SelectItem value="5k-15k">{t('contact.budgets.5k-15k')}</SelectItem>
                          <SelectItem value="15k-50k">{t('contact.budgets.15k-50k')}</SelectItem>
                          <SelectItem value="50k-plus">{t('contact.budgets.50k-plus')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={`text-[#1B4332] ${isRTL ? 'block text-right' : ''}`}>{t('contact.form.message')} *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  {/* Two Separate Buttons */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      disabled={isSubmitting !== null}
                      className={`bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-6 text-lg flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {isSubmitting === 'whatsapp' ? (
                        isRTL ? 'جاري الإرسال...' : 'Sending...'
                      ) : (
                        <>
                          <MessageCircle className="h-5 w-5" />
                          {isRTL ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                        </>
                      )}
                    </Button>

                    <Button
                      type="button"
                      onClick={handleEmailSubmit}
                      disabled={isSubmitting !== null}
                      className={`bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold py-6 text-lg flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {isSubmitting === 'email' ? (
                        isRTL ? 'جاري الفتح...' : 'Opening...'
                      ) : (
                        <>
                          <Mail className="h-5 w-5" />
                          {isRTL ? 'إرسال عبر البريد' : 'Send via Email'}
                        </>
                      )}
                    </Button>
                  </div>

                  <p className={`text-xs text-center text-gray-500 ${isRTL ? 'direction-rtl' : ''}`}>
                    {t('contact.form.privacyAgree')}{' '}
                    <a href="/privacy" className="text-[#D4AF37] hover:underline">{t('contact.form.privacyPolicy')}</a>{' '}
                    {t('contact.form.and')}{' '}
                    <a href="/terms" className="text-[#D4AF37] hover:underline">{t('contact.form.termsOfService')}</a>.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
