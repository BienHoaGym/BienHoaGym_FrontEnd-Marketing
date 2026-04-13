import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogData'
import { notFound } from 'next/navigation'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find(p => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      <article className="max-w-4xl mx-auto px-4 py-24">
        <ScrollReveal>
          <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-red-600 mb-12 inline-flex items-center gap-2 group">
             <span className="group-hover:-translate-x-1 transition-transform">←</span> Quay lại danh sách
          </Link>
          
          <div className="mb-12">
            <div className={`inline-block ${post.tagColor} text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-widest mb-6`}>
                {post.category}
            </div>
            <h1 className="font-display text-4xl md:text-7xl tracking-tighter uppercase leading-none mb-8">
                {post.title}
            </h1>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 border-y border-neutral-100 py-6">
                <span>By {post.author}</span>
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                <span>{post.date}</span>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-3xl mb-16 shadow-2xl">
            <img 
              src={post.image} 
              className="w-full h-full object-cover" 
              alt={post.title} 
            />
          </div>

          <div className="prose prose-neutral max-w-none">
            {post.content.map((paragraph, idx) => (
               <p key={idx} className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-8">
                  {paragraph}
               </p>
            ))}
          </div>

          {/* RELATED ACTION */}
          <div className="mt-20 p-12 bg-neutral-50 rounded-3xl border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Bắt đầu hành trình của bạn?</h3>
                <p className="text-neutral-500 text-sm">Nhận ngay một buổi tập thử 1:1 cùng chuyên gia tại Biên Hòa.</p>
            </div>
            <Link href="/register" className="btn-primary whitespace-nowrap">ĐĂNG KÝ TẬP THỬ</Link>
          </div>
        </ScrollReveal>
      </article>

      {/* MORE POSTS SECTION */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
             <div className="flex justify-between items-end mb-16">
                <h2 className="font-display text-3xl tracking-widest uppercase">BÀI VIẾT <span className="text-red-600">KHÁC</span></h2>
                <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white">Xem tất cả →</Link>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map((p, i) => (
                    <Link href={`/blog/${p.id}`} key={p.id} className="group">
                        <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
                            <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={p.title} />
                        </div>
                        <h4 className="font-black uppercase tracking-tight group-hover:text-red-600 transition-colors">{p.title}</h4>
                    </Link>
                ))}
             </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
