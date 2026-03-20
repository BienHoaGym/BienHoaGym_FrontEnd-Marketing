'use client'
import { useState } from 'react'

const FAQS = [
  { badge:'👋 NGƯỜI MỚI', q:'Tôi chưa từng tập gym bao giờ, có làm được không?',
    a:'Hoàn toàn được! Hơn 60% hội viên hiện tại của chúng tôi bắt đầu từ số 0. Khi đăng ký, bạn được HLV đánh giá thể lực miễn phí và xây dựng lộ trình riêng. Tuần đầu có HLV hướng dẫn kỹ thuật 1:1 để đảm bảo bạn tập đúng và an toàn từ ngày đầu tiên.' },
  { badge:'⏰ BẬN RỘN', q:'Tôi rất bận, tập 3 buổi/tuần có đủ không?',
    a:'Đủ để thấy kết quả rõ rệt! Hầu hết hội viên đạt kết quả tốt chỉ với 3 buổi/tuần × 45–60 phút. Chúng tôi mở cửa từ 5:00 sáng đến 23:00 tối — tập trước giờ làm hoặc sau giờ làm đều được. Phòng gym hoạt động 7 ngày/tuần kể cả Tết.' },
  { badge:'⚖️ GIẢM CÂN', q:'Tôi thừa cân/béo lâu năm, có thể giảm được không?',
    a:'Được — và nhiều hội viên đã làm được. Anh Lê Hoàng Nam giảm từ 85kg xuống 71kg trong 12 tháng bằng lộ trình tập kết hợp dinh dưỡng, không nhịn ăn cực đoan. Bí quyết là lộ trình phù hợp với từng cơ thể — chúng tôi không áp chung một chương trình cho tất cả mọi người.' },
  { badge:'🤔 PHÂN VÂN', q:'Tôi không chắc có kiên trì được không?',
    a:'Đây là lo lắng phổ biến nhất! Đó là lý do chúng tôi có lớp nhóm (giúp tạo thói quen), HLV theo dõi tiến độ hàng tuần, và chính sách hoàn tiền 7 ngày. Bạn không bị ép cam kết dài hạn — bắt đầu với gói tháng để thử, khi thấy kết quả bạn sẽ tự muốn tiếp tục.' },
  { badge:'💰 GIÁ CẢ', q:'Chi phí thực tế mỗi ngày là bao nhiêu?',
    a:'Gói Cơ Bản chỉ xấp xỉ 6.600đ/ngày — rẻ hơn 1 ly cafe. So với chi phí điều trị bệnh tật do thiếu vận động, đây là khoản đầu tư sinh lời nhất bạn có thể làm cho bản thân.' },
  { badge:'👩 HỘI VIÊN NỮ', q:'Phụ nữ tập tạ có bị to người, thô kệch không?',
    a:'Tuyệt đối không! Đây là hiểu nhầm phổ biến. Phụ nữ thiếu hormone testosterone nên không thể phát triển cơ bắp to như nam giới. Tập tạ giúp cơ thể săn chắc, tạo đường cong và đốt mỡ hiệu quả hơn cardio thuần túy. 45% hội viên của chúng tôi là nữ.' },
  { badge:'🛡️ CAM KẾT', q:'Có cam kết gì nếu tôi không thấy kết quả?',
    a:'Hoàn tiền 100% trong 7 ngày đầu nếu bạn không hài lòng về dịch vụ — không cần giải thích. Ngoài ra, mỗi hội viên được theo dõi tiến độ InBody định kỳ để đảm bảo lộ trình luôn đi đúng hướng.' },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {FAQS.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i}
            className={`transition-all duration-300 overflow-hidden border-2 ${
              isOpen 
                ? 'border-red-600 bg-white shadow-[6px_6px_0px_0px_rgba(220,38,38,1)]' 
                : 'border-neutral-300 bg-white hover:border-black'
            }`}>
            <button
              className="w-full flex items-center justify-between text-left px-5 py-5 md:px-6 gap-4 cursor-pointer"
              onClick={() => setOpen(isOpen ? null : i)}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shrink-0 transition-colors ${
                  isOpen ? 'bg-red-600 text-white' : 'bg-neutral-200 text-neutral-600'
                }`}>
                  {f.badge}
                </span>
                <span className={`font-black text-sm md:text-base uppercase tracking-wider transition-colors ${
                  isOpen ? 'text-red-600' : 'text-black'
                }`}>
                  {f.q}
                </span>
              </div>
              <span className={`shrink-0 w-8 h-8 flex items-center justify-center font-black text-lg transition-all duration-300 ${
                isOpen ? 'bg-red-600 text-white rotate-45' : 'bg-neutral-200 text-black'
              }`}>
                +
              </span>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
              <div className="px-5 md:px-6 pb-6">
                <p className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed border-t border-neutral-100 pt-5 mt-2">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}