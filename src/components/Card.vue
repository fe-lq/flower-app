<script setup lang="ts"></script>

<template>
  <view class="card">
    <slot />
  </view>
</template>

<style scoped lang="scss">
.card {
  border-radius: 10rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.15);
  padding: 20rpx;
  background-color: #fff;
}
</style>
