'use client'
import { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ScrollReveal from '../../components/ScrollReveal'
import Link from 'next/link'

// COMPONENT: Số chạy tự động khi scroll tới
function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return <div ref={elementRef}>{count.toLocaleString()}</div>
}

const TIMELINE = [
  { year: '2019', title: 'THÀNH LẬP', desc: 'Ra đời với 50 thành viên đầu tiên tại trung tâm Biên Hòa, khởi nguồn từ khát vọng thay đổi vóc dáng người Việt.', image: '/images/logo 1.jpg' },
  { year: '2020', title: 'MỞ RỘNG', desc: 'Nâng cấp diện tích lên 500m², bổ sung hệ thống Cardio hiện đại từ Matrix (USA).', image: '/images/banner.jpg' },
  { year: '2021', title: 'CHỨNG NHẬN', desc: '100% đội ngũ HLV hoàn thành chứng chỉ quốc tế ACE & NASM, chuẩn hóa quy trình đào tạo khoa học.', image: '/images/huan-luyen-vien-the-hinh.jpg' },
  { year: '2022', title: 'TĂNG TRƯỞNG', desc: 'Đạt mốc 300+ hội viên trung thành, mở rộng khu Free Weight chuyên sâu cho vận động viên.', image: '/images/khu_vuc_ta_roi.jpg' },
  { year: '2023', title: 'ĐỘT PHÁ', desc: 'Trang bị dàn máy Impulse 2024. Ra mắt 10 lớp Group-X từ bản quyền Les Mills.', image: '/images/tiennghi5sao.jpg' },
  { year: '2024', title: 'DẪN ĐẦU', desc: 'Cột mốc 800+ hội viên. Trở thành biểu tượng Fitness Kỷ luật & Hiệu quả tại Đồng Nai.', image: '/images/doi_ngu.jpg' },
]

