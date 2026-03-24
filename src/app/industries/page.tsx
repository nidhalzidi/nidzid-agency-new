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

const industries = [
  {
    id: 'islamic-finance',
    title: 'Islamic Finance',
    subtitle: 'Trusted Marketing for Faith-Based Financial Services',
    icon: Building2,
    color: '#1B4332',
    marketSize: '$3.8 Trillion',
    growth: '14% Annual Growth',
    description: 'The Islamic finance industry represents one of the fastest-growing sectors in global finance, with assets projected to reach $3.8 trillion by 2024. Muslim consumers actively seek financial services that align with their faith, creating tremendous opportunities for Shariah-compliant financial institutions. Our specialized marketing approaches help Islamic banks, investment firms, and insurance companies connect with devout Muslim consumers who prioritize religious compliance in their financial decisions.',
    subSectors: [
      {
        icon: Landmark,
        title: 'Islamic Banking',
        description: 'Full-service banking solutions that comply with Shariah principles, avoiding interest (riba) and prohibited investments. We help Islamic banks communicate their unique value propositions to Muslim consumers seeking ethical financial alternatives.',
        examples: ['Savings Accounts', 'Home Financing', 'Auto Financing', 'Business Loans']
      },
      {
        icon: TrendingUp,
        title: 'Halal Investments',
        description: 'Investment products screened for Shariah compliance, including stocks, mutual funds, and real estate. We create campaigns that educate Muslim investors about ethical investment opportunities.',
        examples: ['Halal ETFs', 'Mutual Funds', 'Real Estate', 'Private Equity']
      },
      {
        icon: Shield,
        title: 'Takaful Insurance',
        description: 'Islamic insurance based on cooperation and shared responsibility. Our marketing strategies help Takaful providers reach Muslim families seeking protection aligned with their values.',
        examples: ['Family Takaful', 'Health Takaful', 'Motor Takaful', 'Travel Takaful']
      },
      {
        icon: FileText,
        title: 'Sukuk Bonds',
        description: 'Islamic bonds that represent ownership in tangible assets rather than debt. We develop campaigns for institutions offering Sukuk products to retail and institutional investors.',
        examples: ['Corporate Sukuk', 'Government Sukuk', 'Green Sukuk', 'Retail Sukuk']
      }
    ],
    stats: [
      { value: '$3.8T', label: 'Global Islamic Finance Assets' },
      { value: '1.8B', label: 'Muslim Population Served' },
      { value: '14%', label: 'Annual Growth Rate' },
      { value: '75+', label: 'Countries with Islamic Finance' }
    ],
    influencers: '150+ finance-focused Muslim influencers in our network'
  },
  {
    id: 'halal-food',
    title: 'Halal Food',
    subtitle: 'Authentic Marketing for the Global Halal Food Industry',
    icon: UtensilsCrossed,
    color: '#D4AF37',
    marketSize: '$1.6 Trillion',
    growth: '9.8% Annual Growth',
    description: 'The global halal food market continues to expand rapidly, driven by a growing Muslim population and increasing awareness of halal certification among non-Muslim consumers. From packaged foods to restaurant chains, halal food brands need marketing strategies that resonate with diverse consumer segments while maintaining the integrity of halal certification. Our expertise in halal food marketing helps brands navigate cultural nuances and build authentic connections.',
    subSectors: [
      {
        icon: Cookie,
        title: 'Halal Packaged Foods',
        description: 'Ready-to-eat and packaged food products with halal certification. We help food brands communicate their halal credentials and quality to Muslim consumers across global markets.',
        examples: ['Snacks', 'Frozen Foods', 'Canned Goods', 'Condiments']
      },
      {
        icon: Coffee,
        title: 'Halal Beverages',
        description: 'Non-alcoholic beverages and drinks produced under halal standards. Our campaigns highlight quality and halal integrity for beverage brands targeting Muslim consumers.',
        examples: ['Juices', 'Soft Drinks', 'Coffee', 'Tea & Infusions']
      },
      {
        icon: Store,
        title: 'Halal Restaurants',
        description: 'Dining establishments serving halal-certified cuisine. We drive foot traffic and online orders through targeted local and regional marketing campaigns.',
        examples: ['Fine Dining', 'Fast Casual', 'Food Courts', 'Cloud Kitchens']
      },
      {
        icon: Truck,
        title: 'Halal Food Delivery',
        description: 'Platforms and services delivering halal meals to consumers. Our marketing strategies help delivery services acquire and retain Muslim customers.',
        examples: ['Delivery Apps', 'Meal Kits', 'Catering', 'Subscription Boxes']
      }
    ],
    stats: [
      { value: '$1.6T', label: 'Global Halal Food Market' },
      { value: '23%', label: 'World Food Market Share' },
      { value: '9.8%', label: 'Annual Growth Rate' },
      { value: '200+', label: 'Halal Certification Bodies' }
    ],
    influencers: '200+ food and lifestyle Muslim influencers in our network'
  },
  {
    id: 'modest-fashion',
    title: 'Modest Fashion',
    subtitle: 'Stylish Marketing for the Modern Modest Consumer',
    icon: Shirt,
    color: '#2D6A4F',
    marketSize: '$295 Billion',
    growth: '5.6% Annual Growth',
    description: 'Modest fashion has evolved from a niche market to a global phenomenon, with Muslim consumers leading the charge for stylish, faith-aligned clothing. The modest fashion market appeals not only to Muslim women but to consumers of various faiths and backgrounds seeking elegant, covered clothing options. Our deep understanding of modest fashion trends and consumer preferences enables us to create compelling campaigns that drive brand awareness and sales.',
    subSectors: [
      {
        icon: Diamond,
        title: 'Hijab Brands',
        description: 'Specialized brands offering hijabs, scarves, and head coverings in various styles and materials. We help hijab brands showcase their collections through authentic influencer partnerships.',
        examples: ['Everyday Hijabs', 'Sports Hijabs', 'Luxury Scarves', 'Occasion Wear']
      },
      {
        icon: Scissors,
        title: 'Modest Clothing',
        description: 'Fashion brands specializing in covered, stylish clothing for men and women. Our marketing showcases the intersection of modesty and contemporary fashion.',
        examples: ['Abayas', 'Maxi Dresses', 'Modest Swimwear', 'Activewear']
      },
      {
        icon: Heart,
        title: 'Islamic Fashion',
        description: 'Traditional and contemporary Islamic clothing for religious occasions and everyday wear. We create campaigns that celebrate Islamic heritage while appealing to modern consumers.',
        examples: ['Thobes', 'Jilbabs', 'Kaftans', 'Prayer Wear']
      },
      {
        icon: Palette,
        title: 'Halal Cosmetics',
        description: 'Beauty products formulated without alcohol and animal-derived ingredients, suitable for Muslim consumers. Our beauty marketing expertise helps halal cosmetic brands reach their target audience.',
        examples: ['Makeup', 'Skincare', 'Fragrances', 'Personal Care']
      }
    ],
    stats: [
      { value: '$295B', label: 'Global Modest Fashion Market' },
      { value: '430M', label: 'Muslim Fashion Consumers' },
      { value: '5.6%', label: 'Annual Growth Rate' },
      { value: '$44B', label: 'Turkey Market Size' }
    ],
    influencers: '180+ fashion and beauty Muslim influencers in our network'
  },
  {
    id: 'muslim-travel',
    title: 'Muslim Travel',
    subtitle: 'Marketing for the Global Muslim Tourism Industry',
    icon: Plane,
    color: '#40916C',
    marketSize: '$189 Billion',
    growth: '4.8% Annual Growth',
    description: 'Muslim travelers represent one of the fastest-growing tourism segments globally, with unique needs including halal food, prayer facilities, and family-friendly accommodations. The halal travel industry has responded with innovative products and services catering to these requirements. Our marketing expertise helps travel brands effectively reach Muslim travelers seeking faith-friendly travel experiences.',
    subSectors: [
      {
        icon: Mountain,
        title: 'Umrah & Hajj Services',
        description: 'Pilgrimage travel services for Muslims undertaking Umrah or Hajj. We help travel agencies and tour operators connect with pilgrims seeking comprehensive pilgrimage packages.',
        examples: ['Umrah Packages', 'Hajj Services', 'Visa Assistance', 'Guided Tours']
      },
      {
        icon: MapPin,
        title: 'Halal Tourism',
        description: 'Destinations and experiences designed with Muslim travelers in mind. Our destination marketing helps halal-friendly locations attract Muslim tourists.',
        examples: ['Halal Resorts', 'Muslim-Friendly Cities', 'Cultural Tours', 'Theme Parks']
      },
      {
        icon: Tent,
        title: 'Muslim-Friendly Hotels',
        description: 'Accommodations offering halal amenities such as prayer rooms, Qibla directions, and gender-segregated facilities. We help hotels market their Muslim-friendly features.',
        examples: ['Prayer Facilities', 'Halal Dining', 'Family Suites', 'Women-Only Floors']
      },
      {
        icon: Compass,
        title: 'Halal Travel Experiences',
        description: 'Curated travel experiences designed for Muslim travelers. Our campaigns showcase unique experiences that combine adventure with faith compliance.',
        examples: ['Adventure Travel', 'Cruises', 'Eco-Tourism', 'Heritage Tours']
      }
    ],
    stats: [
      { value: '$189B', label: 'Muslim Travel Spending' },
      { value: '160M', label: 'Muslim Travelers Annually' },
      { value: '4.8%', label: 'Annual Growth Rate' },
      { value: '130+', label: 'Halal-Friendly Destinations' }
    ],
    influencers: '100+ travel Muslim influencers in our network'
  },
  {
    id: 'halal-cosmetics',
    title: 'Halal Cosmetics',
    subtitle: 'Beautiful Marketing for Ethical Beauty Brands',
    icon: Sparkles,
    color: '#74C69D',
    marketSize: '$52 Billion',
    growth: '12% Annual Growth',
    description: 'The halal cosmetics industry addresses the needs of Muslim consumers seeking beauty products free from prohibited ingredients and produced according to Islamic principles. Beyond religious compliance, halal cosmetics often appeal to consumers seeking ethical, cruelty-free, and natural beauty alternatives. Our beauty marketing expertise helps halal cosmetic brands build authentic connections with conscious consumers.',
    subSectors: [
      {
        icon: Flower2,
        title: 'Halal Makeup',
        description: 'Cosmetics formulated without alcohol, pork derivatives, and other prohibited ingredients. We help makeup brands reach Muslim beauty enthusiasts seeking ethical alternatives.',
        examples: ['Foundation', 'Lipstick', 'Eyeshadow', 'Mascara']
      },
      {
        icon: Droplets,
        title: 'Wudhu-Friendly Products',
        description: 'Water-permeable nail polish and cosmetics suitable for prayer. Our campaigns highlight this unique selling proposition for Muslim consumers.',
        examples: ['Breathable Nail Polish', 'Water-Permeable Makeup', 'Prayer-Safe Products']
      },
      {
        icon: Leaf,
        title: 'Natural & Organic Products',
        description: 'Beauty products made with natural, organic ingredients that align with halal principles. We position natural beauty brands for Muslim consumers seeking clean beauty.',
        examples: ['Organic Skincare', 'Natural Hair Care', 'Herbal Products', 'Essential Oils']
      },
      {
        icon: Rabbit,
        title: 'Cruelty-Free Cosmetics',
        description: 'Beauty products not tested on animals, a principle that aligns with Islamic values of compassion. We help cruelty-free brands connect with values-driven consumers.',
        examples: ['Vegan Cosmetics', 'Cruelty-Free Skincare', 'Ethical Beauty', 'Sustainable Products']
      }
    ],
    stats: [
      { value: '$52B', label: 'Global Halal Cosmetics Market' },
      { value: '12%', label: 'Annual Growth Rate' },
      { value: '700+', label: 'Halal Beauty Brands' },
      { value: '89%', label: 'Muslim Women Want Halal Beauty' }
    ],
    influencers: '120+ beauty Muslim influencers in our network'
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Specialized Halal Marketing for Every Sector
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Deep expertise across the five pillars of the Islamic economy, helping brands connect
              with Muslim consumers in their specific industry verticals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold px-8"
              >
                <Link href="/#contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all text-sm font-medium text-[#1B4332]"
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
              <p className="text-lg text-[#D4AF37] font-medium mb-4">{industry.subtitle}</p>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {industry.description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {industry.stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
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
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${industry.color}15` }}
                    >
                      <sub.icon className="h-6 w-6" style={{ color: industry.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1B4332] mb-2">{sub.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{sub.description}</p>
                      <div className="flex flex-wrap gap-2">
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-[#1B4332]/5">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-[#1B4332]">{industry.influencers}</p>
                  <p className="text-sm text-gray-600">Ready to promote your brand</p>
                </div>
              </div>
              <Button
                asChild
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold"
              >
                <Link href="/#contact">
                  Launch Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Global Reach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Serving halal brands across the world's major Muslim markets
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { region: 'MENA', countries: '20+', population: '400M Muslims' },
              { region: 'Southeast Asia', countries: '10+', population: '250M Muslims' },
              { region: 'South Asia', countries: '8+', population: '600M Muslims' },
              { region: 'Europe', countries: '15+', population: '50M Muslims' },
              { region: 'North America', countries: '2', population: '10M Muslims' },
              { region: 'Sub-Saharan Africa', countries: '20+', population: '300M Muslims' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-center">
                <Globe className="h-8 w-8 text-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">{item.region}</h3>
                <p className="text-sm text-gray-400">{item.countries} countries</p>
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
            Find Your Industry Partner
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            Whatever your halal industry, we have the expertise and influencer network to help your brand succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold px-8"
            >
              <Link href="/#contact">Start Your Campaign</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
