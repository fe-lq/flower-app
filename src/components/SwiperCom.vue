<script lang="ts" setup>
import { toRefs } from 'vue';

interface Props {
  data: any[];
  /**
   * 先加个字段区别一下，后面再统一image的字段
   */
  imgField?: string;
}
const props = defineProps<Props>();
const { data, imgField } = toRefs(props);
</script>

<template>
  <swiper
    class="swiper"
    circular
    autoplay
    indicatorDots
    :interval="3000"
    :duration="500"
  >
    <swiper-item v-for="(item, index) in data" :key="index" class="swiper-item">
      <image
        :src="typeof item === 'string' || !imgField ? item : item[imgField]"
      />
    </swiper-item>
  </swiper>
</template>

<style scoped lang="scss">
.swiper {
  height: 320rpx;
  overflow: hidden;
  border-radius: 18rpx;

  .swiper-item {
    border-radius: 18rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
