'use client'

import { useState, useEffect } from 'react'

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('philosophy')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      title: "Technical Excellence",
      description: "Committed to delivering superior industrial solutions through advanced technical expertise and continuous innovation in automation and control systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "#0088cc"
    },
    {
      title: "Industry Leadership",
      description: "Setting benchmarks in industrial automation and process control through innovative solutions and strategic partnerships with global technology leaders.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#00cc88"
    },
    {
      title: "Customer Success",
      description: "Dedicated to understanding and exceeding client expectations through reliable support, expert consultation, and tailored industrial solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "#0088cc"
    }
  ]

  return (
    <section id="philosophy" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0088cc]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00cc88]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#0088cc]/10 rounded-full text-sm font-semibold text-[#0088cc] tracking-wider uppercase mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Driving Industrial Excellence
          </h2>
          <p className="text-lg text-gray-600">
            Combining technical expertise, industry knowledge, and unwavering commitment to safety
            to deliver exceptional value in oil and gas engineering
          </p>
        </div>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {values.map((value, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-white rounded-xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500
                ${activeValue === index ? 'shadow-xl' : 'hover:shadow-lg'}`}
              onMouseEnter={() => setActiveValue(index)}
              onMouseLeave={() => setActiveValue(null)}
            >
              <div className="flex flex-col gap-6">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transform transition-all duration-500
                    ${activeValue === index ? 'rotate-12 scale-110' : 'group-hover:rotate-12'}`}
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#0088cc] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-[#0088cc]/20 to-[#00cc88]/20 opacity-0 transition-opacity duration-500
                  ${activeValue === index ? 'opacity-100' : 'group-hover:opacity-100'}`}
              />
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="btn btn-primary inline-flex items-center gap-2 group">
            Discover Our Vision
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 