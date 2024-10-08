import React from "react";

import { Button } from "@/packages/ui/src/button";
import LogoBar from "@/app/seller/src/components/LogoBar";

const ProductDetail: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="relative bg-gray-300 w-[300px] h-[500px] translate-y-16 mx-auto font-bold">
        상품 1에 대한 분석 화면
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-24 w-[60px] h-[28px]">
          수정
        </Button>
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-3 w-[60px] h-[28px]">
          삭제
        </Button>
      </div>
    </>
  );
};

export default ProductDetail;
