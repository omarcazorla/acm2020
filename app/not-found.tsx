import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <Link href="/">
            <Image
              src="/logomono.webp"
              alt="ACM-2020"
              width={180}
              height={60}
              className="h-14 w-auto mb-12"
            />
          </Link>
          <h1 className="text-7xl font-bold text-[#1E3A5F] mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
            La p&aacute;gina que buscas no existe o ha sido trasladada.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#E67E22] text-white font-semibold rounded-xl hover:bg-[#d35400] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </body>
    </html>
  )
}
