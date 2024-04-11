import { httpGet } from '@/http';
import { Goods, GoodsList } from '@/types/goods';

export const getGoods = (id: number) => httpGet<Goods[]>(`/goods/${id}`)();
export const getGoodsList = (params: {
  page: number;
  pageSize: number;
  category2Id: number;
}) =>
  httpGet<GoodsList, { category2Id: number }>(
    `/goods/list/${params.page}/${params.pageSize}`
  )({ category2Id: params.category2Id });
