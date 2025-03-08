import { ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Card({
  icon,
  title,
  description,
  className = '',
  isActive = false,
  onMouseEnter,
  onMouseLeave
}: CardProps) {
  return (
    <div 
      className={`group relative overflow-hidden bg-white rounded-xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500
        ${isActive ? 'shadow-xl' : 'hover:shadow-lg'} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="article"
    >
      <div className="flex flex-col gap-6">
        {icon && (
          <div 
            className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#00cc88] flex items-center justify-center text-white transform transition-all duration-500
              ${isActive ? 'rotate-12 scale-110' : 'group-hover:rotate-12'}`}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#0088cc] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#0088cc] to-[#00cc88] opacity-0 transition-opacity duration-500
          ${isActive ? 'opacity-5' : 'group-hover:opacity-5'}`} 
      />
    </div>
  )
} 