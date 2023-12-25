<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
</script>

<template>
  <view class="content">
    <view class="text-area">
      <text class="title">购物车页</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
