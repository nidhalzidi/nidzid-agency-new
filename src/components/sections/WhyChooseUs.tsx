'use client'

import { Card, CardContent } from '@/components/ui/card'
import { 
  ShieldCheck, 
  Users, 
  Globe2, 
  BarChart3, 
  Heart, 
  Clock 
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function WhyChooseUs() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const reasons = [
    {
      icon: ShieldCheck,
      titleKey: 'whyUs.shariahCompliant.title',
      descKey: 'whyUs.shariahCompliant.description',
    },
    {
      icon: Users,
      titleKey: 'whyUs.muslimOwned.title',
      descKey: 'whyUs.muslimOwned.description',
    },
    {
      icon: Globe2,
      titleKey: 'whyUs.globalNetwork.title',
      descKey: 'whyUs.globalNetwork.description',
    },
    {
      icon: BarChart3,
      titleKey: 'whyUs.provenResults.title',
      descKey: 'whyUs.provenResults.description',
    },
    {
      icon: Heart,
      titleKey: 'whyUs.exclusiveFocus.title',
      descKey: 'whyUs.exclusiveFocus.description',
    },
    {
      icon: Clock,
      titleKey: 'whyUs.multilingual.title',
      descKey: 'whyUs.multilingual.description',
    },
  ]

  return (
    <section id="why-us" className={`py-20 lg:py-28 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('whyUs.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                  <reason.icon className="h-6 w-6 text-[#1B4332]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(reason.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="text-center mb-8">
            <p className="text-[#D4AF37] font-medium mb-4">
              {isRTL ? 'موثوق من قادة الصناعة' : 'Trusted By Industry Leaders'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {[
              isRTL ? 'علامات الغذاء الحلال' : 'Halal Food Brands',
              isRTL ? 'التمويل الإسلامي' : 'Islamic Finance',
              isRTL ? 'الموضة المحتشمة' : 'Modest Fashion',
              isRTL ? 'السفر الإسلامي' : 'Muslim Travel',
              isRTL ? 'الإعلام الإسلامي' : 'Islamic Media'
            ].map((industry, idx) => (
              <div key={idx} className="text-white/80 font-semibold text-sm lg:text-base">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
