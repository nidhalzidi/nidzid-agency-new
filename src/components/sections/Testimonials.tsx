'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Marketing Director',
    company: 'Al-Noor Islamic Finance',
    location: 'Dubai, UAE',
    image: '👨‍💼',
    rating: 5,
    text: "NidZid Agency transformed our approach to Muslim consumers. Their deep understanding of Islamic values and authentic influencer partnerships helped us reach our target audience effectively. Our campaign ROI exceeded expectations by 200%.",
  },
  {
    name: 'Fatima Hassan',
    role: 'Brand Manager',
    company: 'Halal Foods International',
    location: 'London, UK',
    image: '👩‍💼',
    rating: 5,
    text: "Working with NidZid was a game-changer for our halal food brand. They connected us with Muslim food influencers who genuinely love our products. The authenticity in their content drove real engagement and sales.",
  },
  {
    name: 'Omar Ibrahim',
    role: 'CEO',
    company: 'Modest Fashion Co.',
    location: 'Kuala Lumpur, Malaysia',
    image: '👨‍💼',
    rating: 5,
    text: "The team at NidZid understands the modest fashion market like no other. They helped us build authentic relationships with hijabi influencers who truly represent our brand values. Sales increased by 150% in 3 months.",
  },
  {
    name: 'Sarah Mohamed',
    role: 'Digital Marketing Lead',
    company: 'Muslim Travel Hub',
    location: 'Istanbul, Turkey',
    image: '👩‍💼',
    rating: 5,
    text: "NidZid's expertise in Muslim travel marketing is exceptional. They found influencers who could authentically showcase halal-friendly destinations. Our booking rates doubled within the first quarter of our campaign.",
  },
  {
    name: 'Khalid Abdullah',
    role: 'Founder',
    company: 'Halal Cosmetics Brand',
    location: 'Riyadh, Saudi Arabia',
    image: '👨‍💼',
    rating: 5,
    text: "As a halal cosmetics brand, finding the right influencers was challenging. NidZid's network of beauty creators who understand wudhu-friendly products made all the difference. Highly recommend their services.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4332] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from brands that have successfully connected with Muslim consumers through our halal influencer marketing campaigns.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-[#D4AF37]/20 bg-gradient-to-br from-[#1B4332]/5 to-transparent">
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-[#1B4332]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1B4332] flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <div className="font-bold text-[#1B4332] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
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
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
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
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-[#1B4332] flex items-center justify-center hover:bg-[#1B4332] hover:text-white text-[#1B4332] transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
