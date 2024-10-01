"use client";

import React, { useState } from "react";

interface FooterPropsType {
  category: string;
}

const FooterBar: React.FC<FooterPropsType> = ({ category }) => {
  const [scope, setScope] = useState<string>("all"); //scope 변수를 부모 컴포넌트에서 활용 가능하게 해야 함

  const categoryName =
    category === "product" ? "상품" : category === "brand" ? "브랜드" : "";

  return (
    <footer className="border-t border-gray-300 mt-6">
      <ul className="flex justify-center items-center gap-10 py-2 translate-y-6 font-sans">
        <button
          type="button"
          className="text-xs text-black font-bold"
          onClick={() => setScope("all")}
        >
          전체 {categoryName}
        </button>
        <button
          type="button"
          className="text-xs text-gray-300"
          onClick={() => setScope("true")}
        >
          허가 {categoryName}
        </button>
        <button
          type="button"
          className="text-xs text-gray-300"
          onClick={() => setScope("wait")}
        >
          허가 대기 {categoryName}
        </button>
        <button
          type="button"
          className="text-xs text-gray-300"
          onClick={() => setScope("false")}
        >
          미허가 {categoryName}
        </button>
      </ul>
    </footer>
  );
};

export default FooterBar;
