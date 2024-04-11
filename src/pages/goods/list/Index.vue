<script setup lang="ts">
import { getGoodsList } from '@/api/goods';
import GoodsList from '@/components/GoodsList.vue';
import NavBar from '@/components/NavBar.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { Goods } from '@/types/goods';

const goodsList = ref<Goods[]>([]);

const fetchGoodsList = async (params: any) => {
  const { data } = await getGoodsList({ page: 1, pageSize: 10, ...params });
  goodsList.value = data.records;
};

onLoad((query) => {
  // query 就是路由传参
  fetchGoodsList(query);
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
