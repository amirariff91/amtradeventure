'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface TeamMember {
  name: string
  role: string
  image: string
  position: 'top' | 'bottom'
  bio?: string
  expertise?: string[]
}

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)

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

    const section = document.getElementById('team-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const teamMembers: TeamMember[] = [
    {
      name: "HAZIM NAWI",
      role: "MANAGING DIRECTOR",
      image: "/team/hazim.png",
      position: 'top'
    },
    {
      name: "ABU TALIB",
      role: "EXECUTIVE DIRECTOR O&G SOLUTION",
      image: "/team/abu-talib.png",
      position: 'bottom'
    },
    {
      name: "SALMAN RAIS",
      role: "HEAD OF STRATEGIC GROWTH & COMMERCIAL DEVELOPMENT",
      image: "/team/salman.png",
      position: 'bottom'
    },
    {
      name: "FAHMI LATIFF",
      role: "HEAD OF CREATIVE & DIGITAL SOLUTION",
      image: "/team/fahmi.png",
      position: 'bottom'
    },
    {
      name: "ASHHAR OTHMAN",
      role: "HEAD OF O&G OPERATION",
      image: "/team/ashhar.png",
      position: 'bottom'
    },
    {
      name: "ASHREE OTHMAN",
      role: "QHSE LEAD",
      image: "/team/ashree.png",
      position: 'bottom'
    },
    {
      name: "NOOR NAJIHAH",
      role: "HEAD OF PROCUREMENT",
      image: "/team/najihah.png",
      position: 'bottom'
    }
  ]

  return (
    <Section 
      id="team-section" 
      className="relative overflow-hidden bg-transparent p-4"
      isDark={true}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0088cc] via-[#00a99d] to-[#00cc88] shadow-2xl" />
      
      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
        
        {/* Right-pointing arrows */}
        <div className="absolute left-8 top-32 flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-8 h-8 transform rotate-45 border-t-2 border-r-2 border-white/20"
              style={{ 
                animationDelay: `${i * 200}ms`,
                animation: 'fadeInRight 2s infinite'
              }}
            />
          ))}
        </div>

        {/* Dots pattern */}
        <div className="absolute left-8 top-48 flex space-x-2">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Bottom dots pattern */}
        <div className="absolute left-8 bottom-8 flex space-x-2">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <SectionHeader
          label="Our Leadership"
          title="Meet Our Team"
          description="A diverse team of industry experts dedicated to delivering excellence in engineering and industrial solutions."
          isDark={true}
        />

        <div className="mt-16 relative">
          {/* Top Row - Managing Director */}
          <div className={`flex justify-center mb-24 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {teamMembers
              .filter(member => member.position === 'top')
              .map((member, index) => (
                <div
                  key={index}
                  className="group relative w-80"
                  role="article"
                  aria-label={`Team member: ${member.name}, ${member.role}`}
                >
                  <div className="relative aspect-square rounded-full overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 rounded-full bg-[#001B3B] group-hover:bg-[#002B4B] transition-colors duration-300" />
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300" />
                  </div>
                  <div className="text-center relative">
                    <div className="bg-[#001B3B]/80 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 group-hover:bg-[#001B3B]/90 group-hover:shadow-lg">
                      <p className="text-sm font-medium text-[#00a99d] mb-2 uppercase tracking-wider">
                        {member.role}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {member.name}
                      </h3>
                      {member.bio && (
                        <p className="text-sm text-white/80 mb-4">
                          {member.bio}
                        </p>
                      )}
                      {member.expertise && (
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Grid - Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {teamMembers
              .filter(member => member.position === 'bottom')
              .map((member, index) => (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-1000 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  role="article"
                  aria-label={`Team member: ${member.name}, ${member.role}`}
                >
                  <div className="relative aspect-square rounded-full overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105 shadow-xl">
                    <div className="absolute inset-0 rounded-full bg-[#001B3B] group-hover:bg-[#002B4B] transition-colors duration-300" />
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300" />
                  </div>
                  <div className="text-center relative">
                    <div className="bg-[#001B3B]/80 backdrop-blur-sm p-6 rounded-2xl transform transition-all duration-300 group-hover:bg-[#001B3B]/90 group-hover:shadow-lg">
                      <p className="text-sm font-medium text-[#00a99d] mb-2 uppercase tracking-wider">
                        {member.role}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {member.name}
                      </h3>
                      {member.bio && (
                        <p className="text-sm text-white/80 mb-4">
                          {member.bio}
                        </p>
                      )}
                      {member.expertise && (
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInRight {
          0% {
            opacity: 0.1;
            transform: translateX(-10px) rotate(45deg);
          }
          50% {
            opacity: 0.3;
            transform: translateX(0) rotate(45deg);
          }
          100% {
            opacity: 0.1;
            transform: translateX(-10px) rotate(45deg);
          }
        }
      `}</style>
    </Section>
  )
} 