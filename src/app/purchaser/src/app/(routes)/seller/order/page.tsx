import React from "react";

import { Button } from "@/packages/ui/src/button";

const OrderViewPage = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="bg-gray-300 w-[310px] h-[260px] mx-auto mt-4 relative">
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          검색 조건 필터링
        </p>
      </div>
      <div className="flex flex-col gap-4 mx-auto mt-6">
        <div className="bg-gray-300 w-[310px] h-[60px] flex relative">
          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">주문1/Size:L/2개/결제완료</p>
          <Button className="absolute bg-blue-500 text-white rounded-full top-1/2 -translate-y-1/2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="bg-gray-300 w-[310px] h-[60px] flex relative">
          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">주문1/Size:L/2개/결제완료</p>
          <Button className="absolute bg-blue-500 text-white rounded-full top-1/2 -translate-y-1/2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="bg-gray-300 w-[310px] h-[60px] flex relative">
          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">주문1/Size:L/2개/결제완료</p>
          <Button className="absolute bg-blue-500 text-white rounded-full top-1/2 -translate-y-1/2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
        <div className="bg-gray-300 w-[310px] h-[60px] flex relative">
          <p className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">주문1/Size:L/2개/결제완료</p>
          <Button className="absolute bg-blue-500 text-white rounded-full top-1/2 -translate-y-1/2 right-2 w-[50px] h-[28px]">
            삭제
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderViewPage;
