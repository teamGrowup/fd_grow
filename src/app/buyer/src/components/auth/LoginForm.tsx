'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input,Button } from "@/packages/ui/src/index";
// import { useAuthApi } from '../../apis/auth';
import { useAuthStore } from '../../lib/store';
import { useCookies } from "react-cookie";
import { SignInResponseDto } from '../../apis/response/auth';
import BaseResponse from '../../apis/response/base-response.dto';
import { SignInRequestDto } from '../../apis/request/auth';
import { signInEmailRequest } from '../../apis';

export default function LoginForm() {
  //          function: 라우터 함수          //
  const router = useRouter();
  //          state: 쿠키 상태          //
  const [cookies, setCookies] = useCookies();

  // const { login } = useAuthApi();
  // const { setAccessToken } = useAuthStore();

  //          state: 이메일 상태          //
  const [email, setEmail] = useState<string>('');
  //          state: 패스워드 상태          //
  const [password, setPassword] = useState<string>('');
  //          state: 이메일 에러 상태          //
  const [emailError, setEmailError] = useState<string>('');
  //          state: 패스워드 에러 상태          //
  const [passwordError, setPasswordError] = useState('');
  //          state: 로그인 유효 상태          //
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

  //          event handler: 이메일 변경 이벤트 처리          //  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };
  //          event handler: 비밀번호 변경 이벤트 처리          //
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    validatePassword(value);
  };


  

  const handleSignupClient = () => {
    router.push('/signup/client');
  };


  
  //          event handler: 로그인 버튼 클릭 이벤트 처리          //
  const handleSubmit = () => {
    console.log('submit 실행')
    console.log('isFormValid:', isFormValid);
    if (!isFormValid) return;

    const requestBody: SignInRequestDto = { email, password };
    // signInEmailRequest(requestBody).then(signInResponse);
    console.log(requestBody);
    signInEmailRequest(requestBody).then(signInResponse);
    // try {
    //   const data = await login(email, password);
    //   setAccessToken(data.data.accessToken);
    //   router.push('/home');
    // } catch (error) {
    //   console.error('Login error:', error);
    //   // Handle login error (e.g., show error message)
    // }
  };
  //          function: sign in response 처리 함수          //
  const signInResponse = (responseBody: SignInResponseDto | BaseResponse | null) => {
    console.log('로그인 요청 완료됨')
    console.log(responseBody)
    if (!responseBody){
        alert('네트워크 이상입니다');
        return;
    }
    const { code } = responseBody;
    if (code === 'DBE') alert('데이터베이스 오류입니다.');
    if (code === 'SF' || code === 'VF') alert('TODO')
    

    const { data } = responseBody as SignInResponseDto;
    const now = new Date().getTime();
    const expires = new Date(now + 3600 * 1000)
    console.log('만료 시간 설정')
    if(!data) return;
    setCookies('accessToken', data?.accessToken, { expires, path: "/" });
    router.push('/');
  }



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
        className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full py-2 h-[47px] translate-y-3"
        type="button"
        disabled={!isFormValid}
        onClick={handleSubmit}
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
