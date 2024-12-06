'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/packages/ui/src";
import { Instagram, Music, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CATEGORY_PATH, MAIN_PATH, SEARCH_PATH } from "../../constant";
import { useAuthStore } from "../../lib/store";

const Footer = () => {
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
  const isCategoryPage = pathname === CATEGORY_PATH();

  if(isSearchPage || isCategoryPage) return;

  return(
    
    <footer className="bg-[#f0f0f0] pt-2 pb-16 px-4 w-full">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>사업자 정보</AccordionTrigger>
            <AccordionContent>
              사업자 정보 내용
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>법적 고지사항</AccordionTrigger>
            <AccordionContent>
              법적 고지사항 내용
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>파트너 지원</AccordionTrigger>
            <AccordionContent>
              파트너 지원 내용
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>고객 지원</AccordionTrigger>
            <AccordionContent>
              고객 지원 내용
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-sm text-gray-600">
          <p>© 2024 GROWUP ALL RIGHTS RESERVED</p>
          <p>개인정보처리방침 · 이용약관</p>
          <p className="mt-4">
            일부 상품의 경우 그로우업은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            이 경우 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
          </p>
        </div>

        <div className="mt-6 flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={24} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <Youtube size={24} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <Twitter size={24} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <Music size={24} />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <span className="font-bold">m</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;