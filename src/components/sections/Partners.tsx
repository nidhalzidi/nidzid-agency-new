'use client'

import { useLanguage } from '@/lib/i18n/context'

export default function Partners() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const partnerCategories = [
    {
      title: t('partners.categories.islamicFinance.title'),
      icon: '🏦',
      partners: [
        t('partners.categories.islamicFinance.partners.0'),
        t('partners.categories.islamicFinance.partners.1'),
        t('partners.categories.islamicFinance.partners.2'),
        t('partners.categories.islamicFinance.partners.3'),
        t('partners.categories.islamicFinance.partners.4'),
      ]
    },
    {
      title: t('partners.categories.halalFood.title'),
      icon: '🍖',
      partners: [
        t('partners.categories.halalFood.partners.0'),
        t('partners.categories.halalFood.partners.1'),
        t('partners.categories.halalFood.partners.2'),
        t('partners.categories.halalFood.partners.3'),
        t('partners.categories.halalFood.partners.4'),
      ]
    },
    {
      title: t('partners.categories.modestFashion.title'),
      icon: '👗',
      partners: [
        t('partners.categories.modestFashion.partners.0'),
        t('partners.categories.modestFashion.partners.1'),
        t('partners.categories.modestFashion.partners.2'),
        t('partners.categories.modestFashion.partners.3'),
        t('partners.categories.modestFashion.partners.4'),
      ]
    },
    {
      title: t('partners.categories.muslimTravel.title'),
      icon: '✈️',
      partners: [
        t('partners.categories.muslimTravel.partners.0'),
        t('partners.categories.muslimTravel.partners.1'),
        t('partners.categories.muslimTravel.partners.2'),
        t('partners.categories.muslimTravel.partners.3'),
        t('partners.categories.muslimTravel.partners.4'),
      ]
    },
    {
      title: t('partners.categories.halalCosmetics.title'),
      icon: '💄',
      partners: [
        t('partners.categories.halalCosmetics.partners.0'),
        t('partners.categories.halalCosmetics.partners.1'),
        t('partners.categories.halalCosmetics.partners.2'),
        t('partners.categories.halalCosmetics.partners.3'),
        t('partners.categories.halalCosmetics.partners.4'),
      ]
    },
    {
      title: t('partners.categories.islamicEducation.title'),
      icon: '📚',
      partners: [
        t('partners.categories.islamicEducation.partners.0'),
        t('partners.categories.islamicEducation.partners.1'),
        t('partners.categories.islamicEducation.partners.2'),
        t('partners.categories.islamicEducation.partners.3'),
        t('partners.categories.islamicEducation.partners.4'),
      ]
    },
  ]

  const trustIndicators = [
    { value: '100+', label: t('partners.trustIndicators.brandPartners') },
    { value: '25+', label: t('partners.trustIndicators.countriesServed') },
    { value: '$10M+', label: t('partners.trustIndicators.revenueGenerated') },
    { value: '50M+', label: t('partners.trustIndicators.audienceReached') },
  ]

  return (
    <section className={`py-20 lg:py-28 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('partners.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partner Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Category Header */}
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-start' : ''}`}>
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`font-bold text-[#1B4332] text-lg ${isRTL ? 'text-right' : ''}`}>
                  {category.title}
                </h3>
              </div>

              {/* Partners List */}
              <ul className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <li key={idx} className={`flex items-center gap-2 text-gray-600 text-sm ${isRTL ? 'flex-row-reverse justify-start text-right' : ''}`}>
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-[#1B4332]/5">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">{indicator.value}</div>
              <div className="text-sm text-gray-600">{indicator.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {t('partners.cta')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold rounded-lg transition-colors"
          >
            {t('partners.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}
