import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

interface CustomHeaders {
  isAuth: boolean;
}

const REQ_TIMEOUT = 25 * 1000;
export const __DEV__ = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: REQ_TIMEOUT
});

const initHeader: CustomHeaders = { isAuth: true };

export const getAccessToken = async () => {
  // TODO
  return null;
};

export const getHeader = async (customHeaders?: CustomHeaders) => {
  const header: any = customHeaders || {};
  const initCustomHeader = customHeaders ? customHeaders : initHeader;
  if (!initCustomHeader?.isAuth) {
    delete header.Authorization;
  } else {
    const authToken = await getAccessToken();
    header.Authorization = `Bearer ${authToken}`;
  }
  return { ...header };
};

const requestHandler = (request: InternalAxiosRequestConfig) => {
  if (__DEV__) {
    // console.log(`Request API: ${request.url}`);
    // console.log(`  + Params:     `, request.params);
    // console.log(`  + Data:       `, request.data);
  }
  return request;
};

instance.interceptors.request.use(requestHandler, (error: any) => errorHandler(error));

instance.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);

const errorHandler = (error: AxiosError) => {
  const resError: AxiosResponse<any> | undefined = error.response;
  if (__DEV__) {
    // console.log(`Response API:`, resError?.data);
  }
  return Promise.reject({ ...resError?.data });
};

const successHandler = async (response: AxiosResponse) => {
  if (__DEV__) {
    // console.log(`Response API: ${response.config.url}`, response.data);
  }
  const data: any = response.data;
  return data;
};

async function get<ReqType, ResType>(
  url: string,
  params?: ReqType,
  customHeaders?: CustomHeaders,
  responseType?: ResponseType
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  return instance.get(url, { params, headers, responseType });
}

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  return instance.post(url, { ...data }, { headers });
}

async function postForm<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  return instance.post(url, data, { headers });
}

async function put<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  return instance.put(url, { ...data }, { headers });
}

async function remove<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = await getHeader(customHeaders);
  return instance.delete(url, { data: { ...data }, headers: { ...headers } });
}

const ApiUtils = { get, post, put, postForm, remove };
export default ApiUtils;
