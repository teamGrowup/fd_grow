"use client";

import React from "react";
import { Button } from "@/packages/ui/src";
import { useRouter } from "next/navigation";
import useRequestAction from "../hooks/useRequestAction";

interface ItemPropsType {
  category: string;
  id: string;
  isApproved: boolean | null;
}

const MultiItem: React.FC<ItemPropsType> = ({ category, id, isApproved }) => {
  const router = useRouter();
  const { handleAction } = useRequestAction(`${category}-requests`, id);

  const backgroundColor =
    isApproved === true
      ? "bg-gradient-to-r from-green-400 to-green-600"
      : isApproved === false
      ? "bg-gradient-to-r from-red-500 to-red-700"
      : "bg-gradient-to-r from-yellow-500 to-yellow-600";

  const categoryName =
    category === "product" ? (
      "상품"
    ) : category === "brand" ? (
      <>
        브랜드
        <br />
        요청
      </>
    ) : (
      ""
    );

  const handleClick = () => {
    const query = `?isApproved=${isApproved}`;
    if (category === "product") {
      router.push(`/product/${id}${query}`);
    }
    if (category === "brand") {
      router.push(`/brand/${id}${query}`);
    }
  };

  return (
    <div
      className="h-36 bg-gray-300 rounded-lg shadow-lg mb-10 transition-transform transform hover:scale-105 flex flex-col relative" // Flexbox 사용
      onClick={handleClick}
    >
      <div
        className={`min-w-[4.25rem] min-h-[3rem] text-sm absolute ${backgroundColor} rounded-full text-white -top-5 text-center py-1 shadow-md`}
      >
        등록
        <br />
        {isApproved === true && "허가됨"}
        {isApproved === false && "거부됨"}
        {isApproved === null && "대기 중"}
      </div>
      <p className="flex-grow flex items-center justify-center font-bold text-lg font-sans">
        {categoryName} {id}
      </p>
      {isApproved === null && (
        <div className="flex justify-between absolute bottom-2 left-2 right-2">
          <Button
            className="bg-green-500 text-white rounded-lg min-w-[3rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-green-700"
            onClick={(e) => {
              e.stopPropagation(); // 클릭 이벤트 전파 방지
              handleAction("approve");
            }}
          >
            허가
          </Button>
          <Button
            className="bg-red-500 text-white rounded-lg min-w-[3rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-red-700"
            onClick={(e) => {
              e.stopPropagation(); // 클릭 이벤트 전파 방지
              handleAction("deny");
            }}
          >
            거부
          </Button>
        </div>
      )}
    </div>
  );
};

export default MultiItem;
