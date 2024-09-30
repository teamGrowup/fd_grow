"use client";

import React from "react";

import LogoBar from "../../../components/LogoBar";

import { Button } from "@/packages/ui/src";


import TickPlacementBars from "../../../components/Chart";

const ShoppingMallStatusPage: React.FC = () => {

  return (
    <>
      <LogoBar />
      <div className="flex flex-col gap-5 overflow-y-auto h-[calc(100vh-100px)]">
        {/* 판매자 판매 현황 섹션 */}
        <div className="w-4/5 mx-auto translate-y-6 relative">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
            <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
              판매자 판매 현황
            </h3>
            <TickPlacementBars />
          </div>
        </div>

        {/* 쇼핑몰 영업이익 현황 섹션 */}
        <div className="w-4/5 mx-auto translate-y-6 relative">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
            <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
              쇼핑몰 영업이익 현황
            </h3>
            <TickPlacementBars />
          </div>
        </div>

        {/* 쇼핑몰 보유 자산 섹션 */}
        <div className="w-4/5 mx-auto translate-y-6 relative">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
            <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
              쇼핑몰 보유 자산
            </h3>
            <TickPlacementBars />
          </div>
        </div>

        {/* 데이터 필터링 섹션 */}
        <div className="w-4/5 h-1/2 rounded-md mx-auto translate-y-16 flex justify-center items-center cursor-pointer">
          <div className="w-full bg-black rounded-lg text-center">
            <Button className="text-md font-bold">데이터 필터링</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingMallStatusPage;
