import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      <article className="py-24 max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-red-600 mb-12 inline-block">
             ← Quay lại danh sách
          </Link>
          
          <p className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-4">Blog Article #{params.id}</p>
          <h1 className="font-display text-4xl md:text-6xl tracking-widest uppercase mb-12">
              CHI TIẾT BÀI VIẾT ĐANG ĐƯỢC <span className="text-red-600">CẬP NHẬT</span>
          </h1>

          <div className="aspect-video bg-neutral-100 rounded-2xl mb-12 flex items-center justify-center">
             <p className="text-neutral-400 font-bold uppercase tracking-widest animate-pulse">Nội dung đang được soạn thảo...</p>
          </div>

          <div className="prose prose-neutral max-w-none">
             <p className="text-neutral-600 leading-loose mb-6">
                Cảm ơn bạn đã quan tâm đến kiến thức tập luyện tại BienHoaGym. Đội ngũ chuyên gia của chúng tôi đang hoàn thiện nội dung chi tiết cho bài viết này để mang đến những thông tin chính xác và hữu ích nhất.
             </p>
             <p className="text-neutral-600 leading-loose mb-12">
                Trong thời gian chờ đợi, bạn có thể tham khảo các gói tập ưu đãi của chúng tôi hoặc liên hệ trực tiếp để được tư vấn 1:1.
             </p>
             <Link href="/register" className="btn-primary inline-block">ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</Link>
          </div>
        </ScrollReveal>
      </article>

      <Footer />
    </div>
  )
}
