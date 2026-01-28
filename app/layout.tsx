import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ACM-2020 | Consultoría Especializada en Amianto y Gas Radón',
  description: 'ACM-2020: Más de 25 años de experiencia en gestión de amianto y medición de gas radón. Certificación RERA 86/AB/09. Protegemos la salud pública y el medio ambiente.',
  keywords: 'amianto, asbesto, gas radón, consultoría medioambiental, desamiantado, Barcelona, RERA, salud pública',
  authors: [{ name: 'ACM-2020' }],
  openGraph: {
    title: 'ACM-2020 | Consultoría Especializada en Amianto y Gas Radón',
    description: 'Más de 25 años protegiendo la salud pública y el medio ambiente. Expertos en amianto y gas radón.',
    url: 'https://acm2020.es',
    siteName: 'ACM-2020',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
