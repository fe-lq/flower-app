import { httpGet } from '@/http';
import { Goods } from '@/types/home';

export const getGoods = (id: number) => httpGet<Goods[]>(`/goods/${id}`)();
