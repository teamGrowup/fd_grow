import { Provider } from "../../../types/enum";

export default interface PhoneCertificationRequestDTO {
    phoneNumber: string; // 전화번호 (예: 010-8420-4241)
    provider: Provider;  // 인증 제공자 (EMAIL, GOOGLE, KAKAO, NAVER 중 하나)
}
