import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ['vietnamese'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-be-vietnam-pro', 
  display: 'swap' 
})

const GYM_NAME   = 'Gym Biên Hòa'
const BASE_URL   = process.env.NEXT_PUBLIC_SITE_URL || 'https://gymbienhoz.vn'
const PHONE      = process.env.NEXT_PUBLIC_PHONE    || '0901234567'
const ADDRESS    = process.env.NEXT_PUBLIC_ADDRESS  || '123 Đường Nguyễn Ái Quốc, Biên Hòa, Đồng Nai'
const ZALO       = process.env.NEXT_PUBLIC_ZALO     || '0901234567'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: `%s | ${GYM_NAME}`,
    default:  `${GYM_NAME} – Phòng Gym Hiện Đại Nhất Biên Hòa`,
  },
  description:
    'Phòng gym hiện đại nhất Biên Hòa, Đồng Nai. Thiết bị nhập khẩu Mỹ & Đức, HLV chứng chỉ quốc tế ACE/NASM, mở cửa 5h–23h 7 ngày/tuần. Đăng ký chỉ từ 199.000đ/tháng.',
  keywords: [
    'gym bien hoa', 'phong gym bien hoa', 'gym dong nai',
    'the tap gym bien hoa', 'phong gym gia re bien hoa',
    'tap gym bien hoa dong nai', 'hlv the hinh bien hoa',
    'lop yoga bien hoa', 'lop boxing bien hoa',
  ],
  authors:  [{ name: GYM_NAME, url: BASE_URL }],
  creator:  GYM_NAME,
  publisher: GYM_NAME,
  openGraph: {
    type:        'website',
    locale:      'vi_VN',
    url:         BASE_URL,
    siteName:    GYM_NAME,
    title:       `${GYM_NAME} – Phòng Gym Hiện Đại Nhất Biên Hòa`,
    description: 'Thiết bị nhập khẩu, HLV chứng chỉ quốc tế. Chỉ từ 199k/tháng. Tặng 1 buổi tập thử miễn phí.',
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${GYM_NAME} – Phòng Gym Biên Hòa`,
    description: 'Thiết bị nhập khẩu, HLV chứng chỉ quốc tế. Chỉ từ 199k/tháng.',
  },
  alternates: { canonical: BASE_URL },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:           true,
      follow:          true,
      'max-image-preview': 'large',
      'max-snippet':   -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
}

// JSON-LD Schema – LocalBusiness + HealthClub
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HealthClub', 'LocalBusiness'],
      '@id':   `${BASE_URL}/#business`,
      name:    GYM_NAME,
      description:
        'Phòng gym hiện đại tại TP. Biên Hòa, Đồng Nai. Thiết bị nhập khẩu, HLV chứng chỉ quốc tế.',
      url:     BASE_URL,
      telephone: PHONE,
      email:   'contact@gymbienhoz.vn',
      address: {
        '@type':          'PostalAddress',
        streetAddress:    ADDRESS,
        addressLocality:  'Biên Hòa',
        addressRegion:    'Đồng Nai',
        postalCode:       '810000',
        addressCountry:   'VN',
      },
      geo: {
        '@type':     'GeoCoordinates',
        latitude:    10.9461,
        longitude:   106.8349,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '05:00', closes: '23:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '06:00', closes: '22:00' },
      ],
      priceRange: '₫₫',
      currenciesAccepted: 'VND',
      paymentAccepted: 'Cash, Bank Transfer',
      sameAs: [
        `https://www.facebook.com/gymbienhoz`,
        `https://zalo.me/${ZALO}`,
      ],
    },
    {
      '@type': 'WebSite',
      '@id':   `${BASE_URL}/#website`,
      url:     BASE_URL,
      name:    GYM_NAME,
      inLanguage: 'vi',
      publisher: { '@id': `${BASE_URL}/#business` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable}`}>
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Bỏ bg-black text-white ở đây để không xung đột với globals.css mới, cập nhật màu selection thành Đỏ */}
      <body className="antialiased font-sans selection:bg-red-600/30 selection:text-red-900">
        {children}

       // src/app/layout.tsx (Phần Zalo Float Button đã được sửa lỗi hiển thị)

{/* ── Zalo Float Button ── */}
<a
  href={`https://zalo.me/${ZALO}`}
  target="_blank"
  rel="noopener noreferrer"
  title="Chat Zalo với Gym Biên Hòa"
  aria-label="Chat Zalo"
  className="fixed bottom-6 right-6 z-50 group hover:scale-110 transition-transform duration-200"
>
  {/* Zalo logo SVG (Đã sửa lỗi viền bị cắt) */}
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nền đen viền đỏ - x=2 y=2 để không bị lấn ra ngoài khung gây lỗi cắt viền */}
    <rect x="2" y="2" width="48" height="48" rx="12" fill="#000" stroke="#DC2626" strokeWidth="3" />
    {/* Text Zalo trắng đậm chuẩn hardcore */}
    <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle"
      fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="14" fill="white" letterSpacing="0.02em">
      Zalo
    </text>
  </svg>
  
  {/* Chấm thông báo (Ping animation) màu đỏ chuẩn */}
  <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full border-2 border-black">
    <span className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75" />
  </span>
</a>

        {/* ── Phone Float Button (mobile only) ── */}
        <a
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          title="Gọi ngay Gym Biên Hòa"
          aria-label="Gọi điện"
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full
            flex items-center justify-center shadow-xl shadow-red-900/40 hover:scale-110
            transition-all duration-200 sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}