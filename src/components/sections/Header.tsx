'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Users, Megaphone, FileText, Lightbulb, Building2, UtensilsCrossed, Shirt, Plane, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/context'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { t, language } = useLanguage()

  const servicesMenu = [
    { href: '/services#influencer-marketing', label: t('servicesMenu.influencerMarketing'), icon: Users, description: t('servicesMenu.influencerMarketingDesc') },
    { href: '/services#paid-advertising', label: t('servicesMenu.paidAdvertising'), icon: Megaphone, description: t('servicesMenu.paidAdvertisingDesc') },
    { href: '/services#content-marketing', label: t('servicesMenu.contentMarketing'), icon: FileText, description: t('servicesMenu.contentMarketingDesc') },
    { href: '/services#brand-strategy', label: t('servicesMenu.brandStrategy'), icon: Lightbulb, description: t('servicesMenu.brandStrategyDesc') },
  ]

  const industriesMenu = [
    { href: '/industries#islamic-finance', label: t('industriesMenu.islamicFinance'), icon: Building2, description: t('industriesMenu.islamicFinanceDesc') },
    { href: '/industries#halal-food', label: t('industriesMenu.halalFood'), icon: UtensilsCrossed, description: t('industriesMenu.halalFoodDesc') },
    { href: '/industries#modest-fashion', label: t('industriesMenu.modestFashion'), icon: Shirt, description: t('industriesMenu.modestFashionDesc') },
    { href: '/industries#muslim-travel', label: t('industriesMenu.muslimTravel'), icon: Plane, description: t('industriesMenu.muslimTravelDesc') },
    { href: '/industries#halal-cosmetics', label: t('industriesMenu.halalCosmetics'), icon: Sparkles, description: t('industriesMenu.halalCosmeticsDesc') },
  ]

  const companyMenu = [
    { href: '/company', label: t('companyMenu.aboutUs'), icon: Users, description: t('companyMenu.aboutUsDesc') },
    { href: '/company#our-values', label: t('companyMenu.ourValues'), icon: Lightbulb, description: t('companyMenu.ourValuesDesc') },
  ]

  const navLinks = [
    { href: '/services', label: t('nav.services'), dropdown: servicesMenu },
    { href: '/industries', label: t('nav.industries'), dropdown: industriesMenu },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '/company', label: t('nav.company'), dropdown: companyMenu },
    { href: '#contact', label: t('nav.contact') },
  ]

  const isRTL = language === 'ar'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-28 lg:h-32 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/nidzid-logo.png"
              alt="NidZid Agency"
              className="h-24 lg:h-28 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[#1B4332] hover:text-[#D4AF37] font-medium transition-colors duration-200 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-72 bg-white rounded-xl shadow-lg border border-gray-100 py-2 mt-1`}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#1B4332]/10 flex items-center justify-center flex-shrink-0">
                              <item.icon className="h-4 w-4 text-[#1B4332]" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-[#1B4332]">{item.label}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            href={link.href}
                            className={`flex items-center justify-center gap-2 px-4 py-2 text-sm text-[#D4AF37] hover:text-[#B8942C] font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
                          >
                            {t('nav.viewAll')} {link.label}
                            <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[#1B4332] hover:text-[#D4AF37] font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Language Switcher & CTA */}
          <div className={`hidden lg:flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher />
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold px-6"
            >
              <Link href="#contact">{t('nav.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className={`lg:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher />
            <button
              className="p-2 text-[#1B4332]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className={`flex flex-col gap-2 ${isRTL ? 'text-right' : ''}`}>
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <div>
                      <div className="px-4 py-2 text-[#1B4332] font-semibold text-sm uppercase tracking-wide">
                        {link.label}
                      </div>
                      <div className={`${isRTL ? 'pr-6' : 'pl-6'} space-y-1`}>
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 py-2 px-4 text-[#1B4332] hover:text-[#D4AF37] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <item.icon className="h-4 w-4 text-[#D4AF37]" />
                            <span className="text-sm">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-[#1B4332] hover:text-[#D4AF37] font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="bg-[#D4AF37] hover:bg-[#B8942C] text-[#1B4332] font-semibold mt-4"
              >
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.getStarted')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
