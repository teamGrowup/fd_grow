"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../lib/store";
import { useAuthenticatedFetch } from "../../../hooks/useAuthenticatedFetch";

import ReviewBox from "../../../components/ReviewBox";

import LogoBar from "../../../components/LogoBar";

interface ReviewData {
  reviewId: number;
  author: string;
  content: string;
  rating: number;
  likeCount: number;
  reviewImageDTO: {
    reviewImageId: number;
    originalImageName: string;
    path: string;
  };
  productId: number;
  productName: string;
}

const ReviewMonitoringPage: React.FC = () => {
  const { authFetch } = useAuthenticatedFetch();
  const { accessToken } = useAuthStore();
  const [isReHydrated, setIsRehydrated] = useState<boolean>(false);
  const [reviewData, setReviewData] = useState<ReviewData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkRehydration = async () => {
      const storedState = localStorage.getItem("auth-storage");
      if (storedState) {
        setIsRehydrated(true);
      }
    };
    checkRehydration();
  }, []);

  useEffect(() => {
    if (!isReHydrated || !accessToken) {
      return;
    }
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const fetchResponse = await authFetch(
          "http://taegnues.store:12324/admins/reviews",
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );

        if (!fetchResponse.ok) {
          throw new Error("Fail to fetch data...");
        }

        const resultData = await fetchResponse.json();
        console.log(resultData);
        setReviewData(resultData.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [isReHydrated, accessToken]);

  return (
    <>
      <LogoBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col flex-grow gap-3 place-items-center">
          {reviewData?.map((review, index) => (
            <ReviewBox
              author={review.author}
              content={review.content}
              imageName={review.reviewImageDTO.originalImageName}
              imagePath={review.reviewImageDTO.path}
              likeCount={review.likeCount}
              productName={review.productName}
              rating={review.rating}
              reviewId={review.reviewId}
              key={review.reviewId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewMonitoringPage;
