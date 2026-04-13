'use client'
import ScrollReveal from './ScrollReveal'
import Link from 'next/link'
import type { PublicPackage } from '../../services/publicApi'

export default function PricingPreview({ packages }: { packages: PublicPackage[] }) {
  // Chọn ra 3 gói đại diện
  const mainPackages = packages
    .filter(p => !p.hasPT)
    .sort((a, b) => a.price - b.price)
    .slice(0, 3)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Gói tập linh hoạt</p>
          <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">MINH BẠCH <span className="text-red-600">GIÁ CẢ</span></h2>
          <p className="text-neutral-500 mt-4 max-w-lg mx-auto text-sm">Lựa chọn gói tập phù hợp với mục tiêu và ngân sách của bạn. Không phí ẩn, không cam kết phức tạp.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainPackages.map((pkg, i) => {
            const isFeatured = i === 1 // Gói ở giữa là featured
            return (
              <ScrollReveal key={pkg.id} delay={i * 150} type="up" 
                className={`p-8 border-2 transition-all flex flex-col h-full ${isFeatured ? 'bg-black text-white border-red-600 shadow-2xl scale-105 z-10' : 'bg-white text-black border-neutral-100 hover:border-black'}`}>
                
                {isFeatured && (
                  <div className="flex gap-2 mb-4">
                    <div className="bg-red-600 text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest inline-block">
                      ĐƯỢC CHỌN NHIỀU NHẤT
                    </div>
                    <div className="bg-white text-black text-[9px] font-black px-3 py-1 uppercase tracking-widest inline-block">
                      TIẾT KIỆM 30%
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-black uppercase tracking-widest mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">{(pkg.price / 1000).toLocaleString()}K</span>
                  <span className="text-[10px] font-bold opacity-60 uppercase">/ Gói</span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {['Full máy móc chuyên nghiệp', 'Tủ đồ & Phòng tắm', 'Nước uống miễn phí', 'Đo Inbody định kỳ'].map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide">
                      <svg className={`w-3 h-3 ${isFeatured ? 'text-red-500' : 'text-red-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/packages" 
                  className={`w-full py-3 text-[11px] font-black uppercase tracking-widest transition-all text-center ${isFeatured ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-black text-white hover:bg-neutral-800'}`}
                >
                  XEM CHI TIẾT
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-16 text-center">
            <Link href="/packages" className="text-neutral-500 hover:text-red-600 text-xs font-black uppercase tracking-[0.2em] border-b border-neutral-200 pb-1 transition-colors">
                Xem tất cả các gói tập & Gói PT 1-1 →
            </Link>
        </div>
      </div>
    </section>
  )
}
