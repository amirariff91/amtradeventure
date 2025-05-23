interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
  centered?: boolean
  isDark?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
  centered = true,
  isDark = false,
  size = 'md'
}: SectionHeaderProps) {
  const sizeClasses = {
    sm: {
      container: 'max-w-2xl mb-6',
      title: 'text-2xl md:text-3xl',
      description: 'text-base'
    },
    md: {
      container: 'max-w-3xl mb-8',
      title: 'text-3xl md:text-4xl lg:text-5xl',
      description: 'text-lg'
    },
    lg: {
      container: 'max-w-4xl mb-12',
      title: 'text-4xl md:text-5xl lg:text-6xl',
      description: 'text-xl'
    }
  }

  const containerClasses = `
    ${sizeClasses[size].container} 
    ${centered ? 'mx-auto text-center' : ''} 
    ${className}
  `.trim()

  const labelClasses = `
    inline-block px-4 py-2 rounded-full text-sm font-semibold 
    tracking-wider uppercase mb-4 transition-all duration-300
    ${isDark 
      ? 'bg-white/10 backdrop-blur-sm text-white border border-white/20' 
      : 'bg-[#0088cc]/10 text-[#0088cc] border border-[#0088cc]/20'
    }
  `

  const titleClasses = `
    ${sizeClasses[size].title} font-bold mb-6 leading-tight tracking-tight
    ${isDark 
      ? 'text-white' 
      : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
    }
  `

  const descriptionClasses = `
    ${sizeClasses[size].description} leading-relaxed max-w-prose
    ${centered ? 'mx-auto' : ''}
    ${isDark ? 'text-white/90' : 'text-gray-600'}
  `

  return (
    <div className={containerClasses}>
      <span className={labelClasses}>
        {label}
      </span>
      <h2 className={titleClasses}>
        {title}
      </h2>
      {description && (
        <p className={descriptionClasses}>
          {description}
        </p>
      )}
    </div>
  )
} 