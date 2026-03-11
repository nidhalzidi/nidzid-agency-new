'use client'

import { useLanguage } from '@/lib/i18n/context'

export default function Partners() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const partnerCategories = [
    {
      titleKey: 'partners.categories.islamicFinance',
      icon: '🏦',
      partners: [
        t('partners.partnersList.islamicFinance.0'),
        t('partners.partnersList.islamicFinance.1'),
        t('partners.partnersList.islamicFinance.2'),
        t('partners.partnersList.islamicFinance.3'),
        t('partners.partnersList.islamicFinance.4'),
      ]
    },
    {
      titleKey: 'partners.categories.halalFood',
      icon: '🍖',
      partners: [
        t('partners.partnersList.halalFood.0'),
        t('partners.partnersList.halalFood.1'),
        t('partners.partnersList.halalFood.2'),
        t('partners.partnersList.halalFood.3'),
        t('partners.partnersList.halalFood.4'),
      ]
    },
    {
      titleKey: 'partners.categories.modestFashion',
      icon: '👗',
      partners: [
        t('partners.partnersList.modestFashion.0'),
        t('partners.partnersList.modestFashion.1'),
        t('partners.partnersList.modestFashion.2'),
        t('partners.partnersList.modestFashion.3'),
        t('partners.partnersList.modestFashion.4'),
      ]
    },
    {
      titleKey: 'partners.categories.muslimTravel',
      icon: '✈️',
      partners: [
        t('partners.partnersList.muslimTravel.0'),
        t('partners.partnersList.muslimTravel.1'),
        t('partners.partnersList.muslimTravel.2'),
        t('partners.partnersList.muslimTravel.3'),
        t('partners.partnersList.muslimTravel.4'),
      ]
    },
    {
      titleKey: 'partners.categories.halalCosmetics',
      icon: '💄',
      partners: [
        t('partners.partnersList.halalCosmetics.0'),
        t('partners.partnersList.halalCosmetics.1'),
        t('partners.partnersList.halalCosmetics.2'),
        t('partners.partnersList.halalCosmetics.3'),
        t('partners.partnersList.halalCosmetics.4'),
      ]
    },
    {
      titleKey: 'partners.categories.islamicEducation',
      icon: '📚',
      partners: [
        t('partners.partnersList.islamicEducation.0'),
        t('partners.partnersList.islamicEducation.1'),
        t('partners.partnersList.islamicEducation.2'),
        t('partners.partnersList.islamicEducation.3'),
        t('partners.partnersList.islamicEducation.4'),
      ]
    },
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
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-bold text-[#1B4332] text-lg">
                  {t(category.titleKey)}
                </h3>
              </div>

              {/* Partners List */}
              <ul className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <li key={idx} className={`flex items-center gap-2 text-gray-600 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">100+</div>
            <div className="text-sm text-gray-600">{t('partners.stats.brandPartners')}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">25+</div>
            <div className="text-sm text-gray-600">{t('partners.stats.countriesServed')}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">$10M+</div>
            <div className="text-sm text-gray-600">{t('partners.stats.revenueGenerated')}</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">50M+</div>
            <div className="text-sm text-gray-600">{t('partners.stats.audienceReached')}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {t('partners.cta.question')}
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('partners.cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
