"use client";

import React, { useState } from "react";

import LogoBar from "../../../components/LogoBar";
import DataFilterButton from "../../../components/DataFilterButton";
import TickPlacementBars from "../../../components/Chart";

type filterCategory = "count" | "money";

const ShoppingMallStatusPage: React.FC = () => {
  const [category, setCategory] = useState<filterCategory>("money");

  return (
    <>
      <LogoBar />
      <div className="flex flex-col h-[calc(100vh-100px)]">
        {/* 그래프 영역 */}
        <div className="flex-grow overflow-y-auto">
          {category === "money" && (
            <>
              <div className="space-y-6">
                {/* 판매자 판매 현황 섹션 */}
                <div className="w-4/5 mx-auto translate-y-6 relative">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
                      판매자 판매 현황
                    </h3>
                    <TickPlacementBars unit="money" />
                  </div>
                </div>

                {/* 쇼핑몰 영업이익 현황 섹션 */}
                <div className="w-4/5 mx-auto translate-y-6 relative">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
                      쇼핑몰 영업이익 현황
                    </h3>
                    <TickPlacementBars unit="money" />
                  </div>
                </div>

                {/* 쇼핑몰 보유 자산 섹션 */}
                <div className="w-4/5 mx-auto translate-y-6 relative">
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                    <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
                      쇼핑몰 보유 자산
                    </h3>
                    <TickPlacementBars unit="money" />
                  </div>
                </div>
              </div>
            </>
          )}

          {category === "count" && ( // 쇼핑몰이니까 전체 판매 건수 현황으로 시장 거래가 활발한지 정도만 체크, 판매자별 건수 현황 말고 차라리 판매자 파트에서 개개인 만이 판매 견수 현황을 볼 수 있게 구현하는건 어떤지?
            <>
              {/* 쇼핑몰 영업이익 현황 섹션 */}
              <div className="w-4/5 mx-auto translate-y-6 relative">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                  <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
                    쇼핑몰 전체 영업 건수 현황
                  </h3>
                  <TickPlacementBars unit="count" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* 데이터 필터링 섹션 */}
        <div className="w-full h-12 mx-auto flex justify-center items-center cursor-pointer bg-black rounded-lg text-center">
          <DataFilterButton setCategory={setCategory} />
        </div>
      </div>
    </>
  );
};

export default ShoppingMallStatusPage;
