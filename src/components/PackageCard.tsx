'use client'
import type { PublicPackage } from '../../services/publicApi'
import Link from 'next/link'

export default function PackageCard({ pkg, featured }: { pkg: PublicPackage; featured?: boolean }) {
  const priceDisplay = (pkg.discountPrice ?? pkg.price).toLocaleString('vi-VN')
  const originalPrice = pkg.discountPrice ? pkg.price.toLocaleString('vi-VN') : null
  
  return (
    <div className={`relative flex flex-col p-8 transition-all duration-500 hover:-translate-y-2 border-2 
      ${featured 
        ? 'bg-black text-white border-red-600 shadow-[20px_20px_60px_-15px_rgba(220,38,38,0.3)] scale-105 z-10' 
        : 'bg-white text-black border-neutral-200 hover:border-black shadow-xl shadow-neutral-200/50'}`}>
      
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-[0.2em] whitespace-nowrap shadow-lg">
          PHỔ BIẾN NHẤT
        </div>
      )}

      <div className="mb-8">
        <h3 className={`font-display text-4xl mb-2 tracking-wider ${featured ? 'text-white' : 'text-black'}`}>
          {pkg.name}
        </h3>
        <p className={`text-xs font-medium leading-relaxed min-h-[40px] ${featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
          {pkg.description || 'Trải nghiệm không gian tập luyện đẳng cấp với đầy đủ thiết bị hiện đại.'}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-bold opacity-70">₫</span>
          <span className="text-5xl font-black tracking-tighter">{priceDisplay}</span>
        </div>
        {originalPrice && (
          <div className="flex items-center gap-2 mt-1 opacity-50 line-through text-xs font-bold">
            ₫{originalPrice}
          </div>
        )}
        <div className={`text-[10px] font-bold uppercase tracking-widest mt-3 ${featured ? 'text-red-500' : 'text-red-600'}`}>
           {pkg.durationInDays} NGÀY TẬP LUYỆN
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {[
          'Full thiết bị Cardio & Tạ',
          'Tủ đồ cá nhân an toàn',
          'Phòng tắm nóng lạnh',
          'WiFi & Nước uống miễn phí',
          pkg.sessionLimit ? `${pkg.sessionLimit} buổi tập PT` : 'HLV hướng dẫn máy'
        ].map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? 'text-red-500' : 'text-red-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-xs font-bold uppercase tracking-wide ${featured ? 'text-neutral-200' : 'text-neutral-700'}`}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <Link 
        href={`/register?package_name=${encodeURIComponent(pkg.name)}`}
        className={`w-full py-4 text-sm font-black uppercase tracking-[0.2em] transition-all text-center
          ${featured 
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
            : 'bg-black text-white hover:bg-neutral-800'}`}
      >
        ĐĂNG KÝ NGAY
      </Link>
    </div>
  )
}