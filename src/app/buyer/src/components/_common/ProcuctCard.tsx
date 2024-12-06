'use client';

import Image from "next/image";
import product_image from '../../public/product_test.jpg';
import product_image2 from '../../public/product_test2.jpg';
import product_image3 from '../../public/product_test3.jpg';
import product_image4 from '../../public/product_test4.png';
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductCard({classname}: {classname?: string}){

  const router = useRouter();
  //          event handler: 상품 카트 클릭 이벤트 처리          //
  const cardClickHandler = () => {
    router.push('/product/123123');
  }
  const likeButtonClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('좋아요!');
  }
  return(
    <div className={cn("cursor-pointer" ,classname)} onClick={cardClickHandler}>
      <div className="h-fit bg-white">
        <div className="flex flex-col">
          <div className="relative aspect-[5/6]">
            <Image src={product_image} alt="상품 샘플" fill style={{ objectFit: 'contain' }}/>
            <button className="absolute bottom-0 right-0 w-7 h-7 p-1 z-10 flex items-center justify-center cursor-pointer" onClick={likeButtonClickHandler}>
              <Heart className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col px-2 py-3 min-h-[150px]">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold whitespace-normal">비슬로우</span>
                <span className="text-sm font-normal whitespace-normal">울리치 발마칸 오버 코트</span>
                <span className="text-xs font-semibold">254,440원</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}