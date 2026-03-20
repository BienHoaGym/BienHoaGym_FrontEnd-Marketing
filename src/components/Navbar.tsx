'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const phone = process.env.NEXT_PUBLIC_PHONE || '0901234567'
const NAV_LINKS = [
  { href: '/features',  label: 'Tiện ích',  external: false },
  { href: '/packages',  label: 'Gói tập',   external: false },
  { href: '/schedule',  label: 'Lịch tập',  external: false },
  { href: '/classes',   label: 'Lớp học',   external: false },
  { href: '/about',     label: 'Về chúng tôi', external: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Header hiện tại đã được fix cứng nền trắng và shadow để đồng nhất trên mọi trang
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-200 h-16 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Cố định màu đen */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="text-xl group-hover:scale-110 transition-transform">💪</span>
            <span className="font-display text-lg tracking-widest leading-none text-black">
              GYM<br className="hidden" /> BIÊN HÒA
            </span>
          </Link>

          {/* Desktop Nav - Luôn hiển thị màu sắc rõ ràng, không phụ thuộc cuộn chuột */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => {
              const isActive = !l.external && pathname === l.href
              return l.external ? (
                <a key={l.href} href={l.href} className="px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg text-neutral-600 hover:text-red-600">
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg ${isActive ? 'text-red-600 bg-red-50' : 'text-neutral-600 hover:text-red-600'}`}>
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* CTA & Hotline - Cố định style */}
          <div className="flex items-center gap-3">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hidden md:flex items-center gap-1 text-sm font-bold text-neutral-600 hover:text-red-600 transition-colors">
              📞 {phone}
            </a>
            <Link href="/register" className="bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wide px-5 py-2 text-xs transition-all shadow-md">
              Đăng Ký
            </Link>
            
            {/* Mobile Toggle */}
            <button className="text-black lg:hidden p-2 -mr-1 rounded-lg" onClick={() => setOpen(!open)}>
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-black transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-black transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Đồng bộ nền trắng */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 pb-4' : 'max-h-0'}`}>
          <div className="border-t border-neutral-100 pt-2 space-y-1">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-red-600">
                {l.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-neutral-100 px-4 flex flex-col gap-2">
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-red-600 text-sm font-bold">📞 {phone}</a>
              <Link href="/register" onClick={() => setOpen(false)} className="bg-red-600 text-white font-bold uppercase tracking-wide text-xs py-3 text-center shadow-md">
                Đăng Ký Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}