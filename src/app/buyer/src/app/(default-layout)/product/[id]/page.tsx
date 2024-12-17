'use client'
import Image from "next/image";
import product_image from '../../../../public/product_test.jpg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";
import ReviewItem from "@/app/buyer/src/components/_common/ReviewItem";
// import ReviewPagination from "@/app/buyer/src/components/_common/ReviewPagination";
// import usePagination from "@/app/buyer/src/hooks/pageination.hook";

export default function ProductId() {
  const deatilRef = useRef<HTMLDivElement | null>(null);
  const sizeRef = useRef<HTMLDivElement | null>(null);
  const reviewRef = useRef<HTMLDivElement | null>(null);

  // 탭 클릭 시 해당 ref로 스크롤 이동
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset = 86; // 조정할 높이
      const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  // //          state: 페이지네이션 관련 상태          //
  // const {
  //   currentPage, setCurrentPage, currentSection, setCurrentSection, viewList, viewPageList, totalSection, setTotalList
  // } = usePagination<>();

  return(
    <div className="w-full relative bg-[#f5f5f5]">
      <Swiper
        spaceBetween={0} // 슬라이드 간격
        slidesPerView={1} // 한 번에 하나의 슬라이드
        loop={true} // 무한 루프 활성화
        className="w-full" // 원하는 높이와 폭 설정
        direction="horizontal"
          >
        <SwiperSlide>
          <div className="relative aspect-[5/6]">
            <Image
              src={product_image}
              alt="Event Image 1"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0,0.2)] pointer-events-none"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative aspect-[5/6]">
            <Image
              src="/product_test2.jpg"
              alt="Event Image 1"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0,0.2)] pointer-events-none"></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col bg-white  border-b border-t relative px-4 pb-10 mb-4">
        <div className="flex justify-between border-b border-gray-100 py-3">
          <button className="flex gap-2 items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/Grow.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">그로우</span>
          </button>
          <button>
            <Share2 className="w-5 h-5 text-gray-500"/>
          </button>
        </div>
        <div className="flex justify-between items-center py-2 mt-3">
          <h1 className="text-base font-medium break-all flex-1">울리치 발마칸 오버 코트</h1>
        </div>
        <p className="text-xl font-bold">255,900원</p>
      </div>
      <Tabs className="bg-white relative" defaultValue="account">
        <TabsList className="grid w-full grid-cols-3 sticky top-12 bg-white rounded-none z-30">
          <TabsTrigger value="account" className=" rounded-none bg-[#f5f5f5] aria-selected:bg-white z-30" onClick={() => scrollToRef(deatilRef)}>상품정보</TabsTrigger>
          <TabsTrigger value="password" className="rounded-none bg-[#f5f5f5] aria-selected:bg-white z-30" onClick={() => scrollToRef(sizeRef)}>사이즈표</TabsTrigger>
          <TabsTrigger value="review" className="rounded-none bg-[#f5f5f5] aria-selected:bg-white z-30" onClick={() => scrollToRef(reviewRef)}>리뷰</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div ref={deatilRef} className="">
            <img src="/product_detail_test1.jpg"></img>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div ref={sizeRef} className="h-screen">
            사이즈표
          </div>
        </TabsContent>
        <TabsContent value="review">
          <div ref={reviewRef} className="">
            <div className="flex py-2 px-4 mb-2">
              <div className="text-sm text-gray-500">총 리뷰 수: 5개</div>
            </div>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <div className='flex justify-center py-3'>
              <div className='flex gap-5'>
                  <div className='flex items-center gap-1 cursor-pointer'>
                      <ChevronLeft className="w-4"/>
                      <div className='text-gray-600 text-sm font-semibold'>{'이전'}</div>
                  </div>
                  <div className='text-gray-400 cursor-default items-center flex'>{'\|'}</div>

                  {[1, 2, 3, 4, 5].map(item => 
                  item === 1 ?
                    <div key={item} className='cursor-default text-black text-sm'>{item}</div> : 
                    <div key={item} className='cursor-pointer text-gray-400  text-sm'>{item}</div>
                  )}

                  <div className='text-gray-400 cursor-default'>{'\|'}</div>
                  <div className='flex items-center gap-1 cursor-pointer'>
                      <div className='text-gray-600 text-sm font-semibold'>{'다음'}</div>
                      <ChevronRight className="w-4"/>
                  </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

