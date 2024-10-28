"use client";

import { Button } from "@/packages/ui/src/index";
import { SlArrowLeft } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { MdCheckCircle, MdCancel } from "react-icons/md"; // 체크 및 취소 아이콘 추가
import Image from "next/image";

import adidasDetail1 from "@/app/admin/src/assets/adidasDetail.jpg";
// import adidasDetail2 from ("@/app/admin/src/assets/adidasDetail2.jpg");
import clothesLogo from "@/app/admin/src/assets/adidasLogo.png";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BrandDetail: React.FC = () => {
  const router = useRouter();
  const [isApproved, setIsApproved] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const approvedStatus = queryParams.get("isApproved");
      console.log(approvedStatus);
      setIsApproved(approvedStatus);
    }
  }, []);

  const handleClick = () => {
    router.back();
  };

  const handleHomeClick = () => {
    router.push("/main");
  };

  return (
    <>
      <div className="flex items-center sticky top-0 z-10 bg-gray-100">
        <menu className="flex justify-between items-center w-full py-2">
          <SlArrowLeft
            className="cursor-pointer ml-5 my-2"
            size={20}
            onClick={handleClick}
          />
          <IoHomeOutline
            className="cursor-pointer mr-5 my-2"
            size={26}
            onClick={handleHomeClick}
          />
        </menu>
      </div>

      <div className="relative w-full mx-auto shadow-md bg-gray-100">
        {/* 스크롤 가능한 영역 */}
        <div>
          <Image
            src={adidasDetail1}
            alt="shoesImg"
            className="w-full h-[80vh] object-cover"
          />

          {/* 브랜드 및 로고 */}
          <div className="border-b-2 py-4 flex items-center bg-gray-100">
            <p className="font-musinsa font-bold text-lg ml-4 text-gray-800 flex flex-col space-y-4">
              아디다스
            </p>
          </div>

          {/* 사업자 정보 */}
          <div className="bg-gray-100 text-gray-500 font-musinsa text-sm">
            <Image
              src={clothesLogo}
              alt="brandLogo"
              className="w-[40%] full mx-auto"
            />
            <p className="font-semibold m-1 text-center text-black">아디다스</p>
            <p className="font-musinsa text-center m-1">독일 since 1949</p>
            <p className="m-7 text-xs py-2">
              스포츠 라이프스타일은 라커룸 밖에서도 계속됩니다. 1920년부터
              독일의 헤르초게나우라흐에서 스포츠 슈즈를 만들던
              아디다스(ADIDAS)는 이러한 철학을 토대로 경기장에서부터 거리에
              이르기까지 모두가 즐길 수 있는 '스포츠 라이프스타일'의 개념을
              처음으로 도입한 브랜드입니다. 스포츠 영역의 다양한 요소를 일상의
              영역으로 가져오는 아디다스는 이를 통해 전 세계의 트렌드를 주도하고
              있으며, 지금도 여전히 자신의 다양한 모습을 보여주고 싶어하는
              소비자와 직접 소통하며 함께 혁신적인 트렌드를 만들고 있습니다.
            </p>
          </div>

          {/* 승인/거부 버튼 */}
          <div className="flex justify-between px-4 mt-5">
            {isApproved === "null" && (
              <>
                <Button className="text-white py-2 hover:bg-green-700 transition-colors w-full mr-2 shadow-md flex items-center justify-center border-2 border-gray-200">
                  <MdCheckCircle className="mr-2" />
                  허가
                </Button>
                <Button className="text-white py-2 hover:bg-red-700 transition-colors w-full ml-2 shadow-md flex items-center justify-center border-2 border-gray-200">
                  <MdCancel className="mr-2" />
                  거부
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandDetail;
