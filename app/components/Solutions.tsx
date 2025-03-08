'use client'

import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Card from './Card'

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState<number | null>(null)

  const solutions = [
    {
      title: "Engineering & Fabrication",
      description: "Expert design and fabrication of steel structures, industrial equipment, and specialized components for oil and gas applications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Industrial Services",
      description: "Comprehensive industrial services including hydrotesting, pressure testing, equipment rental, and maintenance solutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Equipment Solutions",
      description: "Specialized cargo handling equipment and industrial storage solutions, including container modifications and rentals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Sustainable Solutions",
      description: "Environmental-friendly practices in container design, construction, and waste management for a greener industrial future.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ]

  return (
    <Section id="solutions" hasPattern>
      <SectionHeader
        label="Our Solutions"
        title="Comprehensive Industrial Services"
        description="End-to-end solutions for the oil and gas sector, combining engineering expertise with sustainable practices"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <Card
            key={index}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
            isActive={activeSolution === index}
            onMouseEnter={() => setActiveSolution(index)}
            onMouseLeave={() => setActiveSolution(null)}
          />
        ))}
      </div>
    </Section>
  )
} 