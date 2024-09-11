'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegistrationForm() {
  const [email, setEmail] = useState('')
  const [emailVerified, setEmailVerified] = useState(false)

  const handleEmailVerification = () => {
    // Simulating email verification
    setTimeout(() => {
      setEmailVerified(true)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">회원가입</h1>
      <form className="space-y-4">
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
          />
          <Button
            onClick={handleEmailVerification}
            disabled={!email || emailVerified}
            className="whitespace-nowrap"
          >
            {emailVerified ? '인증완료' : '인증메일 보내기'}
          </Button>
        </div>
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="닉네임" />
        <div className="flex space-x-2">
          <Input type="text" placeholder="주소" className="flex-grow" />
          <Button className="whitespace-nowrap">주소 검색</Button>
        </div>
        <Input type="text" placeholder="상세주소" />
        <div className="flex space-x-2">
          <Input type="tel" placeholder="전화번호" className="flex-grow" />
          <Button className="whitespace-nowrap">전화번호 인증</Button>
        </div>
        <Button type="submit" className="w-full">회원가입</Button>
      </form>
    </div>
  )
}