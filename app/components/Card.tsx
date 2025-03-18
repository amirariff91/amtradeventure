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
  isInteractive = false
}: CardProps) {
  const cardClasses = `
    group relative overflow-hidden bg-white dark:bg-neutral-800 
    rounded-xl p-8 border border-neutral-100 dark:border-neutral-700 
    hover:border-transparent transition-all duration-500
    ${isActive ? 'shadow-xl' : 'hover:shadow-lg'} 
    ${isInteractive ? 'cursor-pointer active:scale-95' : ''} 
    ${className}
  `

  const iconClasses = `
    w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] 
    flex items-center justify-center text-white transform transition-all duration-500
    ${isActive ? 'rotate-12 scale-110' : 'group-hover:rotate-12'}
  `

  const titleClasses = `
    text-xl font-semibold mb-3 text-neutral-900 dark:text-white 
    group-hover:text-[var(--primary)] transition-colors
  `

  const descriptionClasses = `
    text-neutral-600 dark:text-neutral-300 leading-relaxed
  `

  const gradientClasses = `
    absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] 
    opacity-0 transition-opacity duration-500
    ${isActive ? 'opacity-5' : 'group-hover:opacity-5'}
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
      <div className="flex flex-col gap-6">
        {icon && (
          <div 
            className={iconClasses}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div>
          <h3 className={titleClasses}>
            {title}
          </h3>
          <p className={descriptionClasses}>
            {description}
          </p>
        </div>
      </div>
      <div className={gradientClasses} />
      
      {/* Hover effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  )
} 