export interface Banner {
  createTime: string;
  id: number;
  imageUrl: string;
  isDeleted: number;
  linkUrl: string;
  sort: number;
  title: string;
  updateTime: string;
}

export interface Category {
  id: number;
  imageUrl: string;
  name: string;
}

export interface Advertisement {
  category2Id: number;
  id: number;
  imageUrl: string;
}

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
