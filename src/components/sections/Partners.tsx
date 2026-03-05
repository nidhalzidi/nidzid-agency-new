'use client'

import { useLanguage } from '@/lib/i18n/context'

export default function Partners() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  const partnerCategories = [
    {
      title: isRTL ? 'التمويل الإسلامي' : 'Islamic Finance',
      icon: '🏦',
      partners: isRTL 
        ? ['مصرف الراجحي', 'بنك فيصل الإسلامي', 'واحد للاستثمار', 'إيثيس للتقنية', 'بلوسوم للتمويل']
        : ['Al Rayan Bank', 'Gatehouse Bank', 'Wahed Invest', 'Ethis Technologies', 'Blossom Finance']
    },
    {
      title: isRTL ? 'الغذاء والمشروبات الحلال' : 'Halal Food & Beverage',
      icon: '🍖',
      partners: isRTL
        ? ['ذا حلال جايز', 'طريق الزعفران', 'ميدامار للأغذية', 'علامات حلال معتمدة', 'ون ستوب حلال']
        : ['Halal Guys', 'Saffron Road', 'Midamar Foods', 'Halal Certified Brands', 'One Stop Halal']
    },
    {
      title: isRTL ? 'الموضة المحتشمة' : 'Modest Fashion',
      icon: '👗',
      partners: isRTL
        ? ['مودانيسا', 'هاوت حجاب', 'مجموعة عاب', 'شكر للملابس', 'آنا حريري']
        : ['Modanisa', 'Haute Hijab', 'Aab Collection', 'Shukr Clothing', 'Annah Hariri']
    },
    {
      title: isRTL ? 'السفر الإسلامي' : 'Muslim Travel',
      icon: '✈️',
      partners: isRTL
        ? ['رحلة حلال', 'تقييم الهلال', 'فنادق صديقة للمسلمين', 'باقات العمرة', 'سلام للسفر']
        : ['Halal Trip', 'Crescent Rating', 'Muslim Friendly Hotels', 'Umrah Packages Co.', 'Salam Travel']
    },
    {
      title: isRTL ? 'مستحضرات التجميل الحلال' : 'Halal Cosmetics',
      icon: '💄',
      partners: isRTL
        ? ['سام بيور مينرالز', 'بي إتش بي للجمال الأخلاقي', 'جمال حلال', 'إيبا للعناية الحلال', 'وردة لمستحضرات التجميل']
        : ['Sampure Minerals', 'PHB Ethical Beauty', 'Halal Beauty', 'Iba Halal Care', 'Wardah Cosmetics']
    },
    {
      title: isRTL ? 'التعليم الإسلامي' : 'Islamic Education',
      icon: '📚',
      partners: isRTL
        ? ['أكاديمية القرآن', 'الجامعة الإسلامية المفتوحة', 'معهد باينة', 'التعليم الإسلامي', 'تطبيق مسلم برو']
        : ['Quran Academy', 'Islamic Online University', 'Bayyinah Institute', 'Islamic Learning', 'Muslim Pro App']
    },
  ]

  const trustIndicators = [
    { value: '100+', label: isRTL ? 'شريك علامة تجارية' : 'Brand Partners' },
    { value: '25+', label: isRTL ? 'دولة نخدمها' : 'Countries Served' },
    { value: '$10M+', label: isRTL ? 'إيرادات محققة' : 'Revenue Generated' },
    { value: '50M+', label: isRTL ? 'جمهور تم الوصول إليه' : 'Audience Reached' },
  ]

  return (
    <section className={`py-20 lg:py-28 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {isRTL ? 'شركاء موثوقون' : 'Trusted Partners'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {isRTL ? 'العلامات التي عملنا معها' : 'Brands We\'ve Worked With'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'تشاركنا مع علامات حلال رائدة عبر الصناعات لإنشاء حملات مؤثرة تتواصل مع المستهلكين المسلمين.'
              : 'We\'ve partnered with leading halal brands across industries to create impactful campaigns that resonate with Muslim consumers.'
            }
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
            {isRTL 
              ? 'هل أنت مستعد للانضمام إلى قائمة شراكاتنا الناجحة؟'
              : 'Ready to join our growing list of successful brand partnerships?'
            }
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold rounded-lg transition-colors"
          >
            {isRTL ? 'ابدأ حملتك اليوم' : 'Start Your Campaign Today'}
          </a>
        </div>
      </div>
    </section>
  )
}
