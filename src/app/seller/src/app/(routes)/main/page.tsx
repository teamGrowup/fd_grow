"use client";

import React from "react";

import { Button } from "@/packages/ui/src/index";
import LogoBar from "../../../components/LogoBar";

import { PackageSearch } from "lucide-react";
import { Store } from "lucide-react";
import { Monitor } from "lucide-react";

const SellerMain: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="bg-gray-300 w-[300px] h-[170px] mx-auto translate-y-6 relative">
        <div>
          <img src="*" alt="chart" />
        </div>
        <div>
          <h3 className="font-medium text-xl absolute bottom-2 left-6">
            매출 통계
          </h3>
        </div>
      </div>
      <div className="bg-gray-300 w-[300px] h-[170px] mx-auto translate-y-12 relative">
        <div className="absolute left-4 top-4">
          <h3 className="font-medium text-xl">구매 미확정 수: 5건</h3>
          <h3 className="font-medium text-xl">누적 정산금: 100원</h3>
          <h3 className="font-medium text-xl">배송 대기중: 2건</h3>
          <h3 className="font-medium text-xl">배송 중: 1건</h3>
          <h3 className="font-medium text-xl">배송 완료: 3건</h3>
        </div>
      </div>
      <div className="translate-y-14 py-3 flex flex-col gap-8 mt-1">
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black text-white py-6 rounded-full flex justify-center gap-3">
            <PackageSearch />
            상품 현황 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black text-white py-6 rounded-full flex justify-center gap-3">
            <Store />
            브랜드 관리
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black text-white py-6 rounded-full flex justify-center gap-3">
            <Monitor />
            주문 관리
          </Button>
        </div>
      </div>
    </>
  );
};

export default SellerMain;
