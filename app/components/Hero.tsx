'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import BackgroundPattern from './BackgroundPattern'

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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white/80 to-white bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
            Delivering innovative industrial solutions
            <br className="hidden md:block" />
            for the oil and gas sector
          </p>
        </div>
        
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <button 
            onClick={handleExplore}
            className="group relative px-8 py-4 bg-white text-[#0088cc] rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0088cc] disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
            aria-label="Explore our solutions and services"
            disabled={isScrolling}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc] to-[#00cc88] opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="flex items-center justify-center gap-2">
              Explore Our Solutions
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-y-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
          
          <a 
            href="#solutions"
            className="group relative px-8 py-4 border-2 border-white text-white rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0088cc] w-full sm:w-auto"
            aria-label="View our core competencies"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center justify-center gap-2 group-hover:text-[#0088cc] transition-colors">
              Our Expertise
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent backdrop-blur-[2px]" />
      </div>
    </section>
  )
} 