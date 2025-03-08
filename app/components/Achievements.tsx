'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface Project {
  year: string
  description: string
  client: string
  logo: string
  bgColor: string
}

export default function Achievements() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const projects = [
    {
      year: "2016",
      description: "Provision of manpower, equipment and consumable for fabricate and supply of Cargo Handling Equipment",
      client: "Petrofac",
      logo: "/clients/petrofac.png",
      bgColor: "bg-emerald-600"
    },
    {
      year: "2017",
      description: "Provision of Cargo Handling Equipment (CHE) Refurbishment for Exxonmobile and Production Malaysia Incorporated (EMPMI)",
      client: "ExxonMobil",
      logo: "/clients/exxonmobil.png",
      bgColor: "bg-emerald-600"
    },
    {
      year: "2019",
      description: "Provision of repair and repaint Warehouse door W.H 33, 30, 31 & 14 at Kemaman Supply Base",
      client: "KSB",
      logo: "/clients/ksb.png",
      bgColor: "bg-emerald-600"
    },
    {
      year: "2020",
      description: "Provision to fabricate and install 10 units container office c/w workstation area platform",
      client: "SV Petroleum",
      logo: "/clients/sv-petroleum.png",
      bgColor: "bg-emerald-600"
    },
    {
      year: "2021",
      description: "Provision of supply manpower, material equipment consumable to install roofing for cabin office",
      client: "TechnipFMC",
      logo: "/clients/technipfmc.png",
      bgColor: "bg-blue-600"
    },
    {
      year: "2022",
      description: "Provision to repair dented metal box door hinges. To supply, rental and deliver tonne tank c/w refrigerant FREON R124A",
      client: "NEWWIN",
      logo: "/clients/newwin.png",
      bgColor: "bg-blue-600"
    },
    {
      year: "2023",
      description: "Refurbishment of freezer condensing and repair chiller compressor",
      client: "PETRA",
      logo: "/clients/petra.png",
      bgColor: "bg-blue-600"
    },
    {
      year: "2024",
      description: "Provision of Hydrotest Bay at Geowell Open Yard c/w concrete existing slab",
      client: "Geowell",
      logo: "/clients/geowell.png",
      bgColor: "bg-blue-600"
    }
  ]

  const additionalClients = [
    {
      name: "IMP",
      logo: "/clients/imp.png"
    }
  ]

  return (
    <Section id="achievements" hasPattern>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Track Record"
          title="A Legacy of Excellence"
          description="Since 2014, we have successfully delivered critical projects for leading organizations in the oil and gas sector, building lasting partnerships through reliability and expertise."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0088cc] via-[#00cc88] to-[#0088cc] transform -translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:transform md:translate-y-24'
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`relative bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-neutral-100 hover:border-neutral-200 ${
                  activeProject === index ? 'shadow-xl scale-[1.02]' : 'hover:shadow-xl hover:scale-[1.02]'
                }`}>
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden bg-white p-2 border border-neutral-100">
                      <Image
                        src={project.logo}
                        alt={project.client}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${project.bgColor}`}>
                          {project.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {project.client}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-[#00cc88]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute top-1/2 ${
                  index % 2 === 0 ? 'right-0 md:-right-3' : 'left-0 md:-left-3'
                } w-6 h-6 rounded-full bg-gradient-to-r from-[#0088cc] to-[#00cc88] transform -translate-y-1/2 transition-transform duration-300 shadow-lg ${
                  activeProject === index ? 'scale-125' : 'group-hover:scale-125'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Clients */}
        <div className="mt-32">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-12">
            Additional Valued Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {additionalClients.map((client, index) => (
              <div 
                key={index}
                className="group relative w-40 h-20 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-neutral-100">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
} 