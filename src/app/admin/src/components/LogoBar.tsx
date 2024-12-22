"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.webp";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useAuthStore } from "../lib/store";

const LogoBar: React.FC = () => {
  const router = useRouter();
  const { accessToken, setAccessToken, setRefreshToken, clearStorage } =
    useAuthStore();

  const handleLogout = () => {
    // setAccessToken(null);
    // setRefreshToken(null);
    clearStorage();
    router.push("/");
  };
  return (
    <div className="bg-black py-3 w-full flex items-center justify-between px-6">
      {/* 로고 */}
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="logo"
          width={90}
          height={90}
          priority // 자동 프리로드
          className="cursor-pointer"
          onClick={() => router.push("/main")}
        />
      </div>

      {/* 메뉴 아이콘 */}
      <menu className="flex items-center gap-6">
        {accessToken && (
          <li className="text-white cursor-pointer mr-4" onClick={handleLogout}>
            <MdLogout className="w-10 h-10" />
          </li>
        )}
      </menu>
    </div>
  );
};

export default React.memo(LogoBar);
