'use client'

const partnerCategories = [
  {
    title: 'Islamic Finance',
    icon: '🏦',
    partners: ['Al Rayan Bank', 'Gatehouse Bank', 'Wahed Invest', 'Ethis Technologies', 'Blossom Finance']
  },
  {
    title: 'Halal Food & Beverage',
    icon: '🍖',
    partners: ['Halal Guys', 'Saffron Road', 'Midamar Foods', 'Halal Certified Brands', 'One Stop Halal']
  },
  {
    title: 'Modest Fashion',
    icon: '👗',
    partners: ['Modanisa', 'Haute Hijab', 'Aab Collection', 'Shukr Clothing', 'Annah Hariri']
  },
  {
    title: 'Muslim Travel',
    icon: '✈️',
    partners: ['Halal Trip', 'Crescent Rating', 'Muslim Friendly Hotels', 'Umrah Packages Co.', 'Salam Travel']
  },
  {
    title: 'Halal Cosmetics',
    icon: '💄',
    partners: ['Sampure Minerals', 'PHB Ethical Beauty', 'Halal Beauty', 'Iba Halal Care', 'Wardah Cosmetics']
  },
  {
    title: 'Islamic Education',
    icon: '📚',
    partners: ['Quran Academy', 'Islamic Online University', 'Bayyinah Institute', 'Islamic Learning', 'Muslim Pro App']
  },
]

export default function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            Trusted Partners
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            Brands We've Worked With
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading halal brands across industries to create impactful campaigns that resonate with Muslim consumers.
          </p>
        </div>

        {/* Partner Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-bold text-[#1B4332] text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Partners List */}
              <ul className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">100+</div>
            <div className="text-sm text-gray-600">Brand Partners</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">25+</div>
            <div className="text-sm text-gray-600">Countries Served</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">$10M+</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-[#1B4332]/5">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">50M+</div>
            <div className="text-sm text-gray-600">Audience Reached</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to join our growing list of successful brand partnerships?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold rounded-lg transition-colors"
          >
            Start Your Campaign Today
          </a>
        </div>
      </div>
    </section>
  )
}
