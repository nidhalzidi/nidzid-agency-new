'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Megaphone, Target, PenTool, TrendingUp, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Services() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const services = [
    {
      icon: Megaphone,
      titleKey: 'services.influencerMarketing.title',
      descriptionKey: 'services.influencerMarketing.description',
      featuresKeys: ['services.features.influencerSourcing', 'services.features.campaignManagement', 'services.features.performanceTracking'],
    },
    {
      icon: Target,
      titleKey: 'services.paidAdvertising.title',
      descriptionKey: 'services.paidAdvertising.description',
      featuresKeys: ['services.features.halalAdPlacement', 'services.features.audienceTargeting', 'services.features.roiOptimization'],
    },
    {
      icon: PenTool,
      titleKey: 'services.contentMarketing.title',
      descriptionKey: 'services.contentMarketing.description',
      featuresKeys: ['services.features.contentStrategy', 'services.features.creativeProduction', 'services.features.communityManagement'],
    },
    {
      icon: TrendingUp,
      titleKey: 'services.brandStrategy.title',
      descriptionKey: 'services.brandStrategy.description',
      featuresKeys: ['services.features.marketResearch', 'services.features.brandPositioning', 'services.features.growthPlanning'],
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
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {t(service.descriptionKey)}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.featuresKeys.map((featureKey, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse justify-start' : ''}`}
                    >
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                      {t(featureKey)}
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
