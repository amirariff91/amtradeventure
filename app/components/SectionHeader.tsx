interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
  centered?: boolean
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
  centered = true
}: SectionHeaderProps) {
  return (
    <div 
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-8 ${className}`}
    >
      <span className="inline-block px-4 py-2 bg-[#0088cc]/10 rounded-full text-sm font-semibold text-[#0088cc] tracking-wider uppercase mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-inherit leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-inherit/80 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
} 