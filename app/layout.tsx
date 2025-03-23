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
  maximumScale: 1,
  themeColor: "#0066cc",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://amtradeventure.com'),
  title: "AMTRADE VENTURE SDN. BHD. | Engineering & Fabrication Solutions",
  description: "Leading provider of engineering, fabrication, and industrial solutions for the oil and gas sector in Malaysia. Specializing in steel structures, automation, and sustainable practices.",
  keywords: "engineering, fabrication, oil and gas, industrial solutions, steel structures, automation, Malaysia, Kemaman Supply Base",
  authors: [{ name: "AMTRADE VENTURE SDN. BHD." }],
  openGraph: {
    title: "AMTRADE VENTURE SDN. BHD. | Engineering & Fabrication Solutions",
    description: "Leading provider of engineering, fabrication, and industrial solutions for the oil and gas sector in Malaysia.",
    type: "website",
    locale: "en_MY",
    siteName: "AMTRADE VENTURE SDN. BHD.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AMTRADE VENTURE Engineering Excellence"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AMTRADE VENTURE | Engineering Excellence",
    description: "Leading provider of engineering and fabrication solutions for the oil and gas sector",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://amtradeventure.com"
  }
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
