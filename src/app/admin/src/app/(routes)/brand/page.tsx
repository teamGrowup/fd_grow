"use client";

import LogoBar from "../../../components/LogoBar";
import MultiItem from "../../../components/MultiItem";
import FooterBar from "../../../components/FooterBar";
import { useState } from "react";

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

const BrandEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");

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
        <div className="flex-grow overflow-y-auto grid grid-cols-2 place-items-center pt-7">
          {conditionalItems().map((item) => (
            <MultiItem
              key={item.id}
              category="brand"
              id={item.id}
              isApproved={item.isApproved}
            />
          ))}
        </div>
        <FooterBar category="brand" scope={scope} setScope={setScope} />
      </div>
    </>
  );
};

export default BrandEnrollmentRequestPage;
