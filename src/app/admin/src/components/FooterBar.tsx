import React from "react";

interface FooterPropsType {
  category: string;
}

const FooterBar: React.FC<FooterPropsType> = ({ category }) => {
  const categoryName =
    category === "product" ? "상품" : category === "brand" ? "브랜드" : "";

  return (
    <footer className="border-t border-gray-300 mt-6">
      <ul className="flex justify-center items-center gap-10 py-2 translate-y-6">
        <button type="button" className="text-xs text-blue-400 font-bold">
          전체 {categoryName}
        </button>
        <button type="button" className="text-xs text-gray-300">
          허가 {categoryName}
        </button>
        <button type="button" className="text-xs text-gray-300">
          허가 대기 {categoryName}
        </button>
        <button type="button" className="text-xs text-gray-300">
          미허가 {categoryName}
        </button>
      </ul>
    </footer>
  );
};

export default FooterBar;
