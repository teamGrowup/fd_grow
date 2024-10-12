"use client";

import { Button } from "@/packages/ui/src/index";
import { ChartNoAxesCombined } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { Store } from "lucide-react";
import { Monitor } from "lucide-react";

import { useRouter } from "next/navigation";

import LogoBar from "../../../components/LogoBar";

const managerMainPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <LogoBar />
      <div className="translate-y-28 py-3 flex flex-col gap-8 mt-1">
        <div className="flex justify-center">
          <Button
            className="w-5/6 max-w-md bg-black py-6 sm:py-8 rounded-full flex gap-3 items-center justify-center"
            onClick={() => router.push("/mallStatus")}
          >
            <div>
              <ChartNoAxesCombined />
            </div>
            <span className="text-sm sm:text-base">판매 현황 조회</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-5/6 max-w-md bg-black py-6 sm:py-8 rounded-full flex gap-3 items-center justify-center"
            onClick={() => router.push("/product")}
          >
            <div>
              <PackageSearch />
            </div>
            <span className="text-sm sm:text-base">상품 등록 요청 조회</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-5/6 max-w-md bg-black py-6 sm:py-8 rounded-full flex gap-3 items-center justify-center"
            onClick={() => router.push("/brand")}
          >
            <div>
              <Store />
            </div>
            <span className="text-sm sm:text-base">브랜드 입점 요청 조회</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            className="w-5/6 max-w-md bg-black py-6 sm:py-8 rounded-full flex gap-3 items-center justify-center"
            onClick={() => router.push("/review")}
          >
            <div>
              <Monitor />
            </div>
            <span className="text-sm sm:text-base">리뷰 모니터링</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default managerMainPage;
