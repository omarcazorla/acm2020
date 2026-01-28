'use client'

import {
  Award,
  Shield,
  Users,
  Heart,
  Clock,
  CheckCircle,
  Target,
  Leaf,
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certificación RERA',
    description: 'Empresa registrada con número 86/AB/09 en el Registro de Empresas con Riesgo de Amianto.',
    highlight: '86/AB/09',
  },
  {
    icon: Clock,
    title: '+25 Años de Experiencia',
    description: 'Más de dos décadas de trayectoria profesional en el sector de la consultoría medioambiental.',
    highlight: '+25 años',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: 'Profesionales cualificados y en formación continua sobre las últimas normativas y técnicas.',
    highlight: 'Expertos',
  },
  {
    icon: Heart,
    title: 'Compromiso con la Salud',
    description: 'Nuestra prioridad es proteger la salud de las personas y preservar el medio ambiente.',
    highlight: 'Prioridad',
  },
]

const values = [
  {
    icon: Target,
    title: 'Profesionalidad',
    description: 'Rigor técnico en cada proyecto',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Protección de personas y entorno',
  },
  {
    icon: CheckCircle,
    title: 'Confianza',
    description: 'Transparencia en nuestra gestión',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Respeto al medio ambiente',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              Por la salud pública y el{' '}
              <span className="text-gradient">medio ambiente</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ACM-2020 es una consultora especializada en la gestión integral del amianto
              y el control de gas radón. Nacimos con el compromiso de proteger la salud
              de las personas y contribuir a la preservación del medio ambiente.
            </p>
            <p className="text-gray-600 mb-8">
              Nuestro equipo de profesionales cuenta con amplia experiencia y formación
              específica para ofrecer soluciones adaptadas a cada situación, garantizando
              el cumplimiento de la normativa vigente y los más altos estándares de calidad.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary text-sm">{value.title}</div>
                    <div className="text-xs text-gray-500">{value.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Trust indicators */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-1">
                  {feature.highlight}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary-600 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nuestra Misión
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                &ldquo;Contribuir a la protección de la salud pública y la preservación del
                medio ambiente mediante servicios de consultoría especializados en la
                gestión del amianto y el control del gas radón, con los más altos
                estándares de calidad y profesionalidad.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
