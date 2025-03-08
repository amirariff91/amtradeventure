'use client'

import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Team from './components/Team'
import Coverage from './components/Coverage'
import Competencies from './components/Competencies'
import DigitalServices from './components/DigitalServices'
import Achievements from './components/Achievements'
import ProjectHistory from './components/ProjectHistory'
import Licenses from './components/Licenses'
import Footer from './components/Footer'
import FloatingNav from './components/FloatingNav'
import ScrollProgress from './components/ScrollProgress'
import { useIntersectionObserver } from './utils/useIntersectionObserver'

export default function Home() {
  useIntersectionObserver()

  return (
    <main className="min-h-screen relative">
      <FloatingNav />
      <ScrollProgress />
      
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      
      <div className="space-y-12 md:space-y-16">
        <section id="about" className="reveal py-8 md:py-12">
          <div className="container">
            <About />
          </div>
        </section>
        
        <section id="solutions" className="reveal bg-neutral-50 dark:bg-neutral-900 py-8 md:py-12">
          <div className="container">
            <Competencies />
          </div>
        </section>
        
        <section id="digital" className="reveal py-8 md:py-12">
          <div className="container">
            <DigitalServices />
          </div>
        </section>
        
        <section id="philosophy" className="reveal bg-neutral-50 dark:bg-neutral-900 py-8 md:py-12">
          <div className="container">
            <Philosophy />
          </div>
        </section>
        
        <section id="achievements" className="reveal py-8 md:py-12">
          <div className="container">
            <Achievements />
          </div>
        </section>
        
        <section id="projects" className="reveal bg-neutral-50 dark:bg-neutral-900 py-8 md:py-12">
          <div className="container">
            <ProjectHistory />
          </div>
        </section>
        
        <section id="licenses" className="reveal py-8 md:py-12">
          <div className="container">
            <Licenses />
          </div>
        </section>
        
        <section id="coverage" className="reveal py-8 md:py-12">
          <div className="container">
            <Coverage />
          </div>
        </section>
        
        <section id="team" className="reveal bg-neutral-50 dark:bg-neutral-900 py-8 md:py-12">
          <div className="container">
            <Team />
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
