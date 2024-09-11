'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BusinessRegistrationForm() {
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
      <h1 className="text-2xl font-bold mb-6 text-center">사업자 회원가입</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">회사 이메일</label>
          <div className="flex space-x-2">
            <Input
              id="email"
              type="email"
              placeholder="abcdefg@gmail.com"
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
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
          <Input id="password" type="password" placeholder="************" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">비밀번호 확인</label>
          <Input id="confirmPassword" type="password" placeholder="************" />
        </div>
        <div>
          <label htmlFor="businessNumber" className="block text-sm font-medium text-gray-700 mb-1">사업자 등록번호</label>
          <Input id="businessNumber" type="text" placeholder="************" />
        </div>
        <div>
          <label htmlFor="representativeName" className="block text-sm font-medium text-gray-700 mb-1">대표자 이름</label>
          <Input id="representativeName" type="text" placeholder="홍길동" />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">상호명</label>
          <Input id="businessName" type="text" placeholder="돌리" />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">법인 주소</label>
          <div className="flex space-x-2 mb-2">
            <Input id="address" type="text" placeholder="주소" className="flex-grow" />
            <Button className="whitespace-nowrap">주소 검색</Button>
          </div>
          <Input type="text" placeholder="상세주소" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
          <div className="flex space-x-2">
            <Input id="phone" type="tel" placeholder="010XXXXXXXX" className="flex-grow" />
            <Button className="whitespace-nowrap">전화번호 인증</Button>
          </div>
        </div>
        <Button type="submit" className="w-full">회원가입</Button>
      </form>
    </div>
  )
}