'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Globe2, TrendingUp, Award } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

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
      label: t('stats.countriesReached'),
      description: t('stats.countriesDesc')
    },
    {
      icon: TrendingUp,
      value: 3.5,
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
    <section className={`py-20 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('stats.badge')}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-[#1B4332]" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-white font-semibold text-xl mt-2 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 border border-white/20">
            <span className="text-[#D4AF37] text-2xl">🏆</span>
            <span className="text-white font-semibold">
              {t('stats.trustBadge')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
