// import { useAuthStore } from '../lib/store';
// import { useEffect, useState } from 'react';

// export const useAuthenticatedFetch = () => {
//   const { accessToken, refreshToken, setAccessToken, logout } = useAuthStore(
//     (state) => ({
//       accessToken: state.accessToken,
//       refreshToken: state.refreshToken,
//       setAccessToken: state.setAccessToken,
//       logout: state.logout,
//     })
//   )

//   const authFetch = async (url: string, options: RequestInit = {}) => {
//     const headers = new Headers(options.headers);
//     headers.set('Authorization', `Bearer ${accessToken}`);

//     let response = await fetch(url, { ...options, headers });

//     if (response.status === 401) {
//       // try{
//       //   console.log("Access token expired. Attempting to refresh...");

//       //   const refreshResponse = await 
//       // refreshToken을 따로 받는 api 필요 } 
//     }

//     return response;
//   };

//   return { authFetch };
// };

import { useAuthStore } from '../lib/store';
import { useEffect, useState } from 'react';

export const useAuthenticatedFetch = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  console.log(accessToken + '있어요!!')

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${accessToken}`);

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      useAuthStore.getState().logout();
      throw new Error('Token expired');
    }

    return response;
  };

  return { authFetch };
};