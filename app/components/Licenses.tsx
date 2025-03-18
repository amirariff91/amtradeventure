'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface License {
  type: string
  logo: string
  number: string
  status?: string
  description?: string
}

export default function Licenses() {
  const [activeLicense, setActiveLicense] = useState<number | null>(null)

  const licenses = [
    {
      type: "MOF License",
      logo: "/logos/mof.png",
      number: "357-0002319673",
      status: "Bumiputera Status"
    },
    {
      type: "Petronas License",
      logo: "/logos/petronas.png",
      number: "201401034409"
    },
    {
      type: "TNB License",
      logo: "/logos/tnb.png",
      number: "3056607",
      status: "Bumiputera Status"
    }
  ]

  const otherLicenses = [
    {
      type: "KPDNHEP License",
      logo: "/logos/kpdnhep.jpg",
      number: "02529",
      description: "Ministry of Domestic Trade and Consumer Affairs License"
    },
    {
      type: "PDRM Scrap License",
      logo: "/logos/pdrm.png",
      number: "218543",
      description: "Royal Malaysia Police Scrap Metal License"
    }
  ]

  return (
    <Section id="licenses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Certifications"
          title="Our Licenses & Accreditations"
          description="We maintain the highest standards of compliance and certification in the industry, ensuring quality and reliability in all our operations."
        />

        {/* Main Licenses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              onMouseEnter={() => setActiveLicense(index)}
              onMouseLeave={() => setActiveLicense(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src={license.logo}
                    alt={license.type}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {license.type}
                </h3>
                
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">License No:</span> {license.number}
                  </p>
                  {license.status && (
                    <p className="text-[#00cc88] font-medium">
                      {license.status}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Licenses */}
        <div className="mt-16 bg-neutral-50/50 rounded-3xl p-8 border border-neutral-200/50">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            Additional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherLicenses.map((license, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-neutral-50 p-2 border border-neutral-100">
                      <Image
                        src={license.logo}
                        alt={license.type}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {license.type}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">License No:</span> {license.number}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {license.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
} 