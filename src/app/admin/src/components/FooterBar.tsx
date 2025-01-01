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
      className={`border-t border-gray-300 ${className} flex items-center sticky bottom-0 z-10 bg-white shadow-md`}
    >
      <ul className="flex justify-between items-center gap-5 py-3 font-musinsa w-full flex-nowrap">
        {["all", "true", "wait", "false"].map((item) => (
          <li key={item} className="text-center flex-grow">
            <button
              type="button"
              className={`text-lg font-bold transition-colors duration-200 ${
                scope === item ? "bg-gray-200 text-black" : "text-gray-400"
              } hover:bg-gray-300 w-full py-2 rounded-lg`}
              onClick={() => setScope(item)}
            >
              {item === "all"
                ? "전체"
                : item === "true"
                ? "허가 완료"
                : item === "wait"
                ? "허가 대기"
                : "미허가"}
            </button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterBar;
