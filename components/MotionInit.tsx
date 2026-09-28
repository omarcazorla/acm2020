'use client'

import { useEffect } from 'react'
import { initMotion } from '@/lib/motion'

export default function MotionInit() {
  useEffect(() => {
    const cleanup = initMotion()
    return cleanup
  }, [])

  return null
}
