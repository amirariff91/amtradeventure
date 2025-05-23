'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'digital', label: 'Digital' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'licenses', label: 'Licenses' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'team', label: 'Team' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled)

      // Update active section with improved intersection detection
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

      // Show/hide back to top button with smoother threshold
      setShowBackToTop(winScroll > window.innerHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 hidden md:block">
        <div
          className="h-full bg-gradient-to-r from-[#0088cc] to-[#00cc88] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Section dots */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block" aria-label="Section navigation">
        <ul className="flex flex-col gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`group flex items-center gap-4 transition-all duration-300`}
                aria-label={`Jump to ${section.label} section`}
                aria-current={activeSection === section.id ? 'true' : undefined}
              >
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-600 dark:text-neutral-300">
                  {section.label}
                </span>
                <div 
                  className={`w-3 h-3 rounded-full transition-all duration-300 border-2 
                    ${activeSection === section.id 
                      ? 'bg-[#0088cc] border-[#0088cc] scale-125' 
                      : 'border-neutral-400 group-hover:border-[#0088cc] group-hover:scale-110'
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg 
          transition-all duration-300 transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0088cc]
          ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 text-[#0088cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
} 