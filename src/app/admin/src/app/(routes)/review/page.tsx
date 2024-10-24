"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../lib/store";

import ReviewBox from "../../../components/ReviewBox";

import LogoBar from "../../../components/LogoBar";

interface ReviewData {
  profileImg: string;
  productImg: string;
  review: string;
}

const ReviewMonitoringPage: React.FC = () => {
  const router = useRouter();
  const { accessToken } = useAuthStore();
  const [Reviewdata, setReviewData] = useState<ReviewData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const fetchResponse = await fetch("http://backendApi/admins/reviews", {
          headers: {
            "Content-Type": "application/json",
            Authentication: `bearer ${accessToken}`,
          },
          method: "GET",
        });

        if (!fetchResponse.ok) {
          throw new Error("Fail to fetch data...");
        }

        const data = await fetchResponse.json();

        setReviewData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [accessToken]);

  return (
    <>
      <LogoBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col flex-grow gap-3 place-items-center">
          <ReviewBox id="1" />
          <ReviewBox id="2" />
          <ReviewBox id="3" />
          <ReviewBox id="4" />
          <ReviewBox id="5" />
          <ReviewBox id="6" />
          <ReviewBox id="7" />
        </div>
      </div>
    </>
  );
};

export default ReviewMonitoringPage;
