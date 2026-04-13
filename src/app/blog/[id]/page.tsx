'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogData'
import { notFound } from 'next/navigation'
import ReadingProgressBar from '@/components/ReadingProgressBar'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  // QUAN TRỌNG: Tìm theo cả ID và SLUG để đảm bảo không bị 404
  const post = BLOG_POSTS.find(p => p.id === params.id || p.slug === params.id)

  if (!post) {
    notFound()
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      <ReadingProgressBar />
      
      <article className="relative">
        {/* HERO SECTION */}
        <section className="bg-black py-24 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-40 z-0 text-center">
                <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
            
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <ScrollReveal>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-8 hover:text-white transition-colors">
                        ← Quay lại trang Blog
                    </Link>
                    <div className={`mx-auto w-fit ${post.tagColor} text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-widest mb-6`}>
                        {post.category}
                    </div>
                    <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tighter uppercase leading-[1.2] mb-8 break-words">
                        {post.title}
                    </h1>
                    <div className="flex justify-center items-center gap-6 text-[10px] font-black uppercase tracking-widest text-neutral-400">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                        <span>By {post.author.name}</span>
                    </div>
                </ScrollReveal>
            </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row gap-16">
            
            {/* SIDEBAR LEFT (Desktop) */}
            <aside className="hidden lg:block w-64 sticky top-32 h-fit">
                <div className="mb-12">
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-6 pb-2 border-b border-neutral-100">Chia sẻ bài viết</p>
                    <div className="flex flex-col gap-4">
                        <a href="https://facebook.com" target="_blank" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.515c0-2.91 1.776-4.496 4.375-4.496 1.245 0 2.315.093 2.626.134v3.045l-1.802.001c-1.411 0-1.685.671-1.685 1.654v2.176h3.37l-.439 3.403h-2.931v8.74h6.155c.733 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                        <a href="https://zalo.me" target="_blank" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:scale-110 transition-transform">
                            <span className="font-black text-[10px]">ZALO</span>
                        </a>
                    </div>
                </div>

                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-6 pb-2 border-b border-neutral-100">Mục lục</p>
                    <nav className="flex flex-col gap-3 font-medium">
                        <a href="#intro" className="text-[11px] font-bold uppercase text-black hover:text-red-600 transition-colors">I. Giới thiệu</a>
                        <a href="#content" className="text-[11px] font-bold uppercase text-black hover:text-red-600 transition-colors">II. Nội dung chính</a>
                        <a href="#advice" className="text-[11px] font-bold uppercase text-black hover:text-red-600 transition-colors">III. Lời khuyên</a>
                        <a href="#cta" className="text-[11px] font-bold uppercase text-black hover:text-red-600 transition-colors">IV. Hành động</a>
                    </nav>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 max-w-3xl">
                <ScrollReveal>
                    <div id="intro" className="prose prose-neutral prose-lg max-w-none mb-16">
                        <p className="text-xl md:text-2xl leading-relaxed text-black font-medium italic border-l-4 border-red-600 pl-6 mb-12">
                            {post.excerpt}
                        </p>
                    </div>

                    <div id="content" className="prose prose-neutral prose-lg max-w-none">
                        {post.content.map((paragraph, idx) => {
                            let formatted = paragraph;
                            post.keywords.forEach(keyword => {
                                const regex = new RegExp(`(${keyword})`, 'gi');
                                formatted = formatted.replace(regex, '<strong class="text-black border-b-2 border-red-600/20">$1</strong>');
                            });
                            return (
                                <p 
                                    key={idx} 
                                    className="text-neutral-700 leading-loose mb-8 text-lg"
                                    dangerouslySetInnerHTML={{ __html: formatted }}
                                />
                            );
                        })}
                    </div>

                    {/* BLOCKQUOTE */}
                    {post.quote && (
                        <div id="advice" className="my-16 p-10 bg-neutral-900 text-white rounded-br-[60px] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />
                            <span className="text-6xl font-display text-red-600/30 absolute top-4 left-6">“</span>
                            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display uppercase tracking-widest relative z-10 leading-tight break-words">
                                {post.quote}
                            </blockquote>
                            <p className="mt-6 text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">— {post.author.name}</p>
                        </div>
                    )}

                    {/* CONVERSION BAR */}
                    <div id="cta" className={`my-20 p-8 md:p-12 ${post.category === 'Dinh dưỡng' ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'} border rounded-3xl flex flex-col md:flex-row items-center gap-8`}>
                        <div className="flex-1">
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">QUÀ TẶNG ELITE</h3>
                            <p className="text-neutral-500 text-sm mb-6">Tải ngay bộ tài liệu chi tiết <strong>PDF 7 ngày lột xác</strong> chuẩn Gym tại Biên Hòa.</p>
                            <button className={`text-[10px] font-black px-8 py-4 uppercase tracking-[0.2em] text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 ${post.category === 'Dinh dưỡng' ? 'bg-green-600' : 'bg-red-600'}`}>
                                TẢI NGAY (MIỄN PHÍ)
                            </button>
                        </div>
                        <div className="hidden md:block w-32 h-32 bg-white rounded-xl shadow-inner border rotate-3 flex items-center justify-center">
                            <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                    </div>

                    {/* AUTHOR BOX */}
                    <div className="mt-24 pt-16 border-t border-neutral-100">
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                             <img src={post.author.photo} className="w-24 h-24 rounded-full object-cover grayscale border-4 border-white shadow-xl" alt={post.author.name} />
                             <div className="flex-1 text-center md:text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest text-red-600 mb-1">Expert Author</p>
                                <h4 className="text-xl font-black uppercase mb-1">{post.author.name}</h4>
                                <p className="text-neutral-500 text-[10px] font-bold uppercase mb-4 tracking-widest">{post.author.role}</p>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">{post.author.bio}</p>
                                <button className="text-[9px] font-black uppercase tracking-widest border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all">Theo dõi Coach</button>
                             </div>
                        </div>
                    </div>
                </ScrollReveal>
            </main>
        </div>
      </article>

      {/* RELATED POSTS Section */}
      <section className="py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-end mb-16">
                 <div>
                    <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Keep Learning</p>
                    <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase">BÀI VIẾT <span className="text-red-600">LIÊN QUAN</span></h2>
                 </div>
                 <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">Xem tất cả →</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {relatedPosts.map((p, i) => (
                    <ScrollReveal key={p.id} delay={i * 150} type="up" className="group">
                        <Link href={`/blog/${p.slug}`}>
                            <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 shadow-2xl">
                                <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={p.title} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                            </div>
                            <h4 className="font-black uppercase tracking-tight text-lg mb-4 group-hover:text-red-600 transition-colors leading-tight">{p.title}</h4>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-red-600 group-hover:text-white transition-colors">XEM NGAY →</span>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
