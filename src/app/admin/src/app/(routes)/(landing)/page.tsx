"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/packages/ui/src/index";
import { useAuthApi } from "../../../../../buyer/src/api/auth";
import { useAuthStore } from "../../../../../buyer/src/lib/store";

export default function ManagerLoginPage() {
  const router = useRouter();
  const { login } = useAuthApi();
  const { setAccessToken } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setAccessToken(data.data.accessToken);
      router.push("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="px-2">
        <h2 className="text-2xl font-bold text-center my-[60px]">로그인</h2>
      </div>
      <form className="space-y-8 py-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 mb-1 translate-x-10"
          >
            이메일
          </label>
          <Input
            type="email"
            id="email"
            placeholder="abcdefg@gmail.com"
            className="w-[380px] h-[47px] rounded-full border-black ml-3 mx-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-bold text-gray-700 mb-1 translate-x-10"
          >
            비밀번호
          </label>
          <Input
            type="password"
            id="password"
            placeholder="************"
            className="w-[380px] h-[47px] rounded-full border-black ml-3 mx-auto"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          className="w-[380px] bg-black text-white hover:bg-gray-700 rounded-full py-2 h-[47px] translate-y-3 block mx-auto"
          onClick={handleLogin}
          type="button"
        >
          로그인
        </Button>
      </form>
    </>
  );
}