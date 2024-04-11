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
