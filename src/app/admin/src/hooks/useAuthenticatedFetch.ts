import { useAuthStore } from '../lib/store';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const useAuthenticatedFetch = () => {
  const { setAccessToken, setRefreshToken, accessToken } = useAuthStore();
  const clearUseAuthStorage = useAuthStore.persist.clearStorage;
  const router = useRouter();

  const handleLogout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    clearUseAuthStorage();
  }

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