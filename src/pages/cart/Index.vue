<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import CartItem from './components/CartItem.vue';
import PriceItem from '@/components/PriceItem.vue';
import { ref } from 'vue';

// const vModelValue = ref(0);
const dataList = ref([
  {
    blessing: '',
    count: 7,
    createTime: '2024-04-10 08:39:33',
    goodsId: 7,
    imageUrl: 'http://39.98.123.211:8300/images/1-3-2.png',
    isChecked: 0,
    name: '爱的诺言',
    price: 2639,
    updateTime: '2024-04-10 08:57:09'
  },
  {
    blessing: '',
    count: 1,
    createTime: '2024-04-10 14:07:16',
    goodsId: 27,
    imageUrl: 'http://39.98.123.211:8300/images/2-2-3.png',
    isChecked: 1,
    name: '亲爱的/情人节网红款/19枝',
    price: 1399,
    updateTime: '2024-04-10 14:07:16'
  }
]);
// const changeValue = (value: number) => {
//   vModelValue.value = value;
// };

const options = [
  {
    text: '删除',
    style: {
      backgroundColor: '#f14340'
    }
  }
];
</script>

<template>
  <NavBar title="购物车" />

  <uni-list :border="false">
    <uni-list-item v-for="item in dataList" :key="item.goodsId">
      <template #body>
        <uni-swipe-action-item
          style="width: 100%"
          :autoClose="false"
          :rightOptions="options"
        >
          <CartItem
            :price="item.price"
            :count="item.count"
            :text="item.name"
            :imageUrl="item.imageUrl"
          />
        </uni-swipe-action-item>
      </template>
    </uni-list-item>
  </uni-list>

  <view class="cart-footer">
    <view> <radio value="r1" />全选 </view>
    <view class="cart-settle">
      <view class="settle-text">
        <text>合计：</text>
        <PriceItem :price="7888983.97" />
      </view>
      <button class="sub-btn">去结算</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '@/scss/public.scss';

:deep(.uni-list) {
  padding: 16rpx;
  gap: 16rpx;
  background-color: inherit;
}
:deep(.uni-list-item) {
  .uni-list-item__container {
    padding: 24rpx 0 24rpx 30rpx;
  }

  border-radius: 30rpx;
}

.cart-footer {
  position: fixed;
  bottom: 0;
  background-color: $uni-bg-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30rpx 20rpx;
  box-sizing: border-box;

  .sub-btn {
    color: #ffffff;
    background-color: $uni-color-primary;
    border-color: $uni-color-primary;
    border-radius: 46rpx;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
      background-color: $uni-color-primary-hover;
      border-color: $uni-color-primary-hover;
    }
  }

  .cart-settle {
    display: flex;
    align-items: center;
    gap: 40rpx;

    .settle-text {
      display: flex;
    }
  }
}
</style>
