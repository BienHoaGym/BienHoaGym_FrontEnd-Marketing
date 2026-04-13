'use client'
import { useEffect, useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import ClassCard from '@/components/ClassCard'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import ScrollReveal from '@/components/ScrollReveal'
import { publicApiService, type PublicClass, type PublicTrainer } from '@/../services/publicApi'
import Link from 'next/link'

const GOAL_OPTIONS = [
    { label: 'Tất cả mục tiêu', value: 'all' },
    { label: 'Giảm cân thần tốc', value: 'weightloss' },
    { label: 'Tăng cơ chuyên sâu', value: 'muscle' },
    { label: 'Dẻo dai & Trị liệu', value: 'flexibility' },
]

const TIME_OPTIONS = [
    { label: 'Mọi khung giờ', value: 'all' },
    { label: 'Sáng (06:00 - 11:00)', value: 'morning' },
    { label: 'Chiều (14:00 - 17:00)', value: 'afternoon' },
    { label: 'Tối (17:00 - 21:00)', value: 'evening' },
]

const TRAINER_UI_PRESETS = [
    { shape: 'M', bgFrom: '#171717', bgTo: '#000000', accentColor: '#DC2626' },
    { shape: 'Y', bgFrom: '#F5F5F7', bgTo: '#FFFFFF', accentColor: '#000000' },
    { shape: 'B', bgFrom: '#FEF2F2', bgTo: '#FEE2E2', accentColor: '#DC2626' },
]

function TrainerAvatar({ photo }: { photo?: string }) {
    const fullUrl = publicApiService.getFullImageUrl(photo)
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-100">
            {fullUrl ? (
                <img src={fullUrl} alt="Trainer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            ) : (
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                    <span className="text-4xl font-display uppercase">PRO</span>
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    )
}

export default function ClassesPage() {
    const [classes, setClasses] = useState<PublicClass[]>([])
    const [trainers, setTrainers] = useState<PublicTrainer[]>([])
    const [loading, setLoading] = useState(true)
    const [filterGoal, setFilterGoal] = useState('all')
    const [filterTime, setFilterTime] = useState('all')

    useEffect(() => {
        Promise.all([
            publicApiService.getActiveClasses(),
            publicApiService.getActiveTrainers()
        ]).then(([clses, ts]) => {
            setClasses(clses)
            setTrainers(ts)
            setLoading(false)
        }).catch(() => setLoading(false))
    }, [])

    const filteredClasses = useMemo(() => {
        return classes.filter(cls => {
            const name = (cls.className || '').toLowerCase()
            
            // Goal filtering
            let matchGoal = true
            if (filterGoal === 'weightloss') matchGoal = name.includes('boxing') || name.includes('hiit') || name.includes('zumba')
            if (filterGoal === 'muscle') matchGoal = name.includes('gym') || name.includes('strength')
            if (filterGoal === 'flexibility') matchGoal = name.includes('yoga') || name.includes('pilates')

            // Time filtering
            let matchTime = true
            const start = cls.startTime || ''
            if (filterTime === 'morning') matchTime = start >= '06:00' && start < '11:00'
            if (filterTime === 'afternoon') matchTime = start >= '14:00' && start < '17:00'
            if (filterTime === 'evening') matchTime = start >= '17:00' && start < '22:00'

            return matchGoal && matchTime
        })
    }, [classes, filterGoal, filterTime])

    return (
        <div className="bg-white">
            <Navbar />
            <StickyBar />

            <section className="pt-32 pb-20 bg-black text-white relative">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/banner_gym.jpg')] bg-cover bg-center grayscale" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal>
                        <p className="text-red-500 text-xs font-black tracking-[0.4em] uppercase mb-4">Diversity & Elite Performance</p>
                        <h1 className="font-display text-4xl md:text-7xl tracking-widest uppercase mb-8">
                            HỆ THỐNG <span className="text-red-600">LỚP HỌC</span>
                        </h1>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base font-bold uppercase tracking-widest leading-loose">
                            Từ những lớp Yoga tĩnh lặng đến Boxing bùng nổ, chúng tôi thiết kế lộ trình để bạn chinh phục mọi giới hạn.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* FILTER SYSTEM */}
            <section className="bg-white border-b border-neutral-100 sticky top-20 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {GOAL_OPTIONS.map(opt => (
                                <button
                                    key={opt.value}
                                    onClick={() => setFilterGoal(opt.value)}
                                    className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${filterGoal === opt.value ? 'bg-black text-white border-black shadow-lg' : 'bg-transparent text-neutral-400 border-neutral-100 hover:border-black hover:text-black'}`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        <div className="w-px h-10 bg-neutral-100 hidden md:block" />
                        <select
                            value={filterTime}
                            onChange={(e) => setFilterTime(e.target.value)}
                            className="bg-neutral-50 border-2 border-neutral-100 text-black text-[10px] font-black uppercase tracking-widest px-6 py-2.5 outline-none hover:border-black transition-colors min-w-[200px]"
                        >
                            {TIME_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-neutral-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    {/* CLASSES GRID */}
                    <div className="mb-32">
                        <div className="flex items-center justify-between mb-16 px-4">
                            <h2 className="font-display text-4xl text-black tracking-widest uppercase">ĐA DẠNG <span className="text-red-600">MÔN TẬP</span></h2>
                            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] hidden md:block">Hiển thị {filteredClasses.length} kết quả</p>
                        </div>
                        
                        {loading ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[1, 2, 3].map(i => <div key={i} className="h-[450px] bg-neutral-200 animate-pulse rounded-xl" />)}
                            </div>
                        ) : filteredClasses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {filteredClasses.map((cls, i) => (
                                    <ScrollReveal key={cls.id} delay={100 * i}><ClassCard cls={cls} /></ScrollReveal>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-32 bg-white border border-neutral-200 rounded-2xl">
                                <p className="text-neutral-400 font-bold uppercase tracking-widest italic mb-6">Không tìm thấy lớp phù hợp...</p>
                                <button onClick={() => {setFilterGoal('all'); setFilterTime('all')}} className="text-red-600 font-black text-[10px] uppercase tracking-widest hover:underline">Xếp lại bộ lọc</button>
                            </div>
                        )}
                    </div>

                    {/* TRAINERS SECTION */}
                    <div className="pt-20 border-t border-neutral-200">
                        <ScrollReveal className="text-center mb-20">
                            <p className="text-red-600 text-xs font-black tracking-[0.3em] uppercase mb-4">Elite Human Resource</p>
                            <h2 className="font-display text-4xl md:text-6xl text-black tracking-widest uppercase">ĐỘI NGŨ <span className="text-red-600">MASTER TRAINER</span></h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto mt-6 text-sm font-bold uppercase tracking-widest leading-loose">
                                Những ngôi sao của BienHoaGym - Nơi hội tụ các chuyên gia hàng đầu với chứng chỉ quốc tế và tâm thế phụng sự.
                            </p>
                        </ScrollReveal>

                        {trainers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {trainers.map((t, i) => {
                                    const hireDate = t.hireDate ? new Date(t.hireDate).getFullYear() : '2023'
                                    const expYear = new Date().getFullYear() - Number(hireDate) || 2
                                    const isOnline = i % 2 === 0 // Mock online status for visual impact

                                    return (
                                        <ScrollReveal type="up" delay={150 * i} key={t.id} className="group bg-white border border-neutral-200 hover:border-red-600 transition-all shadow-sm rounded-2xl overflow-hidden">
                                            <div className="h-80 overflow-hidden relative">
                                                <TrainerAvatar photo={t.profilePhoto} />
                                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-sm border-l-2 border-red-600">
                                                    {expYear}+ NĂM KINH NGHIỆM
                                                </div>
                                                {isOnline && (
                                                    <div className="absolute top-4 right-4 bg-green-500 w-3 h-3 rounded-full border-2 border-white animate-pulse shadow-green-500 shadow-sm" title="Đang ở phòng tập" />
                                                )}
                                                <div className="absolute bottom-6 left-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Thế mạnh</p>
                                                    <p className="text-xs font-bold ">{t.specialization || 'Chỉnh dáng & Giảm cân'}</p>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <h3 className="text-black text-2xl font-display uppercase tracking-widest mb-2">{t.fullName}</h3>
                                                <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-6">Certified Fitness Master</p>
                                                <div className="p-4 bg-neutral-50 rounded-lg mb-6 border border-neutral-100 italic">
                                                    <p className="text-neutral-600 text-xs leading-relaxed line-clamp-2">“Đã đồng hành giúp hơn 50+ hội viên thay đổi vóc dáng thành công trong 12 tuần.”</p>
                                                </div>
                                                <Link href="/register" className="w-full block text-center text-[10px] font-black uppercase tracking-[0.2em] py-4 border-2 border-black hover:bg-black hover:text-white transition-all">
                                                    NHẬN TƯ VẤN 1:1
                                                </Link>
                                            </div>
                                        </ScrollReveal>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-20 border-2 border-dashed border-neutral-200 rounded-2xl">
                                <p className="text-neutral-400 font-bold uppercase tracking-widest italic">Hệ thống đang đồng bộ danh sách chuyên gia...</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
