import React from "react";

import { Button } from "@/components/ui/button";

const BrandDetail: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="flex flex-col gap-7 mx-auto mt-8">
        <div className="w-[300px] h-[190px] bg-gray-300">
          <img src="*" alt="브랜드 이미지" />
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
      <div className="flex justify-end gap-4 items-center translate-y-14 -translate-x-[70px]">
        <Button className="bg-blue-500 text-white rounded-full bottom-2 left-2 w-[50px] h-[28px]">
          허가
        </Button>
        <Button className="bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
          거부
        </Button>
      </div>
    </>
  );
};

export default BrandDetail;
