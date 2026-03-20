import Navbar from '@/components/Navbar'
import ClassCard from '@/components/ClassCard'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import { publicApiService } from '@/../services/publicApi'
import Link from 'next/link'

// UI presets for trainers based on index if the real data doesn't provide them
const TRAINER_UI_PRESETS = [
    { shape: 'M', bgFrom: '#E5E5E5', bgTo: '#FFFFFF', accentColor: '#000000' },
    { shape: 'Y', bgFrom: '#171717', bgTo: '#000000', accentColor: '#FFFFFF' },
    { shape: 'B', bgFrom: '#FEF2F2', bgTo: '#FEE2E2', accentColor: '#DC2626' },
]

function TrainerAvatar({ shape, bgFrom, bgTo, accentColor, photo }: { shape: string; bgFrom: string; bgTo: string; accentColor: string; photo?: string }) {
    if (photo) {
        return (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden border-b border-neutral-200 bg-neutral-100">
                <img src={photo} alt="Trainer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
        )
    }

    const paths: Record<string, JSX.Element> = {
        M: <svg viewBox="0 0 120 160" fill="none" className="w-20 h-28 opacity-90"><circle cx="60" cy="30" r="18" fill={accentColor} /><path d="M30 70 L40 130 Q60 140 80 130 L90 70 Z" fill={accentColor} /></svg>,
        Y: <svg viewBox="0 0 120 160" fill="none" className="w-16 h-24 opacity-90"><circle cx="60" cy="25" r="15" fill={accentColor} /><path d="M40 45 Q60 40 80 45 L75 90 Q60 95 45 90 Z" fill={accentColor} /></svg>,
        B: <svg viewBox="0 0 120 160" fill="none" className="w-16 h-24 opacity-90"><circle cx="55" cy="25" r="16" fill={accentColor} /><path d="M35 55 Q55 50 75 55 L70 100 Q55 105 40 100 Z" fill={accentColor} /></svg>,
    }
    return (
        <div className="relative w-full h-full flex items-end justify-center overflow-hidden border-b border-neutral-200" style={{ background: `linear-gradient(160deg, ${bgFrom} 0%, ${bgTo} 100%)` }}>
            <div className="relative z-10 pb-2 group-hover:scale-105 transition-transform duration-500">{paths[shape] ?? paths.M}</div>
        </div>
    )
}

export default async function ClassesPage() {
    // Lấy dữ liệu thật từ Backend (Lớp học và HLV)
    const [clses, trainers] = await Promise.all([
        publicApiService.getActiveClasses(),
        publicApiService.getActiveTrainers()
    ])

    return (
        <div className="bg-white pt-20">
            <Navbar />
            <StickyBar />

            <section className="py-16 bg-neutral-100 min-h-screen">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal className="mb-10 text-center">
                        <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Lớp học nhóm</p>
                        <h1 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">ĐA DẠNG <span className="text-red-600">MÔN TẬP</span></h1>
                        <p className="text-neutral-600 max-w-2xl mx-auto mt-4 mb-8 text-sm leading-relaxed">Khám phá những lớp học phù hợp với cơ thể và phong cách sống của bạn từ Yoga, Boxing đến HIIT.</p>
                        <Link href="/schedule" className="inline-flex bg-black hover:bg-neutral-800 text-white font-bold uppercase tracking-widest px-8 py-3 transition-colors text-sm rounded-md shadow-lg">
                            XEM LỊCH TẬP CHI TIẾT
                        </Link>
                    </ScrollReveal>

                    {clses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
                            {clses.map((cls, i) => (
                                <ScrollReveal key={cls.id} delay={100 * i}><ClassCard cls={cls} /></ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-neutral-300 rounded-2xl max-w-2xl mx-auto mb-24">
                            <p className="text-neutral-400 font-bold uppercase tracking-widest italic">Đang cập nhật lịch lớp học mới từ hệ thống...</p>
                        </div>
                    )}

                    <ScrollReveal className="text-center mb-10">
                        <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Đội ngũ chuyên gia</p>
                        <h2 className="font-display text-4xl md:text-5xl text-black tracking-widest uppercase">HUẤN LUYỆN VIÊN <span className="text-red-600">KỶ LUẬT</span></h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto mt-4 mb-8 text-sm leading-relaxed">Đội ngũ HLV giàu kinh nghiệm thực tế, sẵn sàng giúp bạn đạt được mục tiêu nhanh nhất.</p>
                    </ScrollReveal>

                    {trainers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {trainers.map((t, i) => {
                                const preset = TRAINER_UI_PRESETS[i % TRAINER_UI_PRESETS.length]
                                const hireDate = t.hireDate ? new Date(t.hireDate).getFullYear() : '2023'
                                const expYear = new Date().getFullYear() - Number(hireDate) || 1

                                return (
                                    <ScrollReveal type="up" delay={150 * i} key={t.id} className="group bg-white border border-neutral-200 hover:border-black transition-all shadow-sm rounded-xl overflow-hidden">
                                        <div className="h-56 overflow-hidden relative border-b border-neutral-200">
                                            <TrainerAvatar
                                                shape={preset.shape}
                                                bgFrom={preset.bgFrom}
                                                bgTo={preset.bgTo}
                                                accentColor={preset.accentColor}
                                                photo={t.profilePhoto}
                                            />
                                            <div className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded bg-opacity-90">
                                                {expYear}+ NĂM KINH NGHIỆM
                                            </div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <h3 className="text-black text-xl font-black uppercase mb-1">{t.fullName}</h3>
                                            <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-4 border-b border-neutral-100 pb-3">{t.specialization || 'Huấn luyện viên'}</p>
                                            <p className="text-neutral-600 text-sm italic leading-relaxed line-clamp-3">“{t.bio || 'Hết mình vì sự thay đổi tích cực của hội viên.'}”</p>
                                        </div>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-neutral-300 rounded-2xl max-w-2xl mx-auto">
                            <p className="text-neutral-400 font-bold uppercase tracking-widest italic">Đang cập nhật danh sách huấn luyện viên...</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}
