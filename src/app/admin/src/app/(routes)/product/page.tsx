"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";

import MultiItem from "../../../components/MultiItem";
import { useState, useEffect } from "react";

import useGetRequest from "../../../hooks/useGetRequest";

const items = [
  { id: "1", isApproved: true },
  { id: "2", isApproved: true },
  { id: "3", isApproved: true },
  { id: "4", isApproved: true },
  { id: "5", isApproved: null },
  { id: "6", isApproved: false },
  { id: "7", isApproved: false },
  { id: "8", isApproved: false },
  { id: "9", isApproved: false },
];

const ProductEnrollmentRequestPage: React.FC = () => {
  //조건에 맞게 상품을 불러오는 로직 작성
  const [scope, setScope] = useState<string>("all");

  const { getRequest } = useGetRequest("product-requests"); // 뒤에 파라미터를 달리 하여 원하는 조건의 상품만 불러옴

  const conditionalItems = () => {
    if (scope === "true") {
      return items.filter((val) => val.isApproved === true);
    } else if (scope === "wait") {
      return items.filter((val) => val.isApproved === null);
    } else if (scope === "false") {
      return items.filter((val) => val.isApproved === false);
    } else {
      return items;
    }
  };

  return (
    <>
      <LogoBar />
      <div className="flex flex-col h-[calc(100vh-100px)]">
        <div className="flex-grow grid grid-cols-2 place-items-center overflow-y-auto pt-7">
          {conditionalItems().map((item) => (
            <MultiItem
              key={item.id}
              category="product"
              id={item.id}
              isApproved={item.isApproved}
            />
          ))}
        </div>
        <FooterBar category="product" scope={scope} setScope={setScope} />
      </div>
    </>
  );
};

export default ProductEnrollmentRequestPage;
