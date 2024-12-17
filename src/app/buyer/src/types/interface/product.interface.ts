export default interface Product {
  productIdx: number;         // 제품 ID
  name: string;               // 제품명
  description?: string;        // 제품 설명
  averageRating: number;      // 평균 평점
  brand: string;              // 브랜드명
  price: number;              // 가격
  likes: number;              // 총 좋아요 수
  likesOnMe?: boolean;         // 내가 좋아요를 눌렀는지 여부
  thumbnailPhotoUrl: string;  // 제품 썸네일 이미지 URL
}
