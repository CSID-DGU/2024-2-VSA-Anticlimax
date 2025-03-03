import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ZodIssue } from 'zod';

export class AxiosValidationError<T = unknown, D = unknown> extends AxiosError {
    static readonly ERR_BAD_VALIDATION = 'ERR_BAD_VALIDATION';

    constructor(
        config?: InternalAxiosRequestConfig<D>,
        request?: XMLHttpRequest | undefined,
        response?: AxiosResponse<T, D>,
        readonly errors?: ZodIssue[],
    ) {
        super(
            'The provided data is invalid',
            AxiosValidationError.ERR_BAD_VALIDATION,
            config,
            request,
            response,
        );
    }
}

export default AxiosValidationError;
