'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { publicApiService, type PublicClass } from '@/../services/publicApi'
import ScrollReveal from '../../components/ScrollReveal'

const DAYS_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAYS_VI: Record<string, string> = {
  Monday: 'Thứ 2',
  Tuesday: 'Thứ 3',
  Wednesday: 'Thứ 4',
  Thursday: 'Thứ 5',
  Friday: 'Thứ 6',
  Saturday: 'Thứ 7',
  Sunday: 'Chủ Nhật'
}

const TIME_SLOTS = [
  { label: 'Buổi Sáng', range: '06:00 - 11:00', start: '06:00', end: '11:00' },
  { label: 'Buổi Chiều', range: '14:00 - 17:00', start: '14:00', end: '17:00' },
  { label: 'Buổi Tối', range: '17:00 - 21:00', start: '17:00', end: '21:00' }
]

const CATEGORIES = ['Tất cả', 'Yoga', 'Boxing', 'HIIT', 'Gym', 'Zumba', 'Pilates']
const LEVELS = ['Mọi cấp độ', 'Cơ bản', 'Nâng cao']

const getClassTheme = (className: string = '') => {
  const l = (className || '').toLowerCase()
  if (l.includes('boxing')) return 'bg-red-50 border-red-200 text-red-700 marker:bg-red-600'
  if (l.includes('yoga') || l.includes('pilates')) return 'bg-purple-50 border-purple-200 text-purple-700 marker:bg-purple-600'
  if (l.includes('zumba')) return 'bg-orange-50 border-orange-200 text-orange-700 marker:bg-orange-600'
  if (l.includes('hiit')) return 'bg-black/5 border-black/20 text-black marker:bg-black'
  return 'bg-blue-50 border-blue-200 text-blue-700 marker:bg-blue-600'
}

const RECOMMENDATIONS = [
  { title: 'DÀNH CHO NGƯỜI MỚI', desc: 'Yoga cơ bản, Gym tầng 1', icon: '🌱', classes: ['Yoga', 'Gym'] },
  { title: 'GIẢM CÂN CẤP TỐC', desc: 'Đốt 500-800 calo/giờ', icon: '🔥', classes: ['Boxing', 'HIIT', 'Zumba'] },
  { title: 'PHÁI ĐẸP & DÁNG XINH', desc: 'Thon gọn, dẻo dai', icon: '🧘', classes: ['Pilates', 'Yoga'] }
]

