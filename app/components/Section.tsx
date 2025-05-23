'use client'

import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  hasPattern?: boolean
  isDark?: boolean
  variant?: 'default' | 'alternate' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
}

export default function Section({
  id,
  children,
  className = '',
  hasPattern = false,
  isDark = false,
  variant = 'default',
  size = 'md'
}: SectionProps) {
  const sizeClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20'
  }

  const variantClasses = {
    default: isDark 
      ? 'bg-neutral-900 text-white' 
      : 'bg-white text-neutral-900',
    alternate: isDark 
      ? 'bg-neutral-800 text-white' 
      : 'bg-neutral-50 text-neutral-900',
    gradient: 'bg-gradient-to-br from-[#0088cc] via-[#00a99d] to-[#00cc88] text-white'
  }

  const sectionClasses = `
    relative overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim()

  return (
    <section id={id} className={sectionClasses}>
      {hasPattern && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0088cc]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00cc88]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
} 