<script setup lang="ts">
import { Goods } from '@/types/goods';
import { reactive } from 'vue';
import PriceItem from './PriceItem.vue';
interface Props {
  goods: Goods;
}

const props = defineProps<Props>();

const item = reactive(props.goods);
</script>
<template>
  <view class="goods-card">
    <navigator :url="`/pages/goods/detail/Index?id=${item.id}`">
      <image class="goods-img" :src="item.goodsImgs[0]" mode="widthFix" />
      <view class="item-info">
        <view class="info-name">{{ item.goodsName }}</view>
        <view class="info-desc">{{ item.goodsDesc }}</view>
      </view>
    </navigator>
    <view class="goods-footer">
      <view class="footer-left">
        <PriceItem :price="item.goodsPrice" />
        <PriceItem :price="item.goodsMarkPrice" type="grey" :size="24" />
      </view>
      <view class="footer-fight">
        <image class="goods-cart" src="/static/images/buybtn.png" mode="" />
      </view>
    </view>
  </view>
</template>
<style scoped lang="scss">
@import '@/scss/public.scss';
.goods-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: $uni-bg-color;
  border-radius: 18rpx;
  .goods-img {
    width: 100%;
    max-height: 360rpx;
    border-top-left-radius: 16rpx;
    border-top-right-radius: 16rpx;
  }
  .item-info {
    padding: 0 20rpx;
    .info-name {
      font-weight: 600;
      font-size: 30rpx;
      line-height: 50rpx;
      @include ellipse;
    }
    .info-desc {
      font-size: 24rpx;
      color: $uni-text-color-grey;
      @include ellipse;
    }
  }
  .goods-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    .footer-left {
      display: flex;
      align-items: center;
      gap: 10rpx;
    }
    .goods-cart {
      width: 48rpx;
      height: 48rpx;
      display: block;
    }
  }
}
</style>
