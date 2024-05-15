import CreateRequest, { HttpConfig } from './request';

type Method = 'GET' | 'POST' | 'PUT';
export type DataType<T> = {
  code: number;
  data: T;
  message: string;
};

const http = new CreateRequest({
  // 后面统一路径之后再绑定且使用环境变量
  // baseURL: 'https://gmall-prod.atguigu.cn/mall-api'
  baseURL: ''
});

// 请求拦截
http.setRequestInterceptor((config) => {
  return config;
});

// 响应拦截
http.setResponseInterceptor(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err, '响应错误信息');
    uni.showToast({ title: err.message ?? '接口失败', icon: 'error' });
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
