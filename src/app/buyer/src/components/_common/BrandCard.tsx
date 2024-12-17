'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//          component: BrandCard 컴포넌트          //
export default function BrandCard({ 
  classname, 
  brandName, 
  brandDescription, 
  imageUrls 
}: { 
  classname?: string; 
  brandName: string; 
  brandDescription: string; 
  imageUrls: string[]; 
}) {
  //          render: BrandCard 렌더링          //
  return (
    <div className={cn("flex flex-col gap-2 pl-10 relative mb-5", classname)}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <button className="flex gap-4 items-center">
            <Avatar className="w-8 h-8 shadow-lg">
              <AvatarImage src="/Grow.png" />
              <AvatarFallback>{brandName[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-base font-medium">{brandName}</span>
          </button>
          <ChevronRight className="w-4 h-4 mr-5 text-gray-500" />
        </div>
        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap pr-5 text-sm text-gray-500">
          {brandDescription}
        </div>
      </div>
      <div className="flex gap-2 relative justify-start">
        {imageUrls.slice(0, 3).map((url, index) => (
          <div key={index} className="relative aspect-[5/6] flex-[2]">
            <div className="w-full h-full relative drop-shadow-lg">
              <Image src={url} alt={`Event Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
