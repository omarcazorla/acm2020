'use client'

import React from 'react'

export function ContainerScroll({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </div>
      </div>
    </div>
  )
}
