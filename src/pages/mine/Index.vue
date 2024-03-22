<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
console.log(title.value);
</script>

<template>
  <view class="content">
    <view class="text-area">
      <text class="title">我的页面</text>
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
