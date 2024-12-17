import BaseResponse from "../base-response.dto";

interface data{
  keyword: string;
  searchCount: number;
}
export default interface FavoriteKeywordResponseDto extends BaseResponse<data>{

}