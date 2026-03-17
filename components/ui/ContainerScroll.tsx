'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export function ContainerScroll({
  titleComponent,
  statsComponent,
}: {
  titleComponent: string | React.ReactNode
  statsComponent?: React.ReactNode
}) {
  const statsRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: statsRef,
    offset: ['start end', 'center center'],
  })

  const statsOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const statsY = useTransform(scrollYProgress, [0, 0.5], [20, 0])

  return (
    <div>
      {/* Header text */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </div>
      </div>

      {/* Stats */}
      {statsComponent && (
        <div ref={statsRef} className="px-4 pb-16">
          <motion.div
            style={{ opacity: statsOpacity, y: statsY }}
            className="max-w-7xl mx-auto"
          >
            {statsComponent}
          </motion.div>
        </div>
      )}
    </div>
  )
}
