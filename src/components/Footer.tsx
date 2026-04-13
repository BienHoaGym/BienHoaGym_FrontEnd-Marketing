// src/components/Footer.tsx
import Link from 'next/link'

const phone = process.env.NEXT_PUBLIC_PHONE || '0901 234 567'
const address = process.env.NEXT_PUBLIC_ADDRESS || '173 Đường Nguyễn Ái Quốc, P. Tân Tiến, TP. Biên Hòa, Đồng Nai'
const email = process.env.NEXT_PUBLIC_EMAIL || 'contact@gymbienhoz.vn'
const zalo = process.env.NEXT_PUBLIC_ZALO || '0908581517'
const fb = process.env.NEXT_PUBLIC_FACEBOOK || 'https://facebook.com/gymbienhoz'

const QUICK_LINKS = [
  { href: '/#features', label: 'Tiện ích' },
  { href: '/#packages', label: 'Gói tập' },
  { href: '/schedule', label: 'Lịch tập' },
  { href: '/about', label: 'Về chúng tôi' },
  { href: '/register', label: 'Đăng ký ngay' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t-[6px] border-red-600">
      <div className="border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Google Map - Đã xóa filter grayscale để hiển thị màu bình thường */}
            <div className="relative h-48 md:h-64 bg-neutral-900 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.155734842186!2d106.8323147112933!3d10.9515907558839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d930214a1251%3A0x6424e8e1990924e2!2zMTczIE5ndXnhu4VuIMaSBRdeG7kWMsIFTDom4gVGnhur_uLCBUaMOgbmggcGjhu5EgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }} // Đã bỏ filter: 'grayscale(100%)' 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Gym Biên Hòa"
              />
              {/* Overlay pin */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="bg-red-600 text-white text-[10px] font-black tracking-widest px-3 py-1.5 shadow-xl border border-black uppercase">
                  📍 VỊ TRÍ PHÒNG TẬP
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-6 md:p-8 flex flex-col justify-center border-l border-neutral-900">
              <h3 className="text-white font-display text-3xl tracking-widest uppercase mb-3">
                GYM <span className="text-red-600">BIÊN HÒA</span>
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm font-medium mb-2">📍 {address} </p>
              <p className="text-zinc-300 text-xs md:text-sm font-medium mb-4">
                📞 <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-red-600 font-bold text-white transition-colors">{phone} </a>
              </p>
              <a
                href="https://maps.app.goo.gl/YourGoogleMapsLink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black hover:bg-neutral-200 font-black tracking-widest uppercase text-[10px] py-3 px-6 w-fit transition-colors"
              >
                🗺️ NHẬN CHỈ ĐƯỜNG
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl grayscale">💪</span>
              <div className="font-display text-xl text-white tracking-widest leading-none">
                GYM<br /><span className="text-red-600">BIÊN HÒA</span>
              </div>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Không thỏa hiệp. Không lý do. Môi trường tập luyện chuyên nghiệp, giúp bạn chạm tới phiên bản tốt nhất.
            </p>
          </div>
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.2em] uppercase mb-4 border-l-2 border-red-600 pl-2">ĐIỀU HƯỚNG</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-400 font-bold hover:text-red-600 text-xs tracking-widest uppercase transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-[10px] tracking-[0.2em] uppercase mb-4 border-l-2 border-red-600 pl-2">GIỜ MỞ CỬA</h4>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span>T2 – T6</span>
                <span className="text-white font-black">05:00 – 23:00 </span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span>T7 – CN</span>
                <span className="text-white font-black">06:00 – 22:00 </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-900 py-4 bg-black text-center text-[9px] font-bold tracking-widest uppercase text-neutral-600">
        <p>© {new Date().getFullYear()} GYM BIÊN HÒA. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU. </p>
      </div>
    </footer>
  )
}