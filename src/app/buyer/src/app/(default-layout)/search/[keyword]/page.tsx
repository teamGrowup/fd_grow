'use client';
import { Combobox } from "@/app/buyer/src/components/_common/combobox";
import { FilterDrawer } from "@/app/buyer/src/components/_common/FilterDrawer";
import ProductCard from "@/app/buyer/src/components/_common/ProcuctCard";
import { cn } from "@/lib/utils";
import { Columns2, LayoutGrid } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page(){
  const products = [
    {
      productName: "울리치 발마칸 오버 코트",
      brandName: "비슬로우",
      price: 254440,
      imageUrl: "/product_test.jpg",
      likes: 300,
      rating: 4.5,
    },
    {
      productName: "오버핏 슬로우",
      brandName: "그로우",
      price: 34200,
      imageUrl: "/t1.jpg",
      likes: 250,
      rating: 4.3,
    },
    {
      productName: "니트 조끼",
      brandName: "그로우",
      price: 98500,
      imageUrl: "/t2.jpg",
      likes: 280,
      rating: 4.6,
    },
    {
      productName: "베이지 목도리",
      brandName: "그로우",
      price: 174800,
      imageUrl: "/t3.jpg",
      likes: 320,
      rating: 4.7,
    },
    {
      productName: "목걸이",
      brandName: "그로우",
      price: 214900,
      imageUrl: "/t4.jpg",
      likes: 310,
      rating: 4.4,
    },
    {
      productName: "목도리",
      brandName: "그로우",
      price: 184300,
      imageUrl: "/t5.jpg",
      likes: 270,
      rating: 4.5,
    },
    {
      productName: "검정 목도리",
      brandName: "그로우",
      price: 154600,
      imageUrl: "/t6.jpg",
      likes: 290,
      rating: 4.3,
    },
    {
      productName: "트레이닝 벌룬 팬츠",
      brandName: "그로우",
      price: 324500,
      imageUrl: "/t7.jpg",
      likes: 350,
      rating: 4.8,
    },
    {
      productName: "캐주얼 코튼 팬츠",
      brandName: "그로우",
      price: 284700,
      imageUrl: "/t9.jpg",
      likes: 330,
      rating: 4.6,
    }
  ];
  const params = useParams(); // 동적 라우팅에서 [keyword] 값 가져오기
  // const searchParams = useSearchParams(); // 쿼리 스트링 가져오기

  const keyword = decodeURIComponent(params.keyword as string);
  // const filters = Array.from(searchParams.entries());
  console.log(keyword);
  const [grid, setGrid] = useState<number>(2);

 const gridButtonClickHandler = () => {
  if(grid === 2) {
    setGrid(1);
  }else{
    setGrid(2);
  }
 }
  
  //          render: 검색 상세 페이지 렌더링          //
  return(
    <div className="relative">
      <div className="">
        <div className="flex relative py-2 px-4 items-center justify-between">
          <div className="text-gray-500" onClick={gridButtonClickHandler}>
            {grid === 2 ? <Columns2 /> :
            <LayoutGrid />
            }
          </div>
          <div className="flex items-center relative">
            <Combobox />
            <FilterDrawer />
          </div>
        </div>
        <div className="relative flex flex-col bg-white">
          <div className="">
            <div className="grid grid-cols-12">
            {products.map((product, index) => (
              <ProductCard 
                key={index} 
                productIdx={index}
                classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')} 
                name={product.productName} 
                brand={product.brandName} 
                price={product.price} 
                thumbnailPhotoUrl={product.imageUrl} 
                likes={product.likes} 
                averageRating={product.rating} 
              />
            ))}
             
            </div>
          </div>
        </div>
      </div>
            
    </div>
  )
}