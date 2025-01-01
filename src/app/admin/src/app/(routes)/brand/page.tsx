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
  const [isReHydrated, setIsRehydrated] = useState<boolean>(false);

  useEffect(() => {
    const checkRehydration = async () => {
      const storedState = localStorage.getItem("auth-storage");
      if (storedState) {
        setIsRehydrated(true);
      }
    };
    checkRehydration();
  }, []);

  useEffect(() => {
    if (!isReHydrated || !accessToken) {
      return;
    }
    const fetchInitialData = async () => {
      setPageNo(0);
      setIsLastPage(false);
      setIsLoading(true);

      let baseUrl = `http://taegnues.store:12324/admins/brand-requests?authorityStatus`;
      if (scope === "true") baseUrl += "=APPROVED";
      else if (scope === "wait") baseUrl += "=PENDING";
      else if (scope === "false") baseUrl += "=DENIED";

      const fetchUrl = baseUrl + `&pageNo=0`;

      const response = await authFetch(fetchUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const resultData = await response.json();
      setBrandsData(resultData.data || []);
      setIsLoading(false);
    };

    fetchInitialData();
  }, [isReHydrated, scope, accessToken]);

  useEffect(() => {
    if (!isReHydrated || !accessToken || !trigger.current) return;

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

          let baseUrl = `http://taegnues.store:12324/admins/brand-requests?authorityStatus`;
          if (scope === "true") baseUrl += "=APPROVED";
          else if (scope === "wait") baseUrl += "=PENDING";
          else if (scope === "true") baseUrl += "=DENIED";
          const fetchUrl = baseUrl + `&pageNo=${pageNo + 1}`;

          const response = await authFetch(fetchUrl, { method: "GET" });

          if (!response.ok) throw new Error("Failed to fetch data...");

          const resultData = await response.json();
          const newBrandList = resultData.data;

          if (newBrandList.length > 0) {
            setBrandsData((prevState) => [...prevState, ...newBrandList]);
            setPageNo((prev) => prev + 1);
          } else {
            setIsLastPage(true);
          }

          setIsLoading(false);
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(trigger.current);

    return () => {
      if (trigger.current) observer.disconnect();
    };
  }, [isReHydrated, accessToken, pageNo, scope, isLoading, isLastPage]);

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
              {brandsData.map((item, index) => (
                <MultiItem
                  key={item.brandId}
                  category="brand"
                  id={item.brandId}
                  isApproved={item.authorityStatus}
                  ref={index === brandsData.length - 1 ? trigger : null}
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
