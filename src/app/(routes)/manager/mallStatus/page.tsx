import React from "react";

const shoppingMallStatusPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-300 w-[300px] h-[170px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              판매자 판매 현황
            </h3>
          </div>
        </div>
        <div className="bg-gray-300 w-[300px] h-[170px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              쇼핑몰 영업이익 현황
            </h3>
          </div>
        </div>
        <div className="bg-gray-300 w-[300px] h-[170px] mx-auto translate-y-6 relative">
          <div>
            <img src="*" alt="chart" />
          </div>
          <div>
            <h3 className="text-md font-bold absolute bottom-2 left-6">
              쇼핑몰 보유 자산
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 w-[300px] h-[90px] mx-auto translate-y-16 flex justify-center items-center">
        <div>
          <p className="text-md font-bold">데이터 필터링</p>
        </div>
      </div>
    </>
  );
};

export default shoppingMallStatusPage;
