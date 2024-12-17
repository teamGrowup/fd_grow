'use client';
import { useCookies } from 'react-cookie';
import { useAuthStore } from '../../lib/store';
import { useEffect } from 'react';

export const AuthContext = () => {
  const { setAuthenticated } = useAuthStore();
  const [cookies] = useCookies(['accessToken']);

  useEffect(() => {
    if (cookies.accessToken) {
      // 엑세스 토큰이 있으면 로그인 상태로 설정
      setAuthenticated(true);
    } else {
      // 엑세스 토큰이 없으면 로그아웃 상태로 설정
      setAuthenticated(false);
      
    }
  }, [cookies.accessToken, setAuthenticated]);

  return null
};
