'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/i18n/context'

export default function Industries() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const industries = [
    {
      icon: '🏦',
      title: isRTL ? 'التمويل الإسلامي' : 'Islamic Finance',
      description: isRTL 
        ? 'تواصل مع المستهلكين المسلمين الباحثين عن منتجات مصرفية وتأمينية واستثمارية متوافقة مع الشريعة.'
        : 'Connect with Muslim consumers seeking Shariah-compliant banking, insurance, and investment products.',
      examples: isRTL 
        ? ['البنوك الإسلامية', 'تكافل', 'استثمارات حلال']
        : ['Islamic Banks', 'Takaful Insurance', 'Halal Investments'],
    },
    {
      icon: '🍖',
      title: isRTL ? 'الغذاء والمشروبات الحلال' : 'Halal Food & Beverage',
      description: isRTL
        ? 'روّج لمنتجات الغذاء الحلال المعتمدة والمطاعم وخدمات التوصيل للمستهلكين المسلمين الواعين.'
        : 'Promote halal-certified food products, restaurants, and delivery services to conscious Muslim consumers.',
      examples: isRTL
        ? ['مطاعم حلال', 'منتجات غذائية', 'توصيل وجبات']
        : ['Halal Restaurants', 'Food Products', 'Meal Delivery'],
    },
    {
      icon: '👗',
      title: isRTL ? 'الموضة المحتشمة' : 'Modest Fashion',
      description: isRTL
        ? 'اعرض ماركات الحجاب والعباءة والملابس المحتشمة للنساء والرجال المهتمين بالموضة.'
        : 'Showcase hijab, abaya, and modest clothing brands to fashion-conscious Muslim women and men.',
      examples: isRTL
        ? ['ماركات حجاب', 'ملابس محتشمة', 'أزياء إسلامية']
        : ['Hijab Brands', 'Modest Wear', 'Islamic Fashion'],
    },
    {
      icon: '✈️',
      title: isRTL ? 'السفر والسياحة الإسلامية' : 'Muslim Travel & Tourism',
      description: isRTL
        ? 'سوّق للوجهات والفنادق وباقات الرحلات الصديقة للحلال للمسافرين المسلمين حول العالم.'
        : 'Market halal-friendly travel destinations, hotels, and tour packages to Muslim travelers worldwide.',
      examples: isRTL
        ? ['سياحة حلال', 'فنادق صديقة للمسلمين', 'باقات العمرة']
        : ['Halal Tourism', 'Muslim-Friendly Hotels', 'Umrah Packages'],
    },
    {
      icon: '💄',
      title: isRTL ? 'مستحضرات التجميل الحلال' : 'Halal Cosmetics',
      description: isRTL
        ? 'روّج لمستحضرات التجميل الحلال والنباتية للمستهلكين المسلمين الباحثين عن بدائل أخلاقية.'
        : 'Promote halal-certified and vegan beauty products to Muslim consumers seeking ethical alternatives.',
      examples: isRTL
        ? ['مكياج حلال', 'صديق للوضوء', 'جمال طبيعي']
        : ['Halal Makeup', 'Wudhu-Friendly', 'Natural Beauty'],
    },
    {
      icon: '📚',
      title: isRTL ? 'التعليم الإسلامي' : 'Islamic Education',
      description: isRTL
        ? 'الوصول إلى الأسر المسلمة الباحثة عن تعليم إسلامي عالي الجودة وتعلم القرآن واللغة العربية.'
        : 'Reach Muslim families seeking quality Islamic education, Quran learning, and Arabic language programs.',
      examples: isRTL
        ? ['قرآن أونلاين', 'مدارس إسلامية', 'تعلم العربية']
        : ['Online Quran', 'Islamic Schools', 'Arabic Learning'],
    },
    {
      icon: '🏥',
      title: isRTL ? 'الرعاية الصحية الحلال' : 'Halal Healthcare',
      description: isRTL
        ? 'ربط المستهلكين المسلمين بالأدوية والمكملات الغذائية والخدمات الصحية المعتمدة حلال.'
        : 'Connect Muslim consumers with halal-certified pharmaceuticals, supplements, and healthcare services.',
      examples: isRTL
        ? ['فيتامينات حلال', 'أطباء مسلمون', 'استشارات إسلامية']
        : ['Halal Vitamins', 'Muslim Doctors', 'Islamic Counseling'],
    },
    {
      icon: '🏠',
      title: isRTL ? 'نمط الحياة الإسلامي' : 'Islamic Lifestyle',
      description: isRTL
        ? 'سوّق لمنتجات المنزل الإسلامية وأدوات الصلاة وماركات نمط الحياة للأسر المسلمة.'
        : 'Market Islamic home products, prayer essentials, and lifestyle brands to Muslim households.',
      examples: isRTL
        ? ['سجاد صلاة', 'ديكور إسلامي', 'أسرة مسلمة']
        : ['Prayer Mats', 'Islamic Decor', 'Muslim Family'],
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
            {isRTL ? 'خبرة عبر قطاعات الحلال' : 'Expertise Across Halal Sectors'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'من التمويل الإسلامي إلى الموضة المحتشمة، لدينا خبرة عميقة في ربط العلامات التجارية بالمستهلكين المسلمين عبر صناعات متنوعة.'
              : 'From Islamic finance to modest fashion, we have deep experience connecting brands with Muslim consumers across diverse industries.'
            }
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
            <div className="text-sm text-gray-600">{isRTL ? 'سوق الحلال العالمي' : 'Global Halal Market'}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">2B+</div>
            <div className="text-sm text-gray-600">{isRTL ? 'مستهلك مسلم' : 'Muslim Consumers'}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">11%</div>
            <div className="text-sm text-gray-600">{isRTL ? 'معدل النمو السنوي' : 'Annual Growth Rate'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
