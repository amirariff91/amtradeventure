'use client'

import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

export default function Coverage() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  const locations = {
    kemaman: {
      name: "KEMAMAN",
      address: "OY74-Amtrade, Phase 2, Kemaman SupplyBase, 24007 Kemaman, Terengganu.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    selangor: {
      name: "SELANGOR",
      address: "A10-3A, Block A, Jalan Selaman 1/1, Dataran Palma, 68000 Ampang, Selangor.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    tokBali: {
      name: "TOK BALI",
      address: "PT 6875-A, Tok Bali Supply Base, Jalan Tok Bali, 16800 Pasir Puteh, Kelantan.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    labuan: {
      name: "LABUAN",
      address: "Lot 39, IKS MPL, Jalan Ranca-Ranca, 86020 Labuan.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    }
  }

  return (
    <Section id="coverage" hasPattern>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Presence"
          title="Strategic Locations"
          description="AMTRADE VENTURE SDN. BHD. operates from strategically located bases across Malaysia, ensuring efficient service delivery and accessibility to key industrial hubs."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(locations).map(([key, location]) => (
            <div
              key={key}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 overflow-hidden ${
                activeLocation === key ? 'ring-2 ring-[#0088cc]' : ''
              }`}
              onMouseEnter={() => setActiveLocation(key)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] flex items-center justify-center text-white transform transition-all duration-500
                      ${activeLocation === key ? 'rotate-12 scale-110' : 'group-hover:rotate-12'}`}
                  >
                    {location.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#0088cc] transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-[#00cc88]/5 opacity-0 transition-opacity duration-500
                  ${activeLocation === key ? 'opacity-100' : 'group-hover:opacity-100'}`}
              />
            </div>
          ))}
        </div>

        {/* Network Description */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0088cc] to-[#00cc88] opacity-90" />
            <div className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  This network of locations enables us to deliver our services effectively while staying connected to the industries and communities we support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 