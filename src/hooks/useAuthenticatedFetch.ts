import { useAuthStore } from '@/lib/store';

export const useAuthenticatedFetch = () => {
  const accessToken = useAuthStore(state => state.accessToken);

  const authFetch = async (url: string, options: RequestInit = {}) => {
    if (!accessToken) {
      throw new Error('No access token available');
    }

    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${accessToken}`);

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      // Handle token expiration (e.g., redirect to login)
      useAuthStore.getState().logout();
      throw new Error('Token expired');
    }

    return response;
  };

  return authFetch;
};
