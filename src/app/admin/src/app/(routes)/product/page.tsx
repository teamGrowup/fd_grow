"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";

import MultiItem from "../../../components/MultiItem";

const ProductEnrollmentRequestPage: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="flex flex-col h-[calc(100vh-100px)]">
        <div className="flex-grow grid grid-cols-2 place-items-center overflow-y-auto pt-7">
          <MultiItem category="product" id="1" isApproved={true} />
          <MultiItem category="product" id="2" isApproved={true} />
          <MultiItem category="product" id="3" isApproved={true} />
          <MultiItem category="product" id="4" isApproved={true} />
          <MultiItem category="product" id="5" isApproved={null} />
          <MultiItem category="product" id="6" isApproved={false} />
          <MultiItem category="product" id="7" isApproved={false} />
          <MultiItem category="product" id="8" isApproved={false} />
          <MultiItem category="product" id="9" isApproved={false} />
        </div>
        <FooterBar category="product" />
      </div>
    </>
  );
};

export default ProductEnrollmentRequestPage;
