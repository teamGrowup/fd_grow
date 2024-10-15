"use client";

import React, { useState } from "react";

interface FooterPropsType {
  category: string;
  scope: string;
  setScope: React.Dispatch<React.SetStateAction<string>>;
}

const FooterBar: React.FC<FooterPropsType> = ({
  category,
  scope,
  setScope,
}) => {
  const categoryName =
    category === "product" ? "상품" : category === "brand" ? "브랜드" : "";

  return (
    <footer className="border-t border-gray-300">
      <ul className="flex justify-between items-center gap-10 py-2 font-sans w-full flex-nowrap">
        <li className="text-center flex-grow">
          <button
            type="button"
            className={`text-lg font-bold ${
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
            className={`text-lg ${
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
            className={`text-lg ${
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
            className={`text-lg ${
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
