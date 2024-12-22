import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  setAccessToken: (token: string | null) => void
  setRefreshToken: (token: string | null) => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      setAccessToken: (accessToken: string | null) => set(() => ({ accessToken: accessToken })),
      setRefreshToken: (refreshToken: string | null) => set(() => ({ refreshToken: refreshToken })),
    }),
    {
      name: 'auth-storage'
    }
  )
)
