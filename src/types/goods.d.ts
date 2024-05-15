export interface Goods {
  id: number;
  goodsTypeId: number;
  goodsImgs: string[];
  goodsUserId: number;
  goodsDesc: number;
  goodsMarkPrice: number;
  goodsName: string;
  goodsCostPrice: number;
  goodsPrice: number;
  goodsSellCount: number;
  goodsCreate: string;
}

export interface GoodsList {
  page: number;
  pageSize: number;
  total: number;
  records: Goods[];
}

export interface GoodsRequest {
  page?: number;
  pageSize?: number;
  goodsTypeId?: number;
  goodsName?: string;
}
