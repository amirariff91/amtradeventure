'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface Certificate {
  image: string
  description?: string
}

interface License {
  type: string
  logo: string
  number: string
  status?: string
  certificates?: Certificate[]
  description?: string
}

export default function Licenses() {
  const [activeLicense, setActiveLicense] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCertificates, setSelectedCertificates] = useState<Certificate[]>([])
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [thumbnails, setThumbnails] = useState<boolean>(false)

  const licenses = [
    {
      type: "MOF License",
      logo: "/licenses/mof.png",
      number: "357-0002319673",
      status: "Bumiputera Status",
      certificates: [
        {
          image: "/licenses/mof-cert.png",
          description: "MOF Registration Certificate"
        },
        {
          image: "/licenses/mof-cert2.png",
          description: "MOF Status Certificate"
        }
      ]
    },
    {
      type: "Petronas License",
      logo: "/licenses/petronas.png",
      number: "201401034409",
      certificates: [
        {
          image: "/licenses/petronas-cert.png",
          description: "Petronas License Certificate"
        }
      ]
    },
    {
      type: "TNB License",
      logo: "/licenses/tnb.png",
      number: "3056607",
      status: "Bumiputera Status",
      certificates: [
        {
          image: "/licenses/tnb-cert.png",
          description: "TNB License Certificate"
        }
      ]
    }
  ]

  const otherLicenses = [
    {
      type: "KPDNHEP License",
      logo: "/licenses/kpdnhep.png",
      number: "02529",
      description: "Ministry of Domestic Trade and Consumer Affairs License",
      certificates: [
        {
          image: "/licenses/kpdnhep-cert.png",
          description: "KPDNHEP Registration Certificate"
        }
      ]
    },
    {
      type: "PDRM Scrap License",
      logo: "/licenses/pdrm.png",
      number: "218543",
      description: "Royal Malaysia Police Scrap Metal License",
      certificates: [
        {
          image: "/licenses/pdrm-cert.png",
          description: "PDRM Scrap License Certificate"
        }
      ]
    }
  ]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isModalOpen) return
    
    switch (e.key) {
      case 'Escape':
        closeModal()
        break
      case 'ArrowRight':
        nextCertificate()
        break
      case 'ArrowLeft':
        previousCertificate()
        break
      case 'z':
        setIsZoomed(prev => !prev)
        break
    }
  }, [isModalOpen, selectedCertificates, currentCertificateIndex])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const openModal = (certificates: Certificate[]) => {
    setSelectedCertificates(certificates)
    setCurrentCertificateIndex(0)
    setIsModalOpen(true)
    setIsZoomed(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsZoomed(false)
    document.body.style.overflow = 'unset'
  }

  const nextCertificate = () => {
    if (currentCertificateIndex < selectedCertificates.length - 1) {
      setCurrentCertificateIndex(prev => prev + 1)
      setIsZoomed(false)
    }
  }

  const previousCertificate = () => {
    if (currentCertificateIndex > 0) {
      setCurrentCertificateIndex(prev => prev - 1)
      setIsZoomed(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - bounds.left) / bounds.width
    const y = (e.clientY - bounds.top) / bounds.height
    setZoomPosition({ x, y })
  }

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

                {license.certificates && (
                  <button
                    onClick={() => openModal(license.certificates!)}
                    className="mt-4 px-6 py-2 text-sm font-medium text-white bg-[#0088cc] hover:bg-[#00cc88] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  >
                    View Certificate{license.certificates.length > 1 ? 's' : ''}
                  </button>
                )}

                {license.certificates && (
                  <div className={`absolute inset-0 bg-black/80 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <div className="relative w-48 h-64">
                        <Image
                          src={license.certificates[0].image}
                          alt={`${license.type} Certificate Preview`}
                          fill
                          className="object-contain cursor-pointer"
                          onClick={() => openModal(license.certificates!)}
                        />
                      </div>
                      {license.certificates.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <p className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                            +{license.certificates.length - 1} more
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {license.description}
                  </p>

                  {license.certificates && (
                    <button
                      onClick={() => openModal(license.certificates!)}
                      className="mt-auto self-start px-4 py-2 text-sm font-medium text-[#0088cc] hover:text-[#00cc88] transition-colors flex items-center gap-2"
                    >
                      View Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}

                  {license.certificates && (
                    <div className={`absolute inset-0 bg-black/80 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <div className="relative w-40 h-56">
                          <Image
                            src={license.certificates[0].image}
                            alt={`${license.type} Certificate Preview`}
                            fill
                            className="object-contain cursor-pointer"
                            onClick={() => openModal(license.certificates!)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            />
            <div className="relative max-w-5xl w-full mx-4">
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white/90 backdrop-blur-md rounded-t-2xl border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {selectedCertificates[currentCertificateIndex].description || "Certificate"}
                  </h4>
                  {selectedCertificates.length > 1 && (
                    <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                      {currentCertificateIndex + 1} / {selectedCertificates.length}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setThumbnails(prev => !prev)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Toggle thumbnails"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsZoomed(prev => !prev)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Toggle zoom"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div 
                className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: 'calc(100vh - 120px)' }}
              >
                <div 
                  className="relative w-full h-full"
                  onMouseMove={handleMouseMove}
                  onClick={() => setIsZoomed(prev => !prev)}
                >
                  <Image
                    src={selectedCertificates[currentCertificateIndex].image}
                    alt="Certificate"
                    fill
                    className={`object-contain p-4 transition-transform duration-300 cursor-zoom-in ${
                      isZoomed ? 'scale-150' : ''
                    }`}
                    style={isZoomed ? {
                      transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`
                    } : undefined}
                  />
                </div>

                {/* Thumbnails */}
                {thumbnails && selectedCertificates.length > 1 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 p-4">
                    <div className="flex justify-center gap-4">
                      {selectedCertificates.map((cert, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentCertificateIndex(index)
                            setIsZoomed(false)
                          }}
                          className={`relative w-20 h-28 rounded-lg overflow-hidden transition-all duration-300 ${
                            currentCertificateIndex === index 
                              ? 'ring-2 ring-[#0088cc] ring-offset-2 scale-105' 
                              : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2'
                          }`}
                        >
                          <Image
                            src={cert.image}
                            alt={cert.description || `Certificate ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              {selectedCertificates.length > 1 && (
                <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                  <button
                    onClick={previousCertificate}
                    className={`p-3 rounded-full bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 ${
                      currentCertificateIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-white hover:scale-110'
                    }`}
                    disabled={currentCertificateIndex === 0}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextCertificate}
                    className={`p-3 rounded-full bg-white/90 shadow-lg backdrop-blur-md transition-all duration-300 ${
                      currentCertificateIndex === selectedCertificates.length - 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-white hover:scale-110'
                    }`}
                    disabled={currentCertificateIndex === selectedCertificates.length - 1}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Keyboard Shortcuts Help */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {selectedCertificates.length > 1 && (
                  <>
                    <span className="px-2 py-1 bg-black/50 text-white rounded text-sm">←/→</span>
                    <span className="text-white/70 text-sm">Navigate</span>
                  </>
                )}
                <span className="px-2 py-1 bg-black/50 text-white rounded text-sm ml-2">Z</span>
                <span className="text-white/70 text-sm">Zoom</span>
                <span className="px-2 py-1 bg-black/50 text-white rounded text-sm ml-2">ESC</span>
                <span className="text-white/70 text-sm">Close</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
} 