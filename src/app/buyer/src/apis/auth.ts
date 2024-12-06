import { useAuthenticatedFetch } from '../hooks/useAuthenticatedFetch';

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

interface KakaoAddressDocument {
  address_name: string;
  // Add other properties if needed
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

  const searchKakaoAddress = async (query: string): Promise<string[]> => {

    console.log("check query", query);
    console.log("check secret key", process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);
    const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(query)}&analyze_type=similar`;
  
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();

      console.log("from api check data", data);
      return data.documents.map((doc: KakaoAddressDocument) => doc.address_name);
    } catch (error) {
      console.error('Error fetching address data:', error);
      return [];
    }
  };
  



  return { login, logout, searchKakaoAddress };
};
