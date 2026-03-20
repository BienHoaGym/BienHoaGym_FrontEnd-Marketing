import type { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { publicApiService, type PublicClass } from '@/../services/publicApi'

export const metadata: Metadata = {
  title: 'Lịch Tập – Gym Biên Hòa',
  description: 'Xem lịch các lớp tập nhóm: Yoga, Boxing, Pilates, HIIT, Thể hình.',
}

const DAYS_ORDER = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const DAYS_VI: Record<string, string> = { 
  Monday: 'Thứ 2', 
  Tuesday: 'Thứ 3', 
  Wednesday: 'Thứ 4', 
  Thursday: 'Thứ 5', 
  Friday: 'Thứ 6', 
  Saturday: 'Thứ 7', 
  Sunday: 'Chủ Nhật' 
}

const getClassTheme = (className: string = '') => {
  const l = (className || '').toLowerCase()
  if (l.includes('boxing') || l.includes('hiit')) return 'border-t-[3px] border-red-600'
  if (l.includes('yoga') || l.includes('pilates')) return 'border-t-[3px] border-neutral-400'
  return 'border-t-[3px] border-black'
}

export default async function SchedulePage() {
  // Lấy dữ liệu thật từ Backend
  const classes = await publicApiService.getActiveClasses()

  const byDay: Record<string, PublicClass[]> = {}
  for (const day of DAYS_ORDER) {
    byDay[day] = classes
      .filter(c => c.scheduleDay === day)
      .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''))
  }

  return (
    <div className="bg-neutral-100">
      <Navbar />

      <section className="pt-24 pb-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 text-center mt-6">
          <h1 className="text-4xl md:text-5xl font-display text-black mb-3 tracking-widest uppercase">
            LỊCH TẬP <span className="text-red-600">HÀNG TUẦN</span>
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm font-medium">Lớp học nhóm đa dạng, linh hoạt từ 6:00 sáng đến 20:00 tối.</p>
        </div>
      </section>

      <section className="py-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-7 gap-3">
            {DAYS_ORDER.map(day => (
              <div key={day}>
                <div className="text-center py-2 mb-3 text-[11px] font-black tracking-widest uppercase bg-black text-white shadow-sm">
                  {DAYS_VI[day]}
                </div>
                <div className="space-y-3">
                  {byDay[day].length ? byDay[day].map(cls => {
                    const trainerName = cls.trainerName || 'Hệ thống';
                    const trainerDisplay = trainerName.includes(' ') 
                      ? trainerName.split(' ').slice(-1)[0] 
                      : trainerName;
                      
                    return (
                      <div key={cls.id} className={`group bg-white border border-neutral-300 p-3 transition-all hover:border-black flex flex-col h-full ${getClassTheme(cls.className)}`}>
                        <p className="text-black text-[13px] font-black uppercase tracking-wider mb-1">{cls.className || 'Lớp học'}</p>
                        <p className="text-neutral-600 text-[11px] font-bold mb-2 bg-neutral-100 py-1 px-1.5 w-fit">{cls.startTime} – {cls.endTime}</p>
                        <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold mb-3">HLV {trainerDisplay}</p>
                        
                        <div className="mt-auto">
                          {cls.isFull ? (
                            <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 w-fit block mb-2">HẾT CHỖ</span>
                          ) : (
                            <span className="bg-neutral-200 text-black text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 w-fit block mb-2">CÒN CHỖ</span>
                          )}
                          <Link href={`/register?class=${encodeURIComponent(cls.className || '')}`} className="block text-center bg-white hover:bg-black text-black hover:text-white border-2 border-black text-[10px] font-black uppercase py-1.5 transition-colors">
                            ĐĂNG KÝ
                          </Link>
                        </div>
                      </div>
                    )
                  }) : (
                    <div className="border border-dashed border-neutral-300 bg-neutral-50 p-3 text-center text-neutral-400 text-[10px] font-bold uppercase tracking-widest">TRỐNG</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {DAYS_ORDER.map(day => (
              byDay[day].length > 0 && (
                <div key={day}>
                  <h3 className="text-lg font-black uppercase tracking-widest mb-3 text-black border-b-2 border-black pb-1.5">{DAYS_VI[day]}</h3>
                  <div className="space-y-3">
                    {byDay[day].map(cls => (
                      <div key={cls.id} className={`bg-white border border-neutral-300 p-4 flex items-center justify-between shadow-sm ${getClassTheme(cls.className)}`}>
                        <div>
                          <p className="text-black font-black uppercase tracking-wider text-sm">{cls.className || 'Lớp học'}</p>
                          <p className="text-neutral-600 text-xs font-bold mt-1 mb-2">{cls.startTime} – {cls.endTime} · HLV {cls.trainerName || 'Hệ thống'}</p>
                          {cls.isFull ? (
                            <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5">HẾT CHỖ</span>
                          ) : (
                            <span className="bg-neutral-200 text-black text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5">CÒN CHỖ</span>
                          )}
                        </div>
                        <Link href={`/register?class=${encodeURIComponent(cls.className || '')}`} className="shrink-0 bg-white border-2 border-black hover:bg-black hover:text-white text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 transition-colors">
                          ĐĂNG KÝ
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
            
            {classes.length === 0 && (
              <div className="text-center py-20 border-2 border-dashed border-neutral-300 rounded-2xl bg-white">
                <p className="text-neutral-400 font-bold uppercase tracking-widest italic">Chưa có lịch tập nào được thiết lập trong hệ thống...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-neutral-100 border border-neutral-300 p-6 text-center">
            <h3 className="text-black text-xl font-black uppercase tracking-widest mb-4">LƯU Ý THAM GIA</h3>
            <ul className="text-neutral-700 text-xs space-y-3 text-left inline-block mb-6 font-medium">
              <li className="flex items-center gap-2"><span className="text-red-600 font-black">▪</span> Đến trước 5 phút để warming up</li>
              <li className="flex items-center gap-2"><span className="text-red-600 font-black">▪</span> Mang theo khăn và chai nước cá nhân</li>
              <li className="flex items-center gap-2"><span className="text-red-600 font-black">▪</span> Báo lễ tân trước 2 tiếng nếu hủy</li>
            </ul>
            <div className="flex justify-center">
              <Link href="/register" className="btn-primary">TRỞ THÀNH HỘI VIÊN</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}