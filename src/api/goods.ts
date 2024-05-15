import { httpPost } from '@/http';
import { Goods, GoodsList, GoodsRequest } from '@/types/goods';

/**
 * 获取商品详情
 * @param {number} id - 商品ID
 * @returns {Promise<Goods[]>} - 包含商品详情的Promise
 */
export const getGoodsDetail = httpPost<Goods, { id: number }>(
  'http://127.0.0.1:8890/goods/detail'
);

/**
 * 获取商品列表
 * @param {GoodsRequest} request - 商品请求参数
 * @returns {Promise<GoodsList>} - 包含商品列表的Promise
 */
export const getGoodsList = httpPost<GoodsList, GoodsRequest>(
  'http://127.0.0.1:8890/goods/list'
);
