"use client"; // 이 파일도 클라이언트 컴포넌트로 설정

import { useLoading } from "../../hooks/useLoading"; // 올바른 경로로 수정
import LoadingPage from "../Loading"; // 로딩 페이지 컴포넌트 가져오기

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nowLoading = useLoading();

  return (
    <>
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col border border-gray-200">
        {nowLoading && <LoadingPage />} {/* 로딩 페이지 조건부 렌더링 */}
        {!nowLoading && children}
      </div>
    </>
  );
}
