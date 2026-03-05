'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function FAQ() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      questionKey: 'faq.q1',
      answerKey: 'faq.a1',
    },
    {
      questionKey: 'faq.q2',
      answerKey: 'faq.a2',
    },
    {
      questionKey: 'faq.q3',
      answerKey: 'faq.a3',
    },
    {
      questionKey: 'faq.q4',
      answerKey: 'faq.a4',
    },
    {
      questionKey: 'faq.q5',
      answerKey: 'faq.a5',
    },
    {
      questionKey: 'faq.q6',
      answerKey: 'faq.a6',
    },
    {
      questionKey: 'faq.q7',
      answerKey: 'faq.a7',
    },
    {
      questionKey: 'faq.q8',
      answerKey: 'faq.a8',
    },
  ]

  return (
    <section className={`py-20 lg:py-28 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            {t('faq.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#D4AF37] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left ${isRTL ? 'flex-row-reverse text-right' : ''}`}
              >
                <span className="font-semibold text-[#1B4332] pr-4">
                  {t(faq.questionKey)}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-[#D4AF37] transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className={`px-6 pb-5 ${isRTL ? 'text-right' : ''}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {t(faq.answerKey)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {isRTL ? 'لا تزال لديك أسئلة؟ نحن هنا للمساعدة!' : "Still have questions? We're here to help!"}
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isRTL ? 'تواصل مع فريقنا' : 'Contact Our Team'}
          </a>
        </div>
      </div>
    </section>
  )
}
