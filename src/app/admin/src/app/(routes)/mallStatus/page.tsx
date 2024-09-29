"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.png";
import { useRouter } from "next/navigation";

const ShoppingMallStatusPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-black py-12 relative w-full">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-1/5 h-full top-0 left-0 cursor-pointer translate-x-6"
          onClick={() => router.push("/main")}
        />
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto h-[calc(100vh-100px)]">
        {" "}
        {/* 로고 영역 높이를 고려하여 조정 */}
        <div className="bg-gray-300 w-[300px] h-[140px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              판매자 판매 현황
            </h3>
          </div>
        </div>
        <div className="bg-gray-300 w-[300px] h-[140px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              쇼핑몰 영업이익 현황
            </h3>
          </div>
        </div>
        <div className="bg-gray-300 w-[300px] h-[140px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              쇼핑몰 보유 자산
            </h3>
          </div>
        </div>
        <div className="bg-gray-300 w-[300px] h-[90px] mx-auto translate-y-16 flex justify-center items-center">
          <div>
            <p className="text-md font-bold">데이터 필터링</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingMallStatusPage;
