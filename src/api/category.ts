import { httpGet } from '@/http';
import { CategoryData } from '@/types/category';

export const getCategoryList = httpGet<CategoryData[]>(
  '/index/findCategoryTree'
);
