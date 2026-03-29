import dynamic from 'next/dynamic'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'

// Dynamically import below-the-fold components for better initial load time
// These components will be loaded on-demand as the user scrolls
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), {
  loading: () => <section className="py-20 bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] min-h-[400px]" />,
  ssr: true, // Keep SSR for SEO
})

const Industries = dynamic(() => import('@/components/sections/Industries'), {
  loading: () => <section className="py-20 bg-white min-h-[400px]" />,
  ssr: true,
})

const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), {
  loading: () => <section className="py-20 bg-gray-50 min-h-[400px]" />,
  ssr: true,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <section className="py-20 bg-gray-50 min-h-[400px]" />,
  ssr: true,
})

const Partners = dynamic(() => import('@/components/sections/Partners'), {
  loading: () => <section className="py-20 bg-white min-h-[300px]" />,
  ssr: true,
})

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <section className="py-20 bg-gray-50 min-h-[400px]" />,
  ssr: true,
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <section className="py-20 bg-gray-50 min-h-[400px]" />,
  ssr: true,
})

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <footer className="bg-[#1B4332] min-h-[200px]" />,
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Above the fold - Critical components loaded immediately */}
      <Header />
      <Hero />
      <Stats />
      <Services />
      
      {/* Below the fold - Loaded dynamically */}
      <WhyChooseUs />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
