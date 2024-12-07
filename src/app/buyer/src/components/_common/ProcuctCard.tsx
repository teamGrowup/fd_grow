'use client';

import Image from "next/image";
import product_image from '../../public/product_test.jpg';
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

export default function ProductCard({classname}: {classname?: string}){

  //          state: 좋아요 상태          //
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const router = useRouter();
  //          event handler: 상품 카트 클릭 이벤트 처리          //
  const cardClickHandler = () => {
    router.push('/product/123123');
  }
  const likeButtonClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorite(true)
    console.log('좋아요!');
  }
  return(
    <div className={cn("cursor-pointer" ,classname)} onClick={cardClickHandler}>
      <div className="h-fit bg-white">
        <div className="flex flex-col">
          <div className="relative aspect-[5/6]">
            <Image src={product_image} alt="상품 샘플" fill style={{ objectFit: 'contain' }}/>
            <button className="absolute bottom-0 right-0 w-7 h-7 p-1 z-10 flex items-center justify-center cursor-pointer" onClick={likeButtonClickHandler}>
              <Heart className={cn("w-5 h-5", isFavorite ? "fill-red-500 text-red-500" : "text-white")}  />
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col px-2 py-3 min-h-[150px]">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold whitespace-normal">비슬로우</span>
                <span className="text-sm font-normal whitespace-normal">울리치 발마칸 오버 코트</span>
                <span className="text-xs font-semibold">254,440원</span>
              </div>
              <div className="flex items-center mt-1 text-xs justify-start text-[#858d93] gap-0.5">
                {/* <Heart className="w-3 h-3" fill="#858d93" strokeWidth={0} />
                <span className="">300</span>
                <Star className="w-3 h-3" fill="#858d93" strokeWidth={0} />
                <span className="">4.5</span> */}
                <Heart className="w-3 h-3 fill-red-500" strokeWidth={0} />
                <span className="text-[#f31110]">300</span>
                <FaStar  className="w-3 h-3 fill-[#fa9200]" strokeWidth={0} />
                <span className="text-[#fa9200]">4.5</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  )
}