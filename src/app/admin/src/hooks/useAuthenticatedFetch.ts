import { useAuthStore } from '../lib/store';
import { useRouter } from 'next/navigation';

export const useAuthenticatedFetch = () => {
  const { accessToken, clearStorage } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    // setAccessToken(null);
    // setRefreshToken(null);
    clearStorage(); // 상태와 로컬스토리지 초기화
  };

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${accessToken}`);

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      // useAuthStore.getState().logout();
      handleLogout();
      router.push('/');
      throw new Error('Token expired');
    }

    return response;
  };

  return { authFetch };
};