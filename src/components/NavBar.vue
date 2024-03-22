<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const height = ref<number>();

onLoad(() => {
  uni.getSystemInfo({
    success: (res) => {
      const custom = uni.getMenuButtonBoundingClientRect();
      height.value =
        custom.bottom + custom.top - (res?.statusBarHeight as number);
    }
  });
});
</script>
<template>
  <view class="nav-bar" :style="{ height: height + 'px' }">
    <view class="nav-bar-content">
      <slot name="custom" />
      <view class="title">
        <slot />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: #f3514f;
  position: relative;
  z-index: 100;
  .nav-bar-content {
    position: absolute;
    bottom: 0;
    width: 100%;

    .title {
      font-size: 30rpx;
      font-weight: bold;
      color: #fff;
      height: 72rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
