'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Users, Target, Heart, Shield, Lightbulb, Award,
  CheckCircle, ArrowRight, Globe, Building, Rocket,
  Star, Zap, Eye, HandHeart, Scale, BookOpen,
  MapPin, Phone, Mail, Linkedin, Facebook, Instagram
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function CompanyPage() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const values = [
    {
      icon: Shield,
      title: t('company.values.shariahCompliance.title'),
      arabic: t('company.values.shariahCompliance.arabic'),
      description: t('company.values.shariahCompliance.description'),
      color: '#1B4332'
    },
    {
      icon: Heart,
      title: t('company.values.authenticity.title'),
      arabic: t('company.values.authenticity.arabic'),
      description: t('company.values.authenticity.description'),
      color: '#D4AF37'
    },
    {
      icon: Star,
      title: t('company.values.excellence.title'),
      arabic: t('company.values.excellence.arabic'),
      description: t('company.values.excellence.description'),
      color: '#2D6A4F'
    },
    {
      icon: Lightbulb,
      title: t('company.values.innovation.title'),
      arabic: t('company.values.innovation.arabic'),
      description: t('company.values.innovation.description'),
      color: '#40916C'
    },
    {
      icon: Scale,
      title: t('company.values.integrity.title'),
      arabic: t('company.values.integrity.arabic'),
      description: t('company.values.integrity.description'),
      color: '#74C69D'
    }
  ]

  const milestones = [
    {
      year: '2023',
      title: isRTL ? 'تأسيس الوكالة' : 'Agency Founded',
      description: isRTL 
        ? 'تأسست وكالة نضال وزيد برؤية لخدمة سوق الحلال العالمي بخدمات تسويق مؤثرين أصيلة.'
        : 'NidZid Agency was established with a vision to serve the global halal market with authentic influencer marketing services.'
    },
    {
      year: '2023',
      title: isRTL ? 'أول حملة كبرى' : 'First Major Campaign',
      description: isRTL
        ? 'أطلقنا بنجاح أول حملة كبرى لعلامة حلال، وصولاً إلى أكثر من 2 مليون مستهلك مسلم في منطقة الشرق الأوسط وشمال أفريقيا.'
        : 'Successfully launched our first major halal brand campaign, reaching over 2 million Muslim consumers across MENA region.'
    },
    {
      year: '2024',
      title: isRTL ? 'توسع الشبكة' : 'Network Expansion',
      description: isRTL
        ? 'نما شبكة المؤثرين لدينا إلى أكثر من 500 منشئ محتوى مسلم موثق عبر إنستغرام وتيك توك ويوتيوب ولينكد إن.'
        : 'Grew our influencer network to 500+ verified Muslim content creators across Instagram, TikTok, YouTube, and LinkedIn.'
    },
    {
      year: '2024',
      title: isRTL ? 'إطلاق مكتب دبي' : 'Dubai Office Launch',
      description: isRTL
        ? 'وسعنا عملياتنا إلى دبي، الإمارات العربية المتحدة لخدمة عملاء الخليج بشكل أفضل.'
        : 'Expanded operations to Dubai, UAE to better serve GCC clients and strengthen our presence in the Middle East.'
    },
    {
      year: '2024',
      title: isRTL ? 'اعتراف الصناعة' : 'Industry Recognition',
      description: isRTL
        ? 'اعتُرف بنا كوكالة تسويق حلال رائدة، بالشراكة مع كبرى علامات التمويل الإسلامي والغذاء الحلال.'
        : 'Recognized as a leading halal marketing agency, partnering with major Islamic finance and halal food brands.'
    }
  ]

  const team = [
    {
      name: isRTL ? 'نضال الزيدي' : 'Nidhal Zidi',
      role: t('company.team.founder'),
      bio: t('company.team.founderBio'),
      location: isRTL ? 'تونس والإمارات' : 'Tunisia & UAE',
      linkedin: 'https://www.linkedin.com/in/nidhal-zidi/',
      initials: 'NZ'
    }
  ]

  const achievements = [
    { value: '500+', label: t('stats.influencers'), icon: Users },
    { value: '50+', label: isRTL ? 'علامة تم خدمتها' : 'Brands Served', icon: Building },
    { value: '2M+', label: isRTL ? 'مستهلك تم الوصول إليه' : 'Consumers Reached', icon: Globe },
    { value: '5+', label: isRTL ? 'قطاعات تم خدمتها' : 'Industries Served', icon: Target }
  ]

  const islamicPrinciples = [
    { arabic: 'الصدق', title: isRTL ? 'الصدق' : 'Honesty (Sidq)', desc: isRTL ? 'شفافية في جميع المعاملات، لا تضليل للعملاء أو المستهلكين' : 'Transparent in all dealings, never misleading clients or consumers' },
    { arabic: 'العدل', title: isRTL ? 'العدل' : 'Fairness (Adl)', desc: isRTL ? 'معاملة جميع الأطراف بعدل وإنصاف في العلاقات التجارية' : 'Treating all parties fairly and justly in business relationships' },
    { arabic: 'الأمانة', title: isRTL ? 'الأمانة' : 'Trust (Amanah)', desc: isRTL ? 'الوفاء بالالتزامات وحماية المعلومات السرية' : 'Fulfilling commitments and protecting confidential information' },
    { arabic: 'الإحسان', title: isRTL ? 'الإحسان' : 'Excellence (Ihsan)', desc: isRTL ? 'السعي للتميز في كل حملة نقدمها' : 'Striving for excellence in every campaign we deliver' },
  ]

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              {t('company.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('company.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              {t('company.slogan')}
            </p>
            <p className="text-lg text-gray-300 mb-8">
              {t('company.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold px-8"
              >
                <Link href="/#contact">{t('company.workWithUs')}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                <Link href="/services">{t('company.ourServices')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-2xl p-8 lg:p-10 text-white">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold">{t('company.mission.title')}</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {t('company.mission.description')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('company.mission.description2')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl p-8 lg:p-10 text-[#1B4332]">
              <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-[#1B4332] rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{t('company.vision.title')}</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                {t('company.vision.description')}
              </p>
              <p className="opacity-80 leading-relaxed">
                {t('company.vision.description2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">{t('company.story.title')}</h2>
          </div>

          <div className={`prose prose-lg max-w-3xl mx-auto text-gray-600 ${isRTL ? 'text-right' : ''}`}>
            <p className="mb-6 leading-relaxed">
              {t('company.story.p1')}
            </p>
            <p className="mb-6 leading-relaxed">
              {t('company.story.p2')}
            </p>
            <p className="leading-relaxed">
              {t('company.story.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-[#1B4332]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-1">{item.value}</div>
                <div className="text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">{t('company.values.title')}</h2>
            <p className="text-gray-600">
              {t('company.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-[#D4AF37]/30 ${isRTL ? 'text-right' : ''}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${isRTL ? 'ml-auto' : ''}`}
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="h-7 w-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1B4332] mb-1">{value.title}</h3>
                <p className="text-sm text-[#D4AF37] mb-3 font-medium">{value.arabic}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Business Principles */}
      <section className="py-20 bg-[#1B4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('company.islamicPrinciples.title')}</h2>
            <p className="text-gray-300">
              {t('company.islamicPrinciples.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {islamicPrinciples.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-[#D4AF37] mb-2">{item.arabic}</p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">{t('company.timeline.title')}</h2>
            <p className="text-gray-600">{t('company.timeline.subtitle')}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-[#D4AF37]/30`} />
              {milestones.map((milestone, i) => (
                <div key={i} className={`relative flex gap-6 mb-8 last:mb-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[#D4AF37] font-bold">{milestone.year}</span>
                  </div>
                  <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <h3 className="font-semibold text-[#1B4332] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">{t('company.team.title')}</h2>
            <p className="text-gray-600">{t('company.team.subtitle')}</p>
          </div>

          <div className="max-w-xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className={`bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 ${isRTL ? 'text-right' : ''}`}>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-[#1B4332] mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className={`flex items-center justify-center gap-4 text-sm text-gray-500 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:nidhalzidi@nidzid.site"
                    className="w-10 h-10 rounded-lg bg-[#D4AF37] hover:bg-[#B8942C] flex items-center justify-center transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#1B4332]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">{t('company.locations.title')}</h2>
            <p className="text-gray-600">{t('company.locations.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all ${isRTL ? 'text-right' : ''}`}>
              <div className="text-5xl mb-4">🇹🇳</div>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">{t('company.locations.tunisiaOffice')}</h3>
              <p className="text-gray-600 mb-4">{isRTL ? 'سوسة، تونس' : 'Sousse, Tunisia'}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  +216 22 607 030
                </p>
                <p className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  {t('company.locations.servingNA')}
                </p>
              </div>
            </div>
            <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all ${isRTL ? 'text-right' : ''}`}>
              <div className="text-5xl mb-4">🇦🇪</div>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">{t('company.locations.uaeOffice')}</h3>
              <p className="text-gray-600 mb-4">{isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates'}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  +971 52 450 5803
                </p>
                <p className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  {t('company.locations.servingGCC')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#B8942C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">
            {t('company.cta.title')}
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            {t('company.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8"
            >
              <Link href="/#contact">{t('company.cta.button')}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
            >
              <Link href="/services">{isRTL ? 'عرض الخدمات' : 'View Services'}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
