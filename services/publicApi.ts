/// <reference types="node" />
// services/publicApi.ts
// ✅ Dùng đúng /api/Public/* endpoints (không cần auth)

const BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:10001/api'

type FetchOptions = { revalidate?: number; cache?: RequestCache }

async function apiFetch(url: string, opts: FetchOptions = {}) {
  const res = await fetch(`${BASE}${url}`, {
    next: { revalidate: opts.revalidate ?? 0 }, // Set to 0 to disable caching during testing
    cache: opts.cache,
  } as any)
  if (!res.ok) throw new Error(`API ${url} → HTTP ${res.status}`)
  return res.json()
}

async function apiPost(url: string, body: unknown) {
  const res = await fetch(`${BASE}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  } as any)
  return res.json()
}

export interface PublicPackage {
  id: string
  name: string            // Tên field từ backend PackageDto (camelCase)
  description?: string
  price: number
  durationDays: number
  isActive: boolean
  packageName?: string
  discountPrice?: number
  finalPrice?: number
  sessionLimit?: number
  hasPT?: boolean         // Thêm: Check xem gói có PT hay không
}

export interface PublicClass {
  id: string
  name: string            // Tên field từ backend ClassDto (camelCase)
  description?: string
  classType?: string      // Thêm: Yoga, PT 1-1, Boxing...
  scheduleDay?: string[]   // Backend trả về List<string>
  startTime: string
  endTime: string
  maxCapacity: number
  currentEnrollment: number
  isActive: boolean
  trainerName?: string
  trainerPhoto?: string
  className?: string
  availableSlots?: number
  isFull?: boolean
}

export interface PublicTrainer {
  id: string
  fullName: string
  specialization?: string
  bio?: string
  profilePhoto?: string
  hireDate?: string
}

export interface RegisterForm {
  fullName: string
  phoneNumber: string
  email?: string
  packageInterest?: string
  notes?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractData(raw: any): any[] | null {
  const isSuccess = raw?.success ?? raw?.Success ?? false
  const data = raw?.data ?? raw?.Data ?? null
  if (isSuccess && Array.isArray(data)) return data
  return null
}

export const publicApiService = {
  /** ✅ GET /api/Public/packages */
  async getActivePackages(): Promise<PublicPackage[]> {
    try {
      const raw = await apiFetch('/Public/packages')
      const data = extractData(raw)
      if (data && data.length > 0) return data as PublicPackage[]
      if (Array.isArray(raw)) return raw as PublicPackage[]
      return []
    } catch (e) {
      console.warn('[publicApi] getActivePackages failed:', e)
      return []
    }
  },

  /** ✅ GET /api/Public/classes */
  async getActiveClasses(): Promise<PublicClass[]> {
    try {
      const raw = await apiFetch('/Public/classes')
      const data = extractData(raw)
      if (data && data.length > 0) return data as PublicClass[]
      if (Array.isArray(raw)) return raw as PublicClass[]
      return []
    } catch (e) {
      console.warn('[publicApi] getActiveClasses failed:', e)
      return []
    }
  },

  /** ✅ GET /api/Public/trainers - Lấy danh sách HLV public */
  async getActiveTrainers(): Promise<PublicTrainer[]> {
    try {
      const raw = await apiFetch('/Public/trainers')
      const data = extractData(raw)
      if (data && data.length > 0) return data as PublicTrainer[]
      if (Array.isArray(raw)) return raw as PublicTrainer[]
      return []
    } catch (e) {
      console.warn('[publicApi] getActiveTrainers failed:', e)
      return []
    }
  },

  /** ✅ POST /api/Public/register */
  async registerOnline(form: RegisterForm) {
    try {
      return await apiPost('/Public/register', form)
    } catch (e) {
      console.warn('[publicApi] registerOnline failed:', e)
      throw e
    }
  },

  /** ✅ Resolve Image Path */
  getFullImageUrl(url?: string): string | undefined {
    if (!url) return undefined
    if (url.startsWith('http') || url.startsWith('data:')) return url
    const root = BASE.replace('/api', '')
    return `${root}${url.startsWith('/') ? '' : '/'}${url}`
  }
}