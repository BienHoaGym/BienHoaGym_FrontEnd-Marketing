'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { publicApiService, type PublicPackage } from '@/../services/publicApi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const fmtVND = (n: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)

function RegisterForm() {
  const searchParams  = useSearchParams()
  const [packages, setPackages] = useState<PublicPackage[]>([])
  const [form, setForm] = useState({ fullName:'', phoneNumber:'', email:'', packageInterest: '', notes:'' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [memberCode, setMemberCode] = useState('')

  useEffect(() => { 
    publicApiService.getActivePackages().then(setPackages)
    
    // Đọc query params một cách an toàn ở Client-side
    const pkgName = searchParams.get('package_name')
    const className = searchParams.get('class')
    
    if (pkgName) {
      setForm(prev => ({ ...prev, packageInterest: pkgName }))
    } else if (className) {
      setForm(prev => ({ ...prev, packageInterest: `Lớp học: ${className}` }))
    }
  }, [searchParams])

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.fullName.trim()) e.fullName = 'Vui lòng nhập họ tên'
    if (!form.phoneNumber.trim()) e.phoneNumber = 'Vui lòng nhập số điện thoại'
    else if (!/^(0[3|5|7|8|9])+([0-9]{8})$/.test(form.phoneNumber)) e.phoneNumber = 'Số điện thoại không hợp lệ'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      const res = await publicApiService.registerOnline(form)
      // Chấp nhận cả camelCase và PascalCase cho Success/success
      const isSuccess = res?.Success || res?.success || false
      const data = res?.Data || res?.data || {}
      
      if (isSuccess) { 
        setMemberCode(data.MemberCode || data.memberCode || ''); 
        setSubmitted(true) 
      }
    } catch (err) {
      console.error('Registration failed:', err)
    } finally { setLoading(false) }
  }

  if (submitted) {
    return (
      <div className="bg-neutral-100 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center px-4 pt-24 pb-12">
          <div className="max-w-md w-full text-center bg-white p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(220,38,38,1)]">
            <h1 className="text-3xl md:text-4xl font-display text-black mb-2 uppercase tracking-widest">ĐĂNG KÝ<br /><span className="text-red-600">THÀNH CÔNG!</span></h1>
            {memberCode && (
              <div className="bg-neutral-100 border-2 border-black p-5 mt-6 mb-6">
                <p className="text-neutral-600 text-[10px] font-black uppercase tracking-widest mb-1.5">Mã hội viên</p>
                <p className="text-red-600 font-display text-4xl tracking-widest">{memberCode}</p>
                <p className="text-black text-[10px] font-bold uppercase mt-1.5">Đọc mã tại quầy lễ tân</p>
              </div>
            )}
            <Link href="/" className="btn-outline">TRỞ VỀ TRANG CHỦ</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 px-4 mt-6">
        <ScrollReveal className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-display text-black tracking-widest uppercase">BẮT ĐẦU NGAY<br /><span className="text-red-600">HÔM NAY</span></h1>
            <p className="text-neutral-600 mt-3 text-xs font-bold uppercase tracking-wider">Đăng ký để nhận <strong className="text-red-600">1 buổi tập miễn phí</strong></p>
          </div>

          <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2">Họ và Tên *</label>
                <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="VD: NGUYỄN VĂN A"
                  className={`w-full bg-white border-2 rounded-none px-3 py-3 text-black font-bold uppercase placeholder-neutral-400 focus:outline-none focus:border-red-600 transition-colors text-xs ${errors.fullName ? 'border-red-600 bg-red-50' : 'border-neutral-300'}`} />
                {errors.fullName && <p className="text-red-600 text-[10px] mt-1.5 font-black uppercase">{errors.fullName}</p>}
              </div>

              <div className="mb-5">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2">Số Điện Thoại *</label>
                <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="0901 234 567"
                  className={`w-full bg-white border-2 rounded-none px-3 py-3 text-black font-bold uppercase placeholder-neutral-400 focus:outline-none focus:border-red-600 transition-colors text-xs ${errors.phoneNumber ? 'border-red-600 bg-red-50' : 'border-neutral-300'}`} />
                {errors.phoneNumber && <p className="text-red-600 text-[10px] mt-1.5 font-black uppercase">{errors.phoneNumber}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-black uppercase tracking-widest text-black mb-2">Bạn đang quan tâm đến?</label>
                <select name="packageInterest" value={form.packageInterest} onChange={handleChange}
                  className="w-full bg-white border-2 border-neutral-300 rounded-none px-3 py-3 text-black font-bold uppercase focus:outline-none focus:border-red-600 transition-colors text-xs appearance-none">
                  <option value="">— CHỌN MỤC TIÊU / GÓI TẬP —</option>
                  <optgroup label="SỰ LỰA CHỌN PHỔ BIẾN">
                    <option value="Tập thử miễn phí">🎁 ĐĂNG KÝ TẬP THỬ MIỄN PHÍ</option>
                    <option value="Giảm cân cấp tốc">🔥 TƯ VẤN GIẢM CÂN CẤP TỐC</option>
                    <option value="Tăng cơ - Cải thiện vóc dáng">💪 TĂNG CƠ - CẢI THIỆN VÓC DÁNG</option>
                    <option value="Lộ trình PT 1-1">💎 LỘ TRÌNH PT 1-1 CÁ NHÂN HÓA</option>
                    <option value="Lớp Yoga / Group-X">🧘 LỚP HỌC YOGA / GROUP-X</option>
                    <option value="Boxing / Kick-Boxing">🥊 BOXING & KICK-BOXING</option>
                  </optgroup>
                  <optgroup label="GÓI TẬP THÀNH VIÊN">
                    {packages.map(p => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {fmtVND(p.discountPrice || p.price)}
                      </option>
                    ))}
                  </optgroup>
                  <option value="Tư vấn ngân sách">💰 TƯ VẤN THEO NGÂN SÁCH CÁ NHÂN</option>
                </select>
              </div>

              <button type="submit" disabled={loading} className="w-full btn-primary text-sm py-4 disabled:opacity-70 mt-2">
                {loading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ NGAY'}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  )
}

export default function RegisterPage() {
  return <Suspense fallback={<div className="min-h-screen bg-neutral-100 flex items-center justify-center text-black font-black uppercase tracking-widest text-xs">Đang tải...</div>}><RegisterForm /></Suspense>
}