"use client";

import React from "react";

import { Button } from "@/packages/ui/src/index";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.png";

import { useRouter } from "next/navigation";

const ReviewMonitoringPage: React.FC = () => {
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
      <div className="flex flex-col gap-3 mt-5">
        <div className="w-[366px] h-[124px] bg-gray-300 flex mx-auto">
          <div className="w-1/3 relative">
            <div className="bg-red-300 w-[42px] h-[36px] translate-x-2 translate-y-1">
              <p className="text-white text-sm">프로필 사진</p>
            </div>
            <div className="bg-red-300 w-[58px] h-[50px] translate-x-2 translate-y-3">
              <p className="text-white text-sm">구매했던 상품</p>
            </div>
          </div>
          <div className="bg-orange-950 w-2/3 h-[113px] relative my-auto">
            <p className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              후기
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-red-300 translate-x-10 w-[89px] h-[29px] flex items-center justify-center">
            <p className="text-white text-center">좋아요 수</p>
          </div>
          <Button className="bg-blue-500 text-white rounded-full w-[60px] h-[28px] -translate-x-10">
            삭제
          </Button>
        </div>
        <div className="w-[366px] h-[124px] bg-gray-300 flex mx-auto">
          <div className="w-1/3 relative">
            <div className="bg-red-300 w-[42px] h-[36px] translate-x-2 translate-y-1">
              <p className="text-white text-sm">프로필 사진</p>
            </div>
            <div className="bg-red-300 w-[58px] h-[50px] translate-x-2 translate-y-3">
              <p className="text-white text-sm">구매했던 상품</p>
            </div>
          </div>
          <div className="bg-orange-950 w-2/3 h-[113px] relative my-auto">
            <p className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              후기
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-red-300 translate-x-10 w-[89px] h-[29px] flex items-center justify-center">
            <p className="text-white text-center">좋아요 수</p>
          </div>
          <Button className="bg-blue-500 text-white rounded-full w-[60px] h-[28px] -translate-x-10">
            삭제
          </Button>
        </div>
        <div className="w-[366px] h-[124px] bg-gray-300 flex mx-auto">
          <div className="w-1/3 relative">
            <div className="bg-red-300 w-[42px] h-[36px] translate-x-2 translate-y-1">
              <p className="text-white text-sm">프로필 사진</p>
            </div>
            <div className="bg-red-300 w-[58px] h-[50px] translate-x-2 translate-y-3">
              <p className="text-white text-sm">구매했던 상품</p>
            </div>
          </div>
          <div className="bg-orange-950 w-2/3 h-[113px] relative my-auto">
            <p className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              후기
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-red-300 translate-x-10 w-[89px] h-[29px] flex items-center justify-center">
            <p className="text-white text-center">좋아요 수</p>
          </div>
          <Button className="bg-blue-500 text-white rounded-full w-[60px] h-[28px] -translate-x-10">
            삭제
          </Button>
        </div>
        <div className="w-[366px] h-[124px] bg-gray-300 flex mx-auto">
          <div className="w-1/3 relative">
            <div className="bg-red-300 w-[42px] h-[36px] translate-x-2 translate-y-1">
              <p className="text-white text-sm">프로필 사진</p>
            </div>
            <div className="bg-red-300 w-[58px] h-[50px] translate-x-2 translate-y-3">
              <p className="text-white text-sm">구매했던 상품</p>
            </div>
          </div>
          <div className="bg-orange-950 w-2/3 h-[113px] relative my-auto">
            <p className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              후기
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-red-300 translate-x-10 w-[89px] h-[29px] flex items-center justify-center">
            <p className="text-white text-center">좋아요 수</p>
          </div>
          <Button className="bg-blue-500 text-white rounded-full w-[60px] h-[28px] -translate-x-10">
            삭제
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReviewMonitoringPage;
