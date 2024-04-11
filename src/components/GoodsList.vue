<script setup lang="ts">
import { Goods } from '@/types/goods';
import GoodsCard from './GoodsCard.vue';
import { defineProps, toRefs } from 'vue';

interface Props {
  data: Goods[];
  title?: string;
}

const props = defineProps<Props>();
const { data, title } = toRefs(props);
</script>

<template>
  <view v-if="!!title" class="goods-title">{{ title }}</view>
  <view class="goods-list">
    <view v-for="item in data" :key="item.id" class="goods-item">
      <GoodsCard :goods="item" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.goods-title {
  text-align: center;
  font-size: 40rpx;
  line-height: 52rpx;
  font-weight: 600;
  padding: 20rpx;
}
.goods-list {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14rpx;

  .goods-item {
    width: 49%;
  }
}
</style>
