'use client'

import { useEffect } from 'react'

export function useIntersectionObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })

    const targets = document.querySelectorAll('.reveal')
    targets.forEach(target => observer.observe(target))

    return () => {
      targets.forEach(target => observer.unobserve(target))
    }
  }, [])
} 