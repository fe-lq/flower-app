import { httpGet } from '@/http';
import { Banner, Category, Advertisement } from '@/types/home';
import {Goods} from '@/types/goods'

export const getBanners = httpGet<Banner[]>('/index/findBanner');
export const getCategories = httpGet<Category[]>('/index/findCategory1');
export const getAdvertisement = httpGet<Advertisement[]>(
  '/index/advertisement'
);
export const getListGoods = httpGet<Goods[]>('/index/findListGoods');
export const getRecommendGoods = httpGet<Goods[]>('/index/findRecommendGoods');
