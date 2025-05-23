import { ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  isInteractive?: boolean
  variant?: 'default' | 'outlined' | 'filled'
  size?: 'sm' | 'md' | 'lg'
}

export default function Card({
  icon,
  title,
  description,
  className = '',
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  isInteractive = false,
  variant = 'default',
  size = 'md'
}: CardProps) {
  const sizeClasses = {
    sm: 'p-4 gap-4',
    md: 'p-6 gap-6',
    lg: 'p-8 gap-8'
  }

  const variantClasses = {
    default: 'bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700 hover:border-transparent',
    outlined: 'bg-transparent border-neutral-200 dark:border-neutral-600 hover:bg-white/50 dark:hover:bg-neutral-800/50',
    filled: 'bg-gradient-to-br from-[#0088cc]/5 to-[#00cc88]/5 border-transparent hover:from-[#0088cc]/10 hover:to-[#00cc88]/10'
  }

  const cardClasses = `
    group relative overflow-hidden rounded-xl border
    transition-all duration-300 ease-out
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${isActive ? 'shadow-lg scale-[1.02]' : 'hover:shadow-lg hover:scale-[1.02]'} 
    ${isInteractive ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0088cc]/50 focus:ring-offset-2 active:scale-95' : ''} 
    ${className}
  `.trim()

  const iconClasses = `
    w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] 
    flex items-center justify-center text-white transform transition-all duration-300
    ${isActive ? 'rotate-6 scale-110' : 'group-hover:rotate-6 group-hover:scale-110'}
  `

  const titleClasses = `
    text-lg md:text-xl font-semibold mb-3 text-neutral-900 dark:text-white 
    group-hover:text-[#0088cc] dark:group-hover:text-[#00cc88] transition-colors duration-300
  `

  const descriptionClasses = `
    text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed
  `

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <div 
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : 'article'}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? title : undefined}
    >
      <div className="flex flex-col h-full">
        {icon && (
          <div 
            className={iconClasses}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className={titleClasses}>
            {title}
          </h3>
          <p className={descriptionClasses}>
            {description}
          </p>
        </div>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#0088cc]/5 to-[#00cc88]/5 
          opacity-0 transition-opacity duration-300
          ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}`}
      />
      
      {/* Glass effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  )
} 