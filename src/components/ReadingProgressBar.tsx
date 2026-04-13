'use client'
import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        setProgress((currentScroll / scrollHeight) * 100)
      }
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-[80px] left-0 w-full h-1 z-[60] bg-transparent">
      <div 
        className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all duration-150 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  )
}
