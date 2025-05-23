'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  effectiveTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Update effective theme based on current theme and system preference
  const updateEffectiveTheme = (currentTheme: Theme) => {
    if (currentTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setEffectiveTheme(systemTheme)
      return systemTheme
    } else {
      setEffectiveTheme(currentTheme)
      return currentTheme
    }
  }

  // Apply theme to document
  const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Add new theme class
    root.classList.add(theme)
    
    // Update color-scheme for browser defaults
    root.style.colorScheme = theme
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    
    const effective = updateEffectiveTheme(newTheme)
    applyTheme(effective)
  }

  const toggleTheme = () => {
    const newTheme = effectiveTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const initialTheme = storedTheme || defaultTheme
    
    setThemeState(initialTheme)
    const effective = updateEffectiveTheme(initialTheme)
    applyTheme(effective)
    
    setMounted(true)
  }, [defaultTheme])

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = () => {
        const effective = updateEffectiveTheme('system')
        applyTheme(effective)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white">
        {children}
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 