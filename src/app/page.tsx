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

// JSON-LD Structured Data for SEO and AI/GEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nidzid.site/#organization",
      "name": "NidZid Agency",
      "alternateName": "NidZid Halal Influencer Marketing Agency",
      "url": "https://nidzid.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nidzid.site/nidzid-logo.png",
        "width": 1200,
        "height": 630,
      },
      "description": "First dedicated halal influencer marketing agency connecting brands with Muslim consumers through Shariah-compliant marketing campaigns.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Nidhal Zidi",
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE",
          "addressRegion": "GCC & Asia",
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Sousse",
          "addressCountry": "TN",
          "addressRegion": "North Africa & Europe",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971-52-450-5803",
          "contactType": "sales",
          "availableLanguage": ["English", "Arabic", "French"],
          "areaServed": "GCC",
        },
        {
          "@type": "ContactPoint",
          "telephone": "+216-22-607-030",
          "contactType": "sales",
          "availableLanguage": ["English", "Arabic", "French"],
          "areaServed": "North Africa",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/in/nidhal-zidi/",
      ],
      "knowsAbout": [
        "Halal Influencer Marketing",
        "Islamic Marketing",
        "Shariah Compliant Advertising",
        "Muslim Consumer Market",
        "Islamic Finance Marketing",
        "Halal Food Marketing",
        "Modest Fashion Marketing",
        "Muslim Travel Marketing",
        "Halal Cosmetics Marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nidzid.site/#website",
      "url": "https://nidzid.site",
      "name": "NidZid Agency",
      "description": "Halal Influencer Marketing Agency",
      "publisher": {
        "@id": "https://nidzid.site/#organization",
      },
      "inLanguage": ["en", "ar", "fr", "ms", "id"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nidzid.site/#service",
      "name": "Halal Influencer Marketing",
      "description": "Professional halal influencer marketing services connecting brands with Muslim consumers worldwide.",
      "provider": {
        "@id": "https://nidzid.site/#organization",
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Influencer Marketing",
              "description": "Connect with 500+ verified Muslim influencers",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Advertising",
              "description": "Shariah-compliant ad campaigns",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing",
              "description": "Authentic halal content creation",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Strategy",
              "description": "Strategic positioning for halal brands",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://nidzid.site/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes NidZid Agency different from other influencer agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are the first dedicated halal influencer marketing agency. Our team is Muslim-owned and operated, giving us authentic understanding of Islamic values and Muslim consumer behavior.",
          },
        },
        {
          "@type": "Question",
          "name": "How do you ensure campaigns are Shariah-compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every campaign is reviewed by our team for compliance with Islamic principles. We ensure content avoids haram elements, uses appropriate language, and respects Islamic values.",
          },
        },
        {
          "@type": "Question",
          "name": "Which industries do you specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in five main halal industries: Islamic Finance, Halal Food, Modest Fashion, Muslim Travel, and Halal Cosmetics.",
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
    </>
  )
}
