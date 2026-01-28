'use client'

import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Quiénes somos', href: '#nosotros' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
]

const services = [
  { name: 'Gestión de Amianto', href: '#servicios' },
  { name: 'Control de Radón', href: '#servicios' },
  { name: 'Inspecciones', href: '#servicios' },
  { name: 'Proyectos técnicos', href: '#servicios' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logomono.webp"
                alt="ACM-2020"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Consultoría especializada en gestión de amianto y control de gas radón.
              Más de 25 años protegiendo la salud pública y el medio ambiente.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/20 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-primary">RERA 86/AB/09</span>
              </div>
            </div>
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:667623844"
                  className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5" />
                  <span>667 623 844</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:acm@acm2020.es"
                  className="flex items-center space-x-3 text-white/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>acm@acm2020.es</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-white/70 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    C. Ibiza, 1, Bajos<br />
                    08214 Badia del Vallés<br />
                    Barcelona
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} ACM-2020. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Aviso legal
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
