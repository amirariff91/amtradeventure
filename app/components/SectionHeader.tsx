interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
  centered?: boolean
  isDark?: boolean
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
  centered = true,
  isDark = false
}: SectionHeaderProps) {
  return (
    <div 
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-8 ${className}`}
    >
      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 ${
        isDark 
          ? 'bg-white/10 backdrop-blur-sm text-white' 
          : 'bg-[#0088cc]/10 text-[#0088cc]'
      }`}>
        {label}
      </span>
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${
          isDark ? 'text-white/90' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  )
} 