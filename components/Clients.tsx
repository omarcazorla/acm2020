'use client'

import { Building2, Home, Landmark, Factory } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '+500', label: 'Proyectos realizados', icon: Building2 },
  { value: '+200', label: 'Clientes satisfechos', icon: Home },
  { value: '+50', label: 'Ayuntamientos', icon: Landmark },
  { value: '+100', label: 'Empresas', icon: Factory },
]

// Logos de clientes en /public/logos/
const clientLogos: string[] = [
  'ajuntament_badia_del_valles-1920w.png',
  'logo_bcn-1920w.webp',
  'diba-1920w.webp',
  'generalitat-departament-dempresa-i-ocupacio-1920w.webp',
  'agbar-1920w.webp',
  'aigu-es-de-barcelona-1920w.webp',
  'transports_metropolitans_barcelona-1920w.png',
  'Ferrocarris_de_la_Generalitat-1920w.png',
  'TV3-1920w.png',
  'bimsa-1920w.webp',
  'ajuntament_manresa-640w-1920w.webp',
  'ajuntament_martorell-1920w.webp',
  'agencia_residus_catalunya-1920w.webp',
  'consell_relacions_laborals_catalunya-1920w.webp',
  'gestora-de-runes-1920w.webp',
  'insst2-1920w.webp',
  'atl_aigua_ter-llobregat.gif',
]

const clientTypes = [
  'Ayuntamientos y administraciones públicas',
  'Empresas industriales',
  'Comunidades de propietarios',
  'Constructoras y promotoras',
  'Colegios y centros educativos',
  'Hospitales y centros sanitarios',
]

export default function Clients() {
  return (
    <section id="clientes" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Confían en{' '}
            <span className="text-gradient">nosotros</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trabajamos con empresas, administraciones públicas y particulares
            que valoran la profesionalidad y el compromiso con la seguridad.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client logos marquee - Solo se muestra si hay logos */}
        {clientLogos.length > 0 && (
          <div className="mb-16">
            <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
              Algunos de nuestros clientes
            </p>

            {/* Marquee container */}
            <div className="relative overflow-hidden bg-white rounded-2xl py-8 border border-gray-100">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Scrolling track */}
              <div className="flex animate-marquee">
                {/* First set of logos */}
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                      <Image
                        src={`/logos/${logo}`}
                        alt={`Cliente ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                      <Image
                        src={`/logos/${logo}`}
                        alt={`Cliente ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Client types */}
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sectores en los que trabajamos
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nuestra experiencia abarca múltiples sectores, adaptando nuestros
              servicios a las necesidades específicas de cada cliente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {clientTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-white font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
