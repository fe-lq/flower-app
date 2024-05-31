/** 首页相关接口 */
import { httpGet } from '@/http';

/** 首页获取banner接口 */
export namespace HomeFindBanner {
  export type Request = unknown;

  export type Response = {
    updateTime: string;

    title: string;

    sort: number;

    linkUrl: string;

    isDeleted: number;

    imageUrl: string;

    id: number;

    createTime: string;
  }[];

  export const request = httpGet<Response, Request>('/home/findBanner');
}

/** 首页获取广告接口 */
export namespace HomeAdvertisement {
  export type Request = unknown;

  export type Response = {
    imageUrl: string;

    id: number;

    category2Id: number;
  }[];

  export const request = httpGet<Response, Request>('/home/advertisement');
}

/** 首页获取商品接口 */
export namespace HomeFindListGoods {
  export type Request = unknown;

  export type Response = Goods[];

  export const request = httpGet<Response, Request>('/home/findListGoods');
}

/** 首页获取分类接口 */
export namespace HomeGetCategoryLevel1 {
  export type Request = unknown;

  export type Response = Category[];

  export const request = httpGet<Response, Request>('/home/getCategoryLevel1');
}

export interface Category {
  /** 分类id */
  id: number;

  /** 分类名称 */
  typeName: string;

  /** 分类图片 */
  typeImg: string;

  /** 是否启用 */
  typeEnable: boolean;

  /** 父级分类id */
  typeParentId?: number;

  /** 子类 */
  children?: Category[];
}

export interface Goods {
  /** 商品ID */
  id: number;

  /** 商品类型ID */
  goodsTypeId: number;

  /** 商品名称 */
  goodsName: string;

  /** 商品库存 */
  goodsAmount: number;

  /** 商品价格 */
  goodsPrice: number;

  /** 商品划线价格 */
  goodsMarkPrice: number;

  /** 商品成本价 */
  goodsCostPrice: number;

  /** 商品描述 */
  goodsDesc?: string;

  /** 商品图片 */
  goodsImgs: string[];

  /** 商品已售量 */
  goodsSellCount: number;

  /** 商品创建时间 */
  goodsCreate: string;

  /** 商品更新时间 */
  goodsUpdate: string;

  /** 商品所属用户 */
  goodsUser?: string;

  /** 商品所属用户id */
  goodsUserId?: number;

  /** 商品评论 */
  goodsComments: string[];
}
