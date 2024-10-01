"use client";

import LogoBar from "../../../components/LogoBar";
import MultiItem from "../../../components/MultiItem";
import FooterBar from "../../../components/FooterBar";

const BrandEnrollmentRequestPage: React.FC = () => {
  return (
    <>
      <LogoBar />
      <div className="flex flex-col h-[calc(100vh-100px)]">
        <div className="flex-grow overflow-y-auto grid grid-cols-2 place-items-center pt-7">
          <MultiItem id="1" category="brand" isApproved={true} />
          <MultiItem id="2" category="brand" isApproved={true} />
          <MultiItem id="3" category="brand" isApproved={true} />
          <MultiItem id="4" category="brand" isApproved={true} />
          <MultiItem id="5" category="brand" isApproved={null} />
          <MultiItem id="6" category="brand" isApproved={false} />
          <MultiItem id="7" category="brand" isApproved={false} />
          <MultiItem id="8" category="brand" isApproved={false} />
          <MultiItem id="9" category="brand" isApproved={false} />
        </div>
        <FooterBar category="brand" />
      </div>
    </>
  );
};

export default BrandEnrollmentRequestPage;
