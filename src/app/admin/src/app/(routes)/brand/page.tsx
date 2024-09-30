"use client";
import { Button } from "@/packages/ui/src/index";

import LogoBar from "../../../components/LogoBar";

import FooterBar from "../../../components/FooterBar";

const BrandEnrollmentRequestPage: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="grid grid-cols-2 place-items-center translate-y-12">
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 1
          </p>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 2
          </p>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 3
          </p>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-green-400 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 허가됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 4
          </p>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-yellow-700 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 대기 중
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 5
          </p>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 left-2 w-[50px] h-[28px]">
            허가
          </Button>
          <Button className="absolute bg-blue-500 text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            거부
          </Button>
        </div>
        <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
          <div className="w-[68px] h-[48px] text-sm absolute z-10 bg-red-600 rounded-full text-white -top-5 -left-5 text-center py-1">
            등록
            <br /> 거부됨
          </div>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
            브랜드
            <br />
            요청 6
          </p>
        </div>
      </div>
      <FooterBar category="brand" />
    </>
  );
};

export default BrandEnrollmentRequestPage;
