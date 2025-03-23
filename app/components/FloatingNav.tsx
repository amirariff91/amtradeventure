'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide nav based on scroll direction and position with smoother threshold
      if (currentScrollY > 200) {
        if (currentScrollY < lastScrollY - 50) {
          // Scrolling up significantly
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY + 50) {
          // Scrolling down significantly
          setIsVisible(false)
        }
      } else {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)

      // Update active section with improved threshold and intersection
      const sections = ['hero', 'about', 'solutions', 'digital', 'philosophy', 'achievements', 'licenses', 'coverage', 'team']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const threshold = window.innerHeight * 0.4 // 40% of viewport height
          const elementCenter = rect.top + rect.height / 2
          const viewportCenter = window.innerHeight / 2
          return Math.abs(elementCenter - viewportCenter) < threshold
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Digital', href: '#digital' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Licenses', href: '#licenses' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Team', href: '#team' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = 80 // Fixed offset for better positioning
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link fixed -top-10 left-0 bg-[#0088cc] text-white px-4 py-2 z-50 focus:top-0 transition-all duration-200"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <div 
        className={`floating-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="glass rounded-full shadow-lg shadow-black/5 backdrop-blur-md bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-300">
            <nav className="flex items-center justify-between px-6 py-3">
              <a 
                href="#hero" 
                className="text-[#0088cc] dark:text-[#00a99d] font-semibold text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#0088cc] dark:focus:ring-[#00a99d] focus:ring-offset-2 rounded-lg relative w-[120px] h-[48px]"
                onClick={(e) => handleNavClick(e, '#hero')}
                aria-label="Home"
              >
                <Image
                  src="/logo.png"
                  alt="Amtrade Venture Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0088cc] dark:focus:ring-[#00a99d] focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg
                  className="w-6 h-6 text-neutral-600 dark:text-neutral-300 transition-colors duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              {/* Desktop navigation */}
              <ul className="hidden md:flex items-center gap-6" role="menubar">
                {navItems.map((item) => (
                  <li key={item.name} role="none">
                    <a 
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`nav-link text-sm font-medium transition-all relative px-3 py-2 rounded-lg
                        ${activeSection === item.href.slice(1)
                          ? 'text-[#0088cc] dark:text-[#00a99d] font-semibold bg-[#0088cc]/5 dark:bg-[#00a99d]/5'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-[#0088cc] dark:hover:text-[#00a99d] hover:bg-[#0088cc]/5 dark:hover:bg-[#00a99d]/5'
                        }
                        focus:outline-none focus:ring-2 focus:ring-[#0088cc] dark:focus:ring-[#00a99d] focus:ring-offset-2
                      `}
                      role="menuitem"
                      aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                    >
                      {item.name}
                      {activeSection === item.href.slice(1) && (
                        <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-gradient-to-r from-[#0088cc] to-[#00cc88] dark:from-[#00a99d] dark:to-[#00cc88] transform -translate-x-1/2 scale-x-100 transition-all duration-300 group-hover:scale-x-110" />
                      )}
                    </a>
                  </li>
                ))}
                <li role="none">
                  <a 
                    href="#contact"
                    className="btn btn-primary inline-flex items-center gap-2 group px-6 py-2.5 text-sm dark:bg-[#00a99d] dark:hover:bg-[#00cc88] transition-colors duration-300"
                    onClick={(e) => handleNavClick(e, '#contact')}
                  >
                    Contact
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile menu */}
            <div
              id="mobile-menu"
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden backdrop-blur-md bg-white/95 dark:bg-neutral-900/95 rounded-2xl mx-4 my-2 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50`}
              role="menu"
              aria-labelledby="mobile-menu-button"
            >
              <ul className="px-4 py-6 space-y-4 divide-y divide-neutral-200 dark:divide-neutral-700">
                {navItems.map((item) => (
                  <li key={item.name} role="none" className="pt-4 first:pt-0">
                    <a 
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block text-base font-medium transition-all py-2 px-4 rounded-lg
                        ${activeSection === item.href.slice(1)
                          ? 'text-[#0088cc] font-semibold bg-[#0088cc]/5'
                          : 'text-neutral-600 dark:text-neutral-300 hover:text-[#0088cc] hover:bg-[#0088cc]/5'
                        }
                        focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-2
                      `}
                      role="menuitem"
                      aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                    >
                      <span className="flex items-center gap-3">
                        {item.name}
                        {activeSection === item.href.slice(1) && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
                <li className="pt-4" role="none">
                  <a 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full btn btn-primary inline-flex items-center justify-center gap-2 group"
                  >
                    Contact Us
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 