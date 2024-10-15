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
      className="min-w-[10rem] min-h-[10rem] bg-gray-300 rounded-lg shadow-lg relative mb-10 transition-transform transform hover:scale-105"
      onClick={handleClick}
    >
      <div
        className={`min-w-[4.25rem] min-h-[3rem] text-sm absolute z-10 ${backgroundColor} rounded-full text-white -top-5 -left-5 text-center py-1 shadow-md`}
      >
        등록
        <br />
        {isApproved === true && "허가됨"}
        {isApproved === false && "거부됨"}
        {isApproved === null && "대기 중"}
      </div>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center text-lg font-sans">
        {categoryName} {id}
      </p>
      {isApproved === null && (
        <>
          <Button
            className="absolute bg-green-500 text-white rounded-lg bottom-2 left-2 min-w-[3rem] min-h-[1.75rem] max-w-[3rem] max-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-green-700"
            onClick={() => handleAction("approve")}
          >
            허가
          </Button>
          <Button
            className="absolute bg-red-500 text-white rounded-lg bottom-2 right-2 min-w-[3rem] min-h-[1.75rem] max-w-[3rem] max-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-red-700"
            onClick={() => handleAction("deny")}
          >
            거부
          </Button>
        </>
      )}
    </div>
  );
};

export default MultiItem;
