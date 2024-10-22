"use client";

import { Button } from "@/packages/ui/src/index";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { MdCheckCircle, MdCancel } from "react-icons/md"; // 체크 및 취소 아이콘 추가
import Image from "next/image";

import shoesImg from "@/app/admin/src/assets/shoes.jpg";
import clothesLogo from "@/app/admin/src/assets/adidasLogo.png";
import backShoes1 from "@/app/admin/src/assets/backShoes1.jpg";
import backShoes2 from "@/app/admin/src/assets/backShoes2.jpg";

const ProductDetailPage: React.FC = () => {
  const { params } = useParams();
  const [isApproved, setIsApproved] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

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

  const handleHomeClick = () => {
    router.push("/main");
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const arrowComponent = showMore ? <SlArrowUp /> : <SlArrowDown />;

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
      <div className="relative bg-white w-full mx-auto shadow-md">
        {/* 스크롤 가능한 영역 */}
        <div>
          <Image
            src={shoesImg}
            alt="shoesImg"
            className="w-full h-[80vh] object-cover"
          />

          {/* 브랜드 및 로고 */}
          <div className="border-b-2 border-gray-200 py-2 flex items-center">
            <div className="rounded-full bg-white border-2 border-gray-200 w-12 h-12 flex justify-center items-center ml-4">
              <Image
                src={clothesLogo}
                alt="clothesLogo"
                className="object-contain"
              />
            </div>
            <p className="font-musinsa font-bold text-md ml-4 text-gray-800">
              아디다스
            </p>
          </div>

          {/* 상품명 및 가격 */}
          <div className="m-4 flex justify-between">
            <p className="font-musinsa font-bold text-lg text-gray-900">
              러닝슈즈 Runner 5A13
            </p>
            <p className="font-musinsa font-bold text-lg text-gray-900">
              129,000원
            </p>
          </div>

          <div className="flex justify-center border-2 border-gray-200 py-2 translate-y-2">
            <button
              className="flex items-center gap-2 font-musinsa font-bold"
              onClick={handleShowMore}
            >
              상품 정보 더보기 <span>{arrowComponent}</span>
            </button>
          </div>

          {showMore && (
            <div className="flex flex-col mt-4">
              <Image
                src={backShoes1}
                alt="backShoes1"
                className="object-contain"
              />
              <Image
                src={backShoes2}
                alt="backShoes2"
                className="object-contain"
              />
            </div>
          )}

          {/* 사업자 정보 */}
          <div className="bg-gray-100 text-gray-500 font-musinsa text-sm py-2">
            <p className="font-semibold m-3">사업자 정보</p>
            <div className="m-3">
              <p>(주) 아디다스 | 대표자 : 홍길동</p>
              <p>주소 : 서울특별시 성동구 아차산로 13길</p>
              <p>사업자 등록 번호 : 000-11-22222(사업자 정보 확인)</p>
            </div>
            <p className="m-3">
              당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다
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

export default ProductDetailPage;
