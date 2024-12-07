"use client";
import { ChevronLeft, Home, Search, ShoppingBag } from "lucide-react";
import Logo from '../../public/GrowUp.svg';
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "../../lib/store";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { BRAND_PATH, CART_PATH, CATEGORY_PATH, FAVORITE_PATH, MAIN_PATH, PRODUCT_PATH, SEARCH_KEYWORD_PATH, SEARCH_PATH, SIGNIN_PATH, SIGNUP_PATH } from "../../constant";
import { cn } from "@/packages/utils/src";

//          component: Header 컴포넌트          //
export default function Header(){

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
  const isSearchResultPage = pathname.startsWith(SEARCH_PATH());
  const isProductDeatilPage = pathname.startsWith(PRODUCT_PATH());
  const isCategoryPage = pathname === CATEGORY_PATH();
  const isFavoritePage = pathname === FAVORITE_PATH();
  const isCartPage = pathname === CART_PATH();
  console.log(isCartPage);
  const isBrandPage = pathname === BRAND_PATH();
  const isSigninPage = pathname === SIGNIN_PATH();
  const isSignupPage = pathname.startsWith(SIGNUP_PATH());

  //          event handler: 로고 클릭 이벤트 처리          //
  const onLogoClickHandler = () => {
    if (pathname === "/") return;
    router.push("/");
  }
  //          event handler: 장바구니 버튼 클릭 이벤트 처리          //
  const onCartClickHandler = () => {
    if (pathname === "/cart") return;
    router.push("/cart");
  }
  // //          effect: path가 변경될 때 마다 실행될 함수          //
  // useEffect(() => {
  //   const isMainPage = pathname === MAIN_PATH();
  //   setMainPage(isMainPage);
  // }, [pathname]);
  //
  //          component: 검색바 컴포넌트          //
  const SearchBar = () => {

    //          state: 검색어 버튼 요소 참조 상태          //
    const searchButtonRef = useRef<HTMLDivElement | null>(null); 
    //          state: 검색어 상태          //
    const [word, setWord] = useState<string>('');
    //          state: 검색어 path variable 상태          //
    const { searchWord } = useParams();
    
    //          event handler: 검색 변경 이벤트 처리 함수          //
    const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setWord(value);
    };
    //          event handler: 검색어 키 이벤트 처리 함수          //
    const onSearchWordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if(event.key !== 'Enter') return;
      if(!searchButtonRef.current) return;
      searchButtonRef.current.click();
    };
    //          event handler: 검색 버튼 클릭 이벤트 처리 함수          //
    const onSearchButtonClickHandler = () => {
      router.push(SEARCH_KEYWORD_PATH(word));
    };

    //          effect: 검색어 path variable 변경 될때 마다 실행할 함수          //
    useEffect(() => {
      if (searchWord){
        setWord(Array.isArray(searchWord) ? searchWord.join(' ') : searchWord);
      }
    }, [searchWord]);

    //          render: 검색 버튼 컴포넌트 렌더링          //
    return(
      <div className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
        <div className="flex items-center bg-white rounded-full  border-gray-400  px-3 py-1 text-gray-900">
          <input type="text" className="block mr-4 border-none bg-none w-full focus:outline-none text-sm  bg-inherit" placeholder="검색어를 입력하세요" onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler}/>
          <div ref={searchButtonRef} className="cursor-pointer" onClick={onSearchButtonClickHandler}>
            <Search  className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    );
  }
  
  //          render: Header 컴포넌트 렌더링          //
  return(
    <header className={cn("flex w-full min-h-12 z-30", (isMainPage || isSigninPage || isSignupPage) ? "absolute bg-[#ffffff00] text-white" : "bg-[#f5f5f5] text-gray-500 sticky top-0 ", isMainPage && "mix-blend-difference border-b-[0.5px] border-[#7d7d7d]")}>
        <div className="flex items-center justify-between px-4 py-2 w-full relative">
          <div className="flex items-center gap-4 mr-4 ">
            {isMainPage ?
            <div className="cursor-pointer" onClick={onLogoClickHandler}>
              <Image src={Logo} alt="" className="h-8 "></Image>
            </div> :
            <div className="flex">
              <ChevronLeft className="w-6 h-6 text-black cursor-pointer" onClick={onLogoClickHandler}/>
            </div>
            }
          </div>
          <div className="flex flex-1 items-center justify-center">
            {(isSearchPage || isSearchResultPage) && <SearchBar />}
          </div>
          {(isCategoryPage || isFavoritePage || isCartPage || isBrandPage) && 
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span>{{
              [CATEGORY_PATH()]: "카테고리",
              [FAVORITE_PATH()]: "좋아요",
              [CART_PATH()]: "장바구니",
              [BRAND_PATH()]: "브랜드"
              }[pathname]
            }
            </span>
          </div>
          }

          <div className="flex items-center">
            {(isProductDeatilPage) && <Home className="w-6 h-6  cursor-pointer ml-4" onClick={() => router.push('/')}/>}
            {( !isSearchResultPage && !isSigninPage && !isSignupPage) && <Search className="w-6 h-6  cursor-pointer ml-4" onClick={() => router.push('/search')} />}
            {(!isSearchPage && !isCartPage && !isSigninPage && !isSignupPage) && <ShoppingBag className="w-6 h-6  cursor-pointer ml-4" onClick={onCartClickHandler} />}
          </div>
          
        </div>
    </header>
  )
}
