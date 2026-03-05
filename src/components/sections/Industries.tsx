'use client'

import { Card, CardContent } from '@/components/ui/card'

const industries = [
  {
    icon: '🏦',
    title: 'Islamic Finance',
    description: 'Connect with Muslim consumers seeking Shariah-compliant banking, insurance, and investment products.',
    examples: ['Islamic Banks', 'Takaful Insurance', 'Halal Investments'],
  },
  {
    icon: '🍖',
    title: 'Halal Food & Beverage',
    description: 'Promote halal-certified food products, restaurants, and delivery services to conscious Muslim consumers.',
    examples: ['Halal Restaurants', 'Food Products', 'Meal Delivery'],
  },
  {
    icon: '👗',
    title: 'Modest Fashion',
    description: 'Showcase hijab, abaya, and modest clothing brands to fashion-conscious Muslim women and men.',
    examples: ['Hijab Brands', 'Modest Wear', 'Islamic Fashion'],
  },
  {
    icon: '✈️',
    title: 'Muslim Travel & Tourism',
    description: 'Market halal-friendly travel destinations, hotels, and tour packages to Muslim travelers worldwide.',
    examples: ['Halal Tourism', 'Muslim-Friendly Hotels', 'Umrah Packages'],
  },
  {
    icon: '💄',
    title: 'Halal Cosmetics',
    description: 'Promote halal-certified and vegan beauty products to Muslim consumers seeking ethical alternatives.',
    examples: ['Halal Makeup', 'Wudhu-Friendly', 'Natural Beauty'],
  },
  {
    icon: '📚',
    title: 'Islamic Education',
    description: 'Reach Muslim families seeking quality Islamic education, Quran learning, and Arabic language programs.',
    examples: ['Online Quran', 'Islamic Schools', 'Arabic Learning'],
  },
  {
    icon: '🏥',
    title: 'Halal Healthcare',
    description: 'Connect Muslim consumers with halal-certified pharmaceuticals, supplements, and healthcare services.',
    examples: ['Halal Vitamins', 'Muslim Doctors', 'Islamic Counseling'],
  },
  {
    icon: '🏠',
    title: 'Islamic Lifestyle',
    description: 'Market Islamic home products, prayer essentials, and lifestyle brands to Muslim households.',
    examples: ['Prayer Mats', 'Islamic Decor', 'Muslim Family'],
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            Industries We Serve
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            Expertise Across Halal Sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From Islamic finance to modest fashion, we have deep experience connecting brands with Muslim consumers across diverse industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-6 text-center">
                {/* Emoji Icon */}
                <div className="text-4xl mb-4">{industry.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1B4332] mb-2">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Examples */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {industry.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-[#1B4332]/10 group-hover:text-[#1B4332] transition-colors"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">$2T+</div>
            <div className="text-sm text-gray-600">Global Halal Market</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">2B+</div>
            <div className="text-sm text-gray-600">Muslim Consumers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2">11%</div>
            <div className="text-sm text-gray-600">Annual Growth Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
