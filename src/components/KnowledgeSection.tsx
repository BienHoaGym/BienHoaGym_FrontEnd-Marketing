'use client'
import ScrollReveal from './ScrollReveal'
import Link from 'next/link'

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Dinh dưỡng',
    tagColor: 'bg-green-600',
    title: 'Ăn sáng gì ở Biên Hòa để đủ chất đi tập?',
    excerpt: 'Khám phá những món ăn sáng quen thuộc tại Biên Hòa nhưng vẫn đảm bảo macro cho người tập gym...',
    image: '/gym_nutrition_blog_1776058974060.png'
  },
  {
    id: 2,
    category: 'Kỹ thuật',
    tagColor: 'bg-red-600',
    title: 'Lỗi sai phổ biến khi tập Squat & Cách khắc phục',
    excerpt: 'Đừng để đầu gối của bạn phải trả giá. Học ngay kỹ thuật Squat chuẩn từ đội ngũ Master Trainer...',
    image: '/gym_technique_blog_1776058992859.png'
  },
  {
    id: 3,
    category: 'Lifestyle',
    tagColor: 'bg-amber-500',
    title: 'Duy trì việc tập luyện khi công việc bận rộn',
    excerpt: 'Bí quyết quản lý thời gian và giữ vững động lực cho những người bận rộn tại thành phố Biên Hòa...',
    image: '/gym_lifestyle_blog_1776059011372.png'
  }
]

export default function KnowledgeSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-24">
      <ScrollReveal className="text-center mb-16">
        <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Chuyên gia chia sẻ</p>
        <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">KIẾN THỨC <span className="text-red-600">TẬP LUYỆN</span></h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 200} type="up" className="group cursor-pointer">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 shadow-sm border border-neutral-100">
              <img 
                src={post.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={post.title} 
              />
              <div className={`absolute top-4 left-4 ${post.tagColor} text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest shadow-lg`}>
                {post.category}
              </div>
            </div>
            
            <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-red-600 transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black border-b border-transparent hover:border-red-600 pb-0.5 transition-all">
              ĐỌC TIẾP <span className="text-red-600">→</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="#" className="inline-block bg-neutral-900 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl">
          TẤT CẢ BÀI VIẾT
        </Link>
      </div>
    </div>
  )
}
