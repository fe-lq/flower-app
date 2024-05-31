/** 商品接口 */
import { httpPost, httpGet } from '@/http';

export namespace GoodsList {
  export type Request = GoodsRequestLimit;

  export type Response = GoodsResponseLimit;

  export const request = httpPost<Response, Request>('/goods/list');
}

/** 查询单个商品 */
export namespace GoodsDetail {
  export interface Request {
    /** 商品唯一主键 */
    id: number;
  }

  export type Response = Goods;

  export const request = httpGet<Response, Request>('/goods/detail');
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

export interface GoodsResponseLimit {
  /** 商品列表 */
  records: Goods[];

  /** 总条数 */
  total: number;

  /** 当前页码 */
  page: number;

  /** 每页显示的条数 */
  pageSize: number;
}

export type GoodsRequestLimit = GoodsRequest & {
  /** 当前页码 */
  page: number;

  /** 每页显示的条数 */
  pageSize: number;
};

export interface GoodsRequest {
  /** 商品类型ID */
  goodsTypeId?: number;

  /** 商品名称 */
  goodsName?: string;
}
