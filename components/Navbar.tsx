'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('navbar')
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: t('home'), href: '/' as const },
    { name: t('services'), href: '/servicios' as const },
    { name: t('radon'), href: '/servicios/radon' as const },
    { name: t('asbestos'), href: '/servicios/amianto' as const },
    { name: t('municipalities'), href: '/municipios' as const },
    { name: t('aboutUs'), href: '/quienes-somos' as const },
    { name: t('clients'), href: '/clientes' as const },
  ]

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
          <Link href="/" className="flex items-center">
            <Image
              src="/logomono.webp"
              alt="ACM-2020"
              width={180}
              height={60}
              className="h-14 w-auto transition-all duration-300 filter-secondary"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/10 text-secondary hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:667623844"
              className="flex items-center space-x-2 text-sm font-medium transition-colors duration-300 text-secondary"
            >
              <Phone className="w-4 h-4" />
              <span>667 623 844</span>
            </a>
            <LanguageSwitcher variant="dropdown" theme="light" />
            <Link
              href="/contacto"
              className="btn-primary !py-2.5 !px-5 !text-sm"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-secondary"
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
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-secondary font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:667623844"
                className="flex items-center space-x-2 px-4 py-3 text-secondary font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>667 623 844</span>
              </a>
              <div className="px-4 py-2">
                <LanguageSwitcher variant="inline" theme="light" />
              </div>
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-2 block text-center"
              >
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
