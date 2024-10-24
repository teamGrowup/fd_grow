"use client";

import React, { useState } from "react";

import LogoBar from "../../../components/LogoBar";
import DataFilterButton from "../../../components/DataFilterButton";
import TickPlacementBars from "../../../components/Chart";
import { DataTableDemo } from "../../../components/DataTable";

type filterCategory = "count" | "money";

const ShoppingMallStatusPage: React.FC = () => {
  const [category, setCategory] = useState<filterCategory>("money");

  return (
    <>
      <LogoBar />
      <div className="flex flex-col">
        <div>
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

          {category === "count" && (
            <>
              <div className="w-full mx-auto translate-y-6 relative">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md relative">
                  <h3 className="text-md font-bold mb-4 text-center absolute top-2 left-2">
                    쇼핑몰 전체 영업 건수 현황
                  </h3>
                  <TickPlacementBars unit="count" />
                </div>
              </div>
              <div className="mt-8 bg-gray-100">
                <DataTableDemo />
              </div>
            </>
          )}
        </div>
        {/* 데이터 필터링 섹션 */}
        <div className="w-full h-12 mx-auto flex justify-center items-center cursor-pointer bg-black rounded-lg text-center mt-10 sticky bottom-0 z-10">
          <DataFilterButton setCategory={setCategory} />
        </div>
      </div>
    </>
  );
};

export default ShoppingMallStatusPage;
