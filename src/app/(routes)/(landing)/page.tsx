'use client';

import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <div className="px-3">
        <h2 className="text-2xl font-bold text-center my-8">로그인</h2>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
            <Input 
              type="email" 
              id="email" 
              placeholder="abcdefg@gmail.com" 
              className="w-full rounded-full border-gray-300"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <Input 
              type="password" 
              id="password" 
              placeholder="************" 
              className="w-full rounded-full border-gray-300"
            />
          </div>
          
          <Button 
            className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2"
            onClick={handleLogin}
            type="button"
          >
            로그인
          </Button>
          
          <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2">
            이메일로 회원가입
          </Button>
        </form>
        
        <div className="my-6 text-center text-sm text-gray-500 relative">
          <span className="bg-white px-2 relative z-10">Or sign in with</span>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-1"></div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
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
        
        <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2">
          사업자 회원가입
        </Button>
    </div>
  )
}