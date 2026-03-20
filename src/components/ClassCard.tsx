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

const CFG: Record<string, { icon:string; bg:string; text:string; border:string; label:string }> = {
  yoga:    { icon:'🧘', bg:'bg-neutral-100', text:'text-black', border:'border-neutral-300', label:'Phục hồi & Dẻo dai' },
  boxing:  { icon:'🥊', bg:'bg-red-50',      text:'text-red-700', border:'border-red-200', label:'Đốt mỡ siêu tốc' },
  cardio:  { icon:'🏃', bg:'bg-neutral-900', text:'text-white', border:'border-black', label:'Sức bền & Tim mạch' },
  default: { icon:'🏋️', bg:'bg-white',      text:'text-black', border:'border-neutral-300', label:'Tăng cơ & Sức mạnh' }
}

function getCfg(name: string = '') {
  const n = (name || '').toLowerCase()
  if (n.includes('yoga') || n.includes('pilates')) return CFG.yoga
  if (n.includes('boxing') || n.includes('kick') || n.includes('hiit')) return CFG.boxing
  if (n.includes('cardio')) return CFG.cardio
  return CFG.default
}

export default function ClassCard({ cls }: { cls: PublicClass }) {
  const cfg = getCfg(cls.className)
  const isDark = cfg.bg === 'bg-neutral-900'
  const headerText = isDark ? 'text-white' : 'text-black'
  
  // Safe access for UI strings
  const className = cls.className || 'Lớp học'
  const trainerName = cls.trainerName || 'Chưa phân công'
  const scheduleDayVe = DAY_VI[cls.scheduleDay] || cls.scheduleDay || 'Chưa rõ'

  return (
    <div className="group bg-white border border-neutral-300 overflow-hidden hover:shadow-lg hover:border-black transition-all duration-300 flex flex-col">
      <div className={`${cfg.bg} px-5 py-4 flex items-center gap-3 border-b ${cfg.border}`}>
        <div className={`text-xl w-10 h-10 flex items-center justify-center border ${isDark ? 'bg-black border-neutral-700' : 'bg-white border-neutral-200'}`}>
          {cfg.icon}
        </div>
        <div>
          <h3 className={`font-display text-xl tracking-wider mb-0.5 ${headerText}`}>{className}</h3>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${cfg.text}`}>{cfg.label}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-neutral-100 border border-neutral-200 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">📅 {scheduleDayVe}</span>
          <span className="bg-neutral-100 border border-neutral-200 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">⏱️ {cls.startTime} - {cls.endTime}</span>
        </div>
        <div className="items-center flex gap-3 mb-5">
          <div className="w-7 h-7 bg-black flex items-center justify-center text-white text-[10px] font-black shrink-0">
            {trainerName.charAt(0).toUpperCase()}
          </div>
          <p className="text-xs font-bold text-neutral-800">HLV {trainerName}</p>
        </div>
        <Link href={`/register?class=${encodeURIComponent(className)}`} className="mt-auto block text-center text-xs font-black uppercase tracking-widest py-2.5 border-2 border-black text-black hover:bg-black hover:text-white transition-colors">
          ĐĂNG KÝ HỌC
        </Link>
      </div>
    </div>
  )
}