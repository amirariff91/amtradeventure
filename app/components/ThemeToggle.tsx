'use client'

import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

function ThemeToggleContent() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, effectiveTheme, setTheme } = useTheme()

  const themes = [
    {
      value: 'light' as const,
      label: 'Light',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="m12 1-1.5 1.5M12 1l1.5 1.5M12 23l-1.5-1.5M12 23l1.5-1.5m8.5-11.5L21 12l1.5 1.5M1 12l1.5-1.5M1 12l1.5 1.5m17.66-7.66L17.5 6.5 19 5M5 19l1.5-1.5L5 19zM5 5l1.5 1.5L5 5z" />
        </svg>
      )
    },
    {
      value: 'dark' as const,
      label: 'Dark',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )
    },
    {
      value: 'system' as const,
      label: 'System',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-2 rounded-lg transition-all duration-300 
          bg-white/10 dark:bg-neutral-800/50 
          border border-neutral-200/50 dark:border-neutral-700/50
          hover:bg-white/20 dark:hover:bg-neutral-700/50
          backdrop-blur-sm shadow-sm hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-[#0088cc]/50 focus:ring-offset-2
          text-neutral-600 dark:text-neutral-300 hover:text-[#0088cc] dark:hover:text-[#00cc88]
        `}
        aria-label={`Current theme: ${currentTheme.label}. Click to change theme.`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2">
          {currentTheme.icon}
          <span className="text-sm font-medium hidden sm:inline">
            {currentTheme.label}
          </span>
          <svg 
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 z-50 w-48 py-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 backdrop-blur-sm">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value)
                  setIsOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors
                  hover:bg-neutral-100 dark:hover:bg-neutral-700
                  focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700
                  ${theme === themeOption.value 
                    ? 'text-[#0088cc] dark:text-[#00cc88] bg-[#0088cc]/5 dark:bg-[#00cc88]/5' 
                    : 'text-neutral-700 dark:text-neutral-300'
                  }
                `}
              >
                <span className={theme === themeOption.value ? 'text-[#0088cc] dark:text-[#00cc88]' : ''}>
                  {themeOption.icon}
                </span>
                <span className="flex-1">{themeOption.label}</span>
                {theme === themeOption.value && (
                  <svg className="w-4 h-4 text-[#0088cc] dark:text-[#00cc88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {themeOption.value === 'system' && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    ({effectiveTheme})
                  </span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-white/10 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50">
        <div className="w-4 h-4 animate-pulse bg-neutral-300 dark:bg-neutral-600 rounded" />
      </div>
    )
  }

  return <ThemeToggleContent />
} 