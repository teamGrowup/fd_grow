"use client";

import { Button } from "@/packages/ui/src/index";
import LogoBar from "@/app/admin/src/components/LogoBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SlArrowLeft } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import Image from "next/image";

import shoesImg from "@/app/admin/src/assets/shoes.jpg";

const ProductDetailPage: React.FC = () => {
  const { params } = useParams();
  const [isApproved, setIsApproved] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const approvedStatus = queryParams.get("isApproved");
      setIsApproved(approvedStatus);
    }
  }, []);

  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <LogoBar />
      <div className="relative">
        <SlArrowLeft
          className="absolute m-5 cursor-pointer z-10"
          size={25} // 아이콘 크기 조정
          onClick={handleClick}
        />
      </div>
      <div className="relative bg-white w-full mx-auto rounded-lg mt-10 overflow-y-auto">
        {" "}
        {/* 비율 기반 크기 조정 */}
        {/* <h1 className="text-xl font-bold text-black text-center mb-4">
          상품 {params}에 대한 분석 화면
        </h1> */}
        <Image src={shoesImg} alt="shoesImg" className="w-full h-[70vh] mt-4" />
        <div className="border-b-2 border-gray-200 py-2 flex justify-between">
          <p className="font-bold text-lg font-sans ml-3">Runner-53A</p>
          <p className="font-bold text-lg font-sans mr-3">아디다스</p>
          {/* <div className="flex gap-1 border-2 border-gray-300 rounded-md px-1 justify-center items-center mr-2">
            <GoHeart />
            <p>5.3만</p>
          </div> */}
        </div>
        <div className="flex justify-between absolute bottom-4 left-0 right-0 px-4">
          {isApproved === "null" && (
            <>
              <Button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors w-full mr-2">
                허가
              </Button>
              <Button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors w-full ml-2">
                거부
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
