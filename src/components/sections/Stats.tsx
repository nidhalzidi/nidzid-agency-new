'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Globe2, TrendingUp, Award } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * value))
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(value)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [hasAnimated, value, duration])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: t('stats.influencers'),
      description: t('stats.influencersDesc')
    },
    {
      icon: Globe2,
      value: 50,
      suffix: '+',
      label: t('stats.countries'),
      description: t('stats.countriesDesc')
    },
    {
      icon: TrendingUp,
      value: 3,
      suffix: 'x',
      label: t('stats.roi'),
      description: t('stats.roiDesc')
    },
    {
      icon: Award,
      value: 100,
      suffix: '+',
      label: t('stats.campaigns'),
      description: t('stats.campaignsDesc')
    },
  ]

  return (
    <section className="py-20 bg-[#1a3a2a] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t('stats.badge')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-white font-semibold mt-2 mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3">
            <span className="text-2xl">🏆</span>
            <span className="text-white/90 font-medium">{t('stats.trustBadge')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
