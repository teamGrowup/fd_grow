import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "../../../components/_common/ProcuctCard";
import { Combobox } from "../../../components/_common/combobox";
import { cn } from "@/packages/utils/src";

//          component: 좋아요 페이지 컴포넌트          //
export default function Favorite() {
  const products = [
    {
      productIdx: 1,
      productName: "울리치 발마칸 오버 코트",
      brandName: "비슬로우",
      price: 254440,
      imageUrl: "/product_test.jpg",
      likes: 300,
      rating: 4.5,
    },
    {
      productIdx: 2,
      productName: "오버핏 슬로우",
      brandName: "그로우",
      price: 34200,
      imageUrl: "/t1.jpg",
      likes: 250,
      rating: 4.3,
    },
    {
      productIdx: 3,
      productName: "니트 조끼",
      brandName: "그로우",
      price: 98500,
      imageUrl: "/t2.jpg",
      likes: 280,
      rating: 4.6,
    },
  ]
  return(
    <Tabs defaultValue="product">
      <TabsList className="grid w-full grid-cols-2 sticky top-12 bg-white">
        <TabsTrigger value="product" className="bg-white rounded-none aria-selected:bg-[#f5f5f5]">상품</TabsTrigger>
        <TabsTrigger value="brand" className="bg-white rounded-none aria-selected:bg-[#f5f5f5]">브랜드</TabsTrigger>
      </TabsList>
      <TabsContent value="product" className="bg-[#f5f5f5] mt-0">
        <div>
          <div className="w-full flex justify-end pr-5 py-2">
          <Combobox  />
        </div>
          <div className="grid grid-cols-2">
          {products.map((product, index) => (
          <ProductCard 
            key={index}
            productIdx={product.productIdx} 
            classname={cn('')} 
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
      </TabsContent>
      <TabsContent value="brand" className="bg-[#f5f5f5] mt-0 h-screen">

      </TabsContent>
    </Tabs>
  )
}