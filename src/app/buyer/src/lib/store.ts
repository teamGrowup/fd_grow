
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (status: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuthenticated: (status: boolean) => set({ isAuthenticated: status }),
      logout: () => set({ isAuthenticated: false })
    }),
    {
      name: 'auth-storage',
    }
  )
);

