import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'

const FEATURES = [
  { icon:'🎖️', title:'HLV CHUẨN QUỐC TẾ', desc:'Lộ trình 1:1, tư vấn dinh dưỡng và theo sát tiến độ. Không bỏ mặc hội viên.' },
  { icon:'🏋️', title:'THIẾT BỊ CAO CẤP', desc:'Thiết bị nhập khẩu từ Mỹ & Đức. Cardio, Free Weight, Machine Zone đầy đủ.' },
  { icon:'⏰', title:'MỞ CỬA TỪ 5H – 23H', desc:'Khung giờ linh hoạt 7 ngày/tuần. Phù hợp cho cả người bận rộn nhất.' },
  { icon:'🚿', title:'TIỆN NGHI 5 SAO', desc:'Locker an toàn, phòng tắm nước nóng, WiFi và nước uống hoàn toàn miễn phí.' },
  { icon:'📱', title:'CHECK-IN MỘT CHẠM', desc:'Sử dụng QR Code trên điện thoại để vào cửa và đặt lịch lớp học nhanh chóng.' },
  { icon:'🛡️', title:'HOÀN TIỀN 7 NGÀY', desc:'Hoàn 100% phí nếu bạn không hài lòng sau tuần đầu. Cam kết bằng văn bản.' },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      <section className="py-16 bg-neutral-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Chất lượng dịch vụ</p>
            <h1 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase mb-4">MÔI TRƯỜNG <span className="text-red-600">CHUYÊN NGHIỆP</span></h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">Chúng tôi mang đến không gian tập luyện chuyên nghiệp, hiện đại và tiện nghi nhất, giúp bạn đạt được mục tiêu thể hình một cách an toàn và hiệu quả.</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={i} type="up" delay={i * 100} className="bg-white border border-neutral-200 p-8 hover:border-black transition-colors shadow-sm rounded-xl">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-black font-black uppercase tracking-wider text-lg mb-3">{f.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-medium">{f.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
