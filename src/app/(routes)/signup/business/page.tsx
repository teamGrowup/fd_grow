'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock function to simulate Korean address API
const searchKoreanAddress = async (query: string): Promise<string[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const mockAddresses = [
    "서울특별시 강남구 테헤란로 152",
    "서울특별시 서초구 서초대로 397",
    "서울특별시 송파구 올림픽로 300",
    "경기도 성남시 분당구 판교역로 166",
    "부산광역시 해운대구 센텀중앙로 55",
  ]
  return mockAddresses.filter(address => address.includes(query))
}

export default function BusinessRegistrationForm() {
  const [email, setEmail] = useState('')
  const [showEmailVerification, setShowEmailVerification] = useState(false)
  const [emailTimer, setEmailTimer] = useState(180)
  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [businessNumber, setBusinessNumber] = useState('')
  const [representativeName, setRepresentativeName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showPhoneVerification, setShowPhoneVerification] = useState(false)
  const [phoneTimer, setPhoneTimer] = useState(180)
  const [phoneVerificationCode, setPhoneVerificationCode] = useState('')
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)

  const handleSendVerificationEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowEmailVerification(true)
    setEmailTimer(180)
    setIsEmailVerified(false)
  }

  const handleSendPhoneVerification = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPhoneVerification(true)
    setPhoneTimer(180)
    setIsPhoneVerified(false)
  }

  const handleEmailVerification = () => {
    // Simulating verification check
    if (emailVerificationCode === '1234') {
      setIsEmailVerified(true)
      setShowEmailVerification(false)
    }
  }

  const handlePhoneVerification = () => {
    // Simulating verification check
    if (phoneVerificationCode === '5678') {
      setIsPhoneVerified(true)
      setShowPhoneVerification(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (showEmailVerification && emailTimer > 0) {
      interval = setInterval(() => {
        setEmailTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [showEmailVerification, emailTimer])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (showPhoneVerification && phoneTimer > 0) {
      interval = setInterval(() => {
        setPhoneTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [showPhoneVerification, phoneTimer])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleAddressSearch = async () => {
    setIsSearching(true)
    try {
      const results = await searchKoreanAddress(searchQuery)
      setSearchResults(results)
    } catch (error) {
      console.error('Error searching for address:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleAddressSelect = (selectedAddress: string) => {
    setAddress(selectedAddress)
    setIsDialogOpen(false)
  }

  return (
    <div className="max-w-md p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">사업자 회원가입</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">회사 이메일</label>
          <div className="flex space-x-2 items-center">
            <Input
              id="email"
              type="email"
              placeholder="abcdefg@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            {isEmailVerified ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <Button
                onClick={handleSendVerificationEmail}
                disabled={!email || showEmailVerification}
                className="whitespace-nowrap"
              >
                인증메일 보내기
              </Button>
            )}
          </div>
        </div>
        {showEmailVerification && (
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="인증번호 입력"
              value={emailVerificationCode}
              onChange={(e) => setEmailVerificationCode(e.target.value)}
              className="flex-grow"
            />
            <span className="text-sm text-gray-500">{formatTime(emailTimer)}</span>
            <Button onClick={handleEmailVerification} className="whitespace-nowrap">인증하기</Button>
          </div>
        )}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
          <Input
            id="password"
            type="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">비밀번호 확인</label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="************"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="businessNumber" className="block text-sm font-medium text-gray-700 mb-1">사업자 등록번호</label>
          <Input
            id="businessNumber"
            type="text"
            placeholder="000-00-00000"
            value={businessNumber}
            onChange={(e) => setBusinessNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="representativeName" className="block text-sm font-medium text-gray-700 mb-1">대표자 이름</label>
          <Input
            id="representativeName"
            type="text"
            placeholder="홍길동"
            value={representativeName}
            onChange={(e) => setRepresentativeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">상호명</label>
          <Input
            id="companyName"
            type="text"
            placeholder="돌리"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">법인 주소</label>
          <div className="flex space-x-2 mb-2">
            <Input 
              id="address" 
              type="text" 
              placeholder="주소" 
              className="flex-grow" 
              value={address}
              readOnly
            />
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="whitespace-nowrap">주소 검색</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle>주소 검색</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4">
                    <Input 
                      id="searchAddress" 
                      placeholder="주소 검색" 
                      className="flex-grow"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button onClick={handleAddressSearch} disabled={isSearching}>
                      {isSearching ? '검색 중...' : '검색'}
                    </Button>
                  </div>
                  <div className="max-h-[200px] overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div 
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleAddressSelect(result)}
                      >
                        {result}
                      </div>
                    ))}
                    {searchResults.length === 0 && !isSearching && (
                      <div className="p-2 text-gray-500">검색 결과가 없습니다.</div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <Input 
            type="text" 
            placeholder="상세주소" 
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
          <div className="flex space-x-2 items-center">
            <Input
              id="phone"
              type="tel"
              placeholder="010XXXXXXXX"
              className="flex-grow"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {isPhoneVerified ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <Button
                onClick={handleSendPhoneVerification}
                disabled={!phoneNumber || showPhoneVerification}
                className="whitespace-nowrap"
              >
                전화번호 인증
              </Button>
            )}
          </div>
        </div>
        {showPhoneVerification && (
          <div className="flex space-x-2 items-center">
            <Input
              type="text"
              placeholder="인증번호 입력"
              value={phoneVerificationCode}
              onChange={(e) => setPhoneVerificationCode(e.target.value)}
              className="flex-grow"
            />
            <span className="text-sm text-gray-500">{formatTime(phoneTimer)}</span>
            <Button onClick={handlePhoneVerification} className="whitespace-nowrap">인증하기</Button>
          </div>
        )}
        <Button type="submit" className="w-full bg-black text-white">회원가입</Button>
      </form>
    </div>
  )
}