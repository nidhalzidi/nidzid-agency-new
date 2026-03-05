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
      description: isRTL 
        ? 'شرك مع مؤثرين مسلمين أصيلين يتواصلون بصدق مع جمهورك المستهدف. من المؤثرين الصغار إلى الكبار عبر Instagram وTikTok وYouTube والمزيد.'
        : 'Partner with authentic Muslim influencers who genuinely connect with your target audience. From micro to mega influencers across Instagram, TikTok, YouTube, and more.',
      features: isRTL 
        ? ['اكتشاف المؤثرين', 'إدارة الحملات', 'تتبع الأداء']
        : ['Influencer Sourcing', 'Campaign Management', 'Performance Tracking'],
    },
    {
      icon: Target,
      title: t('services.paidAdvertising.title'),
      description: isRTL
        ? 'الوصول إلى المستهلكين المسلمين من خلال حملات إعلانية حلال مستهدفة. نضمن ظهور إعلاناتك في سياقات مناسبة تتوافق مع القيم الإسلامية.'
        : 'Reach Muslim consumers through targeted halal advertising campaigns. We ensure your ads appear in appropriate contexts that align with Islamic values.',
      features: isRTL
        ? ['وضع إعلانات الحلال', 'استهداف الجمهور', 'تحسين العائد']
        : ['Halal Ad Placement', 'Audience Targeting', 'ROI Optimization'],
    },
    {
      icon: PenTool,
      title: t('services.contentMarketing.title'),
      description: isRTL
        ? 'إنشاء محتوى مقنع وذو صلة ثقافية يتردد صداه مع الجماهير المسلمة. من محتوى وسائل التواصل الاجتماعي إلى منشورات المدونات وإنتاج الفيديو.'
        : 'Create compelling, culturally-relevant content that resonates with Muslim audiences. From social media content to blog posts and video production.',
      features: isRTL
        ? ['استراتيجية المحتوى', 'الإنتاج الإبداعي', 'إدارة المجتمع']
        : ['Content Strategy', 'Creative Production', 'Community Management'],
    },
    {
      icon: TrendingUp,
      title: t('services.brandStrategy.title'),
      description: isRTL
        ? 'تطوير استراتيجية تسويق حلال شاملة تضع علامتك في موقع النجاح في سوق المستهلكين المسلمين العالمي.'
        : 'Develop a comprehensive halal marketing strategy that positions your brand for success in the global Muslim consumer market.',
      features: isRTL
        ? ['بحوث السوق', 'تموضع العلامة', 'تخطيط النمو']
        : ['Market Research', 'Brand Positioning', 'Growth Planning'],
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
            {isRTL ? 'حلول تسويق حلال كاملة' : 'Complete Halal Marketing Solutions'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'نقدم خدمات تسويق شاملة مصممة خصيصاً للعلامات التجارية التي تستهدف سوق المستهلكين المسلمين.'
              : 'We offer comprehensive marketing services tailored specifically for brands targeting the Muslim consumer market.'
            }
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
