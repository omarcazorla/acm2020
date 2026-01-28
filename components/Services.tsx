'use client'

import {
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Trash2,
  Shield,
  FileText,
  Activity,
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const amiantoServices = [
  {
    icon: FileSearch,
    title: 'Inspección e Identificación',
    description: 'Localización y evaluación de materiales con contenido de amianto en edificios e instalaciones.',
  },
  {
    icon: ClipboardCheck,
    title: 'Planes de Gestión',
    description: 'Elaboración de planes de gestión de MCA conforme a la normativa vigente.',
  },
  {
    icon: FileText,
    title: 'Proyectos de Desamiantado',
    description: 'Redacción de proyectos técnicos para la retirada segura de materiales con amianto.',
  },
  {
    icon: Trash2,
    title: 'Gestión de Residuos',
    description: 'Asesoramiento en la correcta eliminación y transporte de residuos de amianto.',
  },
  {
    icon: Shield,
    title: 'Dirección de Obra',
    description: 'Supervisión técnica de los trabajos de desamiantado garantizando la seguridad.',
  },
  {
    icon: AlertTriangle,
    title: 'Evaluación de Riesgos',
    description: 'Análisis de riesgos laborales relacionados con la exposición al amianto.',
  },
]

const radonServices = [
  {
    icon: Activity,
    title: 'Medición de Gas Radón',
    description: 'Mediciones precisas de concentración de radón en edificios y viviendas.',
  },
  {
    icon: Home,
    title: 'Soluciones Residenciales',
    description: 'Diagnóstico y soluciones para viviendas con niveles elevados de radón.',
  },
  {
    icon: Building2,
    title: 'Espacios de Trabajo',
    description: 'Evaluación de radón en centros de trabajo según el Real Decreto 1029/2022.',
  },
  {
    icon: FileText,
    title: 'Informes Técnicos',
    description: 'Elaboración de informes detallados con recomendaciones de actuación.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Soluciones especializadas para su{' '}
            <span className="text-gradient">seguridad</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos servicios integrales en gestión de amianto y control de gas radón,
            adaptados a las necesidades de cada cliente.
          </p>
        </div>

        {/* Amianto Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">Gestión de Amianto</h3>
              <p className="text-gray-600">Servicios integrales para la gestión segura de MCA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amiantoServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Radón Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">Control de Gas Radón</h3>
              <p className="text-gray-600">Medición y control del gas radón en interiores</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {radonServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why our services */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Por qué elegir nuestros servicios?
              </h3>
              <p className="text-white/80 mb-6">
                Contamos con la experiencia, certificaciones y el compromiso necesarios
                para garantizar su seguridad y tranquilidad.
              </p>
              <ul className="space-y-3">
                {[
                  'Más de 25 años de experiencia en el sector',
                  'Certificación RERA 86/AB/09',
                  'Equipo técnico altamente cualificado',
                  'Cumplimiento estricto de normativa',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="#contacto"
                className="btn-primary group text-lg"
              >
                Solicitar información
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
