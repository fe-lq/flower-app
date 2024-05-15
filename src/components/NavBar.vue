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
import { toRefs } from 'vue';

interface Props {
  /** 导航栏的标题 */
  title?: string;
  /** 是否显示返回按钮 */
  enableBack?: boolean;
}

const props = defineProps<Props>();
const { title, enableBack } = toRefs(props);
const store = useStore();
const { navBarHeight } = storeToRefs(store);

const handleBack = () => {
  uni.navigateBack({ delta: 1 });
};
</script>
<template>
  <view
    :style="navBarHeight ? { height: navBarHeight + 'px' } : null"
    class="header-nav"
  >
    <view class="nav-bar-content">
      <view v-if="!!title" class="title">
        <uni-icons
          v-if="enableBack"
          size="20"
          color="#fff"
          class="back-icon"
          type="back"
          @click="handleBack"
        />
        <text> {{ title }}</text>
      </view>
      <slot />
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

      .back-icon {
        left: 0;
        position: absolute;
        padding-left: 10rpx;
      }
    }
  }
}
</style>
