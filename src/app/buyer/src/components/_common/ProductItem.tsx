'use client'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from '@/components/ui/badge'


//          component: Product Item 컴포넌트          //
export default function ProductItem() {

  //          render: Product Item 컴포넌트 렌더링          //
  return (
    <div className='flex justify-center gap-4 p-4 bg-white mb-2 flex-col' >
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Checkbox id="terms" className='data-[state=checked]:bg-primary shadow-none data-[state=checked]:text-primary-foreground rounded-none w-5 h-5' />
          <label htmlFor='terms' className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">상품선택</label>
        </div>
        <Badge variant="outline" className='py-1 px-6 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>삭제</Badge>
      </div>
      <div className='flex gap-4'>
        <div className="relative aspect-[5/6] w-24 rounded-lg">
          <Image
            src="/product_test.jpg"
            alt="Event Image 1"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='flex-1 flex flex-col justify-between h-auto'>
          <div className='flex flex-col h-full justify-between'>
            <span>그로우</span>
            <span>울리치 발마칸 오버 코트</span>
            <span>M/1개</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <span>가격</span>
        <span>259,900원</span>
      </div>
    </div>
  )
}
