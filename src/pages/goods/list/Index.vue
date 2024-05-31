<script setup lang="ts">
import { GoodsList as GoodsListRequest, Goods } from '@/api/goods';
import GoodsList from '@/components/GoodsList.vue';
import NavBar from '@/components/NavBar.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const goodsList = ref<Goods[]>([]);

const fetchGoodsList = async (params: GoodsListRequest.Request) => {
  const { data } = await GoodsListRequest.request({
    ...params,
    page: 1,
    pageSize: 10
  });
  goodsList.value = data.records;
};

onLoad((query) => {
  // query 就是路由传参
  if (query?.id) {
    /**
     * TODO page 跳转
     *
     */
    fetchGoodsList({ goodsTypeId: Number(query.id), page: 1, pageSize: 10 });
  }
});
</script>

<template>
  <NavBar title="商品列表" enableBack />
  <view class="list-container">
    <GoodsList :data="goodsList" />
  </view>
</template>

<style scoped lang="scss">
.list-container {
  padding: 10px;
}
</style>
