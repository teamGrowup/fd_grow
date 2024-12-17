import { Gender } from "../../../types/enum";

export default interface SignUpRequestDto{
  email: string;
  password: string;
  phoneNumber: string;
  birthday: string;
  gender: Gender | string;
  // address: string;
  // postCode: string;
  name: string;
  nickname: string;
  isValidEmail: boolean;
  isAgreeSendEmail: boolean;
  isAgreeSendSms: boolean; 
}