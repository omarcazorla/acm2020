'use client'

import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export function ContainerScroll({
  titleComponent,
  statsComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  statsComponent?: React.ReactNode
  children: React.ReactNode
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  })

  // Stats fade in as card scrolls into view
  const statsOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1])
  const statsY = useTransform(scrollYProgress, [0.3, 0.45], [20, 0])

  return (
    <div>
      {/* Header text */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </div>
      </div>

      {/* Card + stats */}
      <div ref={scrollRef} className="px-4 pb-16">
        <div className="relative max-w-7xl mx-auto">
          {/* Card — static, no animation */}
          <div className="relative aspect-[7355/2726] w-full rounded-2xl overflow-hidden shadow-2xl">
            {children}
          </div>

          {/* Stats overlay */}
          {statsComponent && (
            <motion.div
              style={{ opacity: statsOpacity, y: statsY }}
              className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/50"
            >
              {statsComponent}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
