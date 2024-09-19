import React from "react";

import { Button } from "@/packages/ui/src/button";

const EnrollProduct: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="bg-gray-300 w-[300px] h-[130px] mx-auto translate-y-6">
        <div>
          <img src="*" alt="상품 이미지 업로드" />
        </div>
      </div>
      <div className="bg-gray-300 w-[300px] h-[140px] mx-auto translate-y-12">
        <div>
          <img src="*" alt="상품 상세 설명 이미지 업로드" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-6 translate-y-16 px-8 py-6">
          <div className="bg-gray-300 w-[140px] py-1">
            <p className="text-center">가격</p>
          </div>
          <div className="bg-gray-300 w-[140px] py-1">
            <p className="text-center">카테고리</p>
          </div>
          <div className="bg-gray-300 w-[140px] py-1">
            <p className="text-center">이름</p>
          </div>
          <div className="bg-gray-300 w-[140px] py-1">
            <p className="text-center"></p>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 w-[300px] h-[60px] mx-auto translate-y-16">
        <div>
          <p>사이즈 별 재고량</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-3/4 bg-blue-600 py-6 rounded-full translate-y-24">
          상품 등록 및 허가 요청
        </Button>
      </div>
    </>
  );
};

export default EnrollProduct;
