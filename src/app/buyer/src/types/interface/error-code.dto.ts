interface ErrorCode {
  httpStatus: number;  // HTTP 상태 코드
  code: number;        // 고유 코드
  isSuccess: boolean;  // 요청 성공 여부
  message: string;     // 메시지
}

const ErrorCodes: { [key: string]: ErrorCode } = {
  /* 고정 코드 */
  SUCCESS: { httpStatus: 200, code: 200, isSuccess: true, message: "요청에 성공하였습니다." },
  BAD_REQUEST: { httpStatus: 400, code: 400, isSuccess: false, message: "입력값을 확인해주세요." },
  FORBIDDEN: { httpStatus: 403, code: 403, isSuccess: false, message: "권한이 없습니다." },
  NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "대상을 찾을 수 없습니다." },
  INTERNAL_SERVER_ERROR: { httpStatus: 500, code: 500, isSuccess: false, message: "서버 내부에 오류가 발생했습니다." },

  /* jwt */
  INVALID_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "유효하지 않은 토큰입니다." },
  EXPIRED_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "만료된 토큰입니다." },
  UNSUPPORTED_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "지원되지 않는 토큰입니다." },
  MALFORMED_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "잘못된 형식의 토큰입니다." },
  EMPTY_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "JWT 토큰이 비어 있습니다." },
  WRONG_TYPE_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "잘못된 JWT 서명입니다." },
  ILLEGAL_ARGUMENT_TOKEN: { httpStatus: 401, code: 401, isSuccess: false, message: "JWT 토큰 처리 중 잘못된 인수가 전달되었습니다." },
  UNKNOWN_ERROR: { httpStatus: 500, code: 500, isSuccess: false, message: "알 수 없는 서버 오류가 발생했습니다." },
  ACCESS_DENIED: { httpStatus: 401, code: 401, isSuccess: false, message: "접근이 거부되었습니다." },

  /* Email Verify */
  USER_EMAIL_SEND_ERROR: { httpStatus: 500, code: 500, isSuccess: false, message: "이메일 전송 중 오류가 발생했습니다." },
  EMAIL_WRONG_AUTH_CODE: { httpStatus: 400, code: 400, isSuccess: false, message: "이메일 인증번호가 틀립니다." },

  /* Phone Number Verify */
  PHONE_WRONG_AUTH_CODE: { httpStatus: 400, code: 400, isSuccess: false, message: "문자 인증번호가 틀립니다." },
  INVALID_PHONE_NUMBER: { httpStatus: 403, code: 403, isSuccess: false, message: "인증되지 않은 전화번호 입니다." },

  /* Auth */
  SUCCESS_REGISTER_USER: { httpStatus: 201, code: 201, isSuccess: true, message: "회원가입이 완료되었습니다." },
  USER_ALREADY_REGISTERED: { httpStatus: 409, code: 409, isSuccess: false, message: "이미 가입된 이메일 계정이 있습니다." },

  /* Oauth2.0 */
  NOT_FOUND_GOOGLE_ACCESS_TOKEN_RESPONSE: { httpStatus: 500, code: 500, isSuccess: false, message: "구글 액세스 토큰 요청에 실패했습니다." },
  NOT_FOUND_KAKAO_ACCESS_TOKEN_RESPONSE: { httpStatus: 500, code: 500, isSuccess: false, message: "카카오 액세스 토큰 요청에 실패했습니다." },
  NOT_FOUND_NAVER_ACCESS_TOKEN_RESPONSE: { httpStatus: 500, code: 500, isSuccess: false, message: "네이버 액세스 토큰 요청에 실패했습니다." },
  NEED_TO_GIVE_ADDITIONAL_INFORMATION: { httpStatus: 201, code: 201, isSuccess: true, message: "소셜 로그인 초기 사용자입니다. 추가 정보를 입력해주세요." },

  /* Session 관련 오류 */
  SESSION_EXPIRED: { httpStatus: 400, code: 400, isSuccess: false, message: "세션이 만료되었습니다. 다시 로그인 해주세요." },
  SESSION_NOT_FOUND: { httpStatus: 400, code: 400, isSuccess: false, message: "세션 정보를 찾을 수 없습니다." },
  SESSION_SAVE_FAILED: { httpStatus: 500, code: 500, isSuccess: false, message: "세션에 데이터를 저장하는 데 실패했습니다." },

  /* Validation */
  INVALID_VALUE: { httpStatus: 400, code: 400, isSuccess: false, message: "잘못된 입력값입니다." },
  USER_NOT_FOUND: { httpStatus: 500, code: 500, isSuccess: false, message: "유저를 찾지 못했습니다." },

  /* 마이페이지 */
  IS_PRESENT_EMAIL: { httpStatus: 400, code: 400, isSuccess: false, message: "이미 사용하고 계신 이메일 입니다." },
  SAME_PASSWORD: { httpStatus: 400, code: 400, isSuccess: false, message: "이미 사용 중인 비밀번호로 변경할 수 없습니다." },
  ADDRESS_NOT_FOUND: { httpStatus: 400, code: 400, isSuccess: false, message: "배송지를 찾을 수 없습니다." },

  /* Product 관련 */
  PRDOUCT_NOT_APPROVED: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 상품은 승인되지 않았습니다." },
  PRODUCT_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "상품을 찾을 수 없습니다." },
  PRODUCT_NAME_ALREADY_EXISTS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 상품명은 이미 존재합니다." },
  PRODUCT_BY_SELLER_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 셀러ID의 상품은 존재하지 않습니다." },
  SUBCATEGORY_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "유효하지 않은 서브 카테고리 ID입니다." },
  PRODUCT_LIKE_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "좋아요 정보를 찾을 수 없습니다." },
  PRODUCT_OPTION_NOT_ENOUGH_STOCK: { httpStatus: 409, code: 409, isSuccess: false, message: "해당 상품 옵션의 재고가 부족합니다." },
  PRODUCT_OPTIONS_SOME_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "일부 상품 옵션을 찾을 수 없습니다." },

  /* Brand 관련 */
  BRAND_NAME_ALREADY_EXISTS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 브랜드명은 이미 존재합니다." },
  BRAND_BY_SELLER_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 셀러ID의 브랜드는 존재하지 않습니다." },
  BRAND_BY_ID_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 ID를 가진 BRAND는 존재하지 않습니다." },

  /* Seller 관련 */
  SELLER_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 판매자를 찾을 수 없습니다." },

  /* CUSTOMER 관련 */
  CUSTOMER_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 소비자를 찾을 수 없습니다." },

  /* Admin 관련 */
  ADMIN_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 관리자를 찾을 수 없습니다." },

  /* Board 관련 */
  NOTICE_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 공지사항을 찾을 수 없습니다." },
  INQUIRY_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 문의를 찾을 수 없습니다." },

  /* Order 관련 */
  ORDER_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문을 찾을 수 없습니다." },
  ORDER_ITEM_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문항목을 찾을 수 없습니다." },
  PAY_PRICE_DIFFER_ORDER_PRICE: { httpStatus: 409, code: 409, isSuccess: false, message: "결제금액과 주문금액이 서로 다릅니다." },
  PAY_NOT_SUCCESS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문의 결제 사실을 확인할 수 없습니다." },
  PAY_ALREADY_SUCCESS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문의 결제는 성공했습니다." },
  ORDER_ITEM_NOT_PAID_STATUS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 PAID 상태가 아닙니다." },
  ORDER_ITEM_NOT_PAID_OR_PRE_SHIPPED_STATUS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 PAID 상태 혹은 PRE_SHIPPED 상태가 아닙니다." },
  ORDER_ITEM_NOT_SHIPPED_STATUS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 SHIPPED 상태가 아닙니다." },
  ORDER_ITEM_NOT_PENDING_SHIPMENT_STATUS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 PENDING_SHIPMENT 상태가 아닙니다." },
  ORDER_ITEM_NOT_IN_TRANSIT_STATUS: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 IN_TRANSIT 상태가 아닙니다." },
  CANCEL_ORDER_ITEM_FAIL: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 주문 항목은 주문 취소에 실패했습니다." },

  /* Growpay 관련 */
  GROWPAY_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 Growpay 계좌를 찾을 수 없습니다." },
  INSUFFICIENT_GROWPAY_BALANCE: { httpStatus: 400, code: 400, isSuccess: false, message: "Growpay 잔액이 부족합니다." },
  GROWPAY_HISTORY_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "해당 Growpay 거래 기록을 찾을 수 없습니다." },
  GROWPAY_ACCOUNT_ALREADY_EXISTS: { httpStatus: 400, code: 400, isSuccess: false, message: "해당 계좌는 이미 존재합니다." },

  /* Review 관련 */
  REVIEW_NOT_FOUND: { httpStatus: 404, code: 404, isSuccess: false, message: "리뷰를 찾을 수 없습니다." },
  ALREADY_LIKED_REVIEW: { httpStatus: 404, code: 404, isSuccess: false, message: "이미 이 리뷰에 좋아요를 눌렀습니다." },
  NO_PERMISSION_TO_MODIFY_REVIEW: { httpStatus: 403, code: 403, isSuccess: false, message: "이 리뷰를 수정할 권한이 없습니다." },
  NO_IMAGES_TO_UPDATE: { httpStatus: 404, code: 404, isSuccess: false, message: "업데이트할 이미지가 없습니다." },
};

export default ErrorCodes;
