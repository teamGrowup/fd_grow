"use client";

import LogoBar from "../../../components/LogoBar";
import MultiItem from "../../../components/MultiItem";
import FooterBar from "../../../components/FooterBar";
import { useState, useEffect, useRef } from "react";
import { useAuthenticatedFetch } from "../../../hooks/useAuthenticatedFetch";
import { useAuthStore } from "../../../lib/store";

interface brandsDataType {
  brandId: number;
  brandName: string;
  authorityStatus: string;
}

const BrandEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");
  const [pageNo, setPageNo] = useState<number>(0);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [brandsData, setBrandsData] = useState<brandsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const { authFetch } = useAuthenticatedFetch();
  const accessToken = useAuthStore((state) => state.accessToken);
  const trigger = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const fetchInitialData = async () => {
  //     setPageNo(0);
  //     setIsLastPage(false);
  //     setIsLoading(true);

  //     let baseUrl = `http://taegnues.store:12324/admins/brand-requests`;
  //     if (scope === "true") baseUrl += `/`;
  //   };
  // }, []);

  useEffect(() => {
    const fetchData = async () => {};
  }, []);

  return (
    <>
      <LogoBar />
      <div className="flex flex-col min-h-screen">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {/* <div className="flex-grow grid grid-cols-2 mt-8 gap-4">
              {conditionalItems().map((item) => (
                <MultiItem
                  key={item.brandId}
                  category="brand"
                  id={item.brandId}
                  isApproved={item.authorityStatus}
                />
              ))}
            </div> */}
            <FooterBar category="brand" scope={scope} setScope={setScope} />
          </>
        )}
      </div>
    </>
  );
};

export default BrandEnrollmentRequestPage;
