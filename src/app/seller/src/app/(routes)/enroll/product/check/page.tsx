import React from "react";

import { Button } from "@/packages/ui/src/button";

const ProductCheck: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="grid grid-cols-2 place-items-center translate-y-12">
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 1
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 2
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 3
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 4
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-yellow-700 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 대기 중
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 5
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-red-600 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 거부됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            상품 6
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
      </div>
      <Button className="bg-blue-500 text-white rounded-full w-1/3 translate-y-8 mx-auto">
        상품 등록하기
      </Button>
    </>
  );
};

export default ProductCheck;
