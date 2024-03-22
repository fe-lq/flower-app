<script setup lang="ts">
import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';
import spring from '@/static/images/banner/spring.png';
import summer from '@/static/images/banner/summer.png';
import autumn from '@/static/images/banner/autumn.png';
import winter from '@/static/images/banner/winter.png';
import { getGoods } from '@/api/goods';
// import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Card from '@/components/Card.vue';

const fetchBanners = async () => {
  try {
    const res = await getGoods(1);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

onLoad(() => {
  fetchBanners();
});

onShareAppMessage(() => ({}));
onShareTimeline(() => ({}));

const banners = [spring, summer, autumn, winter];
</script>

<template>
  <NavBar> 花事花艺 </NavBar>

  <view class="home-bg" />
  <view class="container">
    <swiper
      class="swiper"
      circular
      autoplay
      indicator-dots
      :interval="3000"
      :duration="500"
    >
      <swiper-item
        v-for="(item, index) in banners"
        :key="index"
        class="swiper-item"
      >
        <image :src="item" style="width: 100%" />
      </swiper-item>
    </swiper>
    <Card>
      <view><navigator>导航</navigator> </view>
    </Card>
  </view>
</template>

<style lang="scss" scoped>
.home-bg {
  height: 200rpx;
  position: absolute;
  width: 100%;
  background: linear-gradient(#f3514f 70%, #fff);
}
.swiper-item {
  border-radius: 18rpx;
}
</style>
