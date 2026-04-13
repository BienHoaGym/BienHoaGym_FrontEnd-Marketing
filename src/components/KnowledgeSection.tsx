'use client'
import ScrollReveal from './ScrollReveal'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogData'

export default function KnowledgeSection() {
  const displayPosts = BLOG_POSTS.slice(0, 3)

  return (
    <div className="max-w-6xl mx-auto px-4 mb-24">
      <ScrollReveal className="text-center mb-16">
        <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Chuyên gia chia sẻ</p>
        <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">KIẾN THỨC <span className="text-red-600">TẬP LUYỆN</span></h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayPosts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 200} type="up" className="group cursor-pointer">
            <Link href={`/blog/${post.id}`}>
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
            </Link>
            
            <Link href={`/blog/${post.id}`}>
                <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-red-600 transition-colors leading-tight min-h-[50px]">
                {post.title}
                </h3>
            </Link>
            <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black border-b border-transparent hover:border-red-600 pb-0.5 transition-all">
              ĐỌC TIẾP <span className="text-red-600">→</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/blog" className="inline-block bg-neutral-900 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl">
          TẤT CẢ BÀI VIẾT
        </Link>
      </div>
    </div>
  )
}
