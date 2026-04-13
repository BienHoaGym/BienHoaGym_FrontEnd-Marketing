'use client'
import ScrollReveal from './ScrollReveal'

const STEPS = [
  {
    number: '01',
    title: 'Đăng ký tập thử',
    desc: 'Nhấn nút đăng ký hoặc nhắn tin qua Zalo để nhận ngay buổi tập thử hoàn toàn miễn phí.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Phân tích & Tứ vấn',
    desc: 'Kiểm tra chỉ số cơ thể Inbody và nhận lộ trình tập luyện, dinh dưỡng từ chuyên gia.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Bắt đầu thay đổi',
    desc: 'Chính thức bước vào hành trình lột xác cùng sự hướng dẫn tận tâm từ đội ngũ HLV.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-red-500 text-xs font-black tracking-[0.2em] uppercase mb-1">Dành cho người mới</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase">QUY TRÌNH <span className="text-red-600">3 BƯỚC</span> ĐƠN GIẢN</h2>
          <p className="text-neutral-400 mt-4 max-w-lg mx-auto text-sm">Đừng để sự lo lắng cản trở bạn. Chúng tôi đồng hành cùng bạn ngay từ những bước đầu tiên.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-neutral-800 -translate-y-12" />

          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 200} type="up" className="relative text-center group">
              <div className="w-20 h-20 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-red-600 group-hover:bg-red-600/10 transition-all duration-500 relative z-20">
                <div className="text-red-600 group-hover:text-red-500 transition-colors">{step.icon}</div>
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-[240px] mx-auto">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
