'use client'
import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

const presets: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export default function RevealOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  variant?: keyof typeof presets
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      variants={presets[variant]}
      className={className}
    >
      {children}
    </motion.div>
  )
}
