export type HttpConfig = UniNamespace.RequestOptions & { baseURL: string };
// 重写请求成功的data数据类型，跟据外面传的类型绑定
export type SuccessCallbackResult<D> = Omit<
  UniNamespace.RequestSuccessCallbackResult,
  'data'
> & { data: D };

interface Interceptors {
  request?: (config: HttpConfig) => HttpConfig;
  response?: <U>(response: SuccessCallbackResult<U>) => U;
  reject?: (err: any) => any;
}

class CreateRequest {
  // 默认请求配置
  private defaultOptions: HttpConfig = {
    baseURL: '',
    url: '',
    header: {
      'Content-type': 'application/json'
    },
    method: 'GET'
  };

  // 定义请求拦截器
  private interceptors: Interceptors = {};

  constructor(options: Omit<HttpConfig, 'url' | 'method'>) {
    // 实例化后合并配置
    this.defaultOptions = Object.assign({}, this.defaultOptions, options);
  }

  // 设置连接器时回调函数必传
  setRequestInterceptor(callback: NonNullable<Interceptors['request']>) {
    this.interceptors.request = callback;
  }

  setResponseInterceptor(
    resFn: NonNullable<Interceptors['response']>,
    errFn?: NonNullable<Interceptors['reject']>
  ) {
    this.interceptors.response = resFn;
    this.interceptors.reject = errFn;
  }

  // 泛型处理响应的data数据
  request<T>(config: HttpConfig) {
    // 调用请求拦截器处理配置
    const transferParams = Object.assign(
      this.defaultOptions,
      this.interceptors.request?.(config) || config
    );
    // 拼接请求地址
    transferParams.url = transferParams.baseURL + config.url;

    return new Promise<T>((resolve, reject) => {
      uni.request({
        ...transferParams,
        success: (result) => {
          // 调用响应拦截器处理响应数据
          let res = result as T;
          if (this.interceptors.response) {
            res = this.interceptors.response?.<T>(
              result as SuccessCallbackResult<T>
            );
          }
          resolve(res);
        },
        fail: (err: any) => {
          reject(this.interceptors.reject?.(err) || err);
        }
      });
    });
  }
}

export default CreateRequest;
