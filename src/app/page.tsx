import Navbar from '@/components/Navbar'
import FAQAccordion from '@/components/FAQAccordion'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Gallery from '@/components/Gallery'
import MeetCoaches from '@/components/MeetCoaches'
import ProcessFlow from '@/components/ProcessFlow'
import LeadMagnet from '@/components/LeadMagnet'
import PricingPreview from '@/components/PricingPreview'
import KnowledgeSection from '@/components/KnowledgeSection'
import Link from 'next/link'
import { publicApiService } from '@/../services/publicApi'

const TESTIMONIALS = [
  { name: 'Lê Hoàng Nam', role: 'Chủ doanh nghiệp', text: 'Từ 85kg xuống 71kg nhờ lộ trình đúng. Đầu tư xứng đáng nhất của tôi.', bg: 'bg-black', textC: 'text-white' },
  { name: 'Trần Thị Bình', role: 'Giáo viên THPT', text: 'Sau 6 tháng giảm 8kg và hết đau lưng. Lớp Yoga thật sự thay đổi cuộc sống tôi.', bg: 'bg-neutral-100', textC: 'text-black' },
  { name: 'Nguyễn Văn An', role: 'Kỹ sư phần mềm', text: 'Tập 3 buổi/tuần là đủ thấy kết quả. Chi phí mỗi buổi chỉ bằng cốc cafe — quá hời.', bg: 'bg-red-600', textC: 'text-white' },
]

export default async function HomePage() {
  // Lấy dữ liệu thật từ Backend cho Pricing và Coaches
  const [packages, trainers] = await Promise.all([
    publicApiService.getActivePackages(),
    publicApiService.getActiveTrainers()
  ])

  return (
    <div className="bg-white">
      <Navbar />
      <StickyBar />

      {/* 1. HERO SECTION - ANIMATED IMAGE BANNER */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 animate-zoom-slow">
          <div
            className="w-full h-full bg-cover bg-center opacity-100 saturate-[1.3] contrast-[1.15]"
            style={{ backgroundImage: "url('/images/banner_gym.jpg')" }}
          />
        </div>
        
        {/* Overlays: Darken background for text legibility */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[2]" />
 
        <ScrollReveal type="up" className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 text-white text-[10px] font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-red-600 animate-pulse" /> ĐANG MỞ CỬA: 5:00 – 22:00
          </div>
          <h1 className="font-display text-white leading-none mb-4 tracking-wider uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)' }}>
            CHỌN SỨC KHỎE<br />
            <span className="text-white">CHỌN </span>
            <span className="text-red-600">BIÊN HÒA GYM</span>
          </h1>
          <p className="text-neutral-200 text-sm md:text-base max-w-lg mx-auto mb-8 font-medium drop-shadow-lg leading-relaxed">
            Phòng tập chuyên nghiệp chuẩn 5 sao tại trung tâm Biên Hòa.
            Nơi biến mục tiêu vóc dáng của bạn thành hiện thực với chi phí tối ưu nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary shadow-2xl">ĐĂNG KÝ TẬP THỬ</Link>
            <Link href="/packages" className="bg-white hover:bg-neutral-100 text-black font-black uppercase tracking-widest px-8 py-4 transition-all text-xs">XEM BẢNG GIÁ</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. GALLERY SECTION - REAL PICS */}
      <Gallery />

      {/* 3. PROCESS FLOW - HOW IT WORKS */}
      <ProcessFlow />

      {/* 4. PRICING PREVIEW - TRANSPARENCY */}
      <PricingPreview packages={packages} />

      {/* 5. MEET THE COACHES */}
      <MeetCoaches trainers={trainers} />

      {/* 6. LEAD MAGNET - VOUCHER OFFER */}
      <LeadMagnet />

      {/* 7. SOCIAL PROOF & FAQ - Tăng Padding để tạo khoảng nghỉ */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 mb-24">
          <ScrollReveal className="text-center mb-16">
            <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Cộng đồng hội viên</p>
            <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase leading-tight">KẾT QUẢ <span className="text-red-600">THỰC TẾ</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 200} type="up" className={`border ${t.bg === 'bg-black' || t.bg === 'bg-red-600' ? 'border-transparent' : 'border-neutral-200'} p-8 shadow-sm ${t.bg} ${t.textC} rounded-br-[40px]`}>
                <div className={`flex gap-0.5 mb-4 text-sm ${t.bg === 'bg-neutral-100' ? 'text-black' : 'text-white'}`}>★★★★★</div>
                <p className="text-sm font-medium leading-relaxed mb-8 opacity-90">“{t.text}”</p>
                <div className={`pt-4 border-t ${t.bg === 'bg-neutral-100' ? 'border-neutral-200' : 'border-white/10'}`}>
                  <p className="font-black uppercase tracking-widest text-xs mb-1">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider opacity-60">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* KNOWLEDGE SECTION - Thay thế Facebook Feed */}
        <KnowledgeSection />

        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display text-4xl text-black tracking-widest uppercase mb-4">GIẢI ĐÁP <span className="text-red-600">THẮC MẮC</span></h2>
          </ScrollReveal>
          <FAQAccordion />
        </div>
      </section>

      {/* 8. FINAL ACTION - Tăng Padding và chỉnh sửa nút CTA cho đồng nhất */}
      <section className="py-32 bg-black relative overflow-hidden text-center border-t-[8px] border-red-600">
        <div className="absolute inset-0 opacity-40 z-0">
          <img src="/images/kien_thuc_tap_luyen.jpg" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black z-[1]" />
        <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-widest uppercase leading-none">THAY ĐỔI<br /><span className="text-red-600">BẮT ĐẦU TỪ ĐÂY</span></h2>
          <p className="text-neutral-400 text-sm md:text-base mb-10 font-medium max-w-lg mx-auto">Gia nhập cộng đồng 500+ hội viên đang lột xác mỗi ngày tại 173 Nguyễn Ái Quốc, Biên Hòa.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary shadow-2xl px-12">TẬP THỬ MIỄN PHÍ</Link>
            <a href="https://zalo.me/0901234567" className="group bg-white hover:bg-neutral-200 text-black font-black uppercase tracking-widest px-12 py-4 transition-all text-xs flex items-center justify-center gap-2 border border-neutral-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Zalo" /> 
              CHAT ZALO
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  )
}
