"use client";

import React, { forwardRef } from "react";
import { Button } from "@/packages/ui/src";
import { useRouter } from "next/navigation";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
import Image from "next/image";

import adidasLogo from "@/app/admin/src/assets/adidasLogo.png";

interface ItemPropsType {
  category: string;
  id: number;
  isApproved: string | null;
  imageUrl?: string;
}

const MultiItem = forwardRef<HTMLDivElement, ItemPropsType>(
  ({ category, id, isApproved, imageUrl }, ref) => {
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

    const approveUrl = `http://taegnues.store:12324/admins/${category}-requests/${id}/approve`;
    const denyUrl = `http://taegnues.store:12324/admins/${category}-requests/${id}/deny`;

    const handleChangeStatus = async (url: string) => {
      try {
        const response = await authFetch(url, { method: "PATCH" });

        if (!response.ok) {
          throw new Error("Failed to update status.");
        }

        const data = await response.json();
        console.log("변경 성공:", data);
        window.alert("허가 상태를 변경 완료했습니다! 새로고침 시 적용됩니다!");
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };

    return (
      <div
        onClick={() => router.push(`/product/${id}`)}
        ref={ref}
        className="h-36 bg-gray-300 rounded-lg shadow-lg mb-10 transition-transform transform hover:scale-105 flex flex-col relative ml-7 mr-7"
      >
        <Image
          src={imageUrl || adidasLogo}
          alt={`${categoryName} 이미지`}
          className="object-cover w-full h-32 rounded-t-lg"
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
        {isApproved === "PENDING" && (
          <div className="flex justify-between absolute bottom-2 left-2 right-2">
            <Button
              className="bg-green-500 text-white rounded-lg min-w-[2rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-green-700"
              onClick={(e) => {
                e.stopPropagation();
                handleChangeStatus(approveUrl);
              }}
            >
              허가
            </Button>
            <Button
              className="bg-red-500 text-white rounded-lg min-w-[3rem] min-h-[1.75rem] flex items-center justify-center shadow-md hover:bg-red-700"
              onClick={(e) => {
                e.stopPropagation();
                handleChangeStatus(denyUrl);
              }}
            >
              거부
            </Button>
          </div>
        )}
      </div>
    );
  }
);

export default MultiItem;
