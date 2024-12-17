import { Badge } from "@/components/ui/badge";
import ProductItem from "../../../components/_common/ProductItem";
import { Checkbox } from "@/components/ui/checkbox";


//          component: 장바구니 페이지 컴포넌트          //
export default function Cart() {
  return(
    <div className=" bg-[#f5f5f5]">
      <div className="m-auto shadow-sm py-3 px-4 bg-white flex justify-between mb-3 sticky top-12 z-50">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" className='data-[state=checked]:bg-primary shadow-none data-[state=checked]:text-primary-foreground rounded-none w-5 h-5' />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            전체선택
          </label>
        </div>
        <div className="flex items-center">
          <Badge variant="outline" className='py-1 px-4 rounded-xl cursor-pointer hover:bg-[#f5f5f5]'>선택삭제</Badge>
        </div>
      </div>
      <div>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  )
}