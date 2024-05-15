<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
};
</script>
<script setup lang="ts">
import { toRefs } from 'vue';
import PriceItem from '@/components/PriceItem.vue';

interface Props {
  imageUrl: string;
  id?: number;
  text: string;
  price: number;
  count: number;
}

type Emits = {
  changeChecked: [id: number]; // 具名元组语法
  changeCount: [value: number];
};
const props = defineProps<Props>();
const { imageUrl, text, price, count } = toRefs(props);

const emit = defineEmits<Emits>();
const handleChange = (value: number) => {
  emit('changeCount', value);
};
</script>
<template>
  <view class="item-content">
    <view class="item-left">
      <radio color="#f3514f" value="id" />
      <view class="nav-img">
        <image :src="imageUrl" style="width: 100%; height: 100%"></image>
      </view>
      <view class="item-info">
        <view>{{ text }}</view>
        <PriceItem :price="price" />
      </view>
    </view>

    <view class="item-right">
      <uni-number-box :value="count" @change="handleChange" />
    </view>
  </view>
</template>
<style scoped lang="scss">
.item-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .item-left {
    display: flex;
    gap: 20rpx;

    radio {
      align-self: center;
    }
    .nav-img {
      width: 200rpx;
      height: 200rpx;
    }
    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 26rpx;
    }
  }

  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 30rpx;
  }
}
</style>
