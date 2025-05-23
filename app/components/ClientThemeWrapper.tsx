'use client'

import { ThemeProvider } from './ThemeProvider'
import { ReactNode } from 'react'

interface ClientThemeWrapperProps {
  children: ReactNode
}

export default function ClientThemeWrapper({ children }: ClientThemeWrapperProps) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  )
} 