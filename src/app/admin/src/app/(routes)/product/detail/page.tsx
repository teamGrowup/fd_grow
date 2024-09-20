import React from "react";

import { Button } from "@/packages/ui/src/index";

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="relative bg-gray-300 w-[300px] h-[500px] translate-y-16 mx-auto font-bold">
        상품 1에 대한 분석 화면
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-24 w-[60px] h-[28px]">
          허가
        </Button>
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-3 w-[60px] h-[28px]">
          거부
        </Button>
      </div>
    </>
  );
};

export default ProductDetailPage;