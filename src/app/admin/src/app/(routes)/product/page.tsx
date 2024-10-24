"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";
import MultiItem from "../../../components/MultiItem";
import { useState } from "react";
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
  { id: "10", isApproved: false },
  { id: "11", isApproved: false },
];

const ProductEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");

  const { getRequest } = useGetRequest("product-requests");

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
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* 전체 화면 높이 설정 */}
        <div className="flex-grow grid grid-cols-2 mt-8 gap-4">
          {" "}
          {/* MultiItem 영역 */}
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
