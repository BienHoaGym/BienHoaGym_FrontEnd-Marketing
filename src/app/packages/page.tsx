import Navbar from '@/components/Navbar'
import PackageCard from '@/components/PackageCard'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import { publicApiService } from '@/../services/publicApi'

export default async function PackagesPage() {
  // Lấy dữ liệu thật từ Backend
  const pkgs = await publicApiService.getActivePackages()

  const gymPackages = pkgs.filter(p => !p.hasPT);
  const ptPackages = pkgs.filter(p => p.hasPT);

  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Minh bạch giá cả</p>
            <h1 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">GÓI TẬP <span className="text-red-600">PHỔ THÔNG</span></h1>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">Trải nghiệm không gian tập luyện chuyên nghiệp với đầy đủ thiết bị và tiện ích cao cấp.</p>
          </ScrollReveal>
          
          {gymPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-12 px-4 mb-24">
              {gymPackages.map((pkg, i) => (
                <ScrollReveal key={pkg.id} type="up" delay={i * 150}>
                  <PackageCard pkg={pkg} featured={pkg.name.toLowerCase().includes('vip') || i === 1} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border-2 border-dashed border-neutral-200 rounded-2xl max-w-2xl mx-auto mb-24">
              <p className="text-neutral-400 font-bold uppercase tracking-widest italic text-sm">Đang cập nhật danh sách gói tập phổ thông...</p>
            </div>
          )}

          {/* DÀNH RIÊNG CHO PT 1-1 */}
          <ScrollReveal className="text-center mb-12 pt-12 border-t border-neutral-100">
            <p className="text-black text-xs font-black tracking-[0.2em] uppercase mb-1">Cá nhân hóa tối đa</p>
            <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">HUẤN LUYỆN VIÊN <span className="text-red-600">CÁ NHÂN 1-1</span></h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">Lộ trình được thiết kế riêng biệt để đạt kết quả nhanh chóng và bền vững nhất.</p>
          </ScrollReveal>

          {ptPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-12 px-4">
              {ptPackages.map((pkg, i) => (
                <ScrollReveal key={pkg.id} type="up" delay={i * 150}>
                  <PackageCard pkg={pkg} featured={true} /> 
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-neutral-200 rounded-2xl max-w-2xl mx-auto">
              <p className="text-neutral-400 font-bold uppercase tracking-widest italic text-sm">Đang cập nhật các gói PT 1-1 đẳng cấp...</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
