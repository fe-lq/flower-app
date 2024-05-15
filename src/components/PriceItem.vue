<script setup lang="ts">
import { toRefs, withDefaults } from 'vue';

interface Props {
  /** 价格 */
  price: number;
  /** 价格大小 单位rpx */
  size?: string | number;
  /** 颜色类型 */
  type?: 'red' | 'grey';
}
const props = withDefaults(defineProps<Props>(), {
  size: 30,
  type: 'red'
});
const { price, type } = toRefs<Props>(props);
</script>

<template>
  <view
    :class="['price-item', type]"
    :style="[{ fontSize: typeof size == 'number' ? `${size}rpx` : size }]"
  >
    <text class="symbol">¥</text>
    <text class="price">{{ price }}</text>
  </view>
</template>

<style scoped lang="scss">
.price-item {
  color: $uni-color-price;
  &.red {
    color: $uni-color-primary;
  }

  &.grey {
    color: $uni-text-color-grey;
    text-decoration: line-through;
  }
}
.symbol {
  font-size: 80%;
  margin-right: 5rpx;
}
</style>
