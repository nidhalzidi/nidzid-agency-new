import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import {
  Users, Target, Heart, Shield, Lightbulb, Award,
  CheckCircle, ArrowRight, Globe, Building, Rocket,
  Star, Zap, Eye, HandHeart, Scale, BookOpen,
  MapPin, Phone, Mail, Linkedin, Facebook, Instagram
} from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Shariah Compliance',
    arabic: 'الالتزام الشرعي',
    description: 'Every campaign we create undergoes rigorous Shariah compliance review. We ensure that all marketing activities, influencer partnerships, and content creation align with Islamic principles and values. Our commitment to halal practices is non-negotiable and forms the foundation of everything we do.',
    color: '#1B4332'
  },
  {
    icon: Heart,
    title: 'Authenticity',
    arabic: 'الأصالة',
    description: 'We believe in genuine connections between brands and consumers. Our influencer partnerships are built on real relationships and shared values, not just transactional arrangements. We carefully match brands with influencers who genuinely resonate with their message and can authentically represent their products.',
    color: '#D4AF37'
  },
  {
    icon: Star,
    title: 'Excellence',
    arabic: 'التميز',
    description: 'We strive for excellence in every campaign, every partnership, and every interaction. Our team is dedicated to delivering results that exceed expectations while maintaining the highest standards of quality and professionalism. We measure success not just by metrics, but by the lasting impact we create.',
    color: '#2D6A4F'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    arabic: 'الابتكار',
    description: 'The halal marketing landscape is constantly evolving, and so are we. We embrace new platforms, technologies, and strategies to keep our clients ahead of the curve. Our innovative approaches help brands stand out in a crowded market while maintaining their values.',
    color: '#40916C'
  },
  {
    icon: Scale,
    title: 'Integrity',
    arabic: 'النزاهة',
    description: 'Trust is the cornerstone of our business. We operate with complete transparency, honest communication, and ethical practices. Our clients trust us with their brands, and we honor that trust by always acting in their best interests and maintaining the highest ethical standards.',
    color: '#74C69D'
  }
]

const milestones = [
  {
    year: '2023',
    title: 'Agency Founded',
    description: 'NidZid Agency was established with a vision to serve the global halal market with authentic influencer marketing services.'
  },
  {
    year: '2023',
    title: 'First Major Campaign',
    description: 'Successfully launched our first major halal brand campaign, reaching over 2 million Muslim consumers across MENA region.'
  },
  {
    year: '2024',
    title: 'Network Expansion',
    description: 'Grew our influencer network to 500+ verified Muslim content creators across Instagram, TikTok, YouTube, and LinkedIn.'
  },
  {
    year: '2024',
    title: 'Dubai Office Launch',
    description: 'Expanded operations to Dubai, UAE to better serve GCC clients and strengthen our presence in the Middle East.'
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Recognized as a leading halal marketing agency, partnering with major Islamic finance and halal food brands.'
  }
]

const team = [
  {
    name: 'Nidhal Zidi',
    role: 'Founder & CEO',
    bio: 'Marketing strategist with extensive experience in the MENA region. Founded NidZid Agency to fill a critical gap in halal influencer marketing.',
    location: 'Tunisia & UAE',
    linkedin: 'https://www.linkedin.com/in/nidhal-zidi/',
    initials: 'NZ'
  }
]

