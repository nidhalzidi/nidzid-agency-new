'use client'

import { useLanguage } from '@/lib/i18n/context'

export default function Industries() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const industries = [
    {
      icon: '🏦',
      titleKey: 'industries.items.islamicFinance.title',
      descriptionKey: 'industries.items.islamicFinance.description',
    },
    {
      icon: '🍖',
      titleKey: 'industries.items.halalFood.title',
      descriptionKey: 'industries.items.halalFood.description',
    },
    {
      icon: '👗',
      titleKey: 'industries.items.modestFashion.title',
      descriptionKey: 'industries.items.modestFashion.description',
    },
    {
      icon: '✈️',
      titleKey: 'industries.items.muslimTravel.title',
      descriptionKey: 'industries.items.muslimTravel.description',
    },
    {
      icon: '💄',
      titleKey: 'industries.items.halalCosmetics.title',
      descriptionKey: 'industries.items.halalCosmetics.description',
    },
    {
      icon: '📚',
      titleKey: 'industries.items.islamicEducation.title',
      descriptionKey: 'industries.items.islamicEducation.description',
    },
  ]

  return (
    <section id="industries" className={`py-16 lg:py-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            {t('industries.badge')}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1B4332] mb-3">
            {t('industries.title')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 bg-white ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="text-4xl">{industry.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1B4332] mb-2">
                    {t(industry.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(industry.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Stats */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-5 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-xl">
            <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-1">$2T+</div>
            <div className="text-xs text-gray-300">{t('industries.marketStats.globalMarket')}</div>
          </div>
          <div className="text-center p-5 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-xl">
            <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-1">2B+</div>
            <div className="text-xs text-gray-300">{t('industries.marketStats.muslimConsumers')}</div>
          </div>
          <div className="text-center p-5 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-xl">
            <div className="text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-1">11%</div>
            <div className="text-xs text-gray-300">{t('industries.marketStats.annualGrowth')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
