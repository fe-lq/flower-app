/** 用户相关接口 */
import { httpPost } from "@/http";

/** 用户登录接口 */
export namespace UserLogin {
  export type Request = WxUser;

  export interface Response {
    token: string;
  }

  export const request = httpPost<Response, Request>("/user/login");
}

/** 修改用户信息接口 */
export namespace UserUpdate {
  export type Request = User;

  export interface Response {
    message: string;
  }

  export const request = httpPost<Response, Request>("/user/update");
}

export interface User {
  /** 用户名 */
  userName: string;

  /** 用户手机号 */
  userPhone: string;

  /** 用户头像 */
  userAvatar: string;

  /** 用户性别 */
  userSex?: "MALE" | "FEMALE" | "UNKNOWN";

  /** 用户地址 */
  userAddress?: string;

  /** 用户生日 */
  userBirthday?: string;
}

export interface WxUser {
  /** 微信授权code */
  code: string;

  /** 用户手机号 */
  userPhone: string;
}
