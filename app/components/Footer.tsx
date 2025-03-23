import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Digital Services', href: '#digital' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Licenses', href: '#licenses' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Team', href: '#team' }
  ]

  const social = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ]

  const contactInfo = {
    company: {
      name: 'Amtrade Venture Sdn. Bhd.',
      regNo: '1110507-P'
    },
    address: {
      line1: 'OY74-Amtrade,',
      line2: 'Open Yard Phase 1,',
      line3: 'Kemaman Supply Base,',
      line4: '24007 Mukim Teluk Kalung',
      line5: 'Terengganu, Malaysia'
    },
    contact: {
      phones: [
        { name: 'Mr. Hazim', number: '017 939 8580' },
        { name: 'Mr. Ashhar', number: '017 877 4007' }
      ],
      email: 'hq@amtradeventure.com'
    }
  }

  return (
    <footer className="relative bg-gray-900 overflow-hidden" aria-labelledby="footer-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#0088cc1a_0%,_transparent_25%),radial-gradient(circle_at_70%_50%,_#00cc881a_0%,_transparent_25%)]" />
      
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="w-[150px] h-[60px] relative">
              <Image
                src="/logo.png"
                alt="Amtrade Venture Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold">{contactInfo.company.name}</h3>
              <p className="text-sm text-gray-400">Company No: {contactInfo.company.regNo}</p>
            </div>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#00cc88] transition-colors p-2 rounded-full hover:bg-white/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-[#00cc88] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Contact Us
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00cc88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm text-gray-400 space-y-1">
                    {Object.values(contactInfo.address).map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00cc88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="space-y-1">
                    {contactInfo.contact.phones.map((phone, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-400">{phone.name}: </span>
                        <a 
                          href={`tel:${phone.number.replace(/\s/g, '')}`}
                          className="text-gray-400 hover:text-[#00cc88] transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#00cc88] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${contactInfo.contact.email}`}
                    className="text-sm text-gray-400 hover:text-[#00cc88] transition-colors"
                  >
                    {contactInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Amtrade Venture Sdn. Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 