<!-- 将自定义节点设置成虚拟的 为了组件内sticky生效，不然要在外层添加粘合样式 -->
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
};
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useStore } from '@/store';

const store = useStore();
const { navBarHeight } = storeToRefs(store);
</script>
<template>
  <view
    :style="navBarHeight ? { height: navBarHeight + 'px' } : null"
    class="header-nav"
  >
    <view class="nav-bar-content">
      <slot name="custom" />
      <view class="title">
        <slot />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
// 头部粘合吸顶样式
.header-nav {
  z-index: 999;
  top: 0;
  position: sticky;
  background-color: $uni-color-primary;
  .nav-bar-content {
    position: absolute;
    bottom: 0;
    width: 100%;

    .title {
      font-size: 30rpx;
      font-weight: bold;
      color: $uni-text-color-inverse;
      height: 72rpx;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
