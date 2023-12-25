<script setup lang="ts">
import { onLaunch, onShow, onHide, onLoad } from '@dcloudio/uni-app';
import { ref, onMounted } from 'vue';
import Card from '@/components/Card.vue';
const title = ref('Hello');
onLoad(() => {
  const page = getCurrentPages();
  const pageItem = page[page.length - 1];
  console.log(pageItem);
  console.log('App Launch');
});
</script>

<template>
  <view class="home">
    <Card>
      <swiper
        class="swiper"
        circular
        indicator-dots
        autoplay
        :interval="3000"
        :duration="500"
      >
        <swiper-item>
          <view class="swiper-item">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">C</view>
        </swiper-item>
      </swiper>
    </Card>
  </view>
</template>

<style lang="scss" scoped>
.home {
  padding: 0 1rem;
}
</style>
