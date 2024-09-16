import { Button } from "@/components/ui/button"
import LoginForm from '@/components/auth/LoginForm';

export default function LoginScreen() {
  return (
    <div className="px-3">
      <h2 className="text-2xl font-bold text-center my-[60px]">로그인</h2>
      
      <LoginForm />
      
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
      <form action="/signup/business">
        <Button 
          className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2 translate-y-10 h-[47px]"
          type="submit"
        >
          사업자 회원가입
        </Button>
      </form>
    </div>
  )
}