import React from "react";

import { Button } from "@/packages/ui/src/index";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/GrowMallLogo.png";

const BrandDetail: React.FC = () => {
  return (
    <>
      <div className="bg-black py-12 relative w-full">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-1/3 h-full top-0 left-0"
        />
      </div>
      <div className="flex flex-col gap-7 mx-auto mt-8">
        <div className="w-[300px] h-[190px] bg-gray-300">
          <img src="*" alt="브랜드 이미지" />
        </div>
        <div className="w-[300px] h-[190px] bg-gray-300">
          <textarea className="bg-gray-300 resize-none">
            브랜드 상세 설명
          </textarea>
        </div>
      </div>
      <div className="w-[300px] h-[60px] bg-gray-300 mx-auto mt-6 flex items-center justify-center">
        <p className="text-center">브랜드명</p>
      </div>
      <Button className="w-2/3 bg-black py-6 rounded-full mx-auto translate-y-8">
        브랜드 정보 수정하기
      </Button>
    </>
  );
};

export default BrandDetail;
