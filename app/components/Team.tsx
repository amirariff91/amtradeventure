'use client'

import Image from 'next/image'
import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
  linkedin?: string
}

export default function Team() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  const teamMembers: TeamMember[] = [
    {
      name: "Mohd Hazim",
      role: "Managing Director",
      image: "/mohd-hazim.png",
      description: "Leading strategic vision and growth with over 15 years of expertise in oil and gas engineering. Driving innovation and excellence in industrial solutions.",
      linkedin: "#"
    },
    {
      name: "Abu Talib",
      role: "Operations Director",
      image: "/abu-talib.png",
      description: "Overseeing technical operations and project delivery with extensive experience in industrial automation and process control systems.",
      linkedin: "#"
    },
    {
      name: "Mohd Ashhar",
      role: "General Manager",
      image: "/mohd-ashhar.png",
      description: "Managing day-to-day operations and client relationships, ensuring high standards of service delivery and customer satisfaction.",
      linkedin: "#"
    }
  ]

  return (
    <Section id="team" hasPattern>
      <SectionHeader
        label="Leadership Team"
        title="Driving Excellence Through Experience"
        description="Our leadership team combines decades of industry expertise with a commitment to innovation, ensuring the highest standards of service delivery in the oil and gas sector."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setActiveTeamMember(index)}
            onMouseLeave={() => setActiveTeamMember(null)}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/90 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed transform opacity-0 transition-all duration-300 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    {member.description}
                  </p>
                </div>
              </div>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 transform opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>

            <div 
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </Section>
  )
} 