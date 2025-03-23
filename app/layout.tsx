import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0088cc",
  colorScheme: 'dark light'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amtradeventure.com'),
  title: {
    default: "Amtrade Venture Sdn. Bhd. | Engineering & Fabrication Solutions",
    template: "%s | Amtrade Venture"
  },
  description: "Leading Malaysian provider of engineering, fabrication, and industrial solutions for the oil and gas sector. Specializing in steel structures, automation, sustainable practices, and digital transformation at Kemaman Supply Base.",
  keywords: [
    "engineering solutions",
    "fabrication services",
    "oil and gas industry",
    "industrial automation",
    "steel structures",
    "Kemaman Supply Base",
    "Malaysian engineering company",
    "Bumiputera company",
    "sustainable engineering",
    "digital transformation",
    "industrial solutions",
    "engineering excellence"
  ],
  authors: [{ name: "Amtrade Venture Sdn. Bhd.", url: "https://amtradeventure.com" }],
  creator: "Amtrade Venture Sdn. Bhd.",
  publisher: "Amtrade Venture Sdn. Bhd.",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true
  },
  category: "Engineering & Industrial Solutions",
  classification: "Business",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0088cc' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_MY",
    alternateLocale: ["ms_MY"],
    siteName: "Amtrade Venture Sdn. Bhd.",
    title: "Amtrade Venture Sdn. Bhd. | Engineering & Fabrication Solutions",
    description: "Leading Malaysian provider of engineering, fabrication, and industrial solutions for the oil and gas sector. Specializing in steel structures, automation, and sustainable practices.",
    url: "https://amtradeventure.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amtrade Venture Engineering Excellence",
        type: "image/jpeg",
        secureUrl: "https://amtradeventure.com/og-image.jpg"
      }
    ],
    countryName: "Malaysia",
    emails: ["hq@amtradeventure.com"],
    phoneNumbers: ["+60179398580", "+60178774007"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amtrade Venture | Engineering Excellence",
    description: "Leading Malaysian provider of engineering and fabrication solutions for the oil and gas sector. Bumiputera company specializing in industrial automation and sustainable practices.",
    images: ["/og-image.jpg"],
    site: "@amtradeventure",
    creator: "@amtradeventure"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: "https://amtradeventure.com",
    languages: {
      'en-MY': 'https://amtradeventure.com',
      'ms-MY': 'https://amtradeventure.com/ms'
    }
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code"
    }
  },
  applicationName: "Amtrade Venture",
  generator: "Next.js",
  referrer: "origin-when-cross-origin"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark:bg-neutral-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