const CORE_VALUES = [
  { 
    title: 'TẬN TÂM', 
    image: '/images/PT 1_1.jpg',
    icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ), 
    desc: 'Chúng tôi không chỉ bán thẻ, chúng tôi bán sự thay đổi. HLV luôn theo sát từng nhịp thở và kỹ thuật của hội viên.' 
  },
  { 
    title: 'KHOA HỌC', 
    image: '/images/BIOMECHANICS.jpg',
    icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-600 transition-transform duration-700 group-hover:rotate-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.574.345l-2.387-.477a2 2 0 00-2.25 1.753l-.328 1.312a2 2 0 001.942 2.486h13.25a2 2 0 001.942-2.486l-.328-1.312zM12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
    ), 
    desc: 'Mọi lộ trình tập luyện và dinh dưỡng đều dựa trên dữ liệu Inbody thực tế và y học thể thao hiện đại.' 
  },
  { 
    title: 'CỘNG ĐỒNG', 
    image: '/images/lop_yoga.jpeg',
    icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-12 h-12 text-red-600 transition-transform duration-1000 group-hover:rotate-[360deg]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ), 
    desc: 'Biên Hòa Gym là ngôi nhà chung của những con người kỷ luật, nơi kết nối những tâm hồn cùng đam mê sống khỏe.' 
  }
]

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const [activeYear, setActiveYear] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom">
            <img src="/images/banner_gym.jpg" className="w-full h-full object-cover opacity-30 grayscale" alt="Gym" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-1" />
        
        <ScrollReveal className="relative z-10 text-center px-4">
          <p className="text-red-600 text-[10px] font-black tracking-[0.6em] uppercase mb-6 drop-shadow-md">Established 2019</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display text-white mb-8 tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-[1.1] drop-shadow-2xl break-words">
            VẬN MỆNH<br /><span className="text-red-600">TRONG TAY BẠN</span>
          </h1>
          <p className="text-neutral-200 text-[11px] md:text-sm max-w-2xl mx-auto font-black uppercase tracking-[0.4em] leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Hành trình từ một phòng tập nhỏ đến biểu tượng Fitness chuyên nghiệp nhất Biên Hòa.
          </p>
        </ScrollReveal>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="bg-black py-16 border-y border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            <div className="text-center px-4">
                <div className="text-red-600 font-display text-3xl md:text-5xl mb-3 flex justify-center items-end gap-1">
                    <CountUp end={800} /> <span className="text-xl md:text-2xl">+</span>
                </div>
                <p className="text-neutral-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Hội viên</p>
            </div>
            <div className="text-center border-l border-neutral-900 px-4">
                <div className="text-white font-display text-3xl md:text-5xl mb-3 flex justify-center items-end gap-1">
                    <CountUp end={15} /> <span className="text-xl md:text-2xl">+</span>
                </div>
                <p className="text-neutral-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Master Trainer</p>
            </div>
            <div className="text-center border-t md:border-t-0 md:border-l border-neutral-900 pt-8 md:pt-0 px-4">
                <div className="text-white font-display text-3xl md:text-5xl mb-3 flex justify-center items-end gap-0.5">
                    <CountUp end={800} /> <span className="text-xl md:text-2xl lowercase">m²</span>
                </div>
                <p className="text-neutral-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Diện tích</p>
            </div>
            <div className="text-center border-l md:border-l-0 border-t md:border-t-0 lg:border-l border-neutral-900 pt-8 md:pt-0 px-4">
                <div className="text-white font-display text-3xl md:text-5xl mb-3 flex justify-center items-end gap-1">
                    <CountUp end={5} /> <span className="text-xl md:text-2xl">★</span>
                </div>
                <p className="text-neutral-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">Đánh giá</p>
            </div>
        </div>
      </section>

      {/* HUMAN TOUCH - FOUNDER MESSAGE (Refined with Glassmorphism) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <ScrollReveal type="left" className="relative group">
                    <div className="relative flex flex-col gap-8 md:gap-0">
                        {/* THE PHOTO: No longer obscured on mobile */}
                        <div className="relative aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                            <img 
                                src="/images/doi_ngu.jpg" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                alt="Founder Team" 
                                style={{ 
                                    transform: `translateY(${scrollY * 0.05 - 60}px)`,
                                    transition: 'transform 0.1s linear'
                                }}
                            />
                            {/* Glassmorphism Quote Overlay - ONLY FOR LARGE SCREENS */}
                            <div className="absolute inset-0 hidden lg:flex items-end p-12">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl max-w-xs">
                                    <p className="text-red-600 text-[10px] font-black tracking-widest uppercase mb-4">Đội ngũ Sáng lập</p>
                                    <p className="text-white text-sm italic leading-relaxed font-medium">"Chúng tôi xây dựng dự án này bằng cả trái tim vì một cộng đồng Biên Hòa khỏe mạnh và kỷ luật hơn mỗi ngày."</p>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE QUOTE: Dedicated block below the photo */}
                        <div className="lg:hidden bg-neutral-900 border-l-4 border-red-600 p-8 rounded-2xl shadow-xl">
                            <p className="text-red-600 text-[10px] font-black tracking-widest uppercase mb-4">Đội ngũ Sáng lập</p>
                            <p className="text-white text-base italic leading-relaxed font-medium">"Chúng tôi xây dựng dự án này bằng cả trái tim vì một cộng đồng Biên Hòa khỏe mạnh và kỷ luật hơn mỗi ngày."</p>
                        </div>
                    </div>
                </ScrollReveal>
                <ScrollReveal type="right">
                    <p className="text-red-600 text-[10px] font-black tracking-[0.4em] uppercase mb-8">The Founder's Vision</p>
                    <h2 className="text-5xl md:text-6xl font-display text-black mb-10 tracking-widest uppercase leading-tight">VÌ SAO LÀ<br />BIÊN HÒA GYM?</h2>
                    <div className="space-y-8 text-neutral-600 text-base md:text-lg leading-loose font-medium italic pr-4 border-l-8 border-red-600 pl-10">
                        <p>
                            Biên Hòa Gym ra đời không chỉ để kinh doanh dịch vụ phòng tập. Chúng tôi ra đời để giải quyết một câu hỏi trăn trở: 
                            <span className="text-black font-black"> "Tại sao mọi người tập luyện rất chăm chỉ nhưng mãi không có kết quả?"</span>
                        </p>
                        <p>
                            Câu trả lời nằm ở sự thiếu hụt kiến thức khoa học và tính kỷ luật. Tại đây, chúng tôi cam kết một môi trường tập luyện văn minh, 
                            nơi mỗi giọt mồ hôi của bạn đều mang lại giá trị thực tế.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* CORE VALUES - Cinematic with Better Contrast & Hover Animation */}
      <section className="py-24 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
                 <h2 className="text-4xl font-display text-white tracking-widest uppercase text-shadow-lg">TRIẾT LÝ <span className="text-red-600">CỐT LÕI</span></h2>
                 <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mt-4 leading-relaxed">Những lời hứa làm nên thương hiệu của chúng tôi</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CORE_VALUES.map((val, i) => (
                    <ScrollReveal key={i} delay={i * 200} className="relative aspect-[4/5] md:aspect-auto md:h-[550px] overflow-hidden group border border-neutral-800 hover:border-red-600 transition-all cursor-default rounded-3xl">
                        {/* Background Image with Hover Brighten */}
                        <div className="absolute inset-0 z-0">
                            <img src={val.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 brightness-[0.4] group-hover:brightness-[0.7]" alt={val.title} />
                            {/* Radial Gradient for Center Focus */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] z-1" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-2" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
                            <div className="mb-10 p-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:border-red-600 transition-all duration-500 shadow-2xl">
                                {val.icon}
                            </div>
                            <h3 className="text-3xl font-display text-white mb-6 tracking-[0.3em] uppercase drop-shadow-lg">{val.title}</h3>
                            <p className="text-neutral-200 text-sm leading-relaxed font-medium italic opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md">"{val.desc}"</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* INTERACTIVE TIMELINE SECTION */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-24">
            <h2 className="font-display text-5xl md:text-7xl text-black tracking-widest uppercase italic">HÀNH TRÌNH <span className="text-red-600">KỶ LUẬT</span></h2>
            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em] mt-6">Click vào từng năm để đánh thức ký ức</p>
          </ScrollReveal>
          
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-100 md:-translate-x-0.5" />
            
            <div className="space-y-24">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={i} type={i % 2 === 0 ? 'left' : 'right'} delay={100} className={`relative flex gap-12 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                   {/* Interactive Dot */}
                  <div 
                    onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full z-20 top-2 cursor-pointer transition-all duration-500 border-4 ${activeYear === item.year ? 'bg-red-600 border-white scale-150 shadow-[0_0_20px_rgba(220,38,38,0.5)]' : 'bg-white border-red-600 hover:scale-125'}`} 
                  />
                  
                  <div className={`flex-1 md:max-w-[45%] ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-20 text-right' : 'md:pl-20 text-left'}`}>
                    <div 
                        onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                        className={`group cursor-pointer transition-all duration-500 ${activeYear === item.year ? 'scale-105' : 'hover:translate-x-2'}`}
                    >
                      <div className={`text-5xl font-display tracking-widest mb-6 transition-all duration-500 ${activeYear === item.year ? 'text-red-600 opacity-100' : 'text-black opacity-10 group-hover:opacity-40'}`}>
                        {item.year}
                      </div>
                      <h3 className="text-black text-xl md:text-2xl font-black uppercase tracking-widest mb-6 leading-tight">{item.title}</h3>
                      <p className="text-neutral-500 text-xs md:text-base font-medium leading-relaxed md:leading-[2.2]">{item.desc}</p>
                      
                      {/* Anniversary Photo Reveal */}
                      {activeYear === item.year && (
                        <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-600 animate-fade-in-up">
                            <img src={item.image} className="w-full aspect-video object-cover" alt={item.year} />
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTUAL GALLERY - B&W to Color Effect */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
                 <h2 className="text-3xl font-display text-white tracking-widest uppercase">CHÚNG TÔI LÀ <span className="text-red-600">THỰC TẾ</span></h2>
                 <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mt-4">Di chuột để đánh thức màu sắc bản thể</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ScrollReveal className="aspect-square bg-neutral-900 overflow-hidden group">
                    <img src="/images/lop_yoga.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Yoga Class" />
                </ScrollReveal>
                <ScrollReveal delay={100} className="aspect-square bg-neutral-900 overflow-hidden group">
                    <img src="/images/anh-gai-xinh-ngau-tap-gym-32.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Boxing" />
                </ScrollReveal>
                <ScrollReveal delay={200} className="aspect-square lg:row-span-2 bg-neutral-900 overflow-hidden group">
                    <img src="/images/BIOMECHANICS.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Biomechanics" />
                </ScrollReveal>
                <ScrollReveal delay={300} className="aspect-square bg-neutral-900 overflow-hidden group">
                    <img src="/images/khu_vuc_ta_roi.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Weight Area" />
                </ScrollReveal>
                <ScrollReveal delay={400} className="lg:col-span-2 aspect-[21/9] bg-neutral-900 overflow-hidden group">
                    <img src="/images/strength_machine.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" alt="Strength Machines" />
                </ScrollReveal>
                <ScrollReveal delay={500} className="aspect-square bg-neutral-900 overflow-hidden flex items-center justify-center p-8 text-center border-2 border-red-600 hover:bg-red-600 transition-all group">
                    <p className="text-white font-display text-xl tracking-widest uppercase group-hover:scale-110 transition-transform">REAL PEOPLE REAL RESULTS</p>
                </ScrollReveal>
            </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-red-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 pointer-events-none" />
        <ScrollReveal className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-[0.2em] uppercase leading-tight">BẮT ĐẦU CÂU CHUYỆN<br />CỦA CHÍNH BẠN</h2>
            <p className="text-white/80 text-xs md:text-sm font-black uppercase tracking-[0.4em] mb-12">Đừng chờ đợi cơ hội. Hãy tạo ra nó ngay hôm nay.</p>
            <Link href="/register" className="inline-block bg-white text-black px-12 py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all shadow-2xl">
                ĐĂNG KÝ GIA NHẬP →
            </Link>
        </ScrollReveal>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}