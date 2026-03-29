'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n/context'

export default function Industries() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const industries = [
    {
      icon: '🏦',
      title: t('industries.items.islamicFinance.title'),
      description: t('industries.items.islamicFinance.description'),
      examples: [
        t('industries.examples.islamicBanks'),
        t('industries.examples.takaful'),
        t('industries.examples.halalInvestments')
      ],
    },
    {
      icon: '🍖',
      title: t('industries.items.halalFood.title'),
      description: t('industries.items.halalFood.description'),
      examples: [
        t('industries.examples.halalRestaurants'),
        t('industries.examples.foodProducts'),
        t('industries.examples.mealDelivery')
      ],
    },
    {
      icon: '👗',
      title: t('industries.items.modestFashion.title'),
      description: t('industries.items.modestFashion.description'),
      examples: [
        t('industries.examples.hijabBrands'),
        t('industries.examples.modestWear'),
        t('industries.examples.islamicFashion')
      ],
    },
    {
      icon: '✈️',
      title: t('industries.items.muslimTravel.title'),
      description: t('industries.items.muslimTravel.description'),
      examples: [
        t('industries.examples.halalTourism'),
        t('industries.examples.muslimFriendlyHotels'),
        t('industries.examples.umrahPackages')
      ],
    },
    {
      icon: '💄',
      title: t('industries.items.halalCosmetics.title'),
      description: t('industries.items.halalCosmetics.description'),
      examples: [
        t('industries.examples.halalMakeup'),
        t('industries.examples.wudhuFriendly'),
        t('industries.examples.naturalBeauty')
      ],
    },
    {
      icon: '📚',
      title: t('industries.items.islamicEducation.title'),
      description: t('industries.items.islamicEducation.description'),
      examples: [
        t('industries.examples.onlineQuran'),
        t('industries.examples.islamicSchools'),
        t('industries.examples.arabicLearning')
      ],
    },
    {
      icon: '🏥',
      title: t('industries.items.halalHealthcare.title'),
      description: t('industries.items.halalHealthcare.description'),
      examples: [
        t('industries.examples.halalVitamins'),
        t('industries.examples.muslimDoctors'),
        t('industries.examples.islamicCounseling')
      ],
    },
    {
      icon: '🏠',
      title: t('industries.items.islamicLifestyle.title'),
      description: t('industries.items.islamicLifestyle.description'),
      examples: [
        t('industries.examples.prayerMats'),
        t('industries.examples.islamicDecor'),
        t('industries.examples.muslimFamily')
      ],
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
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {industry.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[#1B4332]/10 group-hover:text-[#1B4332] transition-colors"
                    >
                      {example}
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
