'use client'

import { Input, Button } from "@/packages/ui/src/index"
import { useAuthStore } from '@/app/buyer/src/lib/store';
import { useRouter } from 'next/navigation';
import Image from "next/image"
import event_image1 from '../../../public/event-sample.png';
import event_image2 from '../../../public/event-sample2.png';
import event_image3 from '../../../public/event-sample3.png';
import event_image5 from '../../../public/event-sample5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from "../../../components/_common/ProcuctCard";
import { cn } from "@/lib/utils";

export default function Component() {

  // const accessToken = useAuthStore(state => state.accessToken);
  

  // useEffect(() => {
  //   if (!accessToken) {
  //     router.push('/');
  //     return;
  //   }

  // }, [accessToken, router]);

  // if (!accessToken) return null;
  
  return (
    <div className="bg-[#F5F5F5] relative w-full">
      <main className="flex-grow overflow-auto">
        <div className="relative">
          <Swiper
            modules={[Autoplay]} // Autoplay 모듈 추가
            spaceBetween={0} // 슬라이드 간격
            slidesPerView={1} // 한 번에 하나의 슬라이드
            loop={true} // 무한 루프 활성화
            speed={1000}
            autoplay={{
              delay: 3000, // 3초마다 슬라이드 전환
              disableOnInteraction: false, // 사용자 상호작용 후에도 오토플레이 유지
            }}
            className="w-full" // 원하는 높이와 폭 설정
          >
            <SwiperSlide>
              <div className="relative aspect-[8/10]">
                <Image
                  src={event_image2}
                  alt="Event Image 1"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0)] pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold">맨투맨 & 니트 <br />최대 57% 할인</h2>
                  <p className="text-sm">그로우 에디션</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm">
                  6 / 35
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative aspect-[8/10]">
                <Image
                  src={event_image3}
                  alt="Event Image 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0)] pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold">정장 셋업 <br />최대 57% 할인</h2>
                  <p className="text-sm">그로우 에디션</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm">
                  6 / 35
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative aspect-[8/10]">
                <Image
                  src={event_image5}
                  alt="Event Image 2"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-[rgb(0,0,0,0)] to-[rgba(0,0,0)] pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-bold">트레이닝 셋업 <br />최대 57% 할인</h2>
                  <p className="text-sm">그로우 에디션</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-sm">
                  6 / 35
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
        
        <div className="flex flex-col bg-black text-white mb-4">
          <div className="flex h-[48px] px-4 items-center justify-between gap-12">
            <p>Brand Ranking</p>
            <div className="flex-1 flex items-center h-full border-b">1 비슬로우</div>
          </div>
          <div className="flex-1 py-4 whitespace-nowrap pl-4">
            {/* <div className="flex justify-start mb-2 overflow-hidden gap-4">
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800 ">시그니처 특가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
            </div>
            <div className="flex justify-start mb-2 overflow-hidden gap-4">
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">시그니처 특가</div>
            </div> */}
            <div className="flex justify-start mb-2 overflow-hidden gap-4">
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800 ">상의</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">아우터</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">바지</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">원피스/스커트</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">신발</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">가방</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">패션 소품</div>
            </div>
            <div className="flex justify-start mb-2 overflow-hidden gap-4">
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">언더웨어</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">뷰티</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">스포츠/레저</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">라이프</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">키즈</div>
              <div className="bg-[#262626] items-center justify-center px-4 py-2 inline-flex rounded-sm border border-gray-800">브랜드</div>
            </div>
          </div>
        </div>
        
        <section className="flex flex-col w-full  bg-white mb-4">
          <p className="text-lg font-semibold px-4 py-2">인기 상품</p>
          <div className="grid grid-cols-12">
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
          </div>
        </section>
        {/* <div className="grid grid-cols-3 gap-2 px-4 mb-4 bg-white py-6">
          <Button variant="outline" className="text-xs py-1 px-2 h-auto ">추워 박스 세일</Button>
          <Button variant="outline" className="text-xs py-1 px-2 h-auto">데님&진</Button>
          <Button variant="outline" className="text-xs py-1 px-2 h-auto">아우터 세일</Button>
        </div>
        
        <div className="px-4 mb-4 bg-white">
          <h3 className="text-lg font-bold mb-2">비슷한 연령대 인기 키워드별 트렌드</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 p-2 rounded">
                <Image
                  src="/placeholder.svg"
                  alt={`Trend ${item}`}
                  width={150}
                  height={150}
                  className="w-full mb-2"
                />
                <p className="text-sm font-semibold">후드 티셔츠</p>
                <p className="text-xs text-red-500">31% 37,800원</p>
              </div>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  )
}