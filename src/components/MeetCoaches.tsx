'use client'
import ScrollReveal from './ScrollReveal'
import { publicApiService, type PublicTrainer } from '../../services/publicApi'

const TRAINER_UI_PRESETS = [
    { shape: 'M', bgFrom: '#E5E5E5', bgTo: '#FFFFFF', accentColor: '#000000' },
    { shape: 'Y', bgFrom: '#171717', bgTo: '#000000', accentColor: '#FFFFFF' },
    { shape: 'B', bgFrom: '#FEF2F2', bgTo: '#FEE2E2', accentColor: '#DC2626' },
]

function TrainerAvatar({ shape, bgFrom, bgTo, accentColor, photo }: { shape: string; bgFrom: string; bgTo: string; accentColor: string; photo?: string }) {
    const fullPhotoUrl = publicApiService.getFullImageUrl(photo)
    
    if (fullPhotoUrl) {
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-neutral-100">
                <img src={fullPhotoUrl} alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            </div>
        )
    }

    const paths: Record<string, JSX.Element> = {
        M: <svg viewBox="0 0 120 160" fill="none" className="w-20 h-28 opacity-90"><circle cx="60" cy="30" r="18" fill={accentColor} /><path d="M30 70 L40 130 Q60 140 80 130 L90 70 Z" fill={accentColor} /></svg>,
        Y: <svg viewBox="0 0 120 160" fill="none" className="w-16 h-24 opacity-90"><circle cx="60" cy="25" r="15" fill={accentColor} /><path d="M40 45 Q60 40 80 45 L75 90 Q60 95 45 90 Z" fill={accentColor} /></svg>,
        B: <svg viewBox="0 0 120 160" fill="none" className="w-16 h-24 opacity-90"><circle cx="55" cy="25" r="16" fill={accentColor} /><path d="M35 55 Q55 50 75 55 L70 100 Q55 105 40 100 Z" fill={accentColor} /></svg>,
    }
    return (
        <div className="relative w-full h-full flex items-end justify-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${bgFrom} 0%, ${bgTo} 100%)` }}>
            <div className="relative z-10 pb-2 group-hover:scale-105 transition-transform duration-500">{paths[shape] ?? paths.M}</div>
        </div>
    )
}

export default function MeetCoaches({ trainers }: { trainers: PublicTrainer[] }) {
  const displayTrainers = trainers.slice(0, 6)

  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <p className="text-red-600 text-xs font-black tracking-[0.2em] uppercase mb-1">Đội ngũ chuyên nghiệp</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase">KẾT NỐI VỚI <span className="text-red-600">HUẤN LUYỆN VIÊN</span></h2>
          <p className="text-neutral-400 mt-4 max-w-lg mx-auto text-sm italic">“Một HLV tốt không chỉ dạy bạn cách tập, họ dạy bạn cách chiến thắng bản thân.”</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTrainers.map((t, i) => {
            const preset = TRAINER_UI_PRESETS[i % TRAINER_UI_PRESETS.length]
            return (
              <ScrollReveal key={t.id} delay={i * 200} type="up" className="group bg-black/40 border border-neutral-800 hover:border-red-600 transition-all rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="h-72 relative">
                    <TrainerAvatar 
                        shape={preset.shape}
                        bgFrom={preset.bgFrom}
                        bgTo={preset.bgTo}
                        accentColor={preset.accentColor}
                        photo={t.profilePhoto}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-6">
                        <h3 className="text-xl font-black uppercase tracking-widest mb-1">{t.fullName}</h3>
                        <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">{t.specialization || 'Master Trainer'}</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="text-neutral-400 text-xs leading-relaxed italic mb-6 line-clamp-3">“{t.bio || 'Hết mình vì mục tiêu của hội viên. Sự thay đổi của bạn là niềm tự hào của tôi.'}”</p>
                    <div className="flex gap-2">
                        <div className="bg-neutral-800 text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">Expertise</div>
                        <div className="bg-neutral-800 text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">Motivation</div>
                        <div className="bg-neutral-800 text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">Results</div>
                    </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
