'use client'

import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import Card from './Card'

export default function Competencies() {
  const [activeCompetency, setActiveCompetency] = useState<number | null>(null)

  const competencies = [
    {
      title: "Engineering & Fabrication",
      description: "Expert design and construction of steel and metal structures, with custom fabrication capabilities for specialized industrial applications.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    },
    {
      title: "Inspection & Verification",
      description: "Comprehensive inspection and verification services for weighing and measuring instruments, including re-verification and stamping to ensure compliance with industry standards.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Specialized Services",
      description: "Comprehensive range of specialized industrial services including hydrotesting, pressure testing, cargo handling equipment rental, and tank cleaning and maintenance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Green Deconstruction",
      description: "Sustainable container design and construction methods, coupled with environmentally friendly scrap management and disposal services.",
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
        label="Core Competencies"
        title="Industrial Excellence Through Expertise"
        description="Comprehensive industrial solutions backed by decades of experience and cutting-edge technology"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {competencies.map((competency, index) => (
          <Card
            key={index}
            icon={competency.icon}
            title={competency.title}
            description={competency.description}
            isActive={activeCompetency === index}
            onMouseEnter={() => setActiveCompetency(index)}
            onMouseLeave={() => setActiveCompetency(null)}
          />
        ))}
      </div>
    </Section>
  )
} 