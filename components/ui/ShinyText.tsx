'use client'

import { useState } from 'react'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
  color?: string
  shineColor?: string
  spread?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  delay?: number
}

const ShinyText = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#A85613',
  shineColor = '#ffffff',
  spread = 120,
  pauseOnHover = false,
  direction = 'left',
  delay = 0,
}: ShinyTextProps) => {
  const [isPaused, setIsPaused] = useState(false)

  const totalDuration = speed + delay

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: disabled ? 'none' : `shiny-sweep ${totalDuration}s linear infinite`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
    animationPlayState: isPaused ? 'paused' : 'running',
  }

  return (
    <span
      className={`inline-block font-inherit text-inherit leading-inherit ${className}`}
      style={gradientStyle}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      {text}
    </span>
  )
}

export default ShinyText
