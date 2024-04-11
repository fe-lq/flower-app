<script setup lang="ts">
import { Goods } from '@/types/home';
import { defineProps, reactive } from 'vue';
interface Props {
  goods: Goods;
}

const props = defineProps<Props>();

const item = reactive(props.goods);
</script>
<template>
  <view class="goods-card">
    <navigator>
      <image class="goods-img" :src="item.imageUrl" mode="widthFix" />
      <view class="item-info">
        <view class="info-name">{{ item.name }}</view>
        <view class="info-desc">{{ item.floralLanguage }}</view>
      </view>
    </navigator>
    <view class="goods-footer">
      <view class="footer-left">
        <view class="goods-price">
          <text>￥{{ item.price }}</text>
        </view>
        <view class="goods-origin-price">
          <text>￥{{ item.marketPrice }}</text>
        </view>
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
      .goods-price {
        font-size: 32rpx;
        font-weight: 600;
        color: #ff4444;
      }
      .goods-origin-price {
        font-size: 24rpx;
        text-decoration-line: line-through;
        color: $uni-text-color-grey;
      }
    }
    .goods-cart {
      width: 48rpx;
      height: 48rpx;
      display: block;
    }
  }
}
</style>
