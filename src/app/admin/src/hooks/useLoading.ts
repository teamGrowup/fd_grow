"use client"; // 클라이언트 컴포넌트로 동작하게 설정
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useLoading = () => {
    const [nowLoading, setNowLoading] = useState<boolean>(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleStart = () => {
            setNowLoading(true);
        };

        const handleEnd = () => {
            setNowLoading(false);
        };

        handleStart();
        handleEnd();

    }, [pathName]);

    return nowLoading;
};
