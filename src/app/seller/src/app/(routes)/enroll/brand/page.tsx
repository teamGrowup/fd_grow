import React from "react";

import { Button } from "@/packages/ui/src/button";

import LogoBar from "@/app/seller/src/components/LogoBar";

const BrandEnroll: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="flex flex-col gap-7 mx-auto mt-8">
        <div className="w-[300px] h-[190px] bg-gray-300">
          <img src="*" alt="브랜드 이미지 업로드" />
        </div>
        <div className="w-[300px] h-[190px] bg-gray-300">
          <textarea className="bg-gray-300 resize-none">
            브랜드 상세 설명
          </textarea>
        </div>
      </div>
      <div className="w-[300px] h-[60px] bg-gray-300 mx-auto mt-6 flex items-center justify-center">
        <p className="text-center">브랜드명</p>
      </div>
      <Button className="w-2/3 bg-black text-white py-6 rounded-full mx-auto translate-y-8">
        브랜드 입점 허가 요청
      </Button>
    </>
  );
};

export default BrandEnroll;
