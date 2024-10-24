"use client";

import React, { useState } from "react";

interface FooterPropsType {
  category: string;
  scope: string;
  setScope: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const FooterBar: React.FC<FooterPropsType> = ({
  category,
  scope,
  setScope,
  className,
}) => {
  const categoryName =
    category === "product" ? "상품" : category === "brand" ? "브랜드" : "";

  return (
    <footer
      className={`border-t border-gray-300 ${className} flex items-center sticky bottom-0 z-10 bg-white`}
    >
      <ul className="flex justify-between items-center gap-10 py-2 font-musinsa w-full flex-nowrap">
        <li className="text-center flex-grow">
          <button
            type="button"
            className={`text-lg font-bold font-musinsa ${
              scope === "all" ? "text-black" : "text-gray-400"
            } hover:text-black w-full`}
            onClick={() => setScope("all")}
          >
            전체
          </button>
        </li>
        <li className="text-center flex-grow">
          <button
            type="button"
            className={`text-lg font-bold font-musinsa ${
              scope === "true" ? "text-black" : "text-gray-400"
            } hover:text-black w-full`}
            onClick={() => setScope("true")}
          >
            허가 완료
          </button>
        </li>
        <li className="text-center flex-grow">
          <button
            type="button"
            className={`text-lg font-bold font-musinsa ${
              scope === "wait" ? "text-black" : "text-gray-400"
            } hover:text-black w-full`}
            onClick={() => setScope("wait")}
          >
            허가 대기
          </button>
        </li>
        <li className="text-center flex-grow">
          <button
            type="button"
            className={`text-lg font-bold font-musinsa ${
              scope === "false" ? "text-black" : "text-gray-400"
            } hover:text-black w-full`}
            onClick={() => setScope("false")}
          >
            미허가
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default FooterBar;