const achievements = [
  { value: '500+', label: 'Muslim Influencers', icon: Users },
  { value: '50+', label: 'Brands Served', icon: Building },
  { value: '2M+', label: 'Consumers Reached', icon: Globe },
  { value: '5+', label: 'Industries Served', icon: Target }
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-image.png')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-medium mb-6">
              Our Company
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Pioneering Halal Influencer Marketing
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              "نِضَال و زِيد" - Together We Rise
            </p>
            <p className="text-lg text-gray-300 mb-8">
              The first dedicated halal influencer marketing agency, connecting authentic brands
              with Muslim consumers worldwide through Shariah-compliant marketing solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold px-8"
              >
                <Link href="/#contact">Work With Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] rounded-2xl p-8 lg:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                To empower halal brands with authentic, Shariah-compliant marketing solutions that
                connect them meaningfully with Muslim consumers worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We strive to be the trusted bridge between brands and the $2 trillion global Muslim
                consumer market, enabling businesses to reach this underserved demographic while
                maintaining the highest standards of Islamic ethics and values.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl p-8 lg:p-10 text-[#1B4332]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1B4332] rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                To become the world's leading halal influencer marketing agency, recognized for
                excellence, integrity, and authentic connections.
              </p>
              <p className="opacity-80 leading-relaxed">
                We envision a future where every halal brand has access to world-class marketing
                services that respect their values, and where Muslim consumers are engaged
                authentically by brands that understand and honor their faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              NidZid Agency was born from a simple observation: Muslim consumers were being underserved
              by mainstream marketing agencies who didn't understand their unique values, preferences,
              and communication styles. We saw an opportunity to create something different.
            </p>
          </div>

          <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
            <p className="mb-6 leading-relaxed">
              Our name "NidZid" (نِضَال و زِيد) comes from Arabic, meaning "We Strive" and "We Add Value" —
              reflecting our commitment to going above and beyond for our clients while staying true to
              Islamic principles of ethical business conduct. This dual meaning captures the essence of
              who we are: a team that works tirelessly to deliver exceptional results while maintaining
              the highest ethical standards.
            </p>
            <p className="mb-6 leading-relaxed">
              Founded by Nidhal Zidi, a marketing professional with deep roots in both Tunisia and the
              UAE, NidZid Agency combines global marketing expertise with authentic understanding of
              Muslim consumer behavior across diverse cultures and regions. Our team understands the
              nuances of reaching Muslim audiences because we are part of that community ourselves.
            </p>
            <p className="leading-relaxed">
              Today, we work with halal brands across five major industries — Islamic finance, halal food,
              modest fashion, Muslim travel, and halal cosmetics — helping them navigate the complexities
              of marketing to Muslim consumers while maintaining authenticity and Shariah compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-[#1B4332]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-1">{item.value}</div>
                <div className="text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide every decision we make and every campaign we run
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-[#D4AF37]/30"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="h-7 w-7" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1B4332] mb-1">{value.title}</h3>
                <p className="text-sm text-[#D4AF37] mb-3 font-medium">{value.arabic}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Business Principles */}
      <section className="py-20 bg-[#1B4332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Islamic Business Principles</h2>
            <p className="text-gray-300">
              As a Muslim-owned agency, we operate according to Islamic business ethics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { arabic: 'الصدق', title: 'Honesty (Sidq)', desc: 'Transparent in all dealings, never misleading clients or consumers' },
              { arabic: 'العدل', title: 'Fairness (Adl)', desc: 'Treating all parties fairly and justly in business relationships' },
              { arabic: 'الأمانة', title: 'Trust (Amanah)', desc: 'Fulfilling commitments and protecting confidential information' },
              { arabic: 'الإحسان', title: 'Excellence (Ihsan)', desc: 'Striving for excellence in every campaign we deliver' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold text-[#D4AF37] mb-2">{item.arabic}</p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D4AF37]/30" />
              {milestones.map((milestone, i) => (
                <div key={i} className="relative flex gap-6 mb-8 last:mb-0">
                  <div className="w-16 h-16 rounded-full bg-[#1B4332] flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-[#D4AF37] font-bold">{milestone.year}</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
                    <h3 className="font-semibold text-[#1B4332] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">Our Leadership</h2>
            <p className="text-gray-600">The people driving our mission forward</p>
          </div>

          <div className="max-w-xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-[#1B4332] mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#1B4332] hover:bg-[#2D6A4F] flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:nidhalzidi@nidzid.site"
                    className="w-10 h-10 rounded-lg bg-[#D4AF37] hover:bg-[#B8942C] flex items-center justify-center transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#1B4332]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">Our Locations</h2>
            <p className="text-gray-600">Serving clients across multiple regions from our strategic offices</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-5xl mb-4">🇹🇳</div>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">Tunisia Office</h3>
              <p className="text-gray-600 mb-4">Sousse, Tunisia</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  +216 22 607 030
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  Serving North Africa & Europe
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-5xl mb-4">🇦🇪</div>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">UAE Office</h3>
              <p className="text-gray-600 mb-4">Dubai, United Arab Emirates</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  +971 52 450 5803
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#D4AF37]" />
                  Serving GCC & Asia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#D4AF37] to-[#B8942C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-[#1B4332]/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how NidZid Agency can help your halal brand connect authentically with Muslim consumers worldwide.
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
