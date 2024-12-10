"use client";

import LogoBar from "../../../components/LogoBar";
import FooterBar from "../../../components/FooterBar";
import MultiItem from "../../../components/MultiItem";
import { useEffect, useRef, useState } from "react";
import { useAuthenticatedFetch } from "../../../hooks/useAuthenticatedFetch";
import { useAuthStore } from "../../../lib/store";

interface productsDataType {
  productId: number;
  productName: string;
  authorityStatus: string;
}

const ProductEnrollmentRequestPage: React.FC = () => {
  const [scope, setScope] = useState<string>("all");
  const [pageNo, setPageNo] = useState<number>(0);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<productsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { authFetch } = useAuthenticatedFetch();
  const accessToken = useAuthStore((state) => state.accessToken);
  const trigger = useRef<HTMLDivElement | null>(null); // trigger ref 타입을 HTMLDivElement | null로 명시

  useEffect(() => {
    // scope 변경 시 페이지 번호 초기화 및 초기 데이터 로드
    const fetchInitialData = async () => {
      setPageNo(0); // 페이지 번호 초기화
      setIsLastPage(false); // 마지막 페이지 상태 초기화
      setIsLoading(true); // 로딩 상태 설정

      let baseUrl = `http://taegnues.store:12324/admins/product-requests`;
      if (scope === "true") baseUrl += `/approved`;
      else if (scope === "wait") baseUrl += `/pending`;
      else if (scope === "false") baseUrl += `/denied`;

      const fetchUrl = baseUrl + `?pageNo=0`;
      const response = await authFetch(fetchUrl, {
        method: "GET",
        headers: { "Content-Type": "applications/json" },
      });

      if (!response.ok) throw new Error("Failed to fetch initial data...");

      const resultData = await response.json();
      setProductsData(resultData.data || []); // 초기 데이터 설정
      setIsLoading(false); // 로딩 상태 해제
    };

    fetchInitialData();
  }, [scope]);

  useEffect(() => {
    if (trigger.current) {
      const observer = new IntersectionObserver(
        async (entries) => {
          const element = entries[0];

          if (
            element.isIntersecting &&
            !isLoading &&
            !isLastPage &&
            trigger.current
          ) {
            setIsLoading(true);

            let baseUrl = `http://taegnues.store:12324/admins/product-requests`;
            if (scope === "true") baseUrl += `/approved`;
            else if (scope === "wait") baseUrl += `/pending`;
            else if (scope === "false") baseUrl += `/denied`;

            const fetchUrl = baseUrl + `?pageNo=${pageNo + 1}`;
            const response = await authFetch(fetchUrl, { method: "GET" });

            if (!response.ok) throw new Error("Failed to fetch data...");

            const resultData = await response.json();
            const newProductList = resultData.data;

            if (newProductList.length > 0) {
              setProductsData((prev) => [...prev, ...newProductList]);
              setPageNo((prev) => prev + 1);
            } else {
              setIsLastPage(true);
            }

            setIsLoading(false);
          }
        },
        { threshold: 1.0 }
      );

      observer.observe(trigger.current);

      return () => {
        if (trigger.current) observer.disconnect();
      };
    }
  }, [pageNo, scope, isLoading, isLastPage]);

  return (
    <>
      <LogoBar />
      <div className="flex flex-col min-h-screen">
        {isLoading && productsData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div className="flex-grow grid grid-cols-2 mt-8 gap-4">
              {productsData.map((item, index) => (
                <MultiItem
                  key={item.productId}
                  category="product"
                  id={item.productId}
                  isApproved={item.authorityStatus}
                  ref={index === productsData.length - 1 ? trigger : null}
                />
              ))}
            </div>
            {isLoading && (
              <div className="flex justify-center items-center mt-4">
                <p>Loading...</p>
              </div>
            )}
            <FooterBar category="product" scope={scope} setScope={setScope} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductEnrollmentRequestPage;
