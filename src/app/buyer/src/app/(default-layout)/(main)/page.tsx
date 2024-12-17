'use client'

import { Input, Button } from "@/packages/ui/src/index"
import { useAuthStore } from '@/app/buyer/src/lib/store';
import { useRouter } from 'next/navigation';
import Image from "next/image"
import event_image1 from '../../../public/event-sample.png';
import event_image2 from '../../../public/event-sample2.png';
import event_image3 from '../../../public/event-sample3.png';
import event_image5 from '../../../public/event-sample5.jpg';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from "../../../components/_common/ProcuctCard";
import { cn } from "@/lib/utils";
import { DragSlider } from "../../../components/_common/DragSlider";
import { Suspense, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Swiper as SwiperType } from "swiper/types";
import { Product } from "../../../types/interface";

export default function Component() {
  const products: Product[] = [
    {
      productIdx: 1,
      name: "울리치 발마칸 오버 코트",
      brand: "비슬로우",
      price: 254440,
      thumbnailPhotoUrl: "/product_test.jpg",
      likes: 300,
      averageRating: 4.5,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 2,
      name: "오버핏 슬로우",
      brand: "그로우",
      price: 34200,
      thumbnailPhotoUrl: "/t1.jpg",
      likes: 250,
      averageRating: 4.3,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 3,
      name: "니트 조끼",
      brand: "그로우",
      price: 98500,
      thumbnailPhotoUrl: "/t2.jpg",
      likes: 280,
      averageRating: 4.6,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 4,
      name: "베이지 목도리",
      brand: "그로우",
      price: 174800,
      thumbnailPhotoUrl: "/t3.jpg",
      likes: 320,
      averageRating: 4.7,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 5,
      name: "목걸이",
      brand: "그로우",
      price: 214900,
      thumbnailPhotoUrl: "/t4.jpg",
      likes: 310,
      averageRating: 4.4,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 6,
      name: "목도리",
      brand: "그로우",
      price: 184300,
      thumbnailPhotoUrl: "/t5.jpg",
      likes: 270,
      averageRating: 4.5,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 7,
      name: "검정 목도리",
      brand: "그로우",
      price: 154600,
      thumbnailPhotoUrl: "/t6.jpg",
      likes: 290,
      averageRating: 4.3,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 8,
      name: "트레이닝 벌룬 팬츠",
      brand: "그로우",
      price: 324500,
      thumbnailPhotoUrl: "/t7.jpg",
      likes: 350,
      averageRating: 4.8,
      description: '',
      likesOnMe: false
    },
    {
      productIdx: 9,
      name: "캐주얼 코튼 팬츠",
      brand: "그로우",
      price: 284700,
      thumbnailPhotoUrl: "/t9.jpg",
      likes: 330,
      averageRating: 4.6,
      description: '',
      likesOnMe: false
    }
  ];
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const upRef = useRef(null);
  const downRef = useRef(null);
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
          </Swiper>
        </div>
        
        <div className="flex flex-col bg-black text-white mb-4">
          <div className="flex h-12 px-4 items-center justify-between gap-12">
            <span>Brand Ranking</span>
            <div className="flex-1 h-12 flex items-center border-b">
              <Swiper direction="vertical" loop={true} spaceBetween={0} slidesPerView={1} allowTouchMove={false}  onBeforeInit={(swipper) => setSwiper(swipper)} className="h-full w-full overflow-hidden">
                <SwiperSlide className="h-full flex py-3">
                  <span className="" onClick={() => console.log('비슬로우 이동')}>1 비슬로우</span>
                </SwiperSlide>
                <SwiperSlide className="h-full flex py-3">
                  <span className="h-full w-full">2 홀리선</span>
                </SwiperSlide>
                <SwiperSlide className="h-full flex py-3">
                  <span className="h-full w-full">3 홀리선</span>
                </SwiperSlide>
              </Swiper>
              <div className="absolute right-4 flex">
                <button  ref={upRef} className="flex items-center justify-center w-9 h-9 z-50" onClick={() => swiper?.slidePrev()} >
                  <ChevronUp />
                </button>
                <button className="flex items-center justify-center w-9 h-9 z-50" ref={downRef} onClick={() => swiper?.slideNext()}>
                  <ChevronDown />
                </button>
              </div>
            </div>
                
          </div>
          <div className="flex-1 py-4 whitespace-nowrap pl-4">
            <DragSlider />
          </div>
        </div>
        
        <section className="flex flex-col w-full  bg-white mb-4">
          <p className="text-lg font-semibold px-4 py-2">인기 상품</p>
          {/* <div className="grid grid-cols-12">
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
            <ProductCard classname={cn('col-span-4')}/>
          </div> */}
          <div className="grid grid-cols-12">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              productIdx={product.productIdx}
              classname={cn('col-span-4')} 
              name={product.name} 
              brand={product.brand} 
              price={product.price} 
              thumbnailPhotoUrl={product.thumbnailPhotoUrl} 
              likes={product.likes} 
              averageRating={product.averageRating} 
            />
          ))}
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