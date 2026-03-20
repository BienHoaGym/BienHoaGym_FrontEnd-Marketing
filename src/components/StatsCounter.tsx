'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 500,  suffix: '+',    label: 'Hội viên đang tập',      sub: 'và tăng mỗi ngày',     icon: '👥' },
  { value: 5,    suffix: ' năm', label: 'Kinh nghiệm hoạt động',  sub: 'từ 2019 đến nay',      icon: '🏆' },
  { value: 10,   suffix: '+',    label: 'HLV chuyên nghiệp',      sub: 'chứng chỉ ACE · NASM', icon: '🎖️' },
  { value: 97,   suffix: '%',    label: 'Khách hàng hài lòng',    sub: 'đánh giá 4-5 sao',     icon: '⭐' },
]

function useCountUp(target: number, duration = 1500, start: boolean) {
  const [count, setCount] = useState(target)
  useEffect(() => {
    if (!start) return
    let t0: number | null = null
    const from = Math.floor(target * 0.1)
    const raf = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(from + eased * (target - from)))
      if (p < 1) requestAnimationFrame(raf)
      else setCount(target)
    }
    requestAnimationFrame(raf)
  }, [target, duration, start])
  return count
}

function StatItem({ s, animate, light }: { s: typeof STATS[0]; animate: boolean; light?: boolean }) {
  const n = useCountUp(s.value, 1500, animate)
  const textColor = light ? 'text-zinc-900' : 'text-white'
  const accentColor = light ? 'text-blue-600' : 'text-blue-400'
  const subColor = light ? 'text-zinc-600' : 'text-zinc-500'

  return (
    <div className="text-center group px-2">
      <div className="text-4xl mb-3 select-none group-hover:scale-110 transition-transform duration-300">
        {s.icon}
      </div>
      <div className={`font-display ${textColor} leading-none mb-1`} style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>
        {n}<span className={accentColor}>{s.suffix}</span>
      </div>
      <div className={`${textColor} font-semibold text-sm mt-2`}>{s.label}</div>
      <div className={`${subColor} text-xs mt-0.5`}>{s.sub}</div>
    </div>
  )
}

export default function StatsCounter({ light }: { light?: boolean }) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fb = setTimeout(() => setAnimate(true), 1000)
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); clearTimeout(fb) } },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => { io.disconnect(); clearTimeout(fb) }
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {STATS.map((s, i) => <StatItem key={i} s={s} animate={animate} light={light} />)}
    </div>
  )
}