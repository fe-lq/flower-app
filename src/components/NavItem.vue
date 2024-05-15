<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  imgUrl: string;
  title: string;
  navUrl: string;
}
const props = defineProps<Props>();
const { imgUrl, title, navUrl } = toRefs(props);
</script>

<template>
  <navigator class="navigator-nav" :url="navUrl">
    <image class="nav-img" :src="imgUrl" />
    <text class="nav-text">{{ title }}</text>
  </navigator>
</template>

<style lang="scss" scoped>
.navigator-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
