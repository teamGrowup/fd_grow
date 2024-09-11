import { Bell, ShoppingBag, Search, Home, Clipboard, Heart, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div>
      <header className="flex flex-col border-b bg-black">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-white">Grow</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-white" />
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="더니트컴퍼니 • 매일 업데이트 에디션" />
          </div>
        </div>
        <nav className="flex justify-between px-4 py-2 text-sm overflow-x-auto whitespace-nowrap">
          <span className="px-2 text-white  ">추천</span>
          <span className="px-2 text-white">브랜드</span>
          <span className="px-2 text-white">뷰티</span>
          <span className="px-2 text-white">세일</span>
          <span className="px-2 text-white">쇼케이스</span>
          <span className="px-2 text-white">스타일</span>
        </nav>
      </header>
      
      <main className="flex-grow overflow-auto">
        <div className="relative mb-4">
          <Image
            src="/placeholder.svg"
            alt="Featured product"
            width={400}
            height={400}
            className="w-full"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-bold">키치함의 대명사</h2>
            <p className="text-sm">무신사 에디션</p>
          </div>
          <div className="absolute bottom-4 right-4 text-white text-sm">
            6 / 35
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 px-4 mb-4">
          <Button variant="outline" className="text-xs py-1 px-2 h-auto">추워 박스 세일</Button>
          <Button variant="outline" className="text-xs py-1 px-2 h-auto">데님&진</Button>
          <Button variant="outline" className="text-xs py-1 px-2 h-auto">아우터 세일</Button>
        </div>
        
        <div className="px-4 mb-4">
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
        </div>
      </main>
      
      <footer className="border-t">
        <div className="flex justify-between p-2">
          <Button variant="ghost" className="flex flex-col items-center text-xs">
            <Home className="w-6 h-6" />
            홈
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-xs">
            <Clipboard className="w-6 h-6" />
            스타일
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-xs">
            <Search className="w-6 h-6" />
            검색
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-xs">
            <Heart className="w-6 h-6" />
            좋아요
          </Button>
          <Button variant="ghost" className="flex flex-col items-center text-xs">
            <User className="w-6 h-6" />
            마이
          </Button>
        </div>
      </footer>
    </div>
  )
}