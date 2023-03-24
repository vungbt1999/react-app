export enum ResponseCode {
  SUCCESS = 200
}

export interface ResponseBase<T> {
  code: ResponseCode;
  success: boolean;
  message?: string;

  content: T;
}

export interface DataResponseError {
  code: ResponseCode;
  success: boolean;
  message?: string;
}
