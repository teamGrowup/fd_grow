'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input,Button } from "@/packages/ui/src/index";
import { useAuthApi } from '../../api/auth';
import { useAuthStore } from '../../lib/store';

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuthApi();
  const { setAccessToken } = useAuthStore();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password.trim() !== '' && !emailError && !passwordError);
  }, [email, password, emailError, passwordError]);

  // const handleLogin = async () => {
  //   try {
  //     const data = await login(email, password);
  //     setAccessToken(data.data.accessToken);
  //     router.push('/home');
  //   } catch (error) {
  //     console.error('Login error:', error);
  //   }
  // };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('이메일을 입력해주세요.');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = (password: string) => {
    if (!password.trim()) {
      setPasswordError('비밀번호를 입력해주세요.');
      return false;
    } else if (password.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };


  

  const handleSignupClient = () => {
    router.push('/signup/client');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('isFormValid:', isFormValid);
    if (!isFormValid) return;

    alert('로그인 중...');

    // try {
    //   const data = await login(email, password);
    //   setAccessToken(data.data.accessToken);
    //   router.push('/home');
    // } catch (error) {
    //   console.error('Login error:', error);
    //   // Handle login error (e.g., show error message)
    // }
  };



  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">이메일</label>
        <Input 
          type="email" 
          id="email" 
          placeholder="abcdefg@gmail.com" 
          className="w-full h-[47px] rounded-full border-gray-300"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => validateEmail(email)}
        />
        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">비밀번호</label>
        <Input 
          type="password" 
          id="password" 
          placeholder="************" 
          className="w-full h-[47px] rounded-full border-gray-300"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => validatePassword(password)}
        />        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
      </div>
      
      <Button 
        className="w-full bg-black text-white hover:bg-gray-700 rounded-full py-2 h-[47px] translate-y-3"
        type="button"
        // disabled={!isFormValid}
      >
        로그인
      </Button>
      <Button 
        className="w-full bg-black text-white hover:bg-gray-700 rounded-full py-2 h-[47px] translate-y-3"
        onClick={handleSignupClient}
        type="button"
      >
        이메일로 회원가입
      </Button>
    </form>
  );
}
