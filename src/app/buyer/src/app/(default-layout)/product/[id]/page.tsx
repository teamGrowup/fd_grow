import Image from "next/image";
import product_image from '../../../../public/product_test.jpg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Share2 } from "lucide-react";

export default function productId() {
  return(
    <div className="w-full relative">
      <div className="relative aspect-[5/6]">
        <Image
          src={product_image}
          alt="Event Image 1"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0,0.2)] pointer-events-none"></div>
      </div>
      <div className="flex flex-col bg-white h-screen border-t relative px-4">
        <div className="flex justify-between border-b border-gray-100 py-3">
          <button className="flex gap-2 items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/Grow.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">그로우</span>
          </button>
          <button>
            <Share2 className="w-5 h-5 text-gray-500"/>
          </button>
        </div>
        <div className="flex justify-between items-center py-2 mt-3">
          <h1 className="text-base font-medium break-all flex-1">울리치 발마칸 오버 코트</h1>
        </div>
        <p className="text-xl font-bold">255,900원</p>
      </div>
    </div>
  )
}

