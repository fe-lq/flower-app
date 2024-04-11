<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  imgUrl: string;
  title: string;
}
const props = defineProps<Props>();
</script>

<template>
  <navigator class="navigator-nav">
    <image class="nav-img" :src="props.imgUrl" />
    <text class="nav-text">{{ props.title }}</text>
  </navigator>
</template>

<style lang="scss" scoped>
.navigator-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap: 10rpx;

  .nav-img {
    width: 66rpx;
    height: 66rpx;
  }

  .nav-text {
    font-size: 24rpx;
  }
}
</style>
