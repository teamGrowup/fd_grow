'use client';

import { Button } from "@/packages/ui/src";
import { Clipboard, Heart, Home, Search, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "../../lib/store";
import { MAIN_PATH, SEARCH_PATH } from "../../constant";

const TabBar = () => {
  
  //          function: useRouter 함수          //
  const router = useRouter();
  //          function: usePathname 함수          //
  const pathname = usePathname();
  //          state: Token 상태          //
  const {accessToken, setAccessToken, logout} = useAuthStore();
  //          state: 메인 페이지 상태          //
  // const [isMainPage, setMainPage] = useState<boolean>(false);
  const isMainPage = pathname === MAIN_PATH();
  const isSearchPage = pathname === SEARCH_PATH();
  //          event handler: home 버튼 클릭 이벤트 처리          //
  const homeClickHandler = () => {
    if(pathname === '/') return;
    router.push('/');
  }
  //          event handler: category 버튼 클릭 이벤트 처리          //
  const categoryClickHandler = () => {
    if(pathname === '/category') return;
    router.push('/category');
  }
  //          event handler: favorite 버튼 클릭 이벤트 처리          //
  const favoriteClickHandler = () => {
    if(pathname === '/favorite') return;
    router.push('/favorite');
  }
  //          event handler: brand 버튼 클릭 이벤트 처리          //
  const brandClickHandler = () => {
    if(pathname === '/brand') return;
    router.push('/brand');
  }

  if(isSearchPage) return;
  return(
    <div className="fixed bottom-0 w-full border-t max-w-[600px] bg-white z-50">
        <div className="flex justify-between px-2 w-full">
          <Button variant="ghost" size="icon" className="flex flex-col h-[56px] items-center text-xs basis-[20%]" onClick={categoryClickHandler}>
            <Search className="w-6 h-6" />
            카테고리
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col h-[56px] items-center text-xs basis-[20%]" onClick={brandClickHandler}>
            <Clipboard className="w-6 h-6" />
            브랜드
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col h-[56px] items-center text-xs basis-[20%]" onClick={homeClickHandler}>
            <Home className="w-6 h-6" />
            홈
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col h-[56px] items-center text-xs basis-[20%]" onClick={favoriteClickHandler}>
            <Heart className="w-6 h-6" />
            좋아요
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col h-[56px] items-center text-xs basis-[20%]" onClick={() => router.push('/signin')}>
            <User className="w-6 h-6" />
            마이
          </Button>
        </div>
      </div>
  )
}

export default TabBar;