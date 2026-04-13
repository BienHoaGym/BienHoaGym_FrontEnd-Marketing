import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'

const SECTIONS = [
  {
    num: '01',
    title: 'HỆ THỐNG THIẾT BỊ BIOMECHANICS 2026',
    subtitle: 'KHOA HỌC TRONG TỪNG CHUYỂN ĐỘNG',
    desc: 'Dàn máy **MATRIX** & **IMPULSE** phiên bản 2026 với thiết kế công thái học (Ergonomics) vượt trội. Hệ thống được tinh chỉnh để **tối ưu hóa quỹ đạo chuyển động**, giảm áp lực lên xương khớp. "Máy Matrix ở đây tập êm hơn hẳn các phòng khác tôi từng tập qua." — **Anh Minh (Hội viên Elite)**.',
    img: '/images/BIOMECHANICS.jpg',
    features: ['Giảm áp lực khớp', 'Quỹ đạo chuẩn xác', 'Màn hình tracking AI']
  },
  {
    num: '02',
    title: 'TIỆN NGHI ELITE 5 SAO',
    subtitle: 'SỰ SANG TRỌNG TRONG TỪNG CHI TIẾT',
    desc: 'Trải nghiệm sự chăm sóc tuyệt đối sau giờ tập: Hệ thống nước lọc ion kiềm miễn phí, phòng tắm thư giãn với tinh dầu sả chanh tự nhiên, máy sấy tóc **DYSON** cao cấp và khăn tập luôn được khử khuẩn bằng công nghệ **tia UV** tiên tiến nhất.',
    img: '/images/tiennghi5sao.jpg',
    features: ['Máy sấy Dyson', 'Khử khuẩn UV', 'Nước uống Ion kiềm']
  },
  {
    num: '03',
    title: 'ĐỘI NGŨ MASTER TRAINER',
    subtitle: 'HƠN 10,000 GIỜ HUẤN LUYỆN THỰC CHIẾN',
    desc: '100% HLV sở hữu chứng chỉ quốc tế uy tín (**NASM, ISSA**). Chúng tôi không chỉ dạy tập, chúng tôi thiết kế lộ trình chuyển hóa cơ thể toàn diện: từ kỹ thuật tập luyện đến thực đơn dinh dưỡng cá nhân hóa dựa trên chỉ số Inbody và đặc điểm sinh học của riêng bạn.',
    img: '/images/doi_ngu.jpg',
    features: ['Chứng chỉ NASM/ISSA', 'Dinh dưỡng chuyên sâu', 'Theo sát 1:1']
  },
  {
    num: '04',
    title: 'CÔNG NGHỆ QUẢN LÝ MỘT CHẠM',
    subtitle: 'TIẾT KIỆM 5 PHÚT MỖI BUỔI TẬP',
    desc: 'Nói lời tạm biệt với những chiếc thẻ vật lý rườm rà. Tại Biên Hòa Gym, chiếc Smartphone của bạn chính là chìa khóa vạn năng: Từ check-in QR Code siêu tốc đến đặt lịch nhanh gọn. Tiết kiệm thời gian chờ đợi để bạn tập trung hoàn toàn vào mục tiêu của mình.',
    img: '/images/checkin.jpg',
    features: ['Check-in QR Code', 'Mobile App riêng', 'Đặt lịch 24/7']
  }
]

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <StickyBar />
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center opacity-60 grayscale" style={{ backgroundImage: "url('/images/banner_gym.jpg')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-white z-1" />
        
        <ScrollReveal className="relative z-10 text-center px-4">
          <p className="text-red-600 text-xs font-black tracking-[0.5em] uppercase mb-4">Elite Gym Experience</p>
          <h1 className="font-display text-5xl md:text-8xl text-white tracking-widest uppercase mb-0">
            TIỆN ÍCH <span className="text-red-500">BIÊN HÒA</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* STORYTELLING SECTIONS */}
      <section className="bg-white">
        {SECTIONS.map((s, i) => (
          <div key={s.num} className={`py-24 md:py-40 border-b border-neutral-50 overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                
                {/* IMAGE HALF */}
                <ScrollReveal type={i % 2 === 1 ? 'left' : 'right'} className="w-full md:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-red-600/5 -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={s.img} 
                      className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-110" 
                      alt={s.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {/* Decorative number with parallax-like floating effect */}
                  <div className={`absolute -bottom-12 ${i % 2 === 1 ? '-left-8' : '-right-8'} font-display text-9xl text-neutral-100 -z-10 select-none opacity-50 transition-transform duration-1000 group-hover:-translate-y-4`}>
                    {s.num}
                  </div>
                </ScrollReveal>

                {/* CONTENT HALF */}
                <div className="w-full md:w-1/2">
                  <ScrollReveal type={i % 2 === 1 ? 'right' : 'left'} delay={100}>
                    <p className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4">{s.subtitle}</p>
                    <h2 className="font-display text-3xl md:text-5xl text-black tracking-widest uppercase mb-8 leading-tight">
                        {s.title}
                    </h2>
                    
                    <div className="h-1 w-20 bg-red-600 mb-8" />
                    
                    <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10 font-medium">
                        {s.desc.split('**').map((part, idx) => (
                        idx % 2 === 1 ? <strong key={idx} className="text-black">{part}</strong> : part
                        ))}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {s.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/80">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {f}
                        </li>
                        ))}
                    </ul>

                    <div className="mt-12">
                        <button className="group flex items-center gap-4 text-black text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-600 transition-all bg-neutral-50 px-6 py-4 rounded-none hover:bg-neutral-100">
                            TÌM HIỂU CHI TIẾT 
                            <span className="w-8 h-px bg-black group-hover:w-14 group-hover:bg-red-600 transition-all" />
                            <span className="text-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">→</span>
                        </button>
                    </div>
                  </ScrollReveal>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FINAL CTA PARALLAX EXPERIENCE - Simplified Simulation */}
      <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-40">
            <img src="/images/kien_thuc_tap_luyen.jpg" className="w-full h-full object-cover" alt="Elite Gym" />
        </div>
        <ScrollReveal className="relative z-10 px-4">
            <h3 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase mb-8">
                TRẢI NGHIỆM ĐỂ <span className="text-red-600">CẢM NHẬN</span>
            </h3>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 uppercase text-xs font-bold tracking-widest leading-loose">
                Chúng tôi không chỉ là phòng tập. Chúng tôi là nơi tái định nghĩa giới hạn của chính bạn. 
                Hãy dành 30 phút để tham quan và nhận tư vấn Inbody miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-red-600 text-white px-12 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl">
                    ĐĂNG KÝ THAM QUAN
                </button>
                <button className="border border-white text-white px-12 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    XEM BẢNG GIÁ
                </button>
            </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  )
}
