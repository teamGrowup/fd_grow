"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";
import MultiItem from "../../../components/MultiItem";
import { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "../../../hooks/useAuthenticatedFetch";
import { useAuthStore } from "../../../lib/store";

interface productsDataType {
  productId: number;
  productName: string;
  authorityStatus: string;
}

const ProductEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");
  const [productsData, setProductsData] = useState<productsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const { authFetch } = useAuthenticatedFetch();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    // accessToken이 준비되면 데이터를 가져옴
    const fetchData = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        const response = await authFetch(
          "http://taegnues.store:12324/admins/product-requests",
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
        setProductsData(resultData.data);
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
      return productsData.filter((val) => val.authorityStatus === "APPROVED");
    } else if (scope === "wait") {
      return productsData.filter((val) => val.authorityStatus === "PENDING");
    } else if (scope === "false") {
      return productsData.filter((val) => val.authorityStatus === "DENIED");
    } else {
      return productsData;
    }
  };

  return (
    <>
      <LogoBar />
      <div className="flex flex-col min-h-screen">
        {isLoading ? ( // 로딩 중인 경우 로딩 메시지 표시
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="flex-grow grid grid-cols-2 mt-8 gap-4">
              {conditionalItems().map((item) => (
                <MultiItem
                  key={item.productId}
                  category="product"
                  id={item.productId}
                  isApproved={item.authorityStatus}
                />
              ))}
            </div>
            <FooterBar category="product" scope={scope} setScope={setScope} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductEnrollmentRequestPage; // default export로 수정
