'use client'
import ScrollReveal from './ScrollReveal'

const GALLERY_IMAGES = [
  { url: '/images/thiet_bi_cardio.jpg', category: 'Thiết bị Cardio' },
  { url: '/images/khu_vuc_ta_roi.jpg', category: 'Khu vực tạ rời' },
  { url: '/images/lop_yoga.jpeg', category: 'Lớp Yoga' },
  { url: '/images/lop_zumba.avif', category: 'Lớp Zumba' },
  { url: '/images/strength_machine.jpg', category: 'Strength Machine' },
  { url: '/images/banner.jpg', category: 'Cơ sở vật chất' },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Hình ảnh thực tế</p>
          <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">KHÔNG GIAN <span className="text-red-600">ĐẲNG CẤP</span></h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto italic">“Mắt thấy, tai nghe, tay chạm” — Khám phá hệ thống máy móc chuẩn quốc tế và tiện ích 5 sao tại Biên Hòa Gym.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={i} delay={i * 100} type="up" className="group relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Cơ sở vật chất</p>
                  <p className="text-white text-lg font-black uppercase tracking-widest">{img.category}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
