'use client';

import { Button } from "@/packages/ui/src/index";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/GrowMallLogo.png";

import { useRouter } from "next/navigation";

const ProductDetailPage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-black py-12 relative w-full">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-1/3 h-full top-0 left-0 cursor-pointer"
          onClick={() => router.push('/main')}
        />
      </div>
      <div className="relative bg-gray-300 w-[300px] h-[500px] translate-y-16 mx-auto font-bold">
        상품 1에 대한 분석 화면
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-24 w-[60px] h-[28px]">
          허가
        </Button>
        <Button className="absolute bg-blue-500 text-white rounded-full bottom-4 right-3 w-[60px] h-[28px]">
          거부
        </Button>
      </div>
    </>
  );
};

export default ProductDetailPage;
