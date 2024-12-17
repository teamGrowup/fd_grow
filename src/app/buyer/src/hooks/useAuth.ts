// import { useCookies } from "react-cookie"
// import { useAuthStore } from "../lib/store";
// import { useEffect } from "react";

// export const useAuth = () => {
//   const { accessToken, setAccessToken, logout } = useAuthStore();
//   const [cookies] = useCookies(["accessToken"]);

//   useEffect(() => {
//     if (cookies.accessToken && cookies.accessToken !== accessToken) {
//       // 쿠키에 저장된 엑세스토큰을 상태에 반영
//       setAccessToken(cookies.accessToken);
//     } else if (!cookies.accessToken && accessToken) {
//       // 쿠키에 엑세스토큰이 없으면 상태를 초기화
//       logout();
//     }
//   }, [cookies.accessToken, accessToken, setAccessToken, logout]);

//   return !!accessToken; // 로그인 상태를 반환
// }