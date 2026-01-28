'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Amianto', href: '#servicios' },
  { name: 'Radón', href: '#servicios' },
  { name: 'Quiénes somos', href: '#nosotros' },
  { name: 'Clientes', href: '#clientes' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logomono.webp"
              alt="ACM-2020"
              width={140}
              height={50}
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'invert'
              }`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 ${
                  isScrolled
                    ? 'text-secondary hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:667623844"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>667 623 844</span>
            </a>
            <a
              href="#contacto"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              Contactar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl p-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-secondary font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:667623844"
                className="flex items-center space-x-2 px-4 py-3 text-secondary font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>667 623 844</span>
              </a>
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-2"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
