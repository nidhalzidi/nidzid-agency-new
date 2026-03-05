'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle, Users, Globe2 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Hero() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const benefits = [
    { icon: CheckCircle, textKey: 'hero.benefits.halalCertified' },
    { icon: Users, textKey: 'hero.benefits.influencers' },
    { icon: Globe2, textKey: 'hero.benefits.countries' },
  ]

  const heroFeatures = [
    { icon: '✓', textKey: 'hero.features.verifiedInfluencers' },
    { icon: '✓', textKey: 'hero.features.authenticContent' },
    { icon: '✓', textKey: 'hero.features.ethicalCampaigns' },
    { icon: '✓', textKey: 'hero.features.halalCompliance' },
  ]

  return (
    <section className={`relative min-h-screen flex items-center pt-28 lg:pt-32 bg-gradient-to-br from-white via-gray-50 to-[#1B4332]/5 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#1B4332]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Content */}
          <div className={`text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B4332] leading-tight mb-6 ${isRTL ? 'lg:text-right' : ''}`}>
              {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-[#D4AF37]">{t('hero.title').split(' ').slice(-1)}</span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isRTL ? 'lg:text-right lg:mr-0 lg:ml-auto' : ''}`}>
              {t('hero.subtitle')}
            </p>

            {/* Key Benefits */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-4 mb-8 ${isRTL ? 'lg:justify-end' : ''}`}>
              {benefits.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <item.icon className="h-5 w-5 text-[#D4AF37]" />
                  <span>{t(item.textKey)}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-8 mb-8 ${isRTL ? 'lg:justify-end' : ''}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B4332]">500+</div>
                <div className="text-sm text-gray-500">{t('hero.stats.influencers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B4332]">50M+</div>
                <div className="text-sm text-gray-500">{t('hero.stats.reach')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1B4332]">100+</div>
                <div className="text-sm text-gray-500">{t('stats.campaigns')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D4AF37]">3.5x</div>
                <div className="text-sm text-gray-500">ROI</div>
              </div>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isRTL ? 'lg:justify-end sm:flex-row-reverse' : ''}`}>
              <Button
                asChild
                size="lg"
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8"
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
                className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white font-semibold px-8"
              >
                <Link href="#how-it-works">
                  <Play className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'} h-5 w-5`} />
                  {t('hero.learnMore')}
                </Link>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className={`mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 ${isRTL ? 'lg:justify-end flex-row-reverse' : ''}`}>
              <span>{t('hero.trustedBy')}</span>
              <span className="font-semibold text-gray-700">{t('hero.trustedByValue')}</span>
              <span>•</span>
              <span>{t('hero.since')}</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] p-8 h-[500px] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-7xl mb-6">🕌</div>
                <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                  {t('hero.halalCertified')}
                </div>
                <div className="text-lg opacity-90 mb-6">
                  {t('hero.shariahCompliant')}
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 text-left max-w-xs mx-auto">
                  {heroFeatures.map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 text-sm ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                      <span className="text-[#D4AF37]">{item.icon}</span>
                      <span>{t(item.textKey)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <div className="font-semibold text-[#1B4332]">{t('hero.trustedPartner')}</div>
                  <div className="text-sm text-gray-500">{t('hero.influencersCount')}</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-4 -right-4 bg-[#1B4332] rounded-xl shadow-xl p-4 text-white hidden lg:block">
              <div className="text-2xl font-bold text-[#D4AF37]">3.5x</div>
              <div className="text-sm">{t('hero.averageROI')}</div>
            </div>

            {/* Floating Card 3 */}
            <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-xl p-3 hidden xl:block">
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="text-2xl">🌍</div>
                <div className="text-sm font-medium text-[#1B4332]">{t('hero.countriesCount')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
