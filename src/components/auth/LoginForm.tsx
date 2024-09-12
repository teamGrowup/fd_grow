'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuthApi } from '@/api/auth';
import { useAuthStore } from '@/lib/store';

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuthApi();
  const { setAccessToken } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setAccessToken(data.data.accessToken);
      router.push('/home');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignupClient = () => {
    router.push('/signup/client');
  };

  return (
    <form className="space-y-4 py-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">이메일</label>
        <Input 
          type="email" 
          id="email" 
          placeholder="abcdefg@gmail.com" 
          className="w-full h-[47px] rounded-full border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">비밀번호</label>
        <Input 
          type="password" 
          id="password" 
          placeholder="************" 
          className="w-full h-[47px] rounded-full border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <Button 
        className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2 h-[47px] translate-y-3"
        onClick={handleLogin}
        type="button"
      >
        로그인
      </Button>
      <Button 
        className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2 h-[47px] translate-y-3"
        onClick={handleSignupClient}
        type="button"
      >
        이메일로 회원가입
      </Button>
    </form>
  );
}
