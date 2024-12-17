'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function ReviewItem(){
  
  return(
    <div className='flex items-center p-4 gap-2 border-b'>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/Grow.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-medium text-gray-500'>woomin</div>
            <div className='text-xs font-normal'>2022-12-00</div>
          </div>
        </div>
        <div className='felx flex-col gap-1'>
          <div className='text-sm font-medium'>최고입니다. 정말 따뜻하고 기장도 긴편이여서 간지가 절로 납니다. 진짜 이거 산 뒤로 지하철에 다른 사람들 코트
          입은거 보면 콧웃음 날 정도로 이뻐요.</div>
        </div>
        <div className='board-list-item-bottom'>
          <div className='board-list-item-count'>
          </div>
        </div>
      </div>
      
      <div className='w-32 h-32 rounded-xl  relative'>
          <Image src="/review_test.png" alt="test" fill
             style={{ objectFit: 'contain' }}/>
      </div>
      
    </div>
  )
}