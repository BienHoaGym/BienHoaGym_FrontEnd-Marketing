'use client'
import ScrollReveal from './ScrollReveal'
import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Logic gửi email thực tế ở đây
    }
  }

  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-[60px] border-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-block bg-white text-red-600 text-[10px] font-black px-4 py-1 uppercase tracking-[0.3em] mb-4">
            Quà tặng giới hạn
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest uppercase mb-6 drop-shadow-lg">
            NHẬN VOUCHER <span className="text-black">GIẢM 20%</span><br />VÀ EBOOK DINH DƯỠNG
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10 font-medium">
            Để lại thông tin để nhận ngay lộ trình "Giảm 3kg trong 1 tháng" thiết kế riêng cho người Biên Hòa và Voucher ưu đãi tháng đầu tiên.
          </p>

          {!submitted ? (
            <div className="bg-white/5 backdrop-blur-md p-2 rounded-lg max-w-lg mx-auto border border-white/10">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Nhập Email hoặc SĐT Zalo..." 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-none px-6 py-4 text-black text-sm outline-none rounded"
                />
                <button 
                  type="submit" 
                  className="bg-black hover:bg-neutral-800 text-white font-black uppercase tracking-widest px-8 py-4 transition-all shadow-xl active:scale-95 rounded"
                >
                  GỬI CHO TÔI
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-8 inline-block shadow-2xl border-b-4 border-black animate-fade-in-up rounded-lg">
              <p className="text-black font-black uppercase tracking-widest text-lg mb-2">🎉 ĐÃ GỬI THÀNH CÔNG!</p>
              <p className="text-neutral-600 text-sm">Voucher và Ebook đang được gửi đến bạn qua Zalo/Email nhé.</p>
            </div>
          )}
          <div className="flex items-center justify-center gap-2 mt-6">
            <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" /></svg>
            <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
              Chúng tôi cam kết không spam. Voucher sẽ được gửi ngay vào Zalo của bạn.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
