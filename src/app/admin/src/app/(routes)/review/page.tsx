"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/packages/ui/src/index";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.png";

import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../lib/store";

import ReviewBox from "../../../components/ReviewBox";

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
      <div className="bg-black py-12 relative w-full">
        <Image
          src={Logo}
          alt="logo"
          className="absolute w-1/5 h-full top-0 left-0 cursor-pointer translate-x-6"
          onClick={() => router.push("/main")}
        />
      </div>
      <div className="flex flex-col gap-3 mt-5 overflow-y-auto">
        <ReviewBox id="1" />
        <ReviewBox id="2" />
        <ReviewBox id='3' />
        <ReviewBox id='4' />
        <ReviewBox id='5' />
      </div>
    </>
  );
};

export default ReviewMonitoringPage;
