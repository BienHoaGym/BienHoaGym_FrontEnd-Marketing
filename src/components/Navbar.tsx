'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const phone = process.env.NEXT_PUBLIC_PHONE || '0908 581 517'
const loginUrl = process.env.NEXT_PUBLIC_MANAGEMENT_URL || 'http://localhost:10000'

const NAV_LINKS = [
  { href: '/features', label: 'Tiện ích', external: false },
  { href: '/classes', label: 'Lớp học', external: false },
  { href: '/schedule', label: 'Lịch tập', external: false },
  { href: '/packages', label: 'Ưu đãi', external: false },
  { href: '/about', label: 'Về chúng tôi', external: false },
  { href: '/blog', label: 'Blog', external: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white text-black shadow-md border-b border-neutral-100 h-20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* LEFT: Logo & Brand */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center p-0.5 group-hover:rotate-12 transition-transform shadow-lg">
                <img src="/images/logo_circle.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col">
                <span className="font-display text-[10px] sm:text-xl tracking-tighter leading-none font-black text-black">
                    BIEN HOA <span className="text-red-600">GYM</span>
                </span>
                <span className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Elite Fitness</span>
            </div>
          </Link>

          {/* CENTER: Navigation (Desktop) */}
          <div className="hidden xl:flex items-center gap-2">
            {NAV_LINKS.map(l => {
              const isActive = pathname === l.href
              return (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all hover:text-red-600 ${isActive ? 'text-red-600' : 'text-neutral-600'}`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* RIGHT: Hotline, Login, CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Hotline (Always visible on large screens) */}
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`} 
              className="hidden md:flex flex-col items-end gap-0.5 group"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-red-600 transition-colors">Hotline 24/7</span>
              <span className="text-sm font-black text-black group-hover:text-red-600 transition-colors">{phone}</span>
            </a>

            <div className="h-8 w-px bg-neutral-100 hidden md:block mx-1"></div>

            {/* Main CTA - Ultra compact on Mobile */}
            <Link 
              href="/register" 
              className="bg-red-600 hover:bg-black text-white font-black uppercase tracking-widest px-2.5 py-2 sm:px-8 sm:py-3.5 text-[8px] sm:text-[12px] transition-all shadow-[0_5px_15px_rgba(220,38,38,0.3)] whitespace-nowrap shrink-0"
            >
              Tham Gia Ngay
            </Link>

            {/* Mobile Toggle */}
            <button className="text-black xl:hidden p-2 -mr-1" onClick={() => setOpen(!open)}>
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`block h-[3px] bg-black transition-all duration-300 ${open ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
                <span className={`block h-[3px] bg-black transition-all duration-300 ${open ? 'opacity-0' : 'w-4'}`} />
                <span className={`block h-[3px] bg-black transition-all duration-300 ${open ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`xl:hidden absolute top-20 left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out border-t border-neutral-100 ${open ? 'max-h-[100vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="p-6 flex flex-col gap-1">
            {NAV_LINKS.map(l => (
              <Link 
                key={l.href} 
                href={l.href} 
                onClick={() => setOpen(false)} 
                className={`flex items-center justify-between py-4 text-sm font-black uppercase tracking-widest border-b border-neutral-50 last:border-0 ${pathname === l.href ? 'text-red-600' : 'text-neutral-600'}`}
              >
                {l.label}
                <span className="text-neutral-300">→</span>
              </Link>
            ))}
            
            <div className="mt-8 flex flex-col gap-4">
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 bg-red-600 text-white py-5 font-black uppercase tracking-widest text-xs shadow-xl">
                    📞 GỌI TƯ VẤN: {phone}
                </a>
                <Link href="/register" onClick={() => setOpen(false)} className="text-center bg-black text-white py-5 font-black uppercase tracking-widest text-xs shadow-xl">
                    THAM GIA NGAY
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}