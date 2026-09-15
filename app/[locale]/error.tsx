'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <Link href="/">
        <Image
          src="/logomono.webp"
          alt="ACM-2020"
          width={180}
          height={60}
          className="h-14 w-auto mb-12"
        />
      </Link>
      <h1 className="text-4xl font-bold text-secondary mb-4">Ha ocurrido un error</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Algo no ha funcionado correctamente. Puedes intentarlo de nuevo o volver al inicio.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-colors"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
