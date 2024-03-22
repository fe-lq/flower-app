import CreateRequest, { HttpConfig } from './request';

type Method = 'GET' | 'POST' | 'PUT';
export type DataType<T> = {
  code: number;
  data: T;
  message: string;
};

const http = new CreateRequest({
  baseURL: 'https://gmall-prod.atguigu.cn/mall-api'
});

// 请求拦截
http.setRequestInterceptor((config) => {
  console.log(config, '请求信息');
  return config;
});

// 响应拦截
http.setResponseInterceptor(
  (res) => {
    console.log(res, '响应信息');
    return res.data;
  },
  (err) => {
    console.log(err, '响应错误信息');
    return Promise.reject(err);
  }
);

const createHttp = (type: Method) => {
  return <T = unknown, Q = unknown>(url: string) => {
    return (data?: Q, config?: HttpConfig) =>
      http.request<DataType<T>>(
        Object.assign({ url, data }, { method: type }, config)
      );
  };
};

export const httpGet = createHttp('GET');
export const httpPost = createHttp('POST');
export const httpPut = createHttp('PUT');
