import React, { useState } from "react";
import { Button } from "@/packages/ui/src";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

interface ReviewBoxProps {
  reviewId: number;
  author: string;
  content: string;
  rating: number;
  likeCount: number;
  imagePath: string;
  imageName: string;
  productName: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({
  author,
  content,
  imageName,
  imagePath,
  likeCount,
  productName,
  rating,
  reviewId,
}) => {
  const [heartState, setHeartState] = useState<boolean>(false);

  const DeleteReview = async () => {
    try {
      const fetchResponse = await fetch(
        `http://taegnues.store:12324/admins/reviews/${reviewId}`,
        {
          method: "DELETE",
        }
      );

      if (!fetchResponse.ok) {
        throw new Error("Failed to delete review");
      }

      window.alert("리뷰가 성공적으로 삭제되었습니다");
    } catch (error) {
      console.error(error);
      window.alert("리뷰 삭제에 실패했습니다.");
    }
  };

  const handleDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteCheck = window.confirm("리뷰를 삭제할까요?");
    if (deleteCheck) {
      await DeleteReview();
    }
  };

  const handleClickHeart = () => {
    setHeartState((prevState) => !prevState);
  };

  return (
    <div className="w-full max-w-lg min-h-[10rem] bg-white border border-gray-200 shadow-lg rounded-lg flex mx-auto my-4 overflow-hidden transition-transform transform hover:scale-105">
      <div className="w-1/3 flex justify-center items-center p-4">
        <Image
          src={imagePath}
          alt={imageName}
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-4">
        <p className="font-semibold text-gray-800">작성자: {author}</p>
        <p className="text-sm text-gray-600 mt-1">{productName}</p>
        <p className="text-sm text-gray-500 mt-7">{content}</p>
      </div>
      <div className="flex flex-col justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Heart
            size={25}
            className={`cursor-pointer ${
              heartState ? "text-red-500" : "text-gray-400"
            }`}
            onClick={handleClickHeart}
          />
          <span className="text-gray-600">{likeCount}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Star
            size={25}
            className={`cursor-pointer ${
              heartState ? "text-yellow-500" : "text-gray-400"
            }`}
          />
          <span className="text-gray-600">{rating}</span>
        </div>
        <Button
          className="bg-black text-white rounded-full w-20 h-8 hover:bg-gray-800 transition-colors mt-2"
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

export default ReviewBox;
