"use client";

import React from "react";
import { Button } from "@/packages/ui/src";
import { useRouter } from "next/navigation";
import useRequestAction from "../hooks/useRequestAction";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import Image from "next/image";

import adidasLogo from "@/app/admin/src/assets/adidasLogo.png";

interface ItemPropsType {
  category: string;
  id: number;
  isApproved: string | null;
  imageUrl?: string;
}

const MultiItem: React.FC<ItemPropsType> = ({
  category,
  id,
  isApproved,
  imageUrl,
}) => {
  const router = useRouter();
  const { authFetch } = useAuthenticatedFetch();

  const backgroundColor =
    isApproved === "APPROVED"
      ? "bg-gradient-to-r from-green-400 to-green-600"
      : isApproved === "DENIED"
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

  const handleChangeApprove = async () => {
    const response = await authFetch(
      `http://taegnues.store:12324/admins/product-requests/${id}/approve`,
      {
        method: "PATCH",
      }
    );

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await response.json();
    console.log(data.message);
  };

  const handleChangeDeny = async () => {
    const response = await authFetch(
      `http://taegnues.store:12324/admins/product-requests/${id}/deny`,
      {
        method: "PATCH",
      }
    );

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await response.json();
    console.log(data.message);
  };

  return (
    <div
      className="h-36 bg-gray-300 rounded-lg shadow-lg mb-10 transition-transform transform hover:scale-105 flex flex-col relative ml-7 mr-7" // Flexbox 사용
      onClick={handleClick}
    >
      <Image
        src={adidasLogo}
        alt={`${categoryName} 이미지`} // 이미지 alt 속성
        className="object-cover w-full h-32" // 이미지 스타일
      />
      <div
        className={`min-w-[4.25rem] min-h-[3rem] text-sm absolute ${backgroundColor} rounded-full text-white -top-5 text-center py-1 shadow-md`}
      >
        등록
        <br />
        {isApproved === "APPROVED" && "허가됨"}
        {isApproved === "DENIED" && "거부됨"}
        {isApproved === "PENDING" && "대기 중"}
      </div>
      {/* <p className="flex-grow flex items-center justify-center font-bold text-lg font-sans">
        {categoryName} {id}
      </p> */}
      {isApproved === "PENDING" && (
        <div className="flex justify-between absolute bottom-2 left-2 right-2">
          <Button
            className="bg-green-500 text-white rounded-lg min-w-[2rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-green-700"
            onClick={handleChangeApprove}
          >
            허가
          </Button>
          <Button
            className="bg-red-500 text-white rounded-lg min-w-[3rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-red-700"
            onClick={handleChangeDeny}
          >
            거부
          </Button>
        </div>
      )}
    </div>
  );
};

export default MultiItem;
