"use client";

import React from "react";
import Image from "next/image";
import Logo from "@/app/admin/src/assets/smallLogo.png";

import { useRouter } from "next/navigation";

import { ChartNoAxesCombined } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { Store } from "lucide-react";
import { Monitor } from "lucide-react";

const LogoBar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-black py-12 sticky top-0 z-10 w-full flex">
      <Image
        src={Logo}
        alt="logo"
        className="absolute w-1/5 h-full top-0 left-0 cursor-pointer translate-x-6"
        onClick={() => router.push("/main")}
      />
      <menu className="flex justify-center items-center gap-6 absolute right-6 -translate-y-1/2">
        <li
          className="text-white cursor-pointer"
          onClick={() => router.push("/mallStatus")}
        >
          <ChartNoAxesCombined className="w-8 h-8" />
        </li>
        <li
          className="text-white cursor-pointer"
          onClick={() => router.push("/product")}
        >
          <PackageSearch className="w-8 h-8" />
        </li>
        <li
          className="text-white cursor-pointer"
          onClick={() => router.push("/brand")}
        >
          <Store className="w-8 h-8" />
        </li>
        <li
          className="text-white cursor-pointer"
          onClick={() => router.push("/review")}
        >
          <Monitor className="w-8 h-8" />
        </li>
      </menu>
    </div>
  );
};

export default LogoBar;
