'use client'

import Image from 'next/image'
import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Card from './Card'

export default function About() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  const features = [
    {
      title: "Engineering Excellence",
      description: "Expert design and construction of steel and metal structures, delivering reliable and high-quality engineering solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Oil & Gas Focus",
      description: "Specialized solutions for the oil and gas sector, providing end-to-end services that meet unique industry requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Safety Standards",
      description: "Commitment to stringent safety protocols and environmental standards in all operations and services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  const benefits = [
    {
      title: "Established Excellence",
      description: "Founded on September 24, 2014, with a proven track record in engineering and fabrication.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Industry Expertise",
      description: "Specializing in engineering, fabrication, and installation of steel and metal structures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Client Focus",
      description: "Delivering tailored solutions that meet diverse industry needs with a focus on safety and sustainability.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  return (
    <Section id="about" hasPattern>
      <SectionHeader
        label="About Amtrade Venture"
        title="Specialized in Oil & Gas Engineering"
        description="A trusted provider of engineering and fabrication solutions since 2014, delivering excellence in steel structures and industrial automation for the oil and gas sector."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isActive={activeFeature === index}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
          />
        ))}
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src="/industrial-expertise.webp"
              alt="Industrial Expertise"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/95 to-[#00cc88]/95 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center transform transition-all duration-500 group-hover:scale-105 max-w-xl">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white tracking-wider uppercase mb-6">
                  Our Vision
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Leading Provider in Oil & Gas
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-light">
                  To be a leading provider of engineering and fabrication services in the oil and gas industry, recognized for quality, reliability, and sustainability
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gray-50 rounded-2xl">
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  isActive={activeFeature === index}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                />
              ))}

              <div className="pt-6">
                <a 
                  href="#solutions" 
                  className="btn btn-primary w-full md:w-auto inline-flex items-center justify-center gap-2 group"
                  aria-label="Explore our solutions"
                >
                  Discover Our Solutions
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 