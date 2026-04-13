'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogData'
import { notFound } from 'next/navigation'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import { useState, useEffect } from 'react'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find(p => p.id === params.id || p.slug === params.id)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!post) {
    notFound()
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      <ReadingProgressBar />
      
      {/* 1. HERO ARTICLE SECTION */}
      <section className="bg-black py-24 text-white relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-40">
            <img src={post.image} className="w-full h-full object-cover grayscale" alt="Cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
         
         <div className="max-w-6xl mx-auto px-4 relative z-10 text-center md:text-left">
            <ScrollReveal>
                {/* Breadcrumbs */}
                <nav className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                   <Link href="/" className="hover:text-red-600 transition-colors">TRANG CHỦ</Link>
                   <span className="text-red-600">/</span>
                   <Link href="/blog" className="hover:text-red-600 transition-colors">BLOG</Link>
                   <span className="text-red-600">/</span>
                   <span className="text-white">{post.category}</span>
                </nav>

                <div className={`${post.tagColor} inline-block text-[10px] font-black px-5 py-2 uppercase tracking-[0.2em] mb-8 shadow-xl`}>
                    {post.category}
                </div>
                
                <h1 className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-[1.05] mb-12 max-w-5xl">
                   {post.title}
                </h1>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 border-t border-neutral-800 pt-10">
                    <div className="flex items-center gap-3">
                        <img src={post.author.photo} className="w-10 h-10 rounded-full border-2 border-red-600 object-cover" alt={post.author.name} />
                        <span className="text-white bg-clip-text">By {post.author.name}</span>
                    </div>
                    <span className="flex items-center gap-2">📅 {post.date}</span>
                    <span className="flex items-center gap-2 text-red-500">⏱️ {post.content.length + 3} PHÚT ĐỌC</span>
                </div>
            </ScrollReveal>
         </div>
      </section>

      {/* 2. MAIN CONTENT CONTAINER (70/30) */}
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row gap-20 relative">
          
          {/* Sidebar Floating Bar */}
          <aside className="hidden lg:block w-64 sticky top-40 h-fit space-y-16">
              <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-black mb-8 pb-3 border-b-4 border-red-600 w-fit">Mục lục</p>
                  <nav className="space-y-5">
                      {['Giới thiệu', 'Chi tiết nội dung', 'Triết lý chuyên gia', 'Hướng dẫn lộ trình'].map((item, i) => (
                          <a key={i} href={`#step-${i}`} className="block text-[10px] font-bold text-neutral-400 hover:text-red-600 transition-all uppercase tracking-widest hover:translate-x-1">
                             0{i+1}. {item}
                          </a>
                      ))}
                  </nav>
              </div>

              <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-black mb-8 pb-3 border-b-4 border-red-600 w-fit">Chia sẻ</p>
                  <div className="flex flex-col gap-4">
                      {['Zalo', 'Facebook', 'Copy Link'].map(social => (
                          <button key={social} className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">
                             <div className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                                {social[0]}
                             </div>
                             {social}
                          </button>
                      ))}
                  </div>
              </div>
          </aside>

          {/* MAIN CONTENT AREA (700px - 800px) */}
          <main className="flex-1 max-w-[800px]">
              <ScrollReveal>
                  {/* Intro Lead Text */}
                  <div id="step-0" className="text-2xl md:text-3xl leading-relaxed text-black font-semibold italic border-l-[12px] border-red-600 pl-10 mb-20">
                     {post.excerpt}
                  </div>

                  <div id="step-1" className="prose prose-neutral prose-xl max-w-none">
                      {post.content.map((p, idx) => {
                          let formatted = p;
                          post.keywords.forEach(keyword => {
                              const regex = new RegExp(`(${keyword})`, 'gi');
                              formatted = formatted.replace(regex, '<strong class="text-black border-b-4 border-red-600/10 decoration-red-600/30">$1</strong>');
                          });
                          
                          // Simulate H2/H3 for long content
                          if (idx === 1) {
                            return (
                                <div key={idx} className="my-12">
                                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-black">Bí quyết từ Master Trainer</h2>
                                    <p className="text-neutral-700 leading-loose text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: formatted }} />
                                </div>
                            )
                          }

                          return (
                              <p 
                                  key={idx} 
                                  className="text-neutral-700 leading-loose mb-12 text-lg md:text-xl font-medium"
                                  dangerouslySetInnerHTML={{ __html: formatted }}
                              />
                          );
                        })}
                  </div>

                  {/* Blockquotes with Elite Styling */}
                  {post.quote && (
                      <div id="step-2" className="my-24 p-16 bg-neutral-950 rounded-3xl relative overflow-hidden shadow-2xl">
                          <div className="absolute top-0 right-0 p-12 opacity-20 text-red-600">
                             <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9125 16 16.0171 16H19.0171C20.1217 16 21.0171 15.1046 21.0171 14V11C21.0171 9.89543 20.1217 9 19.0171 9H16.0171C14.9125 9 14.0171 8.10457 14.0171 7V5C14.0171 3.89543 14.9125 3 16.0171 3H19.0171C21.2262 3 23.0171 4.79086 23.0171 7V14C23.0171 17.866 19.883 21 16.0171 21H14.017ZM3.0171 21L3.0171 18C3.0171 16.8954 3.91253 16 5.0171 16H8.0171C9.12167 16 10.0171 15.1046 10.0171 14V11C10.0171 9.89543 9.12167 9 8.0171 9H5.0171C3.91253 9 3.0171 8.10457 3.0171 7V5C3.0171 3.89543 3.91253 3 5.0171 3H8.0171C10.2262 3 12.0171 4.79086 12.0171 7V14C12.0171 17.866 8.883 21 5.0171 21H3.0171Z"/></svg>
                          </div>
                          <blockquote className="relative z-10 text-3xl md:text-5xl font-display text-white uppercase tracking-widest leading-tight italic">
                              {post.quote}
                          </blockquote>
                          <div className="mt-12 flex items-center gap-4">
                                <div className="h-0.5 w-16 bg-red-600" />
                                <cite className="text-red-500 font-black uppercase tracking-[0.4em] not-italic text-xs">— {post.author.name}</cite>
                          </div>
                      </div>
                  )}

                  {/* 3. CONVERSION & TRUST (Lead Magnet Box) */}
                  <div id="step-3" className="my-28 p-1.5 bg-gradient-to-br from-red-600 via-red-500 to-black rounded-[40px] shadow-3xl">
                      <div className="bg-white rounded-[38px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50" />
                          <div className="flex-1 space-y-8 relative z-10">
                              <span className="bg-red-900 text-white text-[10px] font-black px-6 py-2 rounded-full tracking-widest uppercase">Quà tặng độc quyền</span>
                              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">NHẬN NGAY CẨM NANG<br /><span className="text-red-600">FITNESS ELITE 2026</span></h3>
                              <p className="text-neutral-500 text-base leading-relaxed max-w-lg">Bản PDF chi tiết về dinh dưỡng, kỹ thuật và lộ trình tập luyện được tối ưu cho riêng mục tiêu của bạn.</p>
                              <div className="flex flex-col sm:flex-row gap-4">
                                  <input type="email" placeholder="Email của bạn..." className="flex-1 bg-neutral-100 border-none px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-red-600 outline-none" />
                                  <button className="bg-neutral-900 text-white px-10 py-5 text-[11px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-2xl">
                                      TẢI PDF MIỄN PHÍ
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Author Bio Section (Hộp thông tin tác giả) */}
                  <div className="mt-32 p-12 bg-neutral-50 border-4 border-black relative">
                     <div className="absolute -top-4 -left-4 bg-red-600 text-white text-[10px] font-black px-6 py-2 uppercase tracking-widest">Expert Column</div>
                     <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        <img src={post.author.photo} className="w-40 h-40 object-cover grayscale border-8 border-white shadow-2xl" alt={post.author.name} />
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="text-3xl font-black uppercase mb-3 tracking-tight">{post.author.name}</h4>
                            <p className="text-red-600 text-xs font-black uppercase mb-6 tracking-widest">{post.author.role}</p>
                            <p className="text-neutral-600 text-base md:text-lg leading-loose mb-10 italic">"{post.author.bio}"</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <button className="bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:translate-y-[-4px] transition-all shadow-xl">Theo dõi Coach</button>
                                <button className="border-2 border-black px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-lg">💬 Gửi câu hỏi</button>
                            </div>
                        </div>
                     </div>
                  </div>

                  {/* Comments Section Placeholder (Giao diện tinh giản) */}
                  <div className="mt-32 pt-16 border-t border-neutral-100">
                      <h5 className="text-2xl font-black uppercase tracking-tight mb-8">Thảo luận cùng chuyên gia (0)</h5>
                      <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
                          <textarea className="w-full bg-white border-neutral-200 p-6 text-sm font-medium mb-4 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" rows={4} placeholder="Đặt câu hỏi của bạn về bài viết này..." />
                          <div className="flex justify-end">
                             <button className="bg-neutral-900 text-white px-12 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">GỬI BÌNH LUẬN</button>
                          </div>
                      </div>
                  </div>
              </ScrollReveal>
          </main>
      </div>

      {/* 4. FOOTER CONTENT (Related Posts & Newsletter) */}
      <section className="py-32 bg-neutral-100 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-4">
              {/* Newsletter Signup */}
              <div className="mb-32 text-center max-w-2xl mx-auto">
                   <h2 className="text-3xl font-black uppercase tracking-tight mb-6">NHẬN BẢN TIN FITNESS HÀNG TUẦN</h2>
                   <p className="text-neutral-500 text-sm mb-10 tracking-widest uppercase font-bold">Kiến thức tập luyện mới nhất gửi trực tiếp tới Zalo/Email của bạn.</p>
                   <div className="flex border-b-4 border-black pb-4">
                       <input type="text" placeholder="Số điện thoại hoặc Email..." className="flex-1 bg-transparent border-none text-xl font-black outline-none placeholder:text-neutral-300" />
                       <button className="text-red-600 text-xs font-black uppercase tracking-[0.3em] hover:translate-x-2 transition-transform">ĐĂNG KÝ NGAY →</button>
                   </div>
              </div>

              <div className="flex justify-between items-end mb-16">
                  <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase">KIẾN THỨC <span className="text-red-600">LIÊN QUAN</span></h2>
                  <Link href="/blog" className="text-[11px] font-black uppercase tracking-widest text-neutral-400 hover:text-black">TẤT CẢ BÀI VIẾT</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {relatedPosts.map((p, i) => (
                      <Link href={`/blog/${p.slug}`} key={p.id} className="group">
                          <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-2xl">
                              <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={p.title} />
                              <div className="absolute top-6 left-6 bg-black text-white text-[9px] font-black px-4 py-1.5 uppercase tracking-widest">{p.category}</div>
                          </div>
                          <h4 className="font-black uppercase tracking-tight text-xl mb-4 group-hover:text-red-600 transition-colors leading-tight">{p.title}</h4>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Fixed Mobile CTA Button */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-[40] lg:hidden">
          <Link href="/register" className="block w-full bg-red-600 text-white text-center py-5 text-sm font-black uppercase tracking-[0.4em] shadow-2xl animate-pulse">
              ĐĂNG KÝ TẬP THỬ NGAY
          </Link>
      </div>

      {/* Scroll-to-top Button */}
      {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-32 right-8 z-[100] w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-2xl border-2 border-white"
            title="Cuộn lên đầu trang"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
      )}

      <Footer />
    </div>
  )
}
