'use client'
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react'

interface Props {
  children?: ReactNode
  className?: string
  delay?: number
  type?: 'up' | 'left' | 'scale'
  style?: CSSProperties
}

export default function ScrollReveal({ children, className = '', delay = 0, type = 'up', style = {} }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el) } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const baseStyle = "transition-all duration-700 ease-out"
  const stateStyle = isVisible 
    ? "opacity-100 translate-y-0 translate-x-0 scale-100" 
    : (type === 'up' ? "opacity-0 translate-y-8" : type === 'left' ? "opacity-0 -translate-x-8" : "opacity-0 scale-95")

  return (
    <div ref={ref} className={`${baseStyle} ${stateStyle} ${className}`} style={{...style, transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  )
}