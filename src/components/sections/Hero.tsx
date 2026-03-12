'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle, Users, Globe2, Award } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Hero() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const features = [
    { icon: CheckCircle, text: t('hero.features.verifiedInfluencers') },
    { icon: CheckCircle, text: t('hero.features.authenticContent') },
    { icon: CheckCircle, text: t('hero.features.ethicalCampaigns') },
    { icon: CheckCircle, text: t('hero.features.halalCompliance') },
  ]

  const stats = [
    { value: '500+', label: t('hero.stats.influencers'), icon: Users },
    { value: '50M+', label: t('hero.stats.reach'), icon: Globe2 },
    { value: '100+', label: t('hero.stats.campaigns'), icon: Award },
  ]

  return (
    <section className={`relative min-h-[90vh] flex items-center pt-24 lg:pt-28 bg-gradient-to-br from-white via-gray-50 to-[#1B4332]/5 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B4332]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Content */}
          <div className={`${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-5xl font-bold text-[#1B4332] leading-tight mb-6 ${isRTL ? 'lg:text-right' : ''}`}>
              {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-[#D4AF37]">{t('hero.title').split(' ').slice(-1)}</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg text-gray-600 mb-8 max-w-xl ${isRTL ? 'lg:text-right lg:mr-0 lg:ml-auto' : ''}`}>
              {t('hero.subtitle')}
            </p>

            {/* Key Benefits */}
            <div className={`grid grid-cols-2 gap-3 mb-8 max-w-md ${isRTL ? 'lg:mr-0 lg:ml-auto' : ''}`}>
              {features.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <item.icon className="h-4 w-4 text-[#D4AF37]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'lg:justify-end sm:flex-row-reverse' : ''}`}>
              <Button
                asChild
                size="lg"
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8 py-6 text-base"
              >
                <Link href="#contact">
                  {t('hero.cta')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-semibold px-8 py-6 text-base"
              >
                <Link href="#how-it-works">
                  <Play className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} h-5 w-5`} />
                  {t('hero.learnMore')}
                </Link>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className={`mt-8 flex items-center gap-3 text-sm text-gray-500 ${isRTL ? 'lg:justify-end flex-row-reverse' : ''}`}>
              <span>{t('hero.trustedBy')}</span>
              <span className="font-semibold text-gray-700">{t('hero.trustedByBrands')}</span>
              <span>•</span>
              <span>{t('hero.since')}</span>
            </div>
          </div>

          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] p-8 lg:p-10 min-h-[400px] flex flex-col justify-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative text-center text-white">
                {/* Main Icon */}
                <div className="w-20 h-20 rounded-2xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">🕌</span>
                </div>
                
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                  {t('hero.certifiedHalal')}
                </div>
                <div className="text-base opacity-90 mb-8">
                  {t('hero.shariahCompliant')}
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <div className="font-semibold text-[#1B4332] text-sm">{t('hero.floatingCards.trustedPartner')}</div>
                  <div className="text-xs text-gray-500">{t('hero.floatingCards.influencers')}</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#D4AF37] rounded-xl shadow-xl p-4 text-[#1B4332] hidden lg:block">
              <div className="text-2xl font-bold">3.5x</div>
              <div className="text-xs font-medium">{t('hero.floatingCards.averageROI')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L48 95C96 90 192 80 288 75C384 70 480 70 576 72C672 75 768 80 864 82C960 85 1056 85 1152 82C1248 80 1344 75 1392 72L1440 70V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
