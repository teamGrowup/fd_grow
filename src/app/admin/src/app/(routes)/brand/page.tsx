"use client";

import LogoBar from "../../../components/LogoBar";
import MultiItem from "../../../components/MultiItem";
import FooterBar from "../../../components/FooterBar";
import { useState, useEffect } from "react";
import { useAuthenticatedFetch } from "../../../hooks/useAuthenticatedFetch";
import { useAuthStore } from "../../../lib/store";

interface brandsDataType {
  brandId: number;
  brandName: string;
  authorityStatus: string;
}

const BrandEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");
  const [brandsData, setBrandsData] = useState<brandsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const { authFetch } = useAuthenticatedFetch();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    // accessToken이 준비되면 데이터를 가져옴
    const fetchData = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const response = await authFetch(
          "http://taegnues.store:12324/admins/brand-requests",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data...");
        }

        const resultData = await response.json();
        setBrandsData(resultData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    if (accessToken) {
      fetchData(); // accessToken이 있을 때만 fetchData 실행
    }
  }, [accessToken]); // accessToken이 변경될 때마다 실행

  const conditionalItems = () => {
    if (scope === "true") {
      return brandsData.filter((val) => val.authorityStatus === "APPROVED");
    } else if (scope === "wait") {
      return brandsData.filter((val) => val.authorityStatus === "PENDING");
    } else if (scope === "false") {
      return brandsData.filter((val) => val.authorityStatus === "DENIED");
    } else {
      return brandsData;
    }
  };

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
            <div className="flex-grow grid grid-cols-2 mt-8 gap-4">
              {conditionalItems().map((item) => (
                <MultiItem
                  key={item.brandId}
                  category="brand"
                  id={item.brandId}
                  isApproved={item.authorityStatus}
                />
              ))}
            </div>
            <FooterBar category="brand" scope={scope} setScope={setScope} />
          </>
        )}
      </div>
    </>
  );
};

export default BrandEnrollmentRequestPage;
