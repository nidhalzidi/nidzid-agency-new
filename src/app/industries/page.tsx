'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Building2, UtensilsCrossed, Shirt, Plane, Sparkles,
  Landmark, PiggyBank, Shield, FileText,
  Cookie, Coffee, Store, Truck,
  Diamond, Scissors, Heart, Palette,
  MapPin, Tent, Compass, Mountain,
  Flower2, Droplets, Leaf, Rabbit,
  CheckCircle, ArrowRight, TrendingUp, Users, Globe
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function IndustriesPage() {
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  const industries = [
    {
      id: 'islamic-finance',
      title: t('industries.items.islamicFinance.title'),
      description: t('industries.items.islamicFinance.description'),
      icon: Building2,
      color: '#1B4332',
      marketSize: '$3.8 Trillion',
      growth: '14%',
      subSectors: [
        { icon: Landmark, title: isRTL ? 'البنوك الإسلامية' : 'Islamic Banking', examples: [t('industries.examples.islamicBanks'), t('industries.examples.halalInvestments'), 'Sukuk'] },
        { icon: TrendingUp, title: isRTL ? 'الاستثمارات الحلال' : 'Halal Investments', examples: ['ETFs', 'Mutual Funds', 'Real Estate'] },
        { icon: Shield, title: isRTL ? 'التكافل' : 'Takaful Insurance', examples: [t('industries.examples.takaful'), 'Health', 'Motor'] },
        { icon: FileText, title: isRTL ? 'صكوك' : 'Sukuk Bonds', examples: ['Corporate', 'Government', 'Green'] }
      ],
      stats: [
        { value: '$3.8T', label: isRTL ? 'أصول التمويل الإسلامي' : 'Global Islamic Finance Assets' },
        { value: '1.8B', label: isRTL ? 'مسلمين مخدومين' : 'Muslim Population Served' },
        { value: '14%', label: isRTL ? 'معدل النمو السنوي' : 'Annual Growth Rate' },
        { value: '75+', label: isRTL ? 'دولة' : 'Countries with Islamic Finance' }
      ],
      influencers: isRTL ? '150+ مؤثر في التمويل' : '150+ finance-focused Muslim influencers in our network'
    },
    {
      id: 'halal-food',
      title: t('industries.items.halalFood.title'),
      description: t('industries.items.halalFood.description'),
      icon: UtensilsCrossed,
      color: '#D4AF37',
      marketSize: '$1.6 Trillion',
      growth: '9.8%',
      subSectors: [
        { icon: Cookie, title: isRTL ? 'الأغذية المعلبة الحلال' : 'Halal Packaged Foods', examples: [t('industries.examples.foodProducts'), 'Frozen', 'Snacks'] },
        { icon: Coffee, title: isRTL ? 'المشروبات الحلال' : 'Halal Beverages', examples: ['Juices', 'Coffee', 'Tea'] },
        { icon: Store, title: isRTL ? 'المطاعم الحلال' : 'Halal Restaurants', examples: [t('industries.examples.halalRestaurants'), 'Fast Casual', 'Fine Dining'] },
        { icon: Truck, title: isRTL ? 'توصيل الطعام' : 'Halal Food Delivery', examples: ['Apps', t('industries.examples.mealDelivery'), 'Catering'] }
      ],
      stats: [
        { value: '$1.6T', label: isRTL ? 'سوق الغذاء الحلال' : 'Global Halal Food Market' },
        { value: '23%', label: isRTL ? 'حصة سوق الغذاء' : 'World Food Market Share' },
        { value: '9.8%', label: isRTL ? 'معدل النمو' : 'Annual Growth Rate' },
        { value: '200+', label: isRTL ? 'جهات اعتماد' : 'Halal Certification Bodies' }
      ],
      influencers: isRTL ? '200+ مؤثر في الغذاء' : '200+ food and lifestyle Muslim influencers in our network'
    },
    {
      id: 'modest-fashion',
      title: t('industries.items.modestFashion.title'),
      description: t('industries.items.modestFashion.description'),
      icon: Shirt,
      color: '#2D6A4F',
      marketSize: '$295 Billion',
      growth: '5.6%',
      subSectors: [
        { icon: Diamond, title: isRTL ? 'علامات الحجاب' : 'Hijab Brands', examples: [t('industries.examples.hijabBrands'), 'Sports', 'Luxury'] },
        { icon: Scissors, title: isRTL ? 'الملابس المحتشمة' : 'Modest Clothing', examples: ['Abayas', 'Maxi Dresses', 'Modest Swimwear'] },
        { icon: Heart, title: isRTL ? 'الموضة الإسلامية' : 'Islamic Fashion', examples: [t('industries.examples.islamicFashion'), 'Jilbabs', 'Kaftans'] },
        { icon: Palette, title: isRTL ? 'مستحضرات التجميل' : 'Halal Cosmetics', examples: ['Makeup', 'Skincare', 'Fragrances'] }
      ],
      stats: [
        { value: '$295B', label: isRTL ? 'سوق الموضة المحتشمة' : 'Global Modest Fashion Market' },
        { value: '430M', label: isRTL ? 'مستهلك موضة' : 'Muslim Fashion Consumers' },
        { value: '5.6%', label: isRTL ? 'معدل النمو' : 'Annual Growth Rate' },
        { value: '$44B', label: isRTL ? 'حجم سوق تركيا' : 'Turkey Market Size' }
      ],
      influencers: isRTL ? '180+ مؤثر في الموضة' : '180+ fashion and beauty Muslim influencers in our network'
    },
    {
      id: 'muslim-travel',
      title: t('industries.items.muslimTravel.title'),
      description: t('industries.items.muslimTravel.description'),
      icon: Plane,
      color: '#40916C',
      marketSize: '$189 Billion',
      growth: '4.8%',
      subSectors: [
        { icon: Mountain, title: isRTL ? 'خدمات العمرة والحج' : 'Umrah & Hajj Services', examples: [t('industries.examples.umrahPackages'), 'Hajj', 'Visa'] },
        { icon: MapPin, title: isRTL ? 'السياحة الحلال' : 'Halal Tourism', examples: [t('industries.examples.halalTourism'), 'Cities', 'Tours'] },
        { icon: Tent, title: isRTL ? 'فنادق صديقة للمسلمين' : 'Muslim-Friendly Hotels', examples: [t('industries.examples.muslimHotels'), 'Prayer', 'Halal Dining'] },
        { icon: Compass, title: isRTL ? 'تجارب السفر' : 'Halal Travel Experiences', examples: ['Adventure', 'Cruises', 'Eco-Tourism'] }
      ],
      stats: [
        { value: '$189B', label: isRTL ? 'إنفاق المسافرين' : 'Muslim Travel Spending' },
        { value: '160M', label: isRTL ? 'مسافر سنوياً' : 'Muslim Travelers Annually' },
        { value: '4.8%', label: isRTL ? 'معدل النمو' : 'Annual Growth Rate' },
        { value: '130+', label: isRTL ? 'وجهة حلال' : 'Halal-Friendly Destinations' }
      ],
      influencers: isRTL ? '100+ مؤثر في السفر' : '100+ travel Muslim influencers in our network'
    },
    {
      id: 'halal-cosmetics',
      title: isRTL ? 'مستحضرات التجميل الحلال' : 'Halal Cosmetics',
      description: isRTL ? 'صناعة مستحضرات التجميل الحلال تلبي احتياجات المستهلكين المسلمين الذين يبحثون عن منتجات تجميل خالية من المكونات المحظورة ومنتجة وفقاً للمبادئ الإسلامية.' : 'The halal cosmetics industry addresses the needs of Muslim consumers seeking beauty products free from prohibited ingredients.',
      icon: Sparkles,
      color: '#74C69D',
      marketSize: '$52 Billion',
      growth: '12%',
      subSectors: [
        { icon: Flower2, title: isRTL ? 'مكياج حلال' : 'Halal Makeup', examples: ['Foundation', 'Lipstick', 'Eyeshadow'] },
        { icon: Droplets, title: isRTL ? 'منتجات صديقة للوضوء' : 'Wudhu-Friendly Products', examples: ['Breathable Polish', 'Water-Permeable'] },
        { icon: Leaf, title: isRTL ? 'منتجات طبيعية' : 'Natural & Organic Products', examples: ['Organic Skincare', 'Natural Hair Care'] },
        { icon: Rabbit, title: isRTL ? 'مستحضرات خالية من القسوة' : 'Cruelty-Free Cosmetics', examples: ['Vegan', 'Ethical Beauty'] }
      ],
      stats: [
        { value: '$52B', label: isRTL ? 'سوق مستحضرات الحلال' : 'Global Halal Cosmetics Market' },
        { value: '12%', label: isRTL ? 'معدل النمو' : 'Annual Growth Rate' },
        { value: '700+', label: isRTL ? 'علامة تجميل حلال' : 'Halal Beauty Brands' },
        { value: '89%', label: isRTL ? 'النساء يريدن حلال' : 'Muslim Women Want Halal Beauty' }
      ],
      influencers: isRTL ? '120+ مؤثر في الجمال' : '120+ beauty Muslim influencers in our network'
    }
  ]

  const globalRegions = [
    { region: isRTL ? 'الشرق الأوسط' : 'MENA', countries: '20+', population: isRTL ? '400M مسلم' : '400M Muslims' },
    { region: isRTL ? 'جنوب شرق آسيا' : 'Southeast Asia', countries: '10+', population: isRTL ? '250M مسلم' : '250M Muslims' },
    { region: isRTL ? 'جنوب آسيا' : 'South Asia', countries: '8+', population: isRTL ? '600M مسلم' : '600M Muslims' },
    { region: isRTL ? 'أوروبا' : 'Europe', countries: '15+', population: isRTL ? '50M مسلم' : '50M Muslims' },
    { region: isRTL ? 'أمريكا الشمالية' : 'North America', countries: '2', population: isRTL ? '10M مسلم' : '10M Muslims' },
    { region: isRTL ? 'أفريقيا جنوب الصحراء' : 'Sub-Saharan Africa', countries: '20+', population: isRTL ? '300M مسلم' : '300M Muslims' },
  ]

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              {t('industries.badge')}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('industries.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('industries.subtitle')}
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
                <Link href="/services">{isRTL ? 'عرض الخدمات' : 'View Services'}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all text-sm font-medium text-[#1B4332] ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <industry.icon className="h-4 w-4" />
                {industry.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industry Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${industry.color}15` }}
                >
                  <industry.icon className="h-7 w-7" style={{ color: industry.color }} />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
                {industry.title}
              </h2>
              <p className={`text-gray-600 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                {industry.description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {industry.stats.map((stat, i) => (
                <div key={i} className={`bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 ${isRTL ? 'text-right' : ''}`}>
                  <div className="text-2xl lg:text-3xl font-bold text-[#1B4332] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sub-sectors */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {industry.subSectors.map((sub, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30 transition-all ${isRTL ? 'text-right' : ''}`}
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${industry.color}15` }}
                    >
                      <sub.icon className="h-6 w-6" style={{ color: industry.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B4332] mb-2">{sub.title}</h3>
                      <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                        {sub.examples.map((example, j) => (
                          <span
                            key={j}
                            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA for Industry */}
            <div className={`flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-[#1B4332]/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Users className="h-8 w-8 text-[#D4AF37]" />
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-semibold text-[#1B4332]">{industry.influencers}</p>
                  <p className="text-sm text-gray-600">{t('industries.influencersReady')}</p>
                </div>
              </div>
              <Button
                asChild
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold"
              >
                <Link href="/#contact">
                  {t('industries.launchCampaign')} <ArrowRight className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ))}

      {/* Global Reach Section */}
      <section className="py-20 bg-[#1B4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('industries.globalReach.title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {t('industries.globalReach.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {globalRegions.map((item, i) => (
              <div key={i} className={`bg-white/10 rounded-xl p-6 text-center ${isRTL ? 'text-right' : ''}`}>
                <Globe className="h-8 w-8 text-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{item.region}</h3>
                <p className="text-sm text-gray-400">{item.countries} {isRTL ? 'دول' : 'countries'}</p>
                <p className="text-xs text-[#D4AF37] mt-2">{item.population}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#B8942C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">
            {isRTL ? 'ابحث عن شريك قطاعك' : 'Find Your Industry Partner'}
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            {isRTL ? 'مهما كان قطاعك الحلال، لدينا الخبرة وشبكة المؤثرين لمساعدة علامتك على النجاح.' : 'Whatever your halal industry, we have the expertise and influencer network to help your brand succeed.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8"
            >
              <Link href="/#contact">{isRTL ? 'ابدأ حملتك' : 'Start Your Campaign'}</Link>
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
