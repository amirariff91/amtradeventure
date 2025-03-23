'use client'

import { useEffect, useState, ReactNode } from 'react'
import BackgroundPattern from './BackgroundPattern'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  hasPattern?: boolean
  isDark?: boolean
}

export default function Section({ 
  id, 
  children, 
  className = '',
  hasPattern = false,
  isDark = false
}: SectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    const section = document.getElementById(id)
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [id])

  return (
    <section 
      id={id}
      className={`relative section-padding overflow-hidden transition-colors duration-300 ${
        className.includes('bg-') 
          ? className 
          : isDark 
            ? 'bg-gray-900 text-white dark:bg-black' 
            : 'bg-white text-gray-900 dark:bg-neutral-900 dark:text-white'
      }`}
    >
      {hasPattern && <BackgroundPattern className={isDark ? 'opacity-50' : ''} />}
      
      <div 
        className={`container mx-auto px-4 relative transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    </section>
  )
} 