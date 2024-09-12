'use client';

import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { useAuthApi } from '@/api/auth';
import { useAuthStore } from '@/lib/store';

export default function LoginScreen() {
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
      // Handle login error (e.g., show error message to user)
    }
  };

  const handleSignupClient = () => {
    router.push('/signup/client');
  };

  const handleSignupBusiness = () => {
    router.push('/signup/business');
  };

  return (
    <div className="px-3">
        <h2 className="text-2xl font-bold text-center my-[60px]">로그인</h2>
        
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
        
        <div className="my-6 text-center text-sm text-gray-500 relative">
          <span className="bg-white px-2 relative z-10">Or sign in with</span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-1"></div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6 translate-y-6">
          <Button className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center p-0">
            <span className="text-2xl font-bold text-blue-500">G</span>
          </Button>
          <Button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center p-0">
            <span className="text-2xl font-bold text-black">K</span>
          </Button>
          <Button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center p-0">
            <span className="text-2xl font-bold text-white">N</span>
          </Button>
        </div>
        <Button 
          className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2 translate-y-10 h-[47px]"
          onClick={handleSignupBusiness}
          type="button"
        >
          사업자 회원가입
        </Button>
    </div>
  )
}