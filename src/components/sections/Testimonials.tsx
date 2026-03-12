'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Testimonials() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      company: t('testimonials.items.0.company'),
      location: t('testimonials.items.0.location'),
      image: '👨‍💼',
      text: t('testimonials.items.0.text'),
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
      location: t('testimonials.items.1.location'),
      image: '👩‍💼',
      text: t('testimonials.items.1.text'),
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
      location: t('testimonials.items.2.location'),
      image: '👨‍💼',
      text: t('testimonials.items.2.text'),
    },
  ]

  return (
    <section className={`py-16 lg:py-20 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1B4332] mb-3">
            {t('testimonials.title')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Quote className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className={`flex items-center gap-3 pt-4 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center text-lg">
                    {testimonial.image}
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#1B4332] text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
