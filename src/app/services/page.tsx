'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Users, TrendingUp, FileText, Lightbulb,
  Search, BarChart3, Shield, MessageSquare,
  Megaphone, Video, Camera, PenTool,
  Target, Compass, Zap, Award,
  CheckCircle, ArrowRight, Globe, Instagram
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function ServicesPage() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const services = [
    {
      id: 'influencer-marketing',
      title: t('services.influencerMarketing.title'),
      subtitle: t('services.influencerMarketing.subtitle'),
      description: t('services.influencerMarketing.description'),
      icon: Users,
      color: '#1B4332',
      features: [
        { icon: Search, title: t('services.features.influencerSourcing'), desc: isRTL ? 'نحدد ونفحص بدقة المؤثرين المسلمين الذين تتوافق قيمهم مع علامتك التجارية.' : 'We identify and thoroughly vet Muslim influencers whose values align with your brand.' },
        { icon: Target, title: t('services.features.campaignManagement'), desc: isRTL ? 'نطور استراتيجيات تسويق مؤثرين شاملة مخصصة لأهداف علامتك.' : 'We develop comprehensive influencer marketing strategies tailored to your brand objectives.' },
        { icon: Shield, title: isRTL ? 'إرشادات المحتوى الحلال' : 'Halal Content Guidelines', desc: isRTL ? 'يتم مراجعة كل محتوى مقابل إرشادات المحتوى الحلال الشاملة لدينا.' : 'Every piece of content is reviewed against our comprehensive halal content guidelines.' },
        { icon: BarChart3, title: t('services.features.performanceTracking'), desc: isRTL ? 'تتبع نجاح حملتك مع تحليلات وإعداد تقارير مفصلة.' : 'Track your campaign success with detailed analytics and reporting.' },
        { icon: MessageSquare, title: isRTL ? 'إدارة علاقات المؤثرين' : 'Influencer Relationship Management', desc: isRTL ? 'نبني ونحافظ على علاقات طويلة الأمد مع شبكة من 500+ مؤثر مسلم موثق.' : 'We build and maintain long-term relationships with 500+ verified Muslim influencers.' }
      ],
      benefits: isRTL 
        ? ['الوصول إلى 500+ مؤثر مسلم موثق', 'حملات متوافقة مع الشريعة 100%', 'متوسط عائد استثمار 3.5x', 'تغطية متعددة المنصات', 'مدير حملات مخصص']
        : ['Access to 500+ verified Muslim influencers', '100% Shariah-compliant campaigns', 'Average 3.5x ROI on campaigns', 'Multi-platform coverage (Instagram, TikTok, YouTube)', 'Dedicated campaign manager']
    },
    {
      id: 'paid-advertising',
      title: t('services.paidAdvertising.title'),
      subtitle: t('services.paidAdvertising.subtitle'),
      description: t('services.paidAdvertising.description'),
      icon: Megaphone,
      color: '#D4AF37',
      features: [
        { icon: Instagram, title: isRTL ? 'إعلانات ميتا' : 'Meta Ads (Facebook & Instagram)', desc: isRTL ? 'استفد من قوة منصة ميتا الإعلانية للوصول إلى المستهلكين المسلمين.' : 'Leverage the power of Meta advertising platform to reach Muslim consumers with precision targeting.' },
        { icon: Video, title: isRTL ? 'إعلانات تيك توك' : 'TikTok Ads', desc: isRTL ? 'استغل الجمهور المسلم سريع النمو على تيك توك بإعلانات فيديو جذابة.' : 'Tap into the rapidly growing Muslim audience on TikTok with engaging video ads.' },
        { icon: Globe, title: isRTL ? 'إعلانات يوتيوب' : 'YouTube Ads', desc: isRTL ? 'تواصل مع المشاهدين المسلمين من خلال إعلانات يوتيوب المستهدفة.' : 'Connect with Muslim viewers through targeted YouTube advertising.' },
        { icon: TrendingUp, title: isRTL ? 'إعلانات تويتر' : 'Twitter/X Ads', desc: isRTL ? 'تفاعل مع المجتمع المسلم على تويتر من خلال المحتوى المروّج.' : 'Engage with the Muslim community on Twitter/X through promoted content.' },
        { icon: Shield, title: isRTL ? 'استراتيجيات إعلانية متوافقة' : 'Halal-Compliant Ad Strategies', desc: isRTL ? 'تخضع جميع الحملات الإعلانية لمراجعة التوافق مع الحلال.' : 'All ad campaigns undergo our halal compliance review.' }
      ],
      benefits: isRTL
        ? ['تحسين خاص بكل منصة', 'استهداف متقدم للجمهور المسلم', 'اختبار A/B وتحسين', 'مراقبة الحملات في الوقت الفعلي', 'تقارير شفافة']
        : ['Platform-specific optimization', 'Advanced Muslim audience targeting', 'A/B testing & optimization', 'Real-time campaign monitoring', 'Transparent reporting & analytics']
    },
    {
      id: 'content-marketing',
      title: t('services.contentMarketing.title'),
      subtitle: t('services.contentMarketing.subtitle'),
      description: t('services.contentMarketing.description'),
      icon: FileText,
      color: '#2D6A4F',
      features: [
        { icon: Lightbulb, title: t('services.features.contentStrategy'), desc: isRTL ? 'طور استراتيجية محتوى شاملة متوافقة مع أهداف علامتك والقيم الإسلامية.' : 'Develop a comprehensive content strategy aligned with your brand goals and Islamic values.' },
        { icon: PenTool, title: isRTL ? 'إنشاء محتوى حلال' : 'Halal Content Creation', desc: isRTL ? 'فريقنا من منشئي المحتوى المسلمين ينتج محتوى أصيلاً متوافقاً مع الشريعة.' : 'Our team of Muslim content creators produces authentic, Shariah-compliant content.' },
        { icon: Video, title: isRTL ? 'إنتاج الفيديو' : 'Video Production', desc: isRTL ? 'شاهد جمهورك بمحتوى فيديو احترافي.' : 'Engage your audience with professional video content.' },
        { icon: Camera, title: isRTL ? 'التصوير الفوتوغرافي' : 'Photography', desc: isRTL ? 'خدمات تصوير احترافية لعمليات إطلاق المنتجات وصور نمط الحياة.' : 'Professional photography services for product shoots and lifestyle imagery.' },
        { icon: MessageSquare, title: isRTL ? 'كتابة النصوص' : 'Copywriting', desc: isRTL ? 'نصوص مقنعة تتحدث للمستهلكين المسلمين بأصالة.' : 'Compelling copy that speaks to Muslim consumers authentically.' }
      ],
      benefits: isRTL
        ? ['منشئو محتوى مسلمون', 'نهج حساس ثقافياً', 'إنتاج محتوى متعدد التنسيقات', 'محتوى محسّن لمحركات البحث', 'صوت علامة متسق']
        : ['Muslim content creators', 'Culturally sensitive approach', 'Multi-format content production', 'SEO-optimized content', 'Consistent brand voice']
    },
    {
      id: 'brand-strategy',
      title: t('services.brandStrategy.title'),
      subtitle: t('services.brandStrategy.subtitle'),
      description: t('services.brandStrategy.description'),
      icon: Lightbulb,
      color: '#40916C',
      features: [
        { icon: Target, title: t('services.features.brandPositioning'), desc: isRTL ? 'حدد موقعك الفريد في سوق الحلال.' : 'Define your unique position in the halal market.' },
        { icon: Compass, title: t('services.features.marketResearch'), desc: isRTL ? 'احصل على رؤى عميقة حول سوق المستهلكين المسلمين.' : 'Gain deep insights into the Muslim consumer market.' },
        { icon: TrendingUp, title: isRTL ? 'التحليل التنافسي' : 'Competitive Analysis', desc: isRTL ? 'افهم منافسيك في فضاء سوق الحلال.' : 'Understand your competition in the halal market space.' },
        { icon: Zap, title: isRTL ? 'تطوير هوية العلامة' : 'Brand Identity Development', desc: isRTL ? 'أنشئ هوية علامة جذابة تتحدث للقيم الإسلامية.' : 'Create a compelling brand identity that speaks to Muslim values.' },
        { icon: Award, title: t('services.features.growthPlanning'), desc: isRTL ? 'خطط لدخولك أو توسعك في السوق باستراتيجية شاملة.' : 'Plan your market entry or expansion with a comprehensive strategy.' }
      ],
      benefits: isRTL
        ? ['خبرة عميقة في سوق الحلال', 'رؤى المستهلك المسلم', 'تموضع مميز', 'خارطة طريق استراتيجية قابلة للتنفيذ', 'تخطيط نمو طويل الأمد']
        : ['Deep halal market expertise', 'Muslim consumer insights', 'Differentiated positioning', 'Actionable strategic roadmap', 'Long-term growth planning']
    }
  ]

  const processSteps = [
    { step: '01', title: t('services.process.discovery'), desc: t('services.process.discoveryDesc') },
    { step: '02', title: t('services.process.strategy'), desc: t('services.process.strategyDesc') },
    { step: '03', title: t('services.process.execution'), desc: t('services.process.executionDesc') },
    { step: '04', title: t('services.process.optimization'), desc: t('services.process.optimizationDesc') }
  ]

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              {t('services.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('services.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold px-8"
              >
                <Link href="/#contact">{isRTL ? 'ابدأ الآن' : 'Get Started'}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                <Link href="/company">{isRTL ? 'تعرف علينا' : 'Learn About Us'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-4">{isRTL ? 'ما نقدمه' : 'What We Offer'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL ? 'أربع خدمات أساسية مصممة لمساعدة العلامات الحلال على التواصل بصدق مع المستهلكين المسلمين' : 'Four core services designed to help halal brands connect authentically with Muslim consumers'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-7 w-7" style={{ color: service.color }} />
                </div>
                <h3 className={`font-semibold text-[#1B4332] mb-2 group-hover:text-[#D4AF37] transition-colors ${isRTL ? 'text-right' : ''}`}>
                  {service.title}
                </h3>
                <p className={`text-sm text-gray-600 line-clamp-2 ${isRTL ? 'text-right' : ''}`}>{service.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} ${isRTL ? 'lg:text-right' : ''}`}>
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: service.color }} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {isRTL ? `الخدمة ${index + 1}` : `Service ${index + 1}`}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-[#D4AF37] font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <div className="bg-[#1B4332]/5 rounded-xl p-6 mb-6">
                  <h4 className={`font-semibold text-[#1B4332] mb-4 ${isRTL ? 'text-right' : ''}`}>{t('services.benefits')}</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold"
                >
                  <Link href="/#contact">
                    {t('services.discussProject')} <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                  </Link>
                </Button>
              </div>

              {/* Features Grid */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30 transition-all ${isRTL ? 'text-right' : ''}`}
                    >
                      <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <feature.icon className="h-5 w-5" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1B4332] mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-[#1B4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('services.process.title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-4">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#B8942C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8"
            >
              <Link href="/#contact">{t('services.cta.button')}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
            >
              <Link href="/industries">{t('services.cta.button2')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
