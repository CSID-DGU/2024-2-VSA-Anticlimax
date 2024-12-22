package org.dongguk.dscd.wooahan.api.core.exception.error;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

    // Method Not Allowed Error
    METHOD_NOT_ALLOWED(40500, HttpStatus.METHOD_NOT_ALLOWED, "지원하지 않는 HTTP 메소드입니다."),

    // Not Found Error
    NOT_FOUND_END_POINT(40400, HttpStatus.NOT_FOUND, "존재하지 않는 API 엔드포인트입니다."),
    NOT_FOUND_AUTHORIZATION_HEADER(40401, HttpStatus.NOT_FOUND, "Authorization 헤더가 존재하지 않습니다."),
    NOT_FOUND_RESOURCE(40402, HttpStatus.NOT_FOUND, "존재하지 않는 리소스입니다."),
    NOT_FOUND_ACCOUNT(40403, HttpStatus.NOT_FOUND, "존재하지 않는 계정입니다."),
    NOT_FOUND_USER(40404, HttpStatus.NOT_FOUND, "존재하지 않는 사용자입니다."),
    NOT_FOUND_EXPERT(40404, HttpStatus.NOT_FOUND, "존재하지 않는 전문가입니다."),
    NOT_FOUND_ADMIN(40404, HttpStatus.NOT_FOUND, "존재하지 않는 관리자입니다."),
    NOT_FOUND_ARTICLE(40405, HttpStatus.NOT_FOUND, "존재하지 않는 칼럼입니다."),
    NOT_FOUND_COMMENT(40406, HttpStatus.NOT_FOUND, "존재하지 않는 댓글입니다."),
    NOT_FOUND_MEDICATION(40407, HttpStatus.NOT_FOUND, "존재하지 않는 약입니다."),
    NOT_FOUND_SCHEDULE(40408, HttpStatus.NOT_FOUND, "존재하지 않는 복용 기록입니다."),
    NOT_FOUND_QUESTION(40409, HttpStatus.NOT_FOUND, "존재하지 않는 질문입니다."),
    NOT_FOUND_ANSWER(40410, HttpStatus.NOT_FOUND, "존재하지 않는 답변입니다."),

    // Invalid Argument Error
    MISSING_REQUEST_PARAMETER(40000, HttpStatus.BAD_REQUEST, "필수 요청 파라미터가 누락되었습니다."),
    MISSING_REQUEST_ARGUMENT(40000, HttpStatus.BAD_REQUEST, "필수 요청 인자가 누락되었습니다."),
    MISSING_REQUEST_HEADER(40000, HttpStatus.BAD_REQUEST, "필수 요청 헤더가 누락되었습니다."),
    MISSING_REQUEST_PART(40000, HttpStatus.BAD_REQUEST, "필수 요청 파트가 누락되었습니다."),
    INVALID_PARAMETER_FORMAT(40001, HttpStatus.BAD_REQUEST, "요청에 유효하지 않은 파라미터입니다."),
    INVALID_ARGUMENT_FORMAT(40001, HttpStatus.BAD_REQUEST, "요청에 유효하지 않은 인자입니다."),
    INVALID_HEADER_FORMAT(40001, HttpStatus.BAD_REQUEST, "요청에 유효하지 않은 헤더입니다."),
    INVALID_PART_FORMAT(40001, HttpStatus.BAD_REQUEST, "요청에 유효하지 않은 파트입니다."),
    BAD_REQUEST_PARAMETER(40002, HttpStatus.BAD_REQUEST, "잘못된 요청 파라미터입니다."),
    BAD_REQUEST_ARGUMENT(40002, HttpStatus.BAD_REQUEST, "잘못된 요청 인자입니다."),
    BAD_REQUEST_HEADER(40002, HttpStatus.BAD_REQUEST, "잘못된 요청 헤더입니다."),
    BAD_REQUEST_JSON(40002, HttpStatus.BAD_REQUEST, "잘못된 JSON 형식입니다."),
    UNSUPPORTED_MEDIA_TYPE(40003, HttpStatus.BAD_REQUEST, "지원하지 않는 미디어 타입입니다."),
    DUPLICATED_RESOURCE(40004, HttpStatus.BAD_REQUEST, "중복된 리소스입니다."),
    DUPLICATE_PASSWORD(40004, HttpStatus.BAD_REQUEST, "이전 비밀번호와 동일한 비밀번호입니다."),

    // Conflict Error
    CONFLICT_MEDICATION(40900, HttpStatus.CONFLICT, "이미 등록된 약입니다."),
    CONFLICT_SCHEDULE(40901, HttpStatus.CONFLICT, "이미 복용한 약입니다."),

    // Access Denied Error
    ACCESS_DENIED(40300, HttpStatus.FORBIDDEN, "접근 권한이 없습니다."),
    NOT_LOGIN_USER(40301, HttpStatus.FORBIDDEN, "로그인하지 않은 사용자입니다."),
    ACCESS_DENIED_ARTICLE(40302, HttpStatus.FORBIDDEN, "칼럼에 대한 접근 권한이 없습니다."),
    ACCESS_DENIED_COMMENT(40303, HttpStatus.FORBIDDEN, "댓글에 대한 접근 권한이 없습니다."),
    ACCESS_DENIED_QUESTION(40304, HttpStatus.FORBIDDEN, "질문에 대한 접근 권한이 없습니다."),
    ACCESS_DENIED_ANSWER(40305, HttpStatus.FORBIDDEN, "답변에 대한 접근 권한이 없습니다."),

    // Unauthorized Error
    FAILURE_LOGIN(40100, HttpStatus.UNAUTHORIZED, "잘못된 아이디 또는 비밀번호입니다."),
    TOKEN_EXPIRED_ERROR(40101, HttpStatus.UNAUTHORIZED, "만료된 토큰입니다."),
    TOKEN_INVALID_ERROR(40102, HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다."),
    TOKEN_MALFORMED_ERROR(40103, HttpStatus.UNAUTHORIZED, "토큰이 올바르지 않습니다."),
    TOKEN_TYPE_ERROR(40104, HttpStatus.UNAUTHORIZED, "토큰 타입이 일치하지 않거나 비어있습니다."),
    TOKEN_UNSUPPORTED_ERROR(40105, HttpStatus.UNAUTHORIZED, "지원하지 않는 토큰입니다."),
    TOKEN_GENERATION_ERROR(40106, HttpStatus.UNAUTHORIZED, "토큰 생성에 실패하였습니다."),
    TOKEN_UNKNOWN_ERROR(40107, HttpStatus.UNAUTHORIZED, "알 수 없는 토큰입니다."),


    // Too Many Requests Error
    TOO_FAST_AUTHENTICATION_CODE_REQUESTS(42900, HttpStatus.TOO_MANY_REQUESTS, "인증코드 발급 속도가 너무 빠릅니다."),
    TOO_MANY_AUTHENTICATION_CODE_REQUESTS(42901, HttpStatus.TOO_MANY_REQUESTS, "인증코드 발급 요청이 너무 많습니다."),

    // Internal Server Error
    INTERNAL_SERVER_ERROR(50000, HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 에러입니다."),
    INTERNAL_DATA_ERROR(50001, HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 데이터 에러입니다."),
    UPLOAD_FILE_ERROR(50001, HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패하였습니다."),

    // External Server Error
    EXTERNAL_SERVER_ERROR(50200, HttpStatus.BAD_GATEWAY, "서버 외부 에러입니다."),

    ;

    private final Integer code;
    private final HttpStatus httpStatus;
    private final String message;
}
