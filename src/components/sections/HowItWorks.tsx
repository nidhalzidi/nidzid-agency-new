'use client'

import Link from 'next/link'
import { MessageSquare, Search, Users, BarChart, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function HowItWorks() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      titleKey: 'howItWorks.step1.title',
      descKey: 'howItWorks.step1.description',
      durationKey: 'howItWorks.step1.duration',
    },
    {
      number: '02',
      icon: Search,
      titleKey: 'howItWorks.step2.title',
      descKey: 'howItWorks.step2.description',
      durationKey: 'howItWorks.step2.duration',
    },
    {
      number: '03',
      icon: Users,
      titleKey: 'howItWorks.step3.title',
      descKey: 'howItWorks.step3.description',
      durationKey: 'howItWorks.step3.duration',
    },
    {
      number: '04',
      icon: BarChart,
      titleKey: 'howItWorks.step4.title',
      descKey: 'howItWorks.step4.description',
      durationKey: 'howItWorks.step4.duration',
    },
  ]

  return (
    <section id="how-it-works" className={`py-16 lg:py-20 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('howItWorks.badge')}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1B4332] mb-3">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
            >
              {/* Step Number & Duration */}
              <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-3xl font-bold text-[#D4AF37]/20">{step.number}</span>
                <span className="text-xs px-2 py-1 bg-[#1B4332]/10 text-[#1B4332] rounded-full font-medium">
                  {t(step.durationKey)}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1B4332] mb-2">
                {t(step.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-xl transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('howItWorks.cta.button')}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  )
}
