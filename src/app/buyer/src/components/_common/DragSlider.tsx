'use client';
import { useDraggable } from "react-use-draggable-scroll";
import { MouseEvent, useRef, useState } from "react";

export const DragSlider = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
 
  return (
      <div
        ref={ref}
        {...events}
        className="relative flex cursor-grab overflow-x-scroll w-full scrollbar-hide select-none flex-wrap"
      >
        <div className="flex justify-start mb-2 gap-4 mr-4">
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800 ">상의</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">아우터</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">바지</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">원피스/스커트</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">신발</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">가방</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">가방</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">가방</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">가방</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">패션 소품</div>
        </div>
        <div className="flex justify-start mb-2 gap-4 mr-4">
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800" onClick={() => console.log('클릭됨')}>언더웨어</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">뷰티</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">스포츠/레저</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">라이프</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">키즈</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
          <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
        </div>
      </div>
  );
};