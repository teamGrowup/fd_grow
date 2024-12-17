import BrandCard from "../../../components/_common/BrandCard";
import { BrandCombobox } from "../../../components/_common/brandCombobox";

//          component: 브랜드 페이지 컴포넌트          //
export default function Brand() {
  return(
    <div className="">
      <div className="w-full flex justify-end pr-5 py-2">
        <BrandCombobox  />
      </div>
      <BrandCard
        classname="custom-class"
        brandName="그로우"
        brandDescription="BESLOW(비슬로우)는 wearable, comfortable, enjoyable이라는 모토를 가지고 믹스 앤 매치가 자유로운 남성복을 선보이는 브랜드로..."
        imageUrls={[
          "/product_test.jpg",
          "/product_test2.jpg",
          "/product_test3.jpg",
        ]}
      />
      <BrandCard
        classname="custom-class"
        brandName="브랜드2"
        brandDescription="브랜드2입니다"
        imageUrls={[
          "/t1.jpg",
          "/t2.jpg",
          "/t3.jpg",
        ]}
      />
      <BrandCard
        classname="custom-class"
        brandName="그로우"
        brandDescription="브랜드3입니다"
        imageUrls={[
          "/t7.jpg",
          "/t5.jpg",
          "/t6.jpg",
        ]}
      />
      <BrandCard
        classname="custom-class"
        brandName="그로우"
        brandDescription="브랜드4입니다"
        imageUrls={[
          "/t9.jpg",
          "/t9.jpg",
          "/t9.jpg",
        ]}
      />
      <BrandCard
        classname="custom-class"
        brandName="그로우"
        brandDescription="브랜드5입니다"
        imageUrls={[
          "/t9.jpg",
          "/t9.jpg",
          "/t9.jpg",
        ]}
      />
      
    </div>
  )
}