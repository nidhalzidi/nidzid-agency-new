'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n/context'

export default function Industries() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const industries = [
    {
      icon: '🏦',
      titleKey: 'industries.items.islamicFinance.title',
      descriptionKey: 'industries.items.islamicFinance.description',
      examplesKeys: ['industries.examples.islamicBanks', 'industries.examples.takaful', 'industries.examples.halalInvestments'],
    },
    {
      icon: '🍖',
      titleKey: 'industries.items.halalFood.title',
      descriptionKey: 'industries.items.halalFood.description',
      examplesKeys: ['industries.examples.halalRestaurants', 'industries.examples.foodProducts', 'industries.examples.mealDelivery'],
    },
    {
      icon: '👗',
      titleKey: 'industries.items.modestFashion.title',
      descriptionKey: 'industries.items.modestFashion.description',
      examplesKeys: ['industries.examples.hijabBrands', 'industries.examples.modestWear', 'industries.examples.islamicFashion'],
    },
    {
      icon: '✈️',
      titleKey: 'industries.items.muslimTravel.title',
      descriptionKey: 'industries.items.muslimTravel.description',
      examplesKeys: ['industries.examples.halalTourism', 'industries.examples.muslimFriendlyHotels', 'industries.examples.umrahPackages'],
    },
    {
      icon: '💄',
      titleKey: 'industries.items.halalCosmetics.title',
      descriptionKey: 'industries.items.halalCosmetics.description',
      examplesKeys: ['industries.examples.halalMakeup', 'industries.examples.wudhuFriendly', 'industries.examples.naturalBeauty'],
    },
    {
      icon: '📚',
      titleKey: 'industries.items.islamicEducation.title',
      descriptionKey: 'industries.items.islamicEducation.description',
      examplesKeys: ['industries.examples.onlineQuran', 'industries.examples.islamicSchools', 'industries.examples.arabicLearning'],
    },
    {
      icon: '🏥',
      titleKey: 'industries.items.halalHealthcare.title',
      descriptionKey: 'industries.items.halalHealthcare.description',
      examplesKeys: ['industries.examples.halalVitamins', 'industries.examples.muslimDoctors', 'industries.examples.islamicCounseling'],
    },
    {
      icon: '🏠',
      titleKey: 'industries.items.islamicLifestyle.title',
      descriptionKey: 'industries.items.islamicLifestyle.description',
      examplesKeys: ['industries.examples.prayerMats', 'industries.examples.islamicDecor', 'industries.examples.muslimFamily'],
    },
  ]

  return (
    <section id="industries" className={`py-20 lg:py-28 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            {t('industries.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {t('industries.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className={`p-6 text-center ${isRTL ? 'text-right' : ''}`}>
                {/* Emoji Icon */}
                <div className="text-4xl mb-4">{industry.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1B4332] mb-2">
                  {t(industry.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t(industry.descriptionKey)}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {industry.examplesKeys.map((exampleKey, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[#1B4332]/10 group-hover:text-[#1B4332] transition-colors"
                    >
                      {t(exampleKey)}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">$2T+</div>
            <div className="text-sm text-gray-600">{t('industries.marketStats.globalHalalMarket')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">2B+</div>
            <div className="text-sm text-gray-600">{t('industries.marketStats.muslimConsumers')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">11%</div>
            <div className="text-sm text-gray-600">{t('industries.marketStats.annualGrowth')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
