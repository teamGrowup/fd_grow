'use client';

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { SEARCH_KEYWORD_PATH } from "../../../constant";

export default function Search() {
  const router = useRouter();

  return(
    <div className="px-4">
      <section className="">
        <header className="flex justify-between items-center h-12 mt-4">
          <span className="text-gray-700 text-lg font-semibold">최근 검색어</span>
          <span className="text-gray-500 text-sm cursor-pointer">모두삭제</span>
        </header>
        <ul className="flex justify-start flex-wrap gap-2 pb-4">
          <li >
            <Badge variant="secondary" className="font-normal rounded-3xl whitespace-pre bg-white border border-gray-30 items-center justify-center">
              <span className="pl-3 py-2.5 pr-1 cursor-pointer" onClick={() => router.push(SEARCH_KEYWORD_PATH('발마칸 코트'))} >발마칸 코트</span>
              <button className="pr-3 items-center justify-center" onClick={() => console.log('x')}>
                <X className="w-3 h-3"/>
              </button>
            </Badge>
          </li>
          <li>
            <Badge variant="secondary" className="font-normal rounded-3xl whitespace-pre bg-white items-center justify-center">
              <span className="pl-3 py-2.5 pr-1 cursor-pointer" >니트</span>
              <button className="pr-3 items-center justify-center">
                <X className="w-3 h-3"/>
              </button>
            </Badge>  
          </li>
          <li>
            <Badge variant="secondary" className="font-normal rounded-3xl whitespace-pre bg-white border border-gray-30 items-center justify-center">
              <span className="pl-3 py-2.5 pr-1 cursor-pointer" >회색 후드티</span>
              <button className="pr-3 items-center justify-center">
                <X className="w-3 h-3"/>
              </button>
            </Badge>
          </li>
          <li>
            <Badge variant="secondary" className="font-normal rounded-3xl whitespace-pre bg-white border border-gray-30 items-center justify-center">
              <span className="pl-3 py-2.5 pr-1 cursor-pointer" >피자</span>
              <button className="pr-3 items-center justify-center">
                <X className="w-3 h-3"/>
              </button>
            </Badge>
          </li>
          <li>
            <Badge variant="secondary" className="font-normal rounded-3xl whitespace-pre bg-white border border-gray-30 items-center justify-center">
              <span className="pl-3 py-2.5 pr-1 cursor-pointer" >바리스타룰스</span>
              <button className="pr-3 items-center justify-center">
                <X className="w-3 h-3"/>
              </button>
            </Badge>
          </li>
        </ul>
      </section>
      <section>
        <header className="flex justify-between items-center h-12 mt-4">
          <span className="text-gray-700 text-lg font-semibold">인기 검색어</span>
        </header>
        <ol className="popular-list grid grid-flow-col grid-rows-[repeat(5,_auto)] grid-cols-[repeat(2,_50%)] overflow-hidden">
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full justify-between">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">발마칸 코트</span>
              {/* <ArrowDownRight className="w-5 h-5 mr-2 text-gray-400" /> */}
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">싱글 코트</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">나이키</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">아디다스</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">홀리선</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">비슬로우</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">디스이즈네버뎃</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">발마칸 코트</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">발마칸 코트</span>
            </button>
          </li>
          <li className="relative grid-area-[1/1] mr-1 search-popular-ordered-li-item">
            <button className="relative flex text-left items-center py-2 pl-5 text-sm w-full">
              <span className="pl-4 flex-1 text-ellipsis whitespace-nowrap">발마칸 코트</span>
            </button>
          </li>
        </ol>
      </section>
    </div>
  )
}

