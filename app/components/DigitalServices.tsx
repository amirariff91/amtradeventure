'use client'

import { useState, useEffect } from 'react'

export default function DigitalServices() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeTech, setActiveTech] = useState<number | null>(null)

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

    const section = document.getElementById('digital')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to modernize your industrial operations and enhance business efficiency.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: [
        "Industry 4.0 Implementation",
        "Process Digitalization",
        "Digital Workflow Optimization",
        "Legacy System Modernization"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to enhance your brand presence and drive business growth in the industrial sector.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      features: [
        "Industrial B2B Marketing",
        "Content Strategy",
        "SEO Optimization",
        "Lead Generation"
      ]
    },
    {
      title: "Software Solutions",
      description: "Custom software development and integration services tailored for industrial applications and business processes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Custom Software Development",
        "ERP Integration",
        "Mobile Applications",
        "Cloud Solutions"
      ]
    }
  ]

  const technologies = [
    {
      name: "Industry 4.0",
      description: "Smart manufacturing technologies including IIoT, AI-driven automation, and predictive maintenance systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: "Data Analytics",
      description: "Advanced analytics solutions for industrial data processing, visualization, and actionable insights generation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: "Cloud Infrastructure",
      description: "Secure cloud solutions for industrial applications, data storage, and remote operations management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ]

  return (
    <section id="digital" className="py-8 md:py-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0088cc]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00cc88]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div 
          className={`max-w-3xl mx-auto text-center mb-8 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-[#0088cc]/10 rounded-full text-sm font-semibold text-[#0088cc] tracking-wider uppercase mb-4">
            Digital Innovation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Smart Industrial Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Advanced digital technologies and automation systems to optimize your operations
            and enhance industrial efficiency
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-white rounded-xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500
                ${activeService === index ? 'shadow-xl' : 'hover:shadow-lg'}`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex flex-col gap-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] flex items-center justify-center text-white transform transition-all duration-500
                  ${activeService === index ? 'rotate-12 scale-110' : 'group-hover:rotate-12'}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#0088cc] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <svg 
                          className="w-5 h-5 text-[#0088cc]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 12l2 2 4-4" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br from-[#0088cc] to-[#00cc88] opacity-0 transition-opacity duration-500
                ${activeService === index ? 'opacity-5' : 'group-hover:opacity-5'}`} />
            </div>
          ))}
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-gray-50 rounded-xl p-8 transition-all duration-500
                ${activeTech === index ? 'shadow-xl' : 'hover:shadow-lg'}`}
              onMouseEnter={() => setActiveTech(index)}
              onMouseLeave={() => setActiveTech(null)}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] flex items-center justify-center text-white mb-6 transform transition-all duration-500
                  ${activeTech === index ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#0088cc] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-[#00cc88]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="#contact"
            className="btn btn-primary inline-flex items-center gap-2 group"
          >
            Start Your Digital Journey
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 