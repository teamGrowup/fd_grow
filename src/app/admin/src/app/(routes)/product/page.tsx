"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";

import MultiItem from "../../../components/MultiItem";

const ProductEnrollmentRequestPage: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="grid grid-cols-2 place-items-center translate-y-12">
        <MultiItem category="product" id="1" isApproved={true} />
        <MultiItem category="product" id="2" isApproved={true} />
        <MultiItem category="product" id="3" isApproved={true} />
        <MultiItem category="product" id="4" isApproved={true} />
        <MultiItem category="product" id="5" isApproved={null} />
        <MultiItem category="product" id="6" isApproved={false} />
      </div>
      <FooterBar category="product"/>
    </>
  );
};

export default ProductEnrollmentRequestPage;
