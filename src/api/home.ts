import { httpGet } from '@/http';
import { Banner, Category, Advertisement } from '@/types/home';
import { Goods } from '@/types/goods';

export const getBanners = httpGet<Banner[]>(
  'https://gmall-prod.atguigu.cn/mall-api/index/findBanner'
);
export const getCategories = httpGet<Category[]>(
  'http://127.0.0.1:8890/home/categoryLevel1'
);
export const getAdvertisement = httpGet<Advertisement[]>(
  'https://gmall-prod.atguigu.cn/mall-api/index/advertisement'
);
export const getListGoods = httpGet<Goods[]>(
  'http://127.0.0.1:8890/home/findListGoods'
);
