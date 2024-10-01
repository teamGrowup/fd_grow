"use client";

import { Button } from "@/packages/ui/src/index";
import LogoBar from "@/app/admin/src/components/LogoBar";

const BrandDetail: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="flex flex-col gap-7 mx-auto mt-8">
        <div className="w-[300px] h-[190px] bg-white border border-gray-400 shadow-lg">
          <img
            src="*"
            alt="브랜드 이미지"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="w-[300px] h-[190px] bg-white border border-gray-400 shadow-lg">
          <textarea
            className="bg-gray-100 text-black resize-none w-full h-full p-2 rounded-md"
            placeholder="브랜드 상세 설명"
          />
        </div>
      </div>
      <div className="w-[300px] h-[60px] bg-white border border-gray-400 shadow-lg mx-auto mt-6 flex items-center justify-center rounded-md">
        <p className="text-center text-black">브랜드명</p>
      </div>
      <div className="flex justify-between w-2/3 mx-auto mt-6">
        <Button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors w-full mr-2">
          허가
        </Button>
        <Button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors w-full ml-2">
          거부
        </Button>
      </div>
    </>
  );
};

export default BrandDetail;
