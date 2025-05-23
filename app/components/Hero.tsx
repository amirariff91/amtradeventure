'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import BackgroundPattern from './BackgroundPattern'
import Button from './Button'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleExplore = () => {
    setIsScrolling(true)
    const solutionsSection = document.getElementById('solutions')
    if (solutionsSection) {
      const offset = 80
      const targetPosition = solutionsSection.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setTimeout(() => setIsScrolling(false), 1000)
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
    >
      <BackgroundPattern />
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0088cc] to-[#00cc88] opacity-90"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-white text-center">
        <div 
          className={`w-[240px] h-[100px] relative mx-auto mb-12 transform transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <Image
            src="/logo.png"
            alt="Amtrade Venture Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div 
          className={`space-y-6 mb-12 transform transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-16">
            <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
              And Digital Solutions
            </span>
          </h1>
        </div>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <Button
            onClick={handleExplore}
            variant="secondary"
            size="lg"
            disabled={isScrolling}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            }
            className="bg-white text-[#0088cc] hover:bg-gray-50 border-0 shadow-lg hover:shadow-xl"
          >
            Explore Our Solutions
          </Button>
          
          <Button
            as="a"
            href="#solutions"
            variant="outline"
            size="lg"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
            className="border-white text-white hover:bg-white hover:text-[#0088cc] border-2"
          >
            Our Expertise
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent backdrop-blur-[2px]" />
      </div>
    </section>
  )
} 