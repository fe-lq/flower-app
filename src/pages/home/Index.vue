<script setup lang="ts">
import { onLoad, onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app';
import {
  getBanners,
  getCategories,
  getAdvertisement,
  getListGoods
} from '@/api/home';
import { reactive } from 'vue';
import NavBar from '@/components/NavBar.vue';
import GoodsList from '@/components/GoodsList.vue';
import NavItem from '@/components/NavItem.vue';
import { Banner, Category, Advertisement, Goods } from '@/types/home';

interface HomeData {
  bannerList: Banner[];
  categories: Category[];
  advertisement: Advertisement[];
  goodsList: Goods[];
}
// const active = ref(0);
const data = reactive<HomeData>({
  bannerList: [],
  categories: [],
  advertisement: [],
  goodsList: []
});
const fetchBanners = async () => {
  try {
    const res = await Promise.all([
      getBanners(),
      getCategories(),
      getAdvertisement(),
      getListGoods()
    ]);
    data.bannerList = res[0].data;
    data.categories = res[1].data;
    data.advertisement = res[2].data;
    data.goodsList = res[3].data;
  } catch (error) {
    uni.showToast({ title: '获取数据失败', icon: 'error' });
  }
};
onLoad(() => {
  fetchBanners();
});

// 下拉刷新事件
// onPullDownRefresh(() => {
//   console.log('refresh');
//   setTimeout(function () {
//     uni.stopPullDownRefresh();
//   }, 1000);
// });

// 上拉加载事件
// onReachBottom(() => {})

// 转发事件
onShareAppMessage(() => ({}));

// 分享到朋友圈
onShareTimeline(() => ({}));
</script>

<template>
  <NavBar> 花事花艺 </NavBar>
  <view class="container">
    <view class="home-bg" />
    <swiper
      class="swiper"
      circular
      autoplay
      indicator-dots
      :interval="3000"
      :duration="500"
    >
      <swiper-item
        v-for="item in data.bannerList"
        :key="item.id"
        class="swiper-item"
      >
        <image :src="item.imageUrl" style="width: 100%; height: 100%" />
      </swiper-item>
    </swiper>

    <view class="category-card">
      <view v-for="item in data.categories" :key="item.id" class="nav-item">
        <NavItem :img-url="item.imageUrl" :title="item.name" />
      </view>
    </view>

    <view class="ad-card">
      <view class="ad-left">
        <navigator>
          <image :src="data.advertisement[0]?.imageUrl" mode="widthFix" />
        </navigator>
      </view>
      <view class="ad-right">
        <navigator>
          <image :src="data.advertisement[1]?.imageUrl" mode="widthFix" />
        </navigator>
        <navigator>
          <image :src="data.advertisement[2]?.imageUrl" mode="widthFix" />
        </navigator>
      </view>
    </view>

    <GoodsList :data="data.goodsList" title="猜你喜欢" />
  </view>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

.home-bg {
  height: 200rpx;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(#f3514f 70%, $uni-bg-color-grey);
}
.swiper {
  height: 320rpx;
  overflow: hidden;
  border-radius: 18rpx;
}
.swiper-item {
  border-radius: 18rpx;
}

.category-card {
  border-radius: 10rpx;
  background-color: $uni-bg-color;
  margin: 20rpx 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10rpx 0;

  .nav-item {
    min-width: 20%;
    max-width: 20%;
    &:nth-of-type(n + 6) {
      margin-top: 20rpx;
    }
  }
}

.ad-card {
  border-radius: 10rpx;
  background: $uni-bg-color;
  padding: 10rpx;
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  gap: 10rpx;
  .ad-left {
    width: 50%;
  }

  .ad-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10rpx;
  }
  image {
    width: 100%;
  }
}
</style>
