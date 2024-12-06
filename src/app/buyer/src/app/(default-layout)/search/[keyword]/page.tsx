'use client';
import { Combobox } from "@/app/buyer/src/components/_common/combobox";
import { FilterDrawer } from "@/app/buyer/src/components/_common/FilterDrawer";
import ProductCard from "@/app/buyer/src/components/_common/ProcuctCard";
import { cn } from "@/lib/utils";
import { Button } from "@/packages/ui/src";
import { ChevronDown, Columns2, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { useParams, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export default function Page(){

  const params = useParams(); // 동적 라우팅에서 [keyword] 값 가져오기
  const searchParams = useSearchParams(); // 쿼리 스트링 가져오기

  const keyword = decodeURIComponent(params.keyword as string);
  const filters = Array.from(searchParams.entries());
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
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
              <ProductCard classname={cn(grid === 2 ? 'col-span-6' : 'col-span-4')}/>
            </div>
          </div>
        </div>
      </div>
            
    </div>
  )
}