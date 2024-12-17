import { ResponseCode } from '../../types/enum'

export default interface BaseResponse<T = any>{
    code: ResponseCode;
    isSuccess: boolean;
    message: string;
    data?: T;
}