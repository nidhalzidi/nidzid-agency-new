'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Globe2, TrendingUp, Award } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(value) // Start with actual value
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Start animation from 0
          setCount(0)
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
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#D4AF37] text-sm font-medium mb-4">
            {t('stats.badge')}
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            {t('stats.title')}
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-7 w-7 text-[#1B4332]" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-white font-semibold text-lg mt-2 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
            <span className="text-[#D4AF37] text-xl">🏆</span>
            <span className="text-white font-medium">
              {t('stats.trustBadge')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
