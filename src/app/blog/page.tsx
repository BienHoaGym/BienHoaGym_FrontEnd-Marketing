import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const BLOG_POSTS = [
  {
    id: 1,
    category: 'Dinh dưỡng',
    tagColor: 'bg-green-600',
    title: 'Ăn sáng gì ở Biên Hòa để đủ chất đi tập?',
    excerpt: 'Khám phá những món ăn sáng quen thuộc tại Biên Hòa nhưng vẫn đảm bảo macro cho người tập gym...',
    image: '/images/blog/nutrition.png',
    date: '12/04/2024'
  },
  {
    id: 2,
    category: 'Kỹ thuật',
    tagColor: 'bg-red-600',
    title: 'Lỗi sai phổ biến khi tập Squat & Cách khắc phục',
    excerpt: 'Đừng để đầu gối của bạn phải trả giá. Học ngay kỹ thuật Squat chuẩn từ đội ngũ Master Trainer...',
    image: '/images/blog/technique.png',
    date: '10/04/2024'
  },
  {
    id: 3,
    category: 'Lifestyle',
    tagColor: 'bg-amber-500',
    title: 'Duy trì việc tập luyện khi công việc bận rộn',
    excerpt: 'Bí quyết quản lý thời gian và giữ vững động lực cho những người bận rộn tại thành phố Biên Hòa...',
    image: '/images/blog/lifestyle.png',
    date: '08/04/2024'
  }
]

export default function BlogPage() {
  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      {/* HERO SECTION */}
      <section className="py-24 bg-black text-white relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <p className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-4 text-center">BienHoaGym Editorial</p>
            <h1 className="font-display text-5xl md:text-8xl tracking-tighter uppercase text-center mb-12">
                INSIGHTS & <span className="text-red-600">KNOWLEDGE</span>
            </h1>
            <div className="h-px w-full bg-neutral-800" />
            <div className="flex justify-between items-center py-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Vol. 01 / 2024</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Updated Daily</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 150} type="up" className="group">
                <article>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-2xl mb-8 shadow-2xl">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={post.title} 
                    />
                    <div className={`absolute top-6 left-6 ${post.tagColor} text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-widest shadow-xl`}>
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">{post.date}</span>
                    <div className="h-px flex-1 bg-neutral-100" />
                  </div>

                  <h2 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-black group/link">
                    ĐỌC CHI TIẾT 
                    <span className="w-8 h-px bg-black group-hover/link:w-12 group-hover/link:bg-red-600 transition-all" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* EMPTY STATE / PAGINATION PLACEHOLDER */}
          <div className="mt-24 pt-24 border-t border-neutral-100 text-center">
             <p className="text-neutral-400 text-[11px] font-black uppercase tracking-[0.3em]">Hết danh sách bài viết hiện tại</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
