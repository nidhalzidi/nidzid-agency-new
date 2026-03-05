'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { MessageSquare, Search, Users, BarChart, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function HowItWorks() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: isRTL ? 'مكالمة استكشافية' : 'Discovery Call',
      description: isRTL 
        ? 'نبدأ باستشارة مفصلة لفهم علامتك التجارية وأهدافك وجمهورك المستهدف وأهداف الحملة. هذا يساعدنا على خلق استراتيجية مخصصة لنجاحك.'
        : 'We start with a detailed consultation to understand your brand, goals, target audience, and campaign objectives. This helps us create a tailored strategy for your success.',
      duration: isRTL ? '30 دقيقة' : '30 min',
    },
    {
      number: '02',
      icon: Search,
      title: isRTL ? 'مطابقة المؤثرين' : 'Influencer Matching',
      description: isRTL
        ? 'يختار فريقنا بعناية المؤثرين من شبكتنا الموثقة الذين يتوافقون مع قيم علامتك ولديهم تفاعل حقيقي مع جمهورك المسلم المستهدف.'
        : 'Our team carefully selects influencers from our verified network who align with your brand values and have authentic engagement with your target Muslim audience.',
      duration: isRTL ? '1-2 أسبوع' : '1-2 weeks',
    },
    {
      number: '03',
      icon: Users,
      title: isRTL ? 'تنفيذ الحملة' : 'Campaign Execution',
      description: isRTL
        ? 'ندير كل جانب من جوانب حملتك من إنشاء المحتوى إلى جداول النشر. أنت توافق على كل المحتوى قبل نشره لضمان اتساق العلامة.'
        : 'We manage every aspect of your campaign from content creation to posting schedules. You approve all content before it goes live, ensuring brand consistency.',
      duration: isRTL ? '2-8 أسابيع' : '2-8 weeks',
    },
    {
      number: '04',
      icon: BarChart,
      title: isRTL ? 'التقارير والتحليل' : 'Reporting & Analysis',
      description: isRTL
        ? 'احصل على تقارير أداء مفصلة مع رؤى حول الوصول والتفاعل والتحويلات والعائد على الاستثمار. نقدم توصيات قابلة للتنفيذ للحملات المستقبلية.'
        : 'Receive detailed performance reports with insights on reach, engagement, conversions, and ROI. We provide actionable recommendations for future campaigns.',
      duration: isRTL ? 'مستمر' : 'Ongoing',
    },
  ]

  return (
    <section id="how-it-works" className={`py-20 lg:py-28 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('howItWorks.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {isRTL ? 'رحلتك نحو النجاح' : 'Your Journey to Success'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'سهّلنا عملية تسويق المؤثرين لتسهيل تواصلك مع المستهلكين المسلمين بصدق.'
              : 'We have streamlined the influencer marketing process to make it easy for you to connect with Muslim consumers authentically.'
            }
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B4332] via-[#D4AF37] to-[#1B4332] transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-2 border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
                  <CardContent className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                    {/* Step Number */}
                    <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-4xl font-bold text-[#D4AF37]/30">
                        {step.number}
                      </span>
                      <span className="text-xs px-2 py-1 bg-[#1B4332]/10 text-[#1B4332] rounded-full font-medium">
                        {step.duration}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1B4332] mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#D4AF37] to-[#1B4332]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            {isRTL 
              ? 'هل أنت مستعد للبدء في رحلة تسويق المؤثرين الحلال؟'
              : 'Ready to start your halal influencer marketing journey?'
            }
          </p>
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isRTL ? 'حدد موعد مكالمة الاستكشاف المجانية' : 'Schedule Your Free Discovery Call'}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  )
}
