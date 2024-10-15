"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/packages/ui/src/index";
import { useAuthApi } from "../../../../../buyer/src/api/auth";
import { useAuthStore } from "../../../../../buyer/src/lib/store";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // 아이콘 추가

function ManagerLoginPage() {
  const router = useRouter();
  const { login } = useAuthApi();
  const { setAccessToken } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      setAccessToken(data.data.accessToken);
      router.push("/main");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md px-4">
        <h2 className="text-2xl font-bold text-center my-12">로그인</h2>

        <form className="space-y-6 py-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              아이디
            </label>
            <div className="flex items-center border border-gray-300 rounded-full h-12 px-4">
              <AiOutlineMail className="text-gray-500 mr-3" size={24} />{" "}
              <Input
                type="email"
                id="email"
                placeholder="이메일 입력"
                className="w-full border-none outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              비밀번호
            </label>
            <div className="flex items-center border border-gray-300 rounded-full h-12 px-4">
              <AiOutlineLock className="text-gray-500 mr-3" size={24} />{" "}
              <Input
                type="password"
                id="password"
                placeholder="비밀번호 입력"
                className="w-full border-none outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button
            className="w-full bg-black text-white hover:bg-gray-700 rounded-full py-3 h-12 block"
            onClick={handleLogin}
            type="button"
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ManagerLoginPage;
