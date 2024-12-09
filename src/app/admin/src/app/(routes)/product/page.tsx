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
    const fetchData = async () => {
      let baseUrl = `http://taegnues.store:12324/admins/product-requests`;
      if (scope === "true") baseUrl += `/approved`;
      else if (scope === "wait") baseUrl += `/pending`;
      else if (scope === "false") baseUrl += `/denied`;

      const pageOption = scope === "all" ? "" : `?pageNo=0`;

      const fetchUrl = baseUrl + pageOption;
      const response = await authFetch(fetchUrl, {
        method: "GET",
        headers: {
          "Content-Type": "applications/json",
        },
      }); // 초기 데이터를 setProductsData로 넣지 않으니 렌더링이 안됨 => set함수 쓸 것
    };
  }, [scope]);

  useEffect(() => {
    // trigger.current가 null이 아닌 경우에만 옵저버 설정
    if (trigger.current) {
      const observer = new IntersectionObserver(
        async (
          entries: IntersectionObserverEntry[],
          observer: IntersectionObserver
        ) => {
          const element = entries[0];

          // 데이터가 로드 중이지 않고, 트리거가 화면에 보이면 데이터를 더 불러오는 로직
          if (
            element.isIntersecting &&
            !isLoading &&
            !isLastPage &&
            trigger.current
          ) {
            observer.unobserve(trigger.current); // trigger.current가 null이 아닐 때만 unobserve 호출
            setIsLoading(true);

            let baseUrl = `http://taegnues.store:12324/admins/product-requests`;
            if (scope === "true") baseUrl += `/approved`;
            else if (scope === "wait") baseUrl += `/pending`;
            else if (scope === "false") baseUrl += `/denied`;

            const fetchUrl = baseUrl + `?pageNo=${pageNo + 1}`;
            console.log(fetchUrl);
            const response = await authFetch(fetchUrl, {
              method: "GET",
            });

            if (!response.ok) throw new Error("Failed to fetch data...");

            const resultData = await response.json();
            console.log(resultData);
            const newProductList = resultData.data;

            if (newProductList.length !== 0) {
              setProductsData((prev) => [...prev, ...newProductList]);
              setPageNo((prev) => prev + 1);
            } else {
              setIsLastPage(true); // 더 이상 데이터가 없으면 마지막 페이지 표시
            }
            setIsLoading(false); // 로딩 상태 해제
          }
        },
        {
          threshold: 1.0, // 100%가 화면에 보일 때 불러옴
        }
      );

      observer.observe(trigger.current); // trigger.current가 null이 아니어야 observe 호출

      // 컴포넌트가 unmount 될 때 옵저버 해제
      return () => {
        if (trigger.current) {
          observer.disconnect();
        }
      };
    }
  }, [pageNo, scope, isLoading, isLastPage, productsData]); // pageNo, scope, isLoading 상태 변경에 따라 다시 실행

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
