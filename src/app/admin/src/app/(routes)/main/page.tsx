import React from "react";

import { Button } from "@/packages/ui/src/index";

const managerMainPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300 py-12"></div>
      <div className="translate-y-28 py-3 flex flex-col gap-8 mt-1">
        <div className="flex justify-center">
          <Button className="w-4/5 bg-blue-600 py-8 rounded-full">
            판매 현황 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-blue-600 py-8 rounded-full">
            상품 등록 요청 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-blue-600 py-8 rounded-full">
            브랜드 입점 요청 조회
          </Button>
        </div>
        <div className="flex justify-center">
          <Button className="w-4/5 bg-blue-600 py-8 rounded-full">
            리뷰 모니터링
          </Button>
        </div>
      </div>
    </>
  );
};

export default managerMainPage;