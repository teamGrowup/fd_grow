import { useAuthenticatedFetch } from '@/hooks/useAuthenticatedFetch';

interface LoginResponse {
  code: number;
  isSuccess: boolean;
  message: string;
  data: {
    grantType: string;
    accessToken: string;
    refreshToken: string;
  };
}

export const useAuthApi = () => {
  const authFetch = useAuthenticatedFetch();

  const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch('https://your-backend-api.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  };

  const logout = async () => {
    return authFetch('https://your-backend-api.com/logout', { method: 'POST' });
  };

  return { login, logout };
};
