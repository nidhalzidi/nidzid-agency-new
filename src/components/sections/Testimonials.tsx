'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'

export default function Testimonials() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: isRTL ? 'أحمد الراشد' : 'Ahmed Al-Rashid',
      role: isRTL ? 'مدير التسويق' : 'Marketing Director',
      company: isRTL ? 'النور للتمويل الإسلامي' : 'Al-Noor Islamic Finance',
      location: isRTL ? 'دبي، الإمارات' : 'Dubai, UAE',
      image: '👨‍💼',
      rating: 5,
      text: isRTL 
        ? 'حوّلت وكالة نضال زيد نهجنا في التعامل مع المستهلكين المسلمين. فهمهم العميق للقيم الإسلامية وشراكات المؤثرين الأصيلة ساعدتنا على الوصول إلى جمهورنا المستهدف بفعالية. تجاوز عائد الاستثمار في حملتنا التوقعات بنسبة 200%.'
        : "NidZid Agency transformed our approach to Muslim consumers. Their deep understanding of Islamic values and authentic influencer partnerships helped us reach our target audience effectively. Our campaign ROI exceeded expectations by 200%.",
    },
    {
      name: isRTL ? 'فاطمة حسن' : 'Fatima Hassan',
      role: isRTL ? 'مديرة العلامة' : 'Brand Manager',
      company: isRTL ? 'الأغذية الحلال الدولية' : 'Halal Foods International',
      location: isRTL ? 'لندن، بريطانيا' : 'London, UK',
      image: '👩‍💼',
      rating: 5,
      text: isRTL
        ? 'العمل مع نضال زيد كان نقطة تحول لعلامتنا الغذائية الحلال. ربطونا بمؤثري الطعام المسلمين الذين يحبون منتجاتنا بصدق. الأصالة في محتواهم دفعت المشاركة والمبيعات الحقيقية.'
        : "Working with NidZid was a game-changer for our halal food brand. They connected us with Muslim food influencers who genuinely love our products. The authenticity in their content drove real engagement and sales.",
    },
    {
      name: isRTL ? 'عمر إبراهيم' : 'Omar Ibrahim',
      role: isRTL ? 'الرئيس التنفيذي' : 'CEO',
      company: isRTL ? 'شركة الموضة المحتشمة' : 'Modest Fashion Co.',
      location: isRTL ? 'كوالالمبور، ماليزيا' : 'Kuala Lumpur, Malaysia',
      image: '👨‍💼',
      rating: 5,
      text: isRTL
        ? 'فريق نضال زيد يفهم سوق الموضة المحتشمة مثل لا أحد غيرهم. ساعدونا على بناء علاقات أصيلة مع مؤثرات الحجاب اللواتي يمثلن قيم علامتنا بصدق. زادت المبيعات بنسبة 150% في 3 أشهر.'
        : "The team at NidZid understands the modest fashion market like no other. They helped us build authentic relationships with hijabi influencers who truly represent our brand values. Sales increased by 150% in 3 months.",
    },
    {
      name: isRTL ? 'سارة محمد' : 'Sarah Mohamed',
      role: isRTL ? 'قائدة التسويق الرقمي' : 'Digital Marketing Lead',
      company: isRTL ? 'محور السفر الإسلامي' : 'Muslim Travel Hub',
      location: isRTL ? 'إسطنبول، تركيا' : 'Istanbul, Turkey',
      image: '👩‍💼',
      rating: 5,
      text: isRTL
        ? 'خبرة نضال زيد في تسويق السفر الإسلامي استثنائية. وجدوا مؤثرين يمكنهم عرض الوجهات الصديقة للحلال بأصالة. تضاعفت معدلات حجزنا خلال الربع الأول من حملتنا.'
        : "NidZid's expertise in Muslim travel marketing is exceptional. They found influencers who could authentically showcase halal-friendly destinations. Our booking rates doubled within the first quarter of our campaign.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className={`py-20 lg:py-28 bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-4">
            {isRTL ? 'الشهادات' : 'Testimonials'}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL 
              ? 'اسمع من العلامات التجارية التي تواصلت بنجاح مع المستهلكين المسلمين من خلال حملات تسويق المؤثرين الحلال.'
              : 'Hear from brands that have successfully connected with Muslim consumers through our halal influencer marketing campaigns.'
            }
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-[#D4AF37]/20 bg-gradient-to-br from-[#1B4332]/5 to-transparent">
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className={`w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6 ${isRTL ? 'ml-auto' : ''}`}>
                <Quote className="h-6 w-6 text-[#1B4332]" />
              </div>

              {/* Rating */}
              <div className={`flex gap-1 mb-6 ${isRTL ? 'justify-end' : ''}`}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}>
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-start' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-[#1B4332] flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <div className="font-bold text-[#1B4332] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} {isRTL ? 'في' : 'at'} {testimonials[currentIndex].company}
                  </div>
                  <div className="text-sm text-gray-500">
                    📍 {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={isRTL ? nextTestimonial : prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronLeft className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#D4AF37] w-6'
                      : 'bg-gray-300 hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={isRTL ? prevTestimonial : nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
