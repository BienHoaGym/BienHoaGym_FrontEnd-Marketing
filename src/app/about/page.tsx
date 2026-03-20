import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ScrollReveal from '../../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Về Chúng Tôi – Gym Biên Hòa',
  description: 'Tìm hiểu về Gym Biên Hòa: lịch sử hình thành, sứ mệnh, đội ngũ và cam kết...',
}

const TIMELINE = [
  { year: '2019', title: 'THÀNH LẬP', desc: 'Ra đời với 50 thành viên đầu tiên và diện tích 300m².' },
  { year: '2020', title: 'MỞ RỘNG', desc: 'Nâng cấp lên 500m², bổ sung khu Cardio hiện đại.' },
  { year: '2021', title: 'CHỨNG NHẬN', desc: 'Toàn bộ HLV hoàn thành chứng chỉ quốc tế ACE & NASM.' },
  { year: '2022', title: 'TĂNG TRƯỞNG', desc: 'Đạt 300+ hội viên, mở rộng khu Free Weight cao cấp.' },
  { year: '2023', title: 'ĐỘT PHÁ', desc: 'Nâng cấp máy móc thế hệ mới. Ra mắt 5 lớp học nhóm.' },
  { year: '2024', title: 'DẪN ĐẦU', desc: '500+ hội viên hoạt động. Mở rộng diện tích lên 800m².' },
]

export default function AboutPage() {
  return (
    <div className="bg-neutral-100">
      <Navbar />

      <section className="relative pt-24 pb-16 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black z-0" />
        <ScrollReveal className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-6">
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4 tracking-widest uppercase">
            CÂU CHUYỆN<br /><span className="text-red-600">GYM BIÊN HÒA</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium">
            Từ năm 2019, định hình lại tiêu chuẩn phòng tập chuyên nghiệp.
          </p>
        </ScrollReveal>
      </section>

      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollReveal type="left">
            <p className="text-red-600 font-black text-[10px] tracking-[0.2em] uppercase mb-2">Giá trị cốt lõi</p>
            <h2 className="text-4xl md:text-5xl font-display text-black mb-4 tracking-widest uppercase">TỪ ĐAM MÊ<br />ĐẾN KỶ LUẬT</h2>
            <div className="space-y-3 text-neutral-600 text-sm leading-relaxed font-medium">
              <p>Phần lớn phòng gym chỉ tập trung bán thẻ dài hạn mà bỏ mặc học viên sau khi đăng ký. Chúng tôi chọn con đường khác.</p>
              <p>Phòng tập được xây dựng không phải như một cỗ máy in tiền, mà là nơi những con người nghiêm túc thay đổi bản thân được dẫn dắt bằng khoa học.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal type="scale" delay={200} className="border-4 border-black bg-neutral-100 h-[280px] flex items-center justify-center text-neutral-400 text-xs font-bold uppercase tracking-widest">
            [HÌNH ẢNH PHÒNG TẬP THỰC TẾ]
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-4xl text-black tracking-widest uppercase">QUÁ TRÌNH PHÁT TRIỂN</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black md:-translate-x-0.5" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={i} type="up" delay={i * 100} className={`relative flex gap-5 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="relative flex items-start md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                    <div className="w-10 h-10 rounded-none bg-black border-[3px] border-white flex items-center justify-center text-white text-[10px] font-black z-10 shadow-sm">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className={`flex-1 md:max-w-[45%] ml-4 md:ml-0 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-white border-2 border-black p-5 shadow-none hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:-translate-y-1 transition-all">
                      <div className="text-red-600 text-xs font-black tracking-widest mb-1">{item.year}</div>
                      <h3 className="text-black text-base font-black uppercase tracking-wider mb-1.5">{item.title}</h3>
                      <p className="text-neutral-600 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}