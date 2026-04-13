import type { PublicClass } from '../../services/publicApi'
import Link from 'next/link'

const DAY_VI: Record<string, string> = { 
  Monday:'Thứ 2', 
  Tuesday:'Thứ 3', 
  Wednesday:'Thứ 4', 
  Thursday:'Thứ 5', 
  Friday:'Thứ 6', 
  Saturday:'Thứ 7', 
  Sunday:'CN' 
}

const CFG: Record<string, { icon:string; bg:string; text:string; border:string; label:string; img: string; kcal: string; level: string }> = {
  yoga:    { icon:'🧘', bg:'bg-neutral-100', text:'text-black', border:'border-neutral-300', label:'Phục hồi & Dẻo dai', img: '/images/lop_yoga.jpeg', kcal: '300-400', level: 'Nhẹ nhàng' },
  boxing:  { icon:'🥊', bg:'bg-red-50',      text:'text-red-700', border:'border-red-200', label:'Đốt mỡ siêu tốc', img: '/images/anh-gai-xinh-ngau-tap-gym-32.jpg', kcal: '600-800', level: 'Cao' },
  cardio:  { icon:'🏃', bg:'bg-neutral-900', text:'text-white', border:'border-black', label:'Sức bền & Tim mạch', img: '/images/thiet_bi_cardio.jpg', kcal: '500-700', level: 'Trung bình' },
  default: { icon:'🏋️', bg:'bg-white',      text:'text-black', border:'border-neutral-300', label:'Tăng cơ & Sức mạnh', img: '/images/strength_machine.jpg', kcal: '400-600', level: 'Trung bình' }
}

function getCfg(name: string = '') {
  const n = (name || '').toLowerCase()
  if (n.includes('yoga') || n.includes('pilates')) return CFG.yoga
  if (n.includes('boxing') || n.includes('kick') || n.includes('hiit')) return CFG.boxing
  if (n.includes('cardio') || n.includes('zumba')) return CFG.cardio
  return CFG.default
}

export default function ClassCard({ cls }: { cls: PublicClass }) {
  const cfg = getCfg(cls.className)
  
  // Safe access for UI strings
  const className = cls.className || 'Lớp học'
  const trainerName = cls.trainerName || 'Master Trainer'
  const scheduleDays = Array.isArray(cls.scheduleDay) 
    ? cls.scheduleDay 
    : (cls.scheduleDay ? [cls.scheduleDay as string] : [])
  const dayLabels = scheduleDays.length > 0 
    ? scheduleDays.map(d => (d && DAY_VI[d]) ? DAY_VI[d] : d).join(', ')
    : 'Chưa xếp lịch'

  return (
    <div className="group bg-white border border-neutral-200 overflow-hidden hover:shadow-2xl hover:border-red-600 transition-all duration-500 flex flex-col rounded-xl">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img src={cfg.img} alt={className} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm flex items-center gap-2">
            <span className="text-red-500">●</span> {cfg.level}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="font-display text-2xl text-white tracking-widest uppercase">{className}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Tiêu hao</p>
                <p className="text-sm font-black text-black">{cfg.kcal} KCAL</p>
            </div>
            <div className="w-px h-8 bg-neutral-100" />
            <div className="space-y-1 text-right">
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Thời lượng</p>
                <p className="text-sm font-black text-black">60 PHÚT</p>
            </div>
        </div>

        <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-neutral-600">
                <span className="text-lg">📅</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">{dayLabels} | {cls.startTime}</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-red-600/20">
                    {trainerName.charAt(0).toUpperCase()}
                </div>
                <div>
                     <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Huấn luyện viên</p>
                     <p className="text-[11px] font-black text-black uppercase">{trainerName}</p>
                </div>
            </div>
        </div>

        {/* FOMO Status */}
        <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-black text-black uppercase tracking-widest">Độ lấp đầy</span>
                <span className="text-[10px] font-black text-red-600 uppercase">Còn 5 chỗ</span>
            </div>
            <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 w-[75%] rounded-full" />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
            <Link href="/schedule" className="text-center text-[10px] font-black uppercase tracking-widest py-3 border border-neutral-200 text-neutral-400 hover:border-black hover:text-black transition-all">
              LỊCH LỚP
            </Link>
            <Link href={`/register?class=${encodeURIComponent(className)}`} className="text-center text-[10px] font-black uppercase tracking-widest py-3 bg-black text-white hover:bg-red-600 transition-all shadow-xl shadow-black/10">
              TẬP THỬ NGAY
            </Link>
        </div>
      </div>
    </div>
  )
}