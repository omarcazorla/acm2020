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

  // Phase 1 (0.1–0.4): card rotates to flat
  const rotate = useTransform(scrollYProgress, [0.1, 0.4], [15, 0])
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.92, 1])

  // Phase 2 (0.4–0.55): stats appear after card is flat
  const statsOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])
  const statsY = useTransform(scrollYProgress, [0.4, 0.55], [20, 0])

  return (
    <div>
      {/* Header text */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </div>
      </div>

      {/* Scroll-driven section: card + stats */}
      <div ref={scrollRef} style={{ height: '180vh' }}>
        <div className="sticky top-[15vh] px-4">
          <div className="relative max-w-7xl mx-auto" style={{ perspective: '1000px' }}>
            {/* Card with 3D rotation */}
            <motion.div
              style={{ rotateX: rotate, scale, willChange: 'transform' }}
              className="relative aspect-[7355/2726] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              {children}
            </motion.div>

            {/* Stats overlay — outside rotated card, positioned on top */}
            {statsComponent && (
              <motion.div
                style={{ opacity: statsOpacity, y: statsY, willChange: 'opacity, transform' }}
                className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/50"
              >
                {statsComponent}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
