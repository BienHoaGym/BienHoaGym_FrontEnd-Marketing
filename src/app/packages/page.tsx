import Navbar from '@/components/Navbar'
import PackageCard from '@/components/PackageCard'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import { publicApiService } from '@/../services/publicApi'

export default async function PackagesPage() {
  // Lấy dữ liệu thật từ Backend
  const pkgs = await publicApiService.getActivePackages()

  return (
    <div className="bg-white pt-20">
      <Navbar />
      <StickyBar />
      
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Minh bạch giá cả</p>
            <h1 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">ĐẦU TƯ <span className="text-red-600">SỨC KHỎE</span></h1>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">Tất cả các gói tập đều bao gồm tiện ích 5 sao, máy móc cao cấp và sự đồng hành của đội ngũ HLV tận tâm.</p>
          </ScrollReveal>
          
          {pkgs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-12 px-4">
              {pkgs.map((pkg, i) => (
                <ScrollReveal key={pkg.id} type="up" delay={i * 150}>
                  <PackageCard pkg={pkg} featured={pkg.name.toLowerCase().includes('vip') || i === 1} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed border-neutral-200 rounded-2xl max-w-2xl mx-auto">
              <p className="text-neutral-400 font-bold uppercase tracking-widest italic">Đang cập nhật danh sách gói tập từ hệ thống...</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
