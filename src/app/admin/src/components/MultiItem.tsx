import React from "react";

import { Button } from "@/packages/ui/src";

interface ItemPropsType {
  category: string;
  id: string;
  isApproved: boolean | null;
}

const MultiItem: React.FC<ItemPropsType> = ({ category, id, isApproved }) => {
  const backgroundColor =
    isApproved === true
      ? "bg-green-400"
      : isApproved === false
      ? "bg-red-600"
      : "bg-yellow-700";

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

  return (
    <div className="w-[140px] h-[140px] bg-gray-300 relative mb-10">
      <div
        className={`w-[68px] h-[48px] text-sm absolute z-10 ${backgroundColor} rounded-full text-white -top-5 -left-5 text-center py-1`}
      >
        등록
        <br />
        {isApproved === true && "허가됨"}
        {isApproved === false && "거부됨"}
        {isApproved === null && "대기 중"}
      </div>
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
        {categoryName} {id}
      </p>
      {isApproved === null && (
        <>
          <Button className="absolute bg-black text-white rounded-full bottom-2 left-2 w-[50px] h-[28px]">
            허가
          </Button>
          <Button className="absolute bg-black text-white rounded-full bottom-2 right-2 w-[50px] h-[28px]">
            거부
          </Button>
        </>
      )}
    </div>
  );
};

export default MultiItem;

// 브랜드 혹은 상품 항목으로 쓰일 수 있는 범용 컴포넌트
