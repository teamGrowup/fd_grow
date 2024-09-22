import React from "react";

import { Button } from "@/packages/ui/src/index";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/GrowMallLogo.png";
import { ChartNoAxesCombined } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { Store } from "lucide-react";
import { Monitor } from "lucide-react";

const managerMainPage: React.FC = () => {
  return (
    <>
      <div className="bg-black py-12 relative w-full">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-1/3 h-full top-0 left-0"
        />
      </div>
      <div className="translate-y-28 py-3 flex flex-col gap-8 mt-1">
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black py-8 rounded-full flex gap-3">
            <div>
              <ChartNoAxesCombined />
            </div>
            판매 현황 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black py-8 rounded-full flex gap-3">
            <div>
              <PackageSearch />
            </div>
            상품 등록 요청 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black py-8 rounded-full flex gap-3">
            <div>
              <Store />
            </div>
            브랜드 입점 요청 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-black py-8 rounded-full flex gap-3">
            <div>
              <Monitor />
            </div>
            리뷰 모니터링
          </Button>
        </div>
      </div>
    </>
  );
};

export default managerMainPage;
