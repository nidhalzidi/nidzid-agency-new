'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Testimonials() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      nameKey: 'testimonials.items.0.name',
      roleKey: 'testimonials.items.0.role',
      companyKey: 'testimonials.items.0.company',
      locationKey: 'testimonials.items.0.location',
      image: '👨‍💼',
      rating: 5,
      textKey: 'testimonials.items.0.text',
    },
    {
      nameKey: 'testimonials.items.1.name',
      roleKey: 'testimonials.items.1.role',
      companyKey: 'testimonials.items.1.company',
      locationKey: 'testimonials.items.1.location',
      image: '👩‍💼',
      rating: 5,
      textKey: 'testimonials.items.1.text',
    },
    {
      nameKey: 'testimonials.items.2.name',
      roleKey: 'testimonials.items.2.role',
      companyKey: 'testimonials.items.2.company',
      locationKey: 'testimonials.items.2.location',
      image: '👨‍💼',
      rating: 5,
      textKey: 'testimonials.items.2.text',
    },
    {
      nameKey: 'testimonials.items.3.name',
      roleKey: 'testimonials.items.3.role',
      companyKey: 'testimonials.items.3.company',
      locationKey: 'testimonials.items.3.location',
      image: '👩‍💼',
      rating: 5,
      textKey: 'testimonials.items.3.text',
    },
    {
      nameKey: 'testimonials.items.4.name',
      roleKey: 'testimonials.items.4.role',
      companyKey: 'testimonials.items.4.company',
      locationKey: 'testimonials.items.4.location',
      image: '👨‍💼',
      rating: 5,
      textKey: 'testimonials.items.4.text',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className={`py-20 lg:py-28 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-[#D4AF37]/20 bg-gradient-to-br from-[#1B4332]/5 to-transparent">
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6 ${isRTL ? 'ml-auto' : ''}`}>
                <Quote className="h-6 w-6 text-[#1B4332]" />
              </div>

              {/* Rating */}
              <div className={`flex gap-1 mb-6 ${isRTL ? 'justify-end' : ''}`}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                "{t(testimonials[currentIndex].textKey)}"
              </p>

              {/* Author Info */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-start' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-[#1B4332] flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <div className="font-bold text-[#1B4332] text-lg">
                    {t(testimonials[currentIndex].nameKey)}
                  </div>
                  <div className="text-gray-600">
                    {t(testimonials[currentIndex].roleKey)} {t('testimonials.at')} {t(testimonials[currentIndex].companyKey)}
                  </div>
                  <div className="text-sm text-gray-500">
                    📍 {t(testimonials[currentIndex].locationKey)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={isRTL ? nextTestimonial : prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#D4AF37] w-6'
                      : 'bg-gray-300 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
