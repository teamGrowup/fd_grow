"use client";

import LogoBar from "../../../components/LogoBar";
import MultiItem from "../../../components/MultiItem";
import FooterBar from "../../../components/FooterBar";

const BrandEnrollmentRequestPage: React.FC = () => {

  return (
    <>
      <LogoBar />
      <div className="grid grid-cols-2 place-items-center translate-y-12">
        <MultiItem id="1" category="brand" isApproved={true} />
        <MultiItem id="2" category="brand" isApproved={true} />
        <MultiItem id="3" category="brand" isApproved={true} />
        <MultiItem id="4" category="brand" isApproved={true} />
        <MultiItem id="5" category="brand" isApproved={null} />
        <MultiItem id="6" category="brand" isApproved={false} />
      </div>
      <FooterBar category="brand" />
    </>
  );
};

export default BrandEnrollmentRequestPage;
