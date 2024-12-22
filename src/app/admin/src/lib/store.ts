import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  setAccessToken: (token: string | null) => void
  setRefreshToken: (token: string | null) => void
  clearStorage: () => void // clearStorage 추가
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      setAccessToken: (accessToken: string | null) => set(() => ({ accessToken })),
      setRefreshToken: (refreshToken: string | null) => set(() => ({ refreshToken })),
      clearStorage: () => {
        // 상태 초기화 (토큰을 null로 설정)
        set(() => ({ accessToken: null, refreshToken: null }))
        // 로컬스토리지에서 persist된 상태도 초기화
        localStorage.removeItem('auth-storage')
      }
    }),
    {
      name: 'auth-storage' // 로컬스토리지에 저장할 키
    }
  )
)