export default function SchedulePage() {
  const [classes, setClasses] = useState<PublicClass[]>([])
  const [loading, setLoading] = useState(true)
  const [filterCat, setFilterCat] = useState('Tất cả')
  const [filterLevel, setFilterLevel] = useState('Mọi cấp độ')
  const [selectedClass, setSelectedClass] = useState<PublicClass | null>(null)

  useEffect(() => {
    publicApiService.getActiveClasses()
      .then(data => {
        setClasses(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filteredClasses = classes.filter(c => {
    // 🛑 LUÔN LOẠI BỎ PT KHỎI LỊCH CÔNG KHAI (Để giữ giá trị Premium và tính riêng tư)
    const isPT = (c.className || '').toLowerCase().includes('pt') || (c.classType || '').toLowerCase().includes('pt')
    if (isPT) return false

    const matchCat = filterCat === 'Tất cả' || (c.className || '').toLowerCase().includes(filterCat.toLowerCase())
    const matchLevel = filterLevel === 'Mọi cấp độ' || (c.className || '').toLowerCase().includes(filterLevel.toLowerCase())
    return matchCat && matchLevel
  })

  const getClassesForSlot = (day: string, slot: typeof TIME_SLOTS[0]) => {
    return filteredClasses.filter(c => {
      const days = Array.isArray(c.scheduleDay) ? c.scheduleDay : []
      return days.includes(day) &&
        (c.startTime || '') >= slot.start &&
        (c.startTime || '') < slot.end
    }).sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''))
  }

  const handleBook = (cls: PublicClass) => {
    setSelectedClass(cls)
  }

  const getTargetAudience = (className: string = '') => {
    const l = className.toLowerCase()
    if (l.includes('boxing')) return 'Đốt mỡ - Tăng phản xạ'
    if (l.includes('yoga')) return 'Dẻo dai - Giảm stress'
    if (l.includes('hiit')) return 'Giảm cân - Bền bỉ'
    if (l.includes('zumba')) return 'Vui nhộn - Linh hoạt'
    return 'Phù hợp: Mọi cấp độ'
  }

  const getIcon = (className: string = '') => {
    const l = className.toLowerCase()
    if (l.includes('boxing') || l.includes('hiit')) return '🔥'
    if (l.includes('yoga') || l.includes('pilates')) return '🧘'
    return '⚡'
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-black text-white relative">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/banner_gym.jpg')] bg-cover bg-center grayscale" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <p className="text-red-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 text-center">Guided Success Plan</p>
            <h1 className="text-4xl md:text-7xl font-display tracking-widest uppercase mb-6">
              LỊCH TẬP <span className="text-red-600">THỰC CHIẾN</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base font-bold uppercase tracking-widest leading-loose text-center">
              Bạn không cần phải tự tìm kiếm. Hãy chọn lớp phù hợp với mục tiêu của bạn và đăng ký ngay trong 30 giây.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* GUIDANCE SECTION */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display uppercase tracking-widest text-black mb-4">BẠN NÊN <span className="text-red-600">BẮT ĐẦU</span> TỪ ĐÂU?</h2>
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em]">Chọn mục tiêu của bạn - Chúng tôi gợi ý lớp học</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECOMMENDATIONS.map((r, i) => (
              <div key={i} onClick={() => setFilterCat(r.classes[0])} className="group bg-white p-8 border border-neutral-200 hover:border-red-600 transition-all cursor-pointer shadow-sm hover:shadow-xl">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{r.icon}</div>
                <h3 className="text-black font-black uppercase tracking-widest text-lg mb-2">{r.title}</h3>
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-6 leading-relaxed">{r.desc}</p>
                <span className="text-red-600 text-[9px] font-black uppercase tracking-widest group-hover:gap-4 flex items-center gap-2 transition-all">
                  XEM LỊCH NGAY <span>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white sticky top-20 z-30 border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${filterCat === cat ? 'bg-black text-white border-black shadow-lg' : 'bg-transparent text-neutral-400 border-neutral-100 hover:border-black hover:text-black hover:bg-neutral-50'}`}
              >
                {filterCat === cat && <span className="mr-2 text-red-500">◆</span>}
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="bg-neutral-50 border-2 border-neutral-100 text-black text-[10px] font-black uppercase tracking-widest px-6 py-2.5 outline-none hover:border-black transition-colors"
            >
              {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <button className="bg-red-600 text-white p-3 hover:bg-black transition-all shadow-lg hover:shadow-red-600/20" title="Tải PDF">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN SCHEDULE GRID */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto overflow-x-auto pb-8">
          {loading ? (
            <div className="text-center py-40 text-neutral-400 font-black uppercase tracking-[0.3em] animate-pulse">Hệ thống đang đồng bộ dữ liệu lớp học...</div>
          ) : (
            <div className="min-w-[1100px] border border-neutral-100 shadow-2xl rounded-2xl overflow-hidden">
              <div className="grid grid-cols-[140px_repeat(7,1fr)] bg-black">
                <div className="p-6 bg-neutral-900 border-r border-white/5 font-black text-[10px] text-white/50 uppercase tracking-widest flex items-center justify-center">GRID TIME</div>
                {DAYS_ORDER.map(day => (
                  <div key={day} className="p-6 text-center text-white font-black text-[12px] uppercase tracking-widest border-r border-white/5">{DAYS_VI[day]}</div>
                ))}
              </div>

              {TIME_SLOTS.map(slot => (
                <div key={slot.label} className="grid grid-cols-[140px_repeat(7,1fr)] border-b border-neutral-100 min-h-[160px]">
                  <div className="p-6 bg-neutral-50 border-r border-neutral-100 flex flex-col items-center justify-center text-center">
                    <span className="text-black font-black text-[12px] uppercase tracking-widest mb-1 leading-tight">{slot.label}</span>
                    <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest opacity-60">{slot.range}</span>
                  </div>

                  {DAYS_ORDER.map(day => {
                    const slotClasses = getClassesForSlot(day, slot)
                    return (
                      <div key={day} className="p-3 border-r border-neutral-100 bg-white hover:bg-neutral-50/30 transition-colors">
                        <div className="space-y-4">
                          {slotClasses.map(cls => {
                            const theme = getClassTheme(cls.className)
                            const icon = getIcon(cls.className)
                            return (
                              <div
                                key={cls.id}
                                onClick={() => handleBook(cls)}
                                className={`p-4 border shadow-sm cursor-pointer hover:shadow-xl hover:border-red-600 transition-all group relative overflow-hidden ${theme}`}
                              >
                                <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity text-xl">{icon}</div>
                                <p className="font-black uppercase text-[12px] tracking-wider mb-2 leading-tight group-hover:text-red-600 transition-colors">{cls.className}</p>

                                <div className="flex items-center justify-between mb-3 border-b border-black/5 pb-2">
                                  <span className="text-[10px] font-black italic">{cls.startTime} - {cls.endTime}</span>
                                  {cls.isFull ?
                                    <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 font-black">FULL</span> :
                                    <span className="text-[9px] bg-green-600 text-white px-1.5 py-0.5 font-black animate-pulse shadow-sm shadow-green-600/20">CÒN CHỖ</span>
                                  }
                                </div>

                                <p className="text-[9px] font-black text-black/40 uppercase mb-3 flex items-center gap-1.5 line-clamp-1">
                                  <span className="text-red-600 text-[12px]">🎯</span> {getTargetAudience(cls.className)}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                  <div className="text-[9px] font-black text-black/60 uppercase tracking-widest flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 font-black">
                                      {cls.trainerName ? cls.trainerName.substring(0, 1) : 'H'}
                                    </div>
                                    {cls.trainerName?.split(' ').pop() || 'Master'}
                                  </div>
                                  <span className="text-[8px] font-bold text-neutral-400 italic">25+ Tham gia</span>
                                </div>

                                <div className="mt-4 pt-3 border-t border-black/5 flex justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 underline underline-offset-4">XEM CHI TIẾT & ĐĂNG KÝ →</span>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DETAIL MODAL */}
      {selectedClass && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white max-w-md w-full p-8 relative shadow-2xl overflow-hidden animate-bounce-in">
            <div className="absolute top-0 left-0 w-full h-[6px] bg-red-600" />
            <button onClick={() => setSelectedClass(null)} className="absolute top-4 right-4 text-neutral-400 hover:text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <p className="text-red-600 text-[10px] font-black tracking-[0.3em] uppercase mb-1">Chi tiết lớp học</p>
            <h3 className="text-3xl font-display uppercase tracking-widest text-black mb-6 leading-tight">{selectedClass.className}</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-neutral-100 p-4 flex flex-col items-center flex-1 border border-neutral-100">
                  <span className="text-[10px] font-black text-neutral-500 uppercase mb-1">Bắt đầu</span>
                  <span className="text-2xl font-display text-black">{selectedClass.startTime}</span>
                </div>
                <div className="bg-neutral-100 p-4 flex flex-col items-center flex-1 border border-neutral-100">
                  <span className="text-[10px] font-black text-neutral-500 uppercase mb-1">Kết thúc</span>
                  <span className="text-2xl font-display text-black">{selectedClass.endTime}</span>
                </div>
              </div>
              <div className="bg-black text-white p-4 flex items-center justify-between">
                <span className="text-[10px] font-black text-white/60 uppercase">Ngày tập luyện</span>
                <span className="text-xl font-display tracking-widest">{DAYS_VI[selectedClass.scheduleDay?.[0] || 'Monday']}</span>
              </div>
              <div className="border-t border-neutral-100 pt-6">
                <p className="text-xs font-bold text-neutral-600 leading-relaxed italic mb-6">
                  Lớp học chuyên sâu giúp đốt cháy Calo tối đa, tăng cường độ dẻo dai và sức bền cho cơ thể người tập. Phù hợp cho cả người mới bắt đầu.
                </p>
                <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-100">
                  <div className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-100">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/20 overflow-hidden">
                      {selectedClass.trainerPhoto ? (
                        <img src={publicApiService.getFullImageUrl(selectedClass.trainerPhoto)} className="w-full h-full object-cover" alt="HLV" />
                      ) : (
                        selectedClass.trainerName ? selectedClass.trainerName.substring(0, 1) : 'H'
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Huấn luyện viên phụ trách</p>
                      <p className="text-base font-black text-black uppercase tracking-widest">{selectedClass.trainerName || 'Master Trainer'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link href={`/register?class=${selectedClass.className}`} className="bg-red-600 text-white py-5 text-center text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-red-600/20">
                XÁC NHẬN GIỮ CHỖ NGAY
              </Link>
              <p className="text-[10px] text-center font-bold text-neutral-400 uppercase tracking-widest">⚠️ Vui lòng đến trước 5 phút để check-in</p>
            </div>
          </div>
        </div>
      )}

      {/* PREMIUM PT SECTION */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal type="left">
              <p className="text-red-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Elite Personal Training</p>
              <h3 className="text-4xl md:text-6xl font-display mb-8 tracking-widest uppercase leading-tight">
                LỘ TRÌNH <span className="text-red-600">CÁ NHÂN HÓA</span> (PT 1-1)
              </h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-1">Thiết kế lịch riêng theo bạn</p>
                    <p className="text-neutral-400 text-xs">Không phụ thuộc vào giờ cố định. Tập luyện bất cứ khi nào bạn rảnh.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-1">HLV theo sát từng nhịp thở</p>
                    <p className="text-neutral-400 text-xs">Chỉnh sửa kỹ thuật chuẩn xác, đảm bảo 100% hiệu quả và an toàn tuyệt đối.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest mb-1">Cam kết kết quả rõ ràng</p>
                    <p className="text-neutral-400 text-xs">Lộ trình được số hóa, theo dõi qua chỉ số Inbody hàng tuần.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/register" className="bg-red-600 text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-xl shadow-red-600/20 animate-pulse-gentle">
                  NHẬN TƯ VẤN LỘ TRÌNH RIÊNG
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal type="right" className="relative h-full">
              <div className="relative h-full min-h-[500px] overflow-hidden group border border-neutral-800 shadow-2xl">
                <img
                  src="/images/PT 1_1.jpg"
                  alt="Elite Personal Training"
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="text-4xl mb-6">💎</div>
                  <h4 className="text-2xl font-display uppercase tracking-widest mb-4">SỰ ĐẶC QUYỀN</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-8 font-medium max-w-sm">
                    Chúng tôi không bán "buổi tập", chúng tôi bán "sự thay đổi" và "thời gian" cho bạn.
                    Dịch vụ PT 1-1 tại Biên Hòa Gym là sự cam kết cao nhất giữa HLV và Hội viên.
                  </p>
                  <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 overflow-hidden">
                          <img src={`/images/PT 1_1.jpg`} className="w-full h-full object-cover grayscale" alt="HLV" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-red-500 tracking-widest uppercase">500+ Học viên PT thành công</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}