export interface Goods {
  id: number;
  applyUser: string;
  category1Id: number;
  category2Id: number;
  createTime: string;
  detailList?: string[];
  floralLanguage: string;
  imageUrl: string;
  isDeleted: number;
  isRecommend: number;
  marketPrice: number;
  material: string;
  name: string;
  packing: string;
  price: number;
  saleCount: number;
  stockCount: number;
  updateTime: string;
}

export interface GoodsList {
  countId?: number;
  current: number;
  hitCount?: boolean;
  maxLimit?: number;
  optimizeCountSql?: boolean;
  orders: Goods[];
  pages: number;
  searchCount?: boolean;
  size: number;
  total: number;
  records: Goods[];
}
