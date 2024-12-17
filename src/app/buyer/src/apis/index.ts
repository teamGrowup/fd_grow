import axios, { AxiosRequestConfig } from 'axios';
import type { AxiosResponse } from "axios";
import { PhoneAuthcodesRequestDto, SignInRequestDto, SignUpRequestDto } from './request/auth';
import SignInResponseDto from './response/auth/sign-in.response.dto';
import { SingUpResponseDto } from './response/auth';
import BaseResponse from './response/base-response.dto';
import { TokenDTO } from '../types/interface';
import { ResponseCode } from '../types/enum';
import FavoriteKeywordResponseDto from './response/search/favorite-keyword.response.dto';
import {PhoneCertificationRequestDTO} from './request/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

const responseHandler = <T>(response: AxiosResponse<any, any>) => {
  const responseBody: T = response.data;
  return responseBody;
}

const errorHandler = (error: any) => {
  if (!error.response || !error.response.data) return null;
    const responseBody: BaseResponse = error.response.data;
    return responseBody;
}

const authorization = (accessToken: string) => {
  return { headers: { Authorization: `Bearer ${accessToken}` } }
};

const SIGN_IN_URL = () => `${API_BASE_URL}/customers/email/login`;
const SIGN_UP_URL = () => `${API_BASE_URL}/customers/email/registers`;

const SIGN_IN_GOOGLE_URL = () => `${API_BASE_URL}/customers/oauth/google`;
const PHONE_VALIDATION_URL = () => `${API_BASE_URL}/customers/phone-numbers/validations/registers`;
const PHONE_VALIDATION_CODE_URL = () => `${API_BASE_URL}/customers/phone-numbers/validations/codes`;


// export const signInEmailRequest = async (requestBody: SignInRequestDto) => {
//   const result = await axios.post(SIGN_IN_URL(), requestBody)
//       .then(response => {
//           const responseBody: SignInResponseDto = response.data;
//           return responseBody;
//       })
//       .catch(error => {
//         if (!error.response.data) return null;
//         const responseBody: BaseResponse = error.response.data;
//         return responseBody;
//       })
//   return result;
// }
export const signInEmailRequest = async (requestBody: SignInRequestDto) => {
  try {
    const response = await axios.post(SIGN_IN_URL(), requestBody);
    return responseHandler<SignInResponseDto>(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const signUpRequest = async (requestBody: SignUpRequestDto) => {
  const result = await axios.post(SIGN_UP_URL(), requestBody)
      .then(responseHandler<SingUpResponseDto>)
      .catch(errorHandler);
  return result;
}

export const phoneCertificationRequest = async (requestBody: PhoneCertificationRequestDTO) => {
  const result = await axios.post(PHONE_VALIDATION_URL(), requestBody)
      .catch(errorHandler);
  return result;
}

export const phoneValidationCodeRequest = async (requestBody: PhoneAuthcodesRequestDto) => {
  const result = await axios.post(PHONE_VALIDATION_CODE_URL(), requestBody)
    .catch(errorHandler);
  return result;
}


// export const phonevalidationRequest = async (requestBody: ) => {
//   const result = await axios.post(PHONE_VALIDATION_URL(), requestBody)
//     .then(response => {
//       const responseBody = response.data;
//       return requestBody;
//     }).catch(error => {
//       if (!error.response.data) return null;
//       const responseBody: BaseResponse = error.response.data;
//       return responseBody;
//     });
// return result;
// }

// export const emailCertificationRequest = async (requestBody: )/

const GET_SEARCH_URL = (keyword: string) => `${API_BASE_URL}/searches?keyword=${encodeURIComponent(keyword)}`
const GET_FAVORITE_KEYWORD_URL = () => `${API_BASE_URL}/searches/favorite-keywords`;

// export const searchRequest = async (keyword: string) => {
//   try {
//     const response = await axios.get(GET_SEARCH_URL(keyword));
//     return responseHandler<SearchResponseDto>(response);
//   } catch (error) {
//     return errorHandler(error);
//   }
// };

export const favoriteKeywordRequest = async () => {
  const result = await axios.get(GET_FAVORITE_KEYWORD_URL())
      .then(responseHandler<FavoriteKeywordResponseDto>)
      .catch(errorHandler);
  return result;
}

const POST_PRODUCT_LIKE_URL = (productId: number | string) => `${API_BASE_URL}/product/${productId}/like`;
const DELETE_PRODUCT_LIKE_URL = (productId: number | string) => `${API_BASE_URL}/product/${productId}/like`;

export const addPoductLikeRequest = async (productId: number | string, accessToken: string) => {
  const result = await axios.post(POST_PRODUCT_LIKE_URL(productId), authorization(accessToken))
      .then(responseHandler<BaseResponse>)
      .catch(errorHandler);
  return result;
}

export const deletePoductLikeRequest = async (productId: number | string, accessToken: string) => {
  const result = await axios.post(DELETE_PRODUCT_LIKE_URL(productId), authorization(accessToken))
      .then(responseHandler<BaseResponse>)
      .catch(errorHandler);
  return result;
}
