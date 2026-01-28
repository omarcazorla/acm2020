'use client'

import { Shield, Award, ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/IMG_0309-1280w.webp')`,
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-white text-sm font-medium">
              +25 años de experiencia · Certificación RERA 86/AB/09
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Protegemos la{' '}
            <span className="text-primary">salud pública</span>{' '}
            y el{' '}
            <span className="text-primary">medio ambiente</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Consultoría especializada en gestión integral de amianto y medición de gas radón.
            Soluciones profesionales para empresas, administraciones públicas y particulares.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contacto" className="btn-primary group">
              Solicitar presupuesto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="btn-outline">
              Conocer servicios
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+25</div>
                  <div className="text-sm text-white/70">Años experiencia</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">RERA</div>
                  <div className="text-sm text-white/70">Certificación</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">+500</div>
                  <div className="text-sm text-white/70">Proyectos</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/70">Compromiso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </a>
    </section>
  )
}
