import { useAuthStore } from '../lib/store';
import { useEffect, useState } from 'react';

export const useAuthenticatedFetch = () => {
  const accessToken = useAuthStore(state => state.accessToken);

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${accessToken}`);

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      useAuthStore.getState().logout();
      throw new Error('Token expired');
    }

    return response;
  };

  return { authFetch };
};
