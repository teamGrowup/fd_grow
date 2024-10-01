"use client";

import { Button } from "@/packages/ui/src/index";
import LogoBar from "@/app/admin/src/components/LogoBar";
import { useParams } from "next/navigation";

const ProductDetailPage: React.FC = () => {
  const { params } = useParams();

  return (
    <>
      <LogoBar />
      <div className="relative bg-white w-[300px] h-[500px] translate-y-16 mx-auto shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-bold text-black text-center mb-4">
          상품 {params}에 대한 분석 화면
        </h1>
        <div className="flex justify-between absolute bottom-4 left-0 right-0 px-4">
          <Button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors w-full mr-2">
            허가
          </Button>
          <Button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors w-full ml-2">
            거부
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
