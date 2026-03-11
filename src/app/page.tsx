import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Industries from '@/components/sections/Industries'
import HowItWorks from '@/components/sections/HowItWorks'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import Partners from '@/components/sections/Partners'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
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
