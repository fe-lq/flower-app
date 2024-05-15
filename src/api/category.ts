import { httpGet } from '@/http';
import { CategoryData } from '@/types/category';

export const getCategoryList = httpGet<CategoryData[]>(
  'http://127.0.0.1:8890/category/list'
);
