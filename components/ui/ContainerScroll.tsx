'use client'

import React from 'react'

export function ContainerScroll({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) {
  return (
    <div>
      <div className="min-h-dvh flex items-center justify-center px-4">
        <div className="max-w-5xl w-full mx-auto text-center">
          {titleComponent}
        </div>
      </div>
    </div>
  )
}
