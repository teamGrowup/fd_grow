"use client"; // 클라이언트 컴포넌트로 동작하게 설정
import { useEffect, useState } from "react";

export const useLoading = () => {
    const [nowLoading, setNowLoading] = useState<boolean>(false);

    useEffect(() => {
        // 페이지가 로드될 때 로딩 상태를 설정합니다.
        const handleStart = () => {
            setNowLoading(true);
        };

        const handleEnd = () => {
            setNowLoading(false);
        };

        // 라우팅 이벤트 리스너를 설정합니다.
        window.addEventListener("beforeunload", handleStart);
        window.addEventListener("load", handleEnd);

        return () => {
            // 이벤트 리스너를 제거합니다.
            window.removeEventListener("beforeunload", handleStart);
            window.removeEventListener("load", handleEnd);
        };
    }, []);

    return nowLoading;
};
