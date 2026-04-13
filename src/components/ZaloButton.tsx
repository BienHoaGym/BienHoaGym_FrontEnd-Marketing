'use client'

export default function ZaloButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <div className="group relative flex items-center">
        {/* Label chuẩn phong cách Brand */}
        <div className="absolute right-full mr-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 shadow-2xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 pointer-events-none border-r-4 border-red-600 whitespace-nowrap">
          NHẬN TƯ VẤN NGAY
        </div>

        <a
          href="https://zalo.me/0908581517" // Thay bằng số thật
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-[0_15px_40px_rgba(220,38,38,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-red-600 relative overflow-hidden group/btn"
          title="Chat qua Zalo"
        >
          {/* Hiệu ứng tia sáng quét qua */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />

          <div className="flex flex-col items-center gap-0.5">
            <span className="text-white font-black text-[15px] uppercase tracking-tighter leading-none">Zalo</span>
            <div className="w-6 h-0.5 bg-red-600" />
          </div>

          {/* Chấm thông báo động */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-black">
            <span className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75" />
          </span>
        </a>
      </div>
    </div>
  )
}
