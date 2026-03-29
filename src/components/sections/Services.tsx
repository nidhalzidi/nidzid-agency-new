'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Megaphone, Target, PenTool, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Services() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const services = [
    {
      icon: Megaphone,
      title: t('services.influencerMarketing.title'),
      description: t('services.influencerMarketing.description'),
      features: [
        t('services.features.influencerSourcing'),
        t('services.features.campaignManagement'),
        t('services.features.performanceTracking')
      ],
    },
    {
      icon: Target,
      title: t('services.paidAdvertising.title'),
      description: t('services.paidAdvertising.description'),
      features: [
        t('services.features.halalAdPlacement'),
        t('services.features.audienceTargeting'),
        t('services.features.roiOptimization')
      ],
    },
    {
      icon: PenTool,
      title: t('services.contentMarketing.title'),
      description: t('services.contentMarketing.description'),
      features: [
        t('services.features.contentStrategy'),
        t('services.features.creativeProduction'),
        t('services.features.communityManagement')
      ],
    },
    {
      icon: TrendingUp,
      title: t('services.brandStrategy.title'),
      description: t('services.brandStrategy.description'),
      features: [
        t('services.features.marketResearch'),
        t('services.features.brandPositioning'),
        t('services.features.growthPlanning')
      ],
    },
  ]

  return (
    <section id="services" className={`py-20 lg:py-28 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('services.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-gray-100 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardContent className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-[#1B4332] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300 ${isRTL ? 'ml-auto' : ''}`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B4332] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse justify-start' : ''}`}
                    >
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
