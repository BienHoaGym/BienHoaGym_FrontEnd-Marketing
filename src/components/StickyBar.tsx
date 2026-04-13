'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 0 })
  const phone = process.env.NEXT_PUBLIC_PHONE || '0901 234 567'

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 }
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 }
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 }
        return prev
      })
    }, 1000)
    
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
        window.removeEventListener('scroll', handler)
        clearInterval(timer)
    }
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-down">
      <div className="bg-black border-t-[3px] border-red-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
          {/* DESKTOP CONTENT */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-none bg-red-600 animate-pulse" />
            <span className="text-white text-xs font-black uppercase tracking-widest">
              🔥 ƯU ĐÃI: GIẢM 25% + TẶNG 1 BUỔI PT
            </span>
            <span className="text-neutral-500 text-sm">|</span>
            <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              CHỈ CÒN <strong className="text-red-500">5 SUẤT</strong> TRONG 
              <span className="bg-red-600 text-white px-1.5 py-0.5 font-mono">
                {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
              </span>
            </span>
          </div>

          {/* MOBILE CONTENT (Simplified) */}
          <div className="md:hidden flex flex-col gap-0.5">
            <span className="text-red-600 text-[8px] font-black uppercase tracking-widest animate-pulse">🔥 ƯU ĐÃI SẮP HẾT</span>
            <span className="text-white text-[10px] font-black uppercase tracking-widest">
                CÒN {String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')} — <span className="text-red-500">5 SUẤT</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white text-[10px] font-bold transition-colors">
              📞 <span>{phone}</span>
            </a>
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-[9px] sm:text-xs py-2.5 px-4 transition-all animate-pulse-gentle">
              ĐĂNG KÝ
            </Link>
            <button onClick={() => setDismissed(true)} className="text-neutral-500 hover:text-white transition-colors p-1 ml-1" aria-label="Đóng">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}