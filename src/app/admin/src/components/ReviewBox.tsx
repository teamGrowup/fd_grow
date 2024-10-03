import React from "react";
import { Button } from "@/packages/ui/src";
import { Heart } from "lucide-react";

interface ReviewBoxProps {
  id: string;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ id }) => {
  const DeleteReview = async () => {
    try {
      const fetchResponse = await fetch(`http://backend-api/reviews/${id}`, {
        method: "DELETE",
      });

      if (!fetchResponse.ok) {
        throw new Error("Fail to delete review");
      }

      window.alert("리뷰가 성공적으로 삭제되었습니다");
    } catch (error) {
      console.error(error);
      window.alert("리뷰 삭제에 실패했습니다.");
    }
  };

  const handleDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteCheck = window.prompt("리뷰를 삭제할까요?");
    if (deleteCheck) {
      await DeleteReview();
    }
  };

  return (
    <div className="w-full min-w-3/4 min-h-[120px] bg-white border border-gray-300 shadow-lg rounded-lg flex mx-auto my-4 overflow-hidden">
      <div className="w-1/3 flex justify-center items-center">
        <div className="bg-gray-200 w-[58px] h-[50px] flex justify-center items-center rounded-md">
          <p className="text-black text-sm">상품사진</p>
        </div>
      </div>
      <div className="bg-black w-2/3 h-full flex items-center justify-center rounded-r-lg">
        <p className="text-white text-lg font-semibold">후기</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center justify-center w-[89px] h-[29px]">
          <p className="text-black text-center flex items-center gap-1">
            <Heart size={"18px"} className="text-red-500" />0
          </p>
        </div>
        <Button
          className="bg-black text-white rounded-full w-[60px] h-[28px] hover:bg-gray-800 transition-colors -translate-x-2"
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

export default ReviewBox;
