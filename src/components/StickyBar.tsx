'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const phone = process.env.NEXT_PUBLIC_PHONE || '0901 234 567'

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slide-down">
      <div className="bg-black border-t-[3px] border-red-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-none bg-red-600 animate-pulse" />
            <span className="text-white text-xs font-black uppercase tracking-widest">
              🔥 ƯU ĐÃI: GIẢM 25% + TẶNG 1 BUỔI PT
            </span>
            <span className="text-neutral-500 text-sm">|</span>
            <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider">CHỈ CÒN <strong className="text-red-500">5 SUẤT</strong></span>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-none bg-red-600 animate-pulse" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">CÒN 5 SUẤT ƯU ĐÃI</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white text-xs font-bold transition-colors">
              📞 <span>{phone}</span>
            </a>
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-[10px] sm:text-xs py-2 px-4 transition-colors">
              ĐĂNG KÝ NGAY
            </Link>
            <button onClick={() => setDismissed(true)} className="text-neutral-500 hover:text-white transition-colors p-1" aria-label="Đóng">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}