import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Users, TrendingUp, FileText, Lightbulb,
  Search, BarChart3, Shield, MessageSquare,
  Megaphone, Video, Camera, PenTool,
  Target, Compass, Zap, Award,
  CheckCircle, ArrowRight, Globe, Instagram
} from 'lucide-react'

const services = [
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    subtitle: 'Connect Authentically with Muslim Consumers',
    icon: Users,
    color: '#1B4332',
    description: 'Our flagship service connects halal brands with carefully vetted Muslim influencers who authentically represent your values. We manage every aspect of your influencer campaigns from discovery to delivery, ensuring maximum impact while maintaining strict Shariah compliance throughout the process.',
    features: [
      {
        icon: Search,
        title: 'Influencer Discovery & Vetting',
        description: 'We identify and thoroughly vet Muslim influencers whose values align with your brand. Our rigorous screening process evaluates authenticity, audience demographics, engagement rates, and content quality to ensure perfect brand-influencer matches.'
      },
      {
        icon: Target,
        title: 'Campaign Strategy & Management',
        description: 'From initial concept to final execution, we develop comprehensive influencer marketing strategies tailored to your brand objectives. Our team manages all campaign logistics, timelines, and deliverables for seamless execution.'
      },
      {
        icon: Shield,
        title: 'Halal Content Guidelines',
        description: 'Every piece of content is reviewed against our comprehensive halal content guidelines. We ensure all messaging, imagery, and partnerships align with Islamic values and your brand standards.'
      },
      {
        icon: BarChart3,
        title: 'Performance Analytics',
        description: 'Track your campaign success with detailed analytics and reporting. We provide real-time insights on reach, engagement, conversions, and ROI to measure and optimize campaign performance.'
      },
      {
        icon: MessageSquare,
        title: 'Influencer Relationship Management',
        description: 'We build and maintain long-term relationships with a network of 500+ verified Muslim influencers. Our dedicated team handles all communications, negotiations, and partnership development.'
      }
    ],
    benefits: [
      'Access to 500+ verified Muslim influencers',
      '100% Shariah-compliant campaigns',
      'Average 3.5x ROI on campaigns',
      'Multi-platform coverage (Instagram, TikTok, YouTube)',
      'Dedicated campaign manager'
    ]
  },
  {
    id: 'paid-advertising',
    title: 'Paid Advertising',
    subtitle: 'Targeted Halal Ads That Convert',
    icon: Megaphone,
    color: '#D4AF37',
    description: 'Reach your ideal Muslim audience through strategically crafted paid advertising campaigns across all major platforms. Our halal-compliant ad strategies ensure your message reaches the right people while maintaining ethical standards and maximizing your advertising budget.',
    features: [
      {
        icon: Instagram,
        title: 'Meta Ads (Facebook & Instagram)',
        description: 'Leverage the power of Meta advertising platform to reach Muslim consumers with precision targeting. We create compelling ad creatives and implement advanced audience segmentation for optimal performance.'
      },
      {
        icon: Video,
        title: 'TikTok Ads',
        description: 'Tap into the rapidly growing Muslim audience on TikTok with engaging video ads. Our creative team produces native content that resonates with younger Muslim demographics while maintaining halal standards.'
      },
      {
        icon: Globe,
        title: 'YouTube Ads',
        description: 'Connect with Muslim viewers through targeted YouTube advertising. From skippable ads to bumper ads, we create video content that captures attention and drives action.'
      },
      {
        icon: TrendingUp,
        title: 'Twitter/X Ads',
        description: 'Engage with the Muslim community on Twitter/X through promoted content and trends. We develop conversation-starting campaigns that amplify your brand message.'
      },
      {
        icon: Shield,
        title: 'Halal-Compliant Ad Strategies',
        description: 'All ad campaigns undergo our halal compliance review. We ensure targeting excludes inappropriate audiences and ad content maintains Islamic values throughout.'
      }
    ],
    benefits: [
      'Platform-specific optimization',
      'Advanced Muslim audience targeting',
      'A/B testing & optimization',
      'Real-time campaign monitoring',
      'Transparent reporting & analytics'
    ]
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    subtitle: 'Halal Content That Resonates',
    icon: FileText,
    color: '#2D6A4F',
    description: 'Create meaningful connections with Muslim consumers through authentic, value-driven content. Our content marketing services help halal brands tell their story in ways that resonate with Islamic values while driving engagement and building lasting relationships with your target audience.',
    features: [
      {
        icon: Lightbulb,
        title: 'Content Strategy',
        description: 'Develop a comprehensive content strategy aligned with your brand goals and Islamic values. We identify content opportunities, plan editorial calendars, and create content pillars that speak to Muslim consumers.'
      },
      {
        icon: PenTool,
        title: 'Halal Content Creation',
        description: 'Our team of Muslim content creators produces authentic, Shariah-compliant content. From blog posts to social media captions, every piece is crafted to resonate with your target audience.'
      },
      {
        icon: Video,
        title: 'Video Production',
        description: 'Engage your audience with professional video content. We produce everything from short-form social media videos to longer documentary-style content that tells your brand story.'
      },
      {
        icon: Camera,
        title: 'Photography',
        description: 'Professional photography services for product shoots, lifestyle imagery, and campaign visuals. Our photographers understand modesty requirements and cultural sensitivities.'
      },
      {
        icon: MessageSquare,
        title: 'Copywriting',
        description: 'Compelling copy that speaks to Muslim consumers authentically. Our copywriters craft messaging that converts while maintaining Islamic values and cultural relevance.'
      }
    ],
    benefits: [
      'Muslim content creators',
      'Culturally sensitive approach',
      'Multi-format content production',
      'SEO-optimized content',
      'Consistent brand voice'
    ]
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    subtitle: 'Position Your Halal Brand for Success',
    icon: Lightbulb,
    color: '#40916C',
    description: 'Build a strong foundation for your halal brand with strategic planning and positioning. Our brand strategy services help you define your unique value proposition, understand your Muslim target audience, and create a roadmap for sustainable growth in the global halal market.',
    features: [
      {
        icon: Target,
        title: 'Brand Positioning',
        description: 'Define your unique position in the halal market. We help you identify what sets your brand apart and develop positioning strategies that resonate with Muslim consumers.'
      },
      {
        icon: Compass,
        title: 'Market Research',
        description: 'Gain deep insights into the Muslim consumer market. Our research covers consumer behavior, preferences, trends, and opportunities specific to the halal industry.'
      },
      {
        icon: TrendingUp,
        title: 'Competitive Analysis',
        description: 'Understand your competition in the halal market space. We analyze competitor strategies, strengths, and weaknesses to identify opportunities for differentiation.'
      },
      {
        icon: Zap,
        title: 'Brand Identity Development',
        description: 'Create a compelling brand identity that speaks to Muslim values. From visual identity to brand voice, we develop cohesive brand elements that build trust and recognition.'
      },
      {
        icon: Award,
        title: 'Go-to-Market Strategy',
        description: 'Plan your market entry or expansion with a comprehensive go-to-market strategy. We identify the best channels, timing, and approaches for reaching Muslim consumers effectively.'
      }
    ],
    benefits: [
      'Deep halal market expertise',
      'Muslim consumer insights',
      'Differentiated positioning',
      'Actionable strategic roadmap',
      'Long-term growth planning'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Comprehensive Halal Marketing Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From influencer partnerships to brand strategy, we offer end-to-end marketing services
              designed specifically for brands targeting the global Muslim consumer market.
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
                <Link href="/company">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B4332] mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four core services designed to help halal brands connect authentically with Muslim consumers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#D4AF37]/30 transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-7 w-7" style={{ color: service.color }} />
                </div>
                <h3 className="font-semibold text-[#1B4332] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.subtitle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: service.color }} />
                  </div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Service {index + 1}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-[#D4AF37] font-medium mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <div className="bg-[#1B4332]/5 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-[#1B4332] mb-4">Key Benefits</h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold"
                >
                  <Link href="/#contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Features Grid */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}15` }}
                        >
                          <feature.icon className="h-5 w-5" style={{ color: service.color }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1B4332] mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-[#1B4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A proven approach to delivering successful halal marketing campaigns
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your brand, goals, and target Muslim audience' },
              { step: '02', title: 'Strategy', desc: 'We develop a customized halal marketing strategy' },
              { step: '03', title: 'Execution', desc: 'We implement campaigns with precision and care' },
              { step: '04', title: 'Optimization', desc: 'We continuously monitor and optimize for results' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-4">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#B8942C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">
            Ready to Grow Your Halal Brand?
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you connect authentically with Muslim consumers worldwide.
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
              <Link href="/industries">View Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
