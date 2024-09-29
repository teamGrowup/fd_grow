import React from "react";
import { Button } from "@/packages/ui/src";
import { Heart } from "lucide-react";

interface ReviewBoxProps {
  id: string; // id props의 타입을 정의
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
      console.error(error); // 에러 로그 출력
      window.alert("리뷰 삭제에 실패했습니다."); // 사용자에게 에러 메시지 알림
    }
  };

  const handleDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteCheck = window.prompt("리뷰를 삭제할까요??");
    if (deleteCheck) {
      await DeleteReview(); // DeleteReview 함수 호출
    }
  };

  return (
    <>
      <div className="w-[366px] h-[124px] bg-white flex mx-auto" id={id}>
        <div className="w-1/3 relative">
          <div className="bg-gray-300 w-[58px] h-[50px] translate-x-2 translate-y-3">
            <p className="text-black text-sm">상품사진</p>
          </div>
        </div>
        <div className="bg-black w-2/3 h-[113px] relative my-auto">
          <p className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            후기
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="translate-x-10 w-[89px] h-[29px] flex items-center justify-center">
          <p className="text-black text-center flex justify-center items-center gap-3">
            <span>
              <Heart size={"18px"} />
            </span>
            0
          </p>
        </div>
        <Button
          className="bg-black text-white rounded-full w-[60px] h-[28px] -translate-x-10"
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </>
  );
};

export default ReviewBox;
