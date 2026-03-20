import Navbar from '@/components/Navbar'
import FAQAccordion from '@/components/FAQAccordion'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const TESTIMONIALS = [
  { name: 'Lê Hoàng Nam', role: 'Chủ doanh nghiệp', text: 'Từ 85kg xuống 71kg nhờ lộ trình đúng. Đầu tư xứng đáng nhất của tôi.', bg: 'bg-black', textC: 'text-white' },
  { name: 'Trần Thị Bình', role: 'Giáo viên THPT', text: 'Sau 6 tháng giảm 8kg và hết đau lưng. Lớp Yoga thật sự thay đổi cuộc sống tôi.', bg: 'bg-neutral-100', textC: 'text-black' },
  { name: 'Nguyễn Văn An', role: 'Kỹ sư phần mềm', text: 'Tập 3 buổi/tuần là đủ thấy kết quả. Chi phí mỗi buổi chỉ bằng cốc cafe — quá hời.', bg: 'bg-red-600', textC: 'text-white' },
]

export default async function HomePage() {

  return (
    <div className="bg-white">
      <Navbar />
      <StickyBar />

      {/* 1. HERO SECTION - ANIMATED IMAGE BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Lớp hình ảnh với hiệu ứng Zoom chậm */}
        <div className="absolute inset-0 z-0 animate-zoom-slow">
          <div
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('https://caliactive.vn/storage/app/media/old/club/qu%E1%BA%ADn%204/TNL-Plaza-Facilties_2.png')" }} // Đảm bảo bạn có ảnh này trong thư mục public/images
          />
        </div>

        {/* Overlay màu tối để text nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-1" />

        <ScrollReveal type="up" className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 text-white text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-red-600 animate-pulse" /> Hôm nay 5:00 – 23:00
          </div>
          <h1 className="font-display text-white leading-none mb-4 tracking-wider uppercase drop-shadow-2xl" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
            ĐẬP TAN<br /><span className="text-red-600">GIỚI HẠN</span> CỦA BẠN
          </h1>
          <p className="text-neutral-200 text-sm md:text-base max-w-lg mx-auto mb-8 font-medium drop-shadow-lg">
            Phòng tập chuyên nghiệp từ năm 2019. Thiết bị chuẩn quốc tế.
            Cam kết hoàn tiền 100% trong 7 ngày nếu không hài lòng.
          </p>
          <Link href="/register" className="btn-primary shadow-2xl">TRẢI NGHIỆM MIỄN PHÍ</Link>
        </ScrollReveal>
      </section>

      {/* 2. STATS - PROFESSIONAL PROOF */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><div className="text-4xl font-display text-black">500+</div><div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Hội viên </div></div>
          <div><div className="text-4xl font-display text-black">5 Năm</div><div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Hoạt động </div></div>
          <div><div className="text-4xl font-display text-black">10+</div><div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">HLV Quốc tế </div></div>
          <div><div className="text-4xl font-display text-red-600">4.9/5</div><div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mt-1">Google Review</div></div>
        </div>
      </section>


      {/* 6. SOCIAL PROOF & FAQ */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-black mb-2 tracking-widest uppercase">KẾT QUẢ <span className="text-red-600">THỰC TẾ</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 200} type="up" className={`border ${t.bg === 'bg-black' || t.bg === 'bg-red-600' ? 'border-transparent' : 'border-neutral-300'} p-6 shadow-sm ${t.bg} ${t.textC}`}>
                <div className={`flex gap-0.5 mb-3 text-sm ${t.bg === 'bg-neutral-100' ? 'text-black' : 'text-white'}`}>★★★★★</div>
                <p className="text-xs font-medium leading-relaxed mb-6 opacity-90">“{t.text}”</p>
                <div className={`pt-3 border-t ${t.bg === 'bg-neutral-100' ? 'border-neutral-300' : 'border-white/20'}`}>
                  <p className="font-black uppercase tracking-widest text-[11px] mb-1">{t.name}</p>
                  <p className="text-[9px] uppercase tracking-wider opacity-70">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-black tracking-widest uppercase">CÂU HỎI PHỔ BIẾN</h2>
          </ScrollReveal>
          <FAQAccordion />
        </div>
      </section>

      {/* 7. FINAL ACTION */}
      <section className="py-16 bg-black relative overflow-hidden text-center border-t-[6px] border-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black z-0" />
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-widest uppercase">KHÔNG TRÌ HOÃN<br /><span className="text-red-600">BẮT ĐẦU NGAY</span></h2>
          <p className="text-neutral-400 text-sm mb-8 font-medium">Xây dựng phiên bản mạnh mẽ hơn tại 173 Nguyễn Ái Quốc, Biên Hòa.</p>
          <Link href="/register" className="btn-primary">ĐĂNG KÝ TẬP THỬ NGAY</Link>
        </ScrollReveal>
      </section>
      <Footer />
    </div>
  )
}