"use client";

import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.png";

import { useRouter } from "next/navigation";

const router = useRouter();

const LogoBar = () => {
  <div className="bg-black py-12 relative w-full">
    <Image
      src={Logo}
      alt="logo"
      className="absolute w-1/5 h-full top-0 left-0 cursor-pointer translate-x-6"
      onClick={() => router.push("/main")}
    />
  </div>;
};

export default LogoBar;
