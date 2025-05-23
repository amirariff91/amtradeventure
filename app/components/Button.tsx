import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  as = 'button',
  href,
  ...props
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 
    font-semibold rounded-lg transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95 transform-gpu
    ${fullWidth ? 'w-full' : ''}
  `

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#0088cc] to-[#00cc88] text-white
      hover:from-[#0077bb] hover:to-[#00bb77] hover:shadow-lg
      focus:ring-[#0088cc]/50 border border-transparent
    `,
    secondary: `
      bg-gray-100 text-gray-900 hover:bg-gray-200 
      focus:ring-gray-500/50 border border-gray-200
      dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700
      dark:border-neutral-700
    `,
    outline: `
      bg-transparent text-[#0088cc] border-2 border-[#0088cc]
      hover:bg-[#0088cc] hover:text-white hover:shadow-lg
      focus:ring-[#0088cc]/50
      dark:text-[#00cc88] dark:border-[#00cc88] 
      dark:hover:bg-[#00cc88] dark:hover:text-black
    `,
    ghost: `
      bg-transparent text-gray-700 hover:bg-gray-100
      focus:ring-gray-500/50 border border-transparent
      dark:text-gray-300 dark:hover:bg-neutral-800
    `
  }

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim()

  const iconClasses = `
    w-4 h-4 transition-transform duration-300 
    ${iconPosition === 'right' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}
  `

  const content = (
    <>
      {isLoading && (
        <svg 
          className="w-4 h-4 animate-spin" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {!isLoading && icon && iconPosition === 'left' && (
        <span className={iconClasses} aria-hidden="true">
          {icon}
        </span>
      )}
      
      <span>{children}</span>
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className={iconClasses} aria-hidden="true">
          {icon}
        </span>
      )}
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transform-gpu" />
    </>
  )

  if (as === 'a' && href) {
    return (
      <a 
        href={href}
        className={`group ${buttonClasses}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button 
      className={`group ${buttonClasses}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  )
} 